# IMAGE REPLACEMENT GUIDE
## JE FAIS NATURE SAFARIS LTD — Website Image Placeholders

This guide documents every image placeholder in the website. When you have your real safari photographs ready, follow the steps below to replace each placeholder in VS Code.

---

## HOW TO REPLACE AN IMAGE IN VS CODE

1. Copy your real photograph into the `public/images/` directory
2. Rename it to match the placeholder filename (or update the `src` path in the component)
3. Save the file — the website will automatically display the new photograph
4. No layout changes are needed — the design is already built around the image dimensions

**Recommended formats:** WebP or AVIF for best performance. JPEG as fallback.

---

## IMAGE DIRECTORY

All images should be placed in:

```
public/
└── images/
    ├── placeholder-hero.jpg
    ├── placeholder-gorilla.jpg
    ├── placeholder-gorilla-forest.jpg
    ├── placeholder-gorilla-cta.jpg
    ├── placeholder-chimpanzee.jpg
    ├── placeholder-wildlife-safari.jpg
    ├── placeholder-wildlife-cta.jpg
    ├── placeholder-kampala.jpg
    ├── placeholder-murchison-falls.jpg
    ├── placeholder-queen-elizabeth.jpg
    ├── placeholder-kibale-forest.jpg
    ├── placeholder-lake-mburo.jpg
    ├── placeholder-kidepo.jpg
    ├── placeholder-bwindi.jpg
    ├── placeholder-ziwa-rhino.jpg
    ├── placeholder-national-parks.jpg
    ├── placeholder-safari-packages.jpg
    ├── placeholder-safari-vehicle.jpg
    ├── placeholder-safari-vehicle-2.jpg
    ├── placeholder-safari-vehicle-3.jpg
    ├── placeholder-uganda-landscape.jpg
    ├── placeholder-cta.jpg
    ├── placeholder-contact-hero.jpg
    ├── placeholder-about-hero.jpg
    ├── placeholder-about-cta.jpg
    ├── placeholder-team.jpg
    ├── placeholder-7-day-uganda-safari.jpg
    ├── placeholder-6-day-uganda-safari.jpg
    ├── placeholder-5-day-uganda-safari.jpg
    ├── placeholder-4-day-uganda-holiday-safari.jpg
    └── placeholder-3-day-murchison-falls-safari.jpg
```

---

## PLACEHOLDER REFERENCE TABLE

### HOMEPAGE

| Placeholder File | Section | Component | Dimensions | Type | Notes |
|---|---|---|---|---|---|
| `placeholder-hero.jpg` | Homepage Hero | `HeroSection.tsx` | 1920×1080px | Hero background | Main Uganda safari hero. Use the strongest landscape/wildlife photograph. Eager loaded. |
| `placeholder-gorilla.jpg` | Core Experiences — Gorilla card | `CoreExperiences.tsx` | 800×600px | Card background | Mountain gorilla photograph. Bwindi forest. |
| `placeholder-wildlife-safari.jpg` | Core Experiences — Wildlife card | `CoreExperiences.tsx` | 600×600px | Card background | Uganda wildlife — lion, elephant, or game drive scene. |
| `placeholder-chimpanzee.jpg` | Core Experiences — Chimp card | `CoreExperiences.tsx` | 600×500px | Card background | Chimpanzee in Kibale forest. Do not use gorilla image here. |
| `placeholder-kampala.jpg` | Core Experiences — Kampala card | `CoreExperiences.tsx` | 800×500px | Card background | Kampala city scene or cultural experience. |
| `placeholder-murchison-falls.jpg` | Safari Packages Preview — 7-day & 3-day cards | `SafariPackagesPreview.tsx` | 600×350px | Card image | Murchison Falls or Nile boat cruise. |
| `placeholder-kibale-forest.jpg` | Safari Packages Preview — 6-day card | `SafariPackagesPreview.tsx` | 600×350px | Card image | Kibale forest or chimpanzee trekking. |
| `placeholder-queen-elizabeth.jpg` | Safari Packages Preview — 5-day card | `SafariPackagesPreview.tsx` | 600×350px | Card image | Queen Elizabeth NP — tree-climbing lion or Kazinga Channel. |
| `placeholder-ziwa-rhino.jpg` | Safari Packages Preview — 4-day card | `SafariPackagesPreview.tsx` | 600×350px | Card image | Ziwa Rhino Sanctuary or Murchison Falls. |
| `placeholder-cta.jpg` | Final CTA section | `FinalCTA.tsx` | 1920×800px | Full-width background | Dramatic Uganda safari landscape. Used behind "Ready to Explore Uganda?" CTA. |

