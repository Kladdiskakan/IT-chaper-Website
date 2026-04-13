import { setStaticParamsLocale } from "next-international/server";
import ELink from "@/components/ui/elink";
import { Hero, HeroContent, HeroImage, HeroTitle } from "@/components/ui/hero";
import { generatePageMetadata } from "@/lib/metadata";
import { getOgImageUrl } from "@/lib/og";
import { getI18n, getScopedI18n, getStaticParams } from "@/locales/server";
import { Metadata } from "next";
import { CompanyContactForm } from "./company-contact-form";
import { CompanyInfoCard } from "./company-info-card";

export default async function CompaniesPage({
  params,
}: {
    params: Promise<{ locale: string }>;
}) {
const { locale } = await params;
setStaticParamsLocale(locale);
const t = await getScopedI18n("CompaniesPage");

const programLinks = {
    CINTE: (
      <ELink href="https://www.kth.se/student/kurser/program/CINTE?l=sv" external>
        {t("programs.CINTE")}
      </ELink>
    ),
    TIDAB: (
      <ELink href="https://www.kth.se/student/kurser/program/TIDAB?l=sv" external>
        {t("programs.TIDAB")}
      </ELink>
    ),
    TCOMK: (
      <ELink href="https://www.kth.se/student/kurser/program/TCOMK?l=sv" external>
        {t("programs.TCOMK")}
      </ELink>
    ),
  };

return (
  <>
    <Hero>
      <HeroContent className="text-white p-6 sm:p-4">
        <HeroTitle className="mb-4">{t("title")}</HeroTitle>
      </HeroContent>
      <HeroImage
        className="brightness-70"
        src="/assets/img/bouleplan.png"
        alt="Header Image"
      />
    </Hero>
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <article className="prose prose-lg max-w-none [&>section>p]:text-muted-foreground">
            <section className="mb-12, margin: 0; padding: 0;">
              {/* Heading section */}
              <h2 className="text-3xl font-strong mb-4">
                {t("heading.content.0")} 
                <span className="block text-primary">{t("heading.content.1")}</span>
              </h2>
              {/* Intro section */}
              <p className="mb-4">{t("intro.content.0")}</p>
              <ul className="list-disc pl-5 mb-6">
              <li>{programLinks.CINTE}</li>
              <li>{programLinks.TIDAB}</li>
              <li>{programLinks.TCOMK}</li>
              </ul>
              <p className="mb-3">{t("intro.content.1")}</p>                
              <p className="mb-3">
                <ELink href="/assets/files/produktkatalog.pdf" external>
                  {t("intro.content.2")}
                </ELink>
              </p>
              <p>{t("intro.content.3")}{" "}</p>
              <p>{t("intro.content.4")}</p>
              <br/>
            </section>
            <section>
              <h2 className="text-3xl font-strong mb-4">
                {t("events.title")} 
              </h2>
              <p>{t("events.content.0")}</p>
              <br />
              <ul>
                <li><strong>{t("events.eventtypes.0")}</strong> {t("events.eventdecription.0")} </li> <br />
                <li><strong>{t("events.eventtypes.1")}</strong> {t("events.eventdecription.1")} </li> <br />
                <li><strong>{t("events.eventtypes.2")}</strong> {t("events.eventdecription.2")} </li> <br />
                <li><strong>{t("events.eventtypes.3")}</strong> {t("events.eventdecription.3")} </li> <br />
              </ul>
              <p>{t("events.content.1")}</p>
              <br/>
            </section>
            <section>
              <h2 className="text-3xl font-strong mb-4">
                {t("realitycheck.title")} 
              </h2>
              <p>{t("realitycheck.content.0")}</p>
              <p>{t("realitycheck.content.1")} {t("realitycheck.content.2")}</p>
              <br />
            </section>
            <section>
              <h2 className="text-3xl font-strong mb-4">
                {t("reception.title")} 
              </h2>
              <p>{t("reception.content.0")}</p>
              <p>{t("reception.content.1")}</p>
              <p>{t("reception.content.2")} {t("reception.content.3")}</p>
              <br />
            </section>
            <section>
              <h2 className="text-3xl font-strong mb-4">
                {t("marketing.title")} 
              </h2>
              <p><strong>{t("marketing.content.0")}</strong>, {t("marketing.content.1")}</p>
              <p>{t("marketing.content.2")}</p>
              <br />
            </section>
            <div className="text-center pt-8">
              <h2 className="text-2xl font-strong">{t("contactform")}</h2>
              <br/>
            </div>
            <CompanyContactForm />
          </article>
        </div>
        <aside className="lg:col-span-1">
          <CompanyInfoCard />
        </aside>
      </div>
    </div>
  </>
);}

export function generateStaticParams() {
  return getStaticParams();
}
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> => {
  const { locale } = await params;
  setStaticParamsLocale(locale);
  const t = await getI18n();
  const title = t("Common.chapter");
  const subtitle = t("NavBar.CompaniesPage.title");
  const description = t("NavBar.CompaniesPage.description");
  return generatePageMetadata({
    title: subtitle,
    description,
    locale,
    url: "/companies",
    image: getOgImageUrl(title, subtitle),
  });
};