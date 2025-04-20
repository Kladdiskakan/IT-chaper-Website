import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Hero, HeroContent, HeroImage } from "@/components/ui/hero";
import { boardTrustees, committeeTrustees } from "@/data/trustees";

const TrusteesPage = () => {
  return (
    <div>
      <Hero>
        <HeroContent>
          <h2 className="text-6xl font-medium text-white mb-4">Trustees</h2>
          <p className="max-w-prose text-balance text-white text-center text-sm">
            The trustees are people who have been elected by the members of the
            IT Chapter.
          </p>
        </HeroContent>
        <HeroImage src="/assets/img/kistan-galler.avif" alt="Header Image" />
      </Hero>
      <h3 className="text-lg font-medium">The Board</h3>
      <p className="text-muted-foreground max-w-prose mb-8 text-sm">
        The board is responsible for overseeing the IT Chapter's operations.
        This includes budgeting, fundraising, the monitoring of studies and
        extracurricular activities.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
        {boardTrustees.map((trustee, index) => (
          <div
            className="text-center flex flex-col items-center"
            key={`board.trustee.${index}`}
          >
            <Avatar className="size-52 border mb-4 text-6xl">
              <AvatarFallback>
                {trustee.name.split(" ")[0][0] + trustee.name.split(" ")[1][0]}
              </AvatarFallback>
              <AvatarImage src={trustee.image} />
            </Avatar>
            <p className="text-lg font-medium -mb-0.5">{trustee.name}</p>
            <p className="mb-1 text-sm">{trustee.role}</p>
            <p className="text-muted-foreground text-sm">{`${trustee.mail}@kth.it`}</p>
          </div>
        ))}
      </div>
      <h3 className="text-lg font-medium">Committee Representatives</h3>
      <p className="text-muted-foreground max-w-prose mb-8 text-sm">
        The committee representatives represent the committees of the chapter.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {committeeTrustees.map((trustee, index) => (
          <div
            className="text-center flex flex-col items-center"
            key={`committee.trustee.${index}`}
          >
            <Avatar className="size-52 border mb-4 text-6xl">
              <AvatarFallback>
                {trustee.name.split(" ")[0][0] + trustee.name.split(" ")[1][0]}
              </AvatarFallback>
              <AvatarImage src={trustee.image} />
            </Avatar>
            <p className="text-lg font-medium -mb-0.5">{trustee.name}</p>
            <p className="mb-1 text-sm">{trustee.role}</p>
            <p className="text-muted-foreground text-sm">{`${trustee.mail}@kth.it`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrusteesPage;