---

### SAFARI PACKAGES PAGE

| Placeholder File | Section | Component | Dimensions | Type | Notes |
|---|---|---|---|---|---|
| `placeholder-safari-packages.jpg` | Packages page hero | `PackagesHero.tsx` | 1920×900px | Hero background | Uganda safari packages overview photograph. |
| `placeholder-murchison-falls.jpg` | 7-day & 3-day package cards | `PackagesGrid.tsx` | 600×350px | Card image | Shared with homepage. Murchison Falls or Nile. |
| `placeholder-kibale-forest.jpg` | 6-day package card | `PackagesGrid.tsx` | 600×350px | Card image | Shared with homepage. Kibale forest. |
| `placeholder-queen-elizabeth.jpg` | 5-day package card | `PackagesGrid.tsx` | 600×350px | Card image | Shared with homepage. Queen Elizabeth NP. |
| `placeholder-ziwa-rhino.jpg` | 4-day package card | `PackagesGrid.tsx` | 600×350px | Card image | Ziwa Rhino Sanctuary. |

---

### PACKAGE DETAIL PAGES

Each package detail page uses a background image based on the package slug:

| Placeholder File | Package | Page URL | Dimensions | Type |
|---|---|---|---|---|
| `placeholder-7-day-uganda-safari.jpg` | 7-Day Uganda Safari Vacation | `/safari-packages/7-day-uganda-safari` | 1920×900px | Hero background |
| `placeholder-6-day-uganda-safari.jpg` | 6-Day Uganda Safari | `/safari-packages/6-day-uganda-safari` | 1920×900px | Hero background |
| `placeholder-5-day-uganda-safari.jpg` | 5-Day Uganda Safari | `/safari-packages/5-day-uganda-safari` | 1920×900px | Hero background |
| `placeholder-4-day-uganda-holiday-safari.jpg` | 4-Day Uganda Holiday Safari | `/safari-packages/4-day-uganda-holiday-safari` | 1920×900px | Hero background |
| `placeholder-3-day-murchison-falls-safari.jpg` | 3-Day Murchison Falls Safari | `/safari-packages/3-day-murchison-falls-safari` | 1920×900px | Hero background |

**Note:** The package detail hero uses `url('/images/placeholder-${slug}.jpg')` dynamically. You can either:
- Create individual files per slug (e.g. `placeholder-7-day-uganda-safari.jpg`)
- Or edit `PackageDetailClient.tsx` line with `backgroundImage` to point to a shared image

---

### GORILLA TREKKING PAGE (`/gorilla-trekking`)

| Placeholder File | Section | Dimensions | Type | Notes |
|---|---|---|---|---|
| `placeholder-gorilla.jpg` | Page hero | 1920×900px | Hero background | Mountain gorilla in Bwindi. Priority photograph. |
| `placeholder-gorilla-forest.jpg` | Experience section image | 800×450px | Inline image | Gorilla trekking group in forest. |
| `placeholder-gorilla.jpg` | 3-day package card | 600×320px | Card image | Reuses hero image. |
| `placeholder-uganda-landscape.jpg` | 7-day package card | 600×320px | Card image | Uganda landscape or multi-park scene. |
| `placeholder-gorilla-cta.jpg` | CTA section background | 1920×700px | Full-width background | Gorilla or Bwindi forest for CTA. |

---

### WILDLIFE SAFARIS PAGE (`/wildlife-safaris`)

