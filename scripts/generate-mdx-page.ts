import { promises as fs } from "fs";
import { exit } from "process";

const dirExists = async (path: string): Promise<boolean> => {
  try {
    await fs.stat(path);
    return true;
  } catch {
    return false;
  }
};

const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .normalize("NFD") // split accented letters into base + diacritics
    .replace(/[\u0300-\u036f]/g, "") // remove diacritics
    .replace(/[^a-z0-9]+/g, "-") // replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, "") // trim leading/trailing hyphens
    .replace(/-{2,}/g, "-"); // collapse multiple hyphens
};

const createMdxPage = async (title: string) => {
  const slugifiedTitle = slugify(title);
  const BASE_PATH = `app/[locale]/${slugifiedTitle}`;
  const canCreateArticle = !(await dirExists(BASE_PATH));

  if (!canCreateArticle) {
    exit(1);
  }

  await fs.mkdir(BASE_PATH);

  const content = `import { Hero, HeroContent, HeroImage, HeroTitle } from "@/components/ui/hero";

<Hero>
  <HeroContent className="text-white p-6 sm:p-4">
    <HeroTitle className="mb-4">${title}</HeroTitle>
  </HeroContent>
  <HeroImage
    className="brightness-70"
    src="/path/to/your/image.png"
    alt="Header Image"
  />
</Hero>

<div className="mx-auto max-w-prose">
## Insert your markdown content here.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices odio nisi, id vulputate nibh aliquam eu. Donec euismod quis risus ac tempus. Pellentesque non fermentum urna, id efficitur ipsum. Nulla eget efficitur nibh. Ut in ipsum eu mauris interdum porta id bibendum ligula. Maecenas non arcu sit amet mauris scelerisque suscipit sodales vel ligula. Donec finibus justo at tempor finibus. Quisque pulvinar feugiat lacus id viverra. Nam mattis mattis mauris vel auctor. Integer molestie laoreet arcu. Phasellus maximus tellus ut lacus molestie malesuada. Proin placerat quam vel leo condimentum, sit amet fringilla nunc varius. Cras nulla nunc, sollicitudin ut blandit vel, eleifend nec diam.
</div>`;

  await fs.writeFile(BASE_PATH + "/page.mdx", content);
};

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("ERROR: No title provided");
  exit(1);
}

if (args.length > 1) {
  console.error("ERROR: Only one title can be provided");
  exit(1);
}

createMdxPage(args[0]);
