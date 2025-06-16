import { Button } from "@/components/ui/button";
import { Hero, HeroContent, HeroImage, HeroTitle } from "@/components/ui/hero";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="container mx-auto border-x h-screen mt-6">
      <Hero className="w-full mx-0 h-full border-0">
        <HeroContent className="text-white">
          <HeroTitle className="mb-2">404!</HeroTitle>
          <p className="text-lg mb-4">
            This is not the page you are looking for...
          </p>
          <Button asChild>
            <Link href="/">Take me back!</Link>
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

export default NotFoundPage;
