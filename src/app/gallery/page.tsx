import fs from "fs";
import path from "path";
import GalleryDisplay from "./GalleryDisplay";

interface GalleryItem {
  filename: string;
  src: string;
  category: string;
  title: string;
}

function getCategory(filename: string): string {
  const name = filename.toLowerCase();

  if (name.startsWith("gorilla") || name.startsWith("young-gorilla"))
    return "Gorillas";

  if (name.startsWith("experiences")) return "Experiences";

  if (name.startsWith("fleet")) return "Safari Vehicles";

  if (name.startsWith("team")) return "Team & Safari Moments";

  if (
    name.startsWith("lion") ||
    name.startsWith("tree climbing lions") ||
    name.startsWith("elephant") ||
    name.startsWith("elephants") ||
    name.startsWith("buffalo") ||
    name.startsWith("buffalos") ||
    name.startsWith("cheetah") ||
    name.startsWith("cub") ||
    name.startsWith("hippopotamus") ||
    name.startsWith("hyenas") ||
    name.startsWith("baboon") ||
    name.startsWith("bald monkey") ||
    name.startsWith("monkey") ||
    name.startsWith("girrafe") ||
    name.startsWith("zebra") ||
    name.startsWith("uganda kob") ||
    name.startsWith("longhorned cow")
  )
    return "Wildlife";

  if (
    name.startsWith("bird") ||
    name.startsWith("crested crane")
  )
    return "Birds";

  if (
    name.startsWith("nile") ||
    name.startsWith("murchison falls") ||
    name.startsWith("lake") ||
    name.startsWith("island")
  )
    return "Boat Safaris";

  if (
    name.startsWith("cottage") ||
    name.startsWith("premises")
  )
    return "Lodges & Accommodation";

  if (
    name.startsWith("kampala") ||
    name.startsWith("gadafi national mosque")
  )
    return "Kampala Tours";

  if (
    name.startsWith("cultural") ||
    name.startsWith("culture") ||
    name.startsWith("cultures") ||
    name.startsWith("farming") ||
    name.startsWith("tea-harvesting")
  )
    return "Culture & Experiences";

  if (name.startsWith("moutain-rwenzori"))
    return "Landscapes";

  return "Safari Moments";
}

function makeTitle(filename: string): string {
  const withoutExtension = filename.replace(/\.[^/.]+$/, "");

  return withoutExtension
    .replace(/[-_]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function GalleryPage() {
  const galleryPath = path.join(
    process.cwd(),
    "public",
    "images",
    "gallery"
  );

  let items: GalleryItem[] = [];

  try {
    const files = fs.readdirSync(galleryPath);

    items = files
      .filter((filename) => /\.(webp|jpg|jpeg|png|avif)$/i.test(filename))
      .map((filename) => ({
        filename,
        src: `/images/gallery/${encodeURIComponent(filename)}`,
        category: getCategory(filename),
        title: makeTitle(filename),
      }));
  } catch (error) {
    console.error("Gallery folder could not be read:", error);
  }

  return <GalleryDisplay items={items} />;
}