'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  featured_image: string | null;
  image_alt: string | null;
  category: string | null;
  seo_title: string | null;
  meta_description: string | null;
  keywords: string | null;
  status: 'draft' | 'published';
  published_at: string | null;
  created_at: string;
};

const emptyPost = {
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  featured_image: '',
  image_alt: '',
  category: 'Uganda Tourism',
  seo_title: '',
  meta_description: '',
  keywords: '',
};

export default function BlogAdminPage() {
  const [user, setUser] = useState<any>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [form, setForm] = useState(emptyPost);

  useEffect(() => {
    checkUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);

      if (session?.user) {
        loadPosts();
      } else {
        setPosts([]);
      }

      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function checkUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    setUser(user);

    if (user) {
      await loadPosts();
    }

    setLoading(false);
  }

  async function login() {
    setLoginError('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setLoginError(error.message);
    }
  }

  async function logout() {
    await supabase.auth.signOut();
    setUser(null);
  }

async function loadPosts() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error("BLOG ERROR:", error);
    return;
  }

  console.log("BLOG DATA:", data);

  if (data) {
    setPosts(data);
  }
}

  function openNewPost() {
    setEditingId(null);
    setForm(emptyPost);
    setShowEditor(true);
  }

  function openEditPost(post: BlogPost) {
    setEditingId(post.id);

    setForm({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt ?? '',
      content: post.content,
      featured_image: post.featured_image ?? '',
      image_alt: post.image_alt ?? '',
      category: post.category ?? 'Uganda Tourism',
      seo_title: post.seo_title ?? '',
      meta_description: post.meta_description ?? '',
      keywords: post.keywords ?? '',
    });

    setShowEditor(true);
  }

  function updateField(field: keyof typeof emptyPost, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function uploadImage(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    try {
      const file = event.target.files?.[0];

      if (!file) return;

      setUploading(true);

      const extension = file.name.split('.').pop()?.toLowerCase() || 'webp';

      const safeName = file.name
        .replace(/\.[^/.]+$/, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

      const filePath = `blog/${Date.now()}-${safeName}.${extension}`;

      const { error } = await supabase.storage
        .from('blog-images')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false,
        });

      if (error) {
        alert(`Image upload failed: ${error.message}`);
        return;
      }

      const { data } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);

      updateField('featured_image', data.publicUrl);

      alert('Featured image uploaded successfully.');
    } catch (error) {
      console.error(error);
      alert('Something went wrong while uploading the image.');
    } finally {
      setUploading(false);
    }
  }

  async function savePost(status: 'draft' | 'published') {
    if (!form.title.trim()) {
      alert('Please enter a blog title.');
      return;
    }

    if (!form.slug.trim()) {
      alert('Please enter a URL slug.');
      return;
    }

    if (!form.content.trim()) {
      alert('Please enter the article content.');
      return;
    }

    setSaving(true);

    const payload = {
      title: form.title.trim(),
      slug: form.slug.trim(),
      excerpt: form.excerpt.trim() || null,
      content: form.content,
      featured_image: form.featured_image.trim() || null,
      image_alt: form.image_alt.trim() || null,
      category: form.category.trim() || 'Uganda Tourism',
      seo_title: form.seo_title.trim() || null,
      meta_description: form.meta_description.trim() || null,
      keywords: form.keywords.trim() || null,
      status,
      published_at:
        status === 'published'
          ? new Date().toISOString()
          : null,
      updated_at: new Date().toISOString(),
    };

    let error;

    if (editingId) {
      const result = await supabase
        .from('blog_posts')
        .update(payload)
        .eq('id', editingId);

      error = result.error;
    } else {
      const result = await supabase
        .from('blog_posts')
        .insert(payload);

      error = result.error;
    }

    if (error) {
      alert(`Could not save post: ${error.message}`);
      setSaving(false);
      return;
    }

    alert(
      status === 'published'
        ? 'Blog post published successfully.'
        : 'Draft saved successfully.'
    );

    setShowEditor(false);
    setEditingId(null);
    setForm(emptyPost);

    await loadPosts();

    setSaving(false);
  }

  async function deletePost(id: string) {
    const confirmed = window.confirm(
      'Are you sure you want to delete this blog post?'
    );

    if (!confirmed) return;

    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);

    if (error) {
      alert(`Could not delete post: ${error.message}`);
      return;
    }

    await loadPosts();
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600">Loading blog admin...</p>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="min-h-screen bg-gray-50 px-4 py-12">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">
              JE FAIS NATURE SAFARIS
            </h1>

            <p className="mt-2 text-gray-600">
              Blog Administration
            </p>
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              login();
            }}
            className="space-y-5"
          >
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Admin email"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Password"
              />
            </div>

            {loginError && (
              <div className="rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
                {loginError}
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-lg bg-green-700 text-white font-bold py-3 hover:bg-green-800 transition"
            >
              Login
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-green-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">
              Blog Dashboard
            </h1>

            <p className="text-green-200 text-sm">
              JE FAIS NATURE SAFARIS LTD
            </p>
          </div>

          <button
            onClick={logout}
            className="bg-white text-green-900 px-4 py-2 rounded-lg text-sm font-bold"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {!showEditor ? (
          <>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Your Blog Posts
                </h2>

                <p className="text-gray-600 mt-1">
                  Create and manage your Uganda tourism articles.
                </p>
              </div>

              <button
                onClick={openNewPost}
                className="bg-green-700 text-white px-5 py-3 rounded-lg font-bold hover:bg-green-800 transition"
              >
                + New Post
              </button>
            </div>

            <div className="space-y-4">
              {posts.length === 0 ? (
                <div className="bg-white rounded-2xl shadow p-8 text-center">
                  <h3 className="text-lg font-bold text-gray-900">
                    No blog posts yet
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Create your first article.
                  </p>

                  <button
                    onClick={openNewPost}
                    className="mt-5 bg-green-700 text-white px-5 py-3 rounded-lg font-bold"
                  >
                    Create First Post
                  </button>
                </div>
              ) : (
                posts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-2xl shadow p-5"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold ${
                              post.status === 'published'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {post.status}
                          </span>

                          <span className="text-xs text-gray-500">
                            {post.category}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-gray-900">
                          {post.title}
                        </h3>

                        <p className="text-sm text-gray-500 mt-1 break-all">
                          /blog/{post.slug}
                        </p>
                      </div>

                      <div className="flex gap-2 shrink-0">
                        <button
                          onClick={() => openEditPost(post)}
                          className="px-4 py-2 rounded-lg border border-gray-300 text-gray-800 font-semibold"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => deletePost(post.id)}
                          className="px-4 py-2 rounded-lg bg-red-600 text-white font-semibold"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </article>
                ))
              )}
            </div>
          </>
        ) : (
          <div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {editingId ? 'Edit Blog Post' : 'New Blog Post'}
                </h2>

                <p className="text-gray-600 mt-1">
                  Add your article and SEO information.
                </p>
              </div>

              <button
                onClick={() => setShowEditor(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 font-semibold"
              >
                Cancel
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow p-5 sm:p-8 space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Title *
                </label>

                <input
                  value={form.title}
                  onChange={(event) =>
                    updateField('title', event.target.value)
                  }
                  className="w-full rounded-lg border border-gray-300 px-4 py-3"
                  placeholder="Blog article title"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  URL Slug *
                </label>

                <input
                  value={form.slug}
                  onChange={(event) =>
                    updateField('slug', event.target.value)
                  }
                  className="w-full rounded-lg border border-gray-300 px-4 py-3"
                  placeholder="example-blog-post"
                />

                <p className="text-xs text-gray-500 mt-1">
                  Example: king-oyo-tooro-kingdom-tourism-conservation
                </p>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Category
                </label>

                <input
                  value={form.category}
                  onChange={(event) =>
                    updateField('category', event.target.value)
                  }
                  className="w-full rounded-lg border border-gray-300 px-4 py-3"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Featured Image
                </label>

                <input
                  type="file"
                  accept="image/*"
                  onChange={uploadImage}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3"
                />

                {uploading && (
                  <p className="text-sm text-green-700 mt-2">
                    Uploading image...
                  </p>
                )}

                {form.featured_image && (
                  <div className="mt-4">
                    <img
                      src={form.featured_image}
                      alt="Featured image preview"
                      className="w-full max-w-md h-56 object-cover rounded-xl"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Image Alt Text
                </label>

                <input
                  value={form.image_alt}
                  onChange={(event) =>
                    updateField('image_alt', event.target.value)
                  }
                  className="w-full rounded-lg border border-gray-300 px-4 py-3"
                  placeholder="Describe the image for accessibility and SEO"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Excerpt
                </label>

                <textarea
                  value={form.excerpt}
                  onChange={(event) =>
                    updateField('excerpt', event.target.value)
                  }
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3"
                  placeholder="Short summary of the article"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Article Content *
                </label>

                <textarea
                  value={form.content}
                  onChange={(event) =>
                    updateField('content', event.target.value)
                  }
                  rows={18}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 font-mono text-sm"
                  placeholder="Write your article here..."
                />
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-bold text-gray-900 mb-5">
                  SEO Settings
                </h3>

                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      SEO Title
                    </label>

                    <input
                      value={form.seo_title}
                      onChange={(event) =>
                        updateField('seo_title', event.target.value)
                      }
                      className="w-full rounded-lg border border-gray-300 px-4 py-3"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Meta Description
                    </label>

                    <textarea
                      value={form.meta_description}
                      onChange={(event) =>
                        updateField(
                          'meta_description',
                          event.target.value
                        )
                      }
                      rows={4}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Keywords
                    </label>

                    <input
                      value={form.keywords}
                      onChange={(event) =>
                        updateField('keywords', event.target.value)
                      }
                      className="w-full rounded-lg border border-gray-300 px-4 py-3"
                      placeholder="Uganda tourism, gorilla trekking, wildlife..."
                    />
                  </div>
                </div>
              </div>

              <div className="border-t pt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => savePost('draft')}
                  disabled={saving || uploading}
                  className="flex-1 rounded-lg border border-green-700 text-green-700 py-3 font-bold disabled:opacity-50"
                >
                  {saving ? 'Saving...' : 'Save Draft'}
                </button>

                <button
                  onClick={() => savePost('published')}
                  disabled={saving || uploading}
                  className="flex-1 rounded-lg bg-green-700 text-white py-3 font-bold disabled:opacity-50"
                >
                  {saving ? 'Publishing...' : 'Publish'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}