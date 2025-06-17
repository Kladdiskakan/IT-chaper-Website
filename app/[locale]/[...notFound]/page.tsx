import { NotFound } from "@/components/not-found";
import { getStaticParams } from "@/locales/server";
import { setStaticParamsLocale } from "next-international/server";

const NotFoundPage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  setStaticParamsLocale(locale);
  return <NotFound />;
};

export function generateStaticParams() {
  return getStaticParams();
}

export default NotFoundPage;
