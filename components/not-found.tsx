import { getScopedI18n } from "@/locales/server";

import Link from "next/link";
import { Button } from "./ui/button";
import { Hero, HeroContent, HeroImage, HeroTitle } from "./ui/hero";

const NotFound = async () => {
  const t = await getScopedI18n("NotFound");
  return (
    <div className="h-[calc(100dvh-4rem)] -mb-42">
      <Hero className=" h-full border-0">
        <HeroContent className="text-white">
          <HeroTitle className="mb-2">404!</HeroTitle>
          <p className="text-lg mb-4">
            This is not the page you are looking for...
          </p>
          <Button asChild>
            <Link href="/">{t("cta")}</Link>
          </Button>
        </HeroContent>
        <HeroImage
          className="h-full"
          alt="Not found"
          src="/assets/img/obi-wan.avif"
        />
      </Hero>
    </div>
  );
};

export { NotFound };