| Placeholder File | Section | Dimensions | Type | Notes |
|---|---|---|---|---|
| `placeholder-wildlife-safari.jpg` | Page hero | 1920×900px | Hero background | Uganda wildlife — lion, elephant, or game drive. |
| `placeholder-queen-elizabeth.jpg` | Queen Elizabeth park card | 600×320px | Card image | Tree-climbing lion or Kazinga Channel. |
| `placeholder-murchison-falls.jpg` | Murchison Falls park card | 600×320px | Card image | Murchison Falls or Nile boat cruise. |
| `placeholder-lake-mburo.jpg` | Lake Mburo park card | 600×320px | Card image | Zebra, impala, or Lake Mburo landscape. |
| `placeholder-kibale-forest.jpg` | Kibale park card | 600×320px | Card image | Kibale forest or chimpanzee. |
| `placeholder-wildlife-cta.jpg` | CTA section background | 1920×700px | Full-width background | Uganda wildlife landscape for CTA. |

---

### NATIONAL PARKS PAGE (`/national-parks`)

| Placeholder File | Section | Dimensions | Type | Notes |
|---|---|---|---|---|
| `placeholder-national-parks.jpg` | Page hero | 1920×900px | Hero background | Uganda national parks overview landscape. |
| `placeholder-bwindi.jpg` | Bwindi park card | 600×350px | Card image | Bwindi forest or gorilla. |
| `placeholder-queen-elizabeth.jpg` | Queen Elizabeth park card | 600×350px | Card image | Tree-climbing lion or Kazinga Channel. |
| `placeholder-murchison-falls.jpg` | Murchison Falls park card | 600×350px | Card image | Murchison Falls or Nile. |
| `placeholder-kibale-forest.jpg` | Kibale park card | 600×350px | Card image | Kibale forest or chimpanzee. |
| `placeholder-lake-mburo.jpg` | Lake Mburo park card | 600×350px | Card image | Lake Mburo zebra or landscape. |
| `placeholder-kidepo.jpg` | Kidepo Valley park card | 600×350px | Card image | Kidepo Valley landscape or wildlife. |

---

### UGANDA SAFARIS PAGE (`/uganda-safaris`)

| Placeholder File | Section | Dimensions | Type | Notes |
|---|---|---|---|---|
| `placeholder-uganda-landscape.jpg` | Page hero | 1920×900px | Hero background | Uganda safari landscape overview. |
| `placeholder-bwindi.jpg` | Bwindi park card | 400×230px | Card image | Bwindi forest. |
| `placeholder-queen-elizabeth.jpg` | Queen Elizabeth park card | 400×230px | Card image | Queen Elizabeth NP. |
| `placeholder-murchison-falls.jpg` | Murchison Falls park card | 400×230px | Card image | Murchison Falls. |
| `placeholder-kibale-forest.jpg` | Kibale park card | 400×230px | Card image | Kibale forest. |
| `placeholder-lake-mburo.jpg` | Lake Mburo park card | 400×230px | Card image | Lake Mburo. |
| `placeholder-kidepo.jpg` | Kidepo park card | 400×230px | Card image | Kidepo Valley. |
| `placeholder-safari-vehicle.jpg` | CTA section background | 1920×700px | Full-width background | Safari vehicle or Uganda landscape. |

---

### ABOUT PAGE (`/about`)

| Placeholder File | Section | Dimensions | Type | Notes |
|---|---|---|---|---|
| `placeholder-about-hero.jpg` | Page hero | 1920×800px | Hero background | Company team or office in Kampala. |
| `placeholder-team.jpg` | About content section | 800×450px | Inline image | Je Fais team or guides. |
| `placeholder-safari-vehicle.jpg` | Safari vehicles — vehicle 1 | 600×380px | Card image | 4WD safari vehicle exterior. |
| `placeholder-safari-vehicle-2.jpg` | Safari vehicles — vehicle 2 | 600×380px | Card image | Safari vehicle interior. |
| `placeholder-safari-vehicle-3.jpg` | Safari vehicles — vehicle 3 | 600×380px | Card image | Safari vehicle in national park. |
| `placeholder-about-cta.jpg` | CTA section background | 1920×700px | Full-width background | Uganda safari adventure scene. |

---

### CONTACT PAGE (`/contact`)

| Placeholder File | Section | Dimensions | Type | Notes |
|---|---|---|---|---|
| `placeholder-contact-hero.jpg` | Page hero | 1920×800px | Hero background | Uganda safari or Kampala scene for contact page. |

---

## IMAGE TYPES EXPLAINED

