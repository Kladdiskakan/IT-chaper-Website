"use client";
import Image from "next/image";
import {
  useChangeLocale,
  useCurrentLocale,
  useScopedI18n,
} from "../../locales/client";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";

const LocaleSwitcher = () => {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();
  const t = useScopedI18n("LocaleSwitcher");

  const flagMap: Record<typeof locale, string> = {
    en: "/assets/icons/en.svg",
    sv: "/assets/icons/sv.svg",
  };

  const locales: (typeof locale)[] = ["en", "sv"];

  return (
    <Select
      onValueChange={(value) => changeLocale(value as typeof locale)}
      defaultValue={locale}
    >
      <SelectTrigger className="border-0 shadow-none !bg-transparent hover:!bg-accent dark:hover:!bg-input/50 transition-colors">
        <Image
          className="rounded-xs w-4"
          src={flagMap[locale]}
          height={40}
          width={30}
          alt={`${locale.toUpperCase()} flag`}
        />
      </SelectTrigger>
      <SelectContent>
        {locales.map((locale) => (
          <SelectItem key={`locale-switcher.${locale}`} value={locale}>
            <Image
              className="rounded-xs w-4"
              src={flagMap[locale]}
              height={40}
              width={30}
              alt={`${locale.toUpperCase()} flag`}
            />
            {t(locale)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export { LocaleSwitcher };