| Type | Usage | CSS Property |
|---|---|---|
| **Hero background** | Full-page or section background | `background-image: url(...)` with `background-size: cover` |
| **Card image** | Package/park/experience cards | `<img>` with `object-fit: cover` |
| **Inline image** | Content sections | `<img>` with `object-fit: cover` |
| **Full-width background** | CTA sections | `background-image: url(...)` with `background-size: cover` |

---

## OVERLAY SYSTEM

Every image in this website has a **separate overlay layer** on top of it. This means:

- You can replace the photograph without touching the overlay
- Text remains readable regardless of the photograph's brightness
- The design stays intact when you swap images

**Example structure in code:**
```jsx
{/* IMAGE */}
<div style={{ backgroundImage: "url('/images/your-photo.jpg')" }} />

{/* OVERLAY — do not remove or modify this */}
<div style={{ background: 'rgba(0,0,0,0.65)' }} />

{/* TEXT — sits on top of both */}
<div className="relative z-20">
  <h1>Your heading</h1>
</div>
```

---

## RECOMMENDED IMAGE SPECIFICATIONS

| Use Case | Width | Height | Format | Max File Size |
|---|---|---|---|---|
| Hero backgrounds | 1920px | 1080px | WebP / AVIF | 300KB |
| Section backgrounds | 1920px | 800px | WebP / AVIF | 200KB |
| Package/park cards | 800px | 500px | WebP / AVIF | 100KB |
| Inline content images | 1200px | 675px | WebP / AVIF | 150KB |

---

## NAMING CONVENTIONS

Use descriptive, SEO-friendly filenames when replacing placeholders:

| Instead of | Use |
|---|---|
| `IMG_4521.jpg` | `gorilla-trekking-bwindi-uganda.webp` |
| `photo1.jpg` | `queen-elizabeth-tree-climbing-lion.webp` |
| `DSC_0034.jpg` | `murchison-falls-nile-boat-cruise.webp` |
| `image.jpg` | `kibale-chimpanzee-trekking-uganda.webp` |

---

## QUICK REPLACEMENT CHECKLIST

Before going live, verify each of these images has been replaced:

- [ ] `placeholder-hero.jpg` — Homepage hero
- [ ] `placeholder-gorilla.jpg` — Gorilla trekking hero & cards
- [ ] `placeholder-chimpanzee.jpg` — Chimpanzee experience card
- [ ] `placeholder-wildlife-safari.jpg` — Wildlife safari hero & cards
- [ ] `placeholder-kampala.jpg` — Kampala & cultural tours card
- [ ] `placeholder-murchison-falls.jpg` — Murchison Falls (used in multiple places)
- [ ] `placeholder-queen-elizabeth.jpg` — Queen Elizabeth NP (used in multiple places)
- [ ] `placeholder-kibale-forest.jpg` — Kibale Forest (used in multiple places)
- [ ] `placeholder-lake-mburo.jpg` — Lake Mburo NP
- [ ] `placeholder-kidepo.jpg` — Kidepo Valley NP
- [ ] `placeholder-bwindi.jpg` — Bwindi NP
- [ ] `placeholder-ziwa-rhino.jpg` — Ziwa Rhino Sanctuary
- [ ] `placeholder-national-parks.jpg` — National parks page hero
- [ ] `placeholder-safari-packages.jpg` — Safari packages page hero
- [ ] `placeholder-safari-vehicle.jpg` — Safari vehicle (used in multiple places)
- [ ] `placeholder-uganda-landscape.jpg` — Uganda landscape (used in multiple places)
- [ ] `placeholder-cta.jpg` — Homepage final CTA background
- [ ] `placeholder-contact-hero.jpg` — Contact page hero
- [ ] `placeholder-about-hero.jpg` — About page hero
- [ ] `placeholder-team.jpg` — About page team image
- [ ] `placeholder-gorilla-forest.jpg` — Gorilla trekking experience image
- [ ] `placeholder-gorilla-cta.jpg` — Gorilla trekking CTA background
- [ ] `placeholder-wildlife-cta.jpg` — Wildlife safaris CTA background
- [ ] `placeholder-about-cta.jpg` — About page CTA background
- [ ] Package detail heroes (5 files — one per package slug)

---

*Generated for JE FAIS NATURE SAFARIS LTD website — Je Fais Nature Safaris, Kampala and Entebbe Airport opposite Total, Plot 5 De Winton Street, Kampala, Uganda*
