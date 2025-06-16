"use client";

import * as React from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useI18n } from "@/locales/client";
import {
  ContactIcon,
  HomeIcon,
  Laptop2Icon,
  MoonIcon,
  SunIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { navigationGroups } from "./nav-items";

const CommandMenu = () => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const t = useI18n();

  const { setTheme } = useTheme();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleNavigation = (href: string) => {
    router.push(href);
    setOpen(false);
  };

  const handleThemeChange = (theme: string) => {
    setTheme(theme);
    setOpen(false);
  };

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder={`${t("NavBar.Search")}...`} />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            <CommandItem onSelect={() => handleNavigation("/")}>
              <HomeIcon /> {t("NavBar.Home")}
            </CommandItem>
            <CommandItem onSelect={() => handleNavigation("/contact")}>
              <ContactIcon /> {t("NavBar.Contact")}
            </CommandItem>
          </CommandGroup>
          {navigationGroups.map((group, i) => (
            <React.Fragment key={`cmd.group.${group.title}.${i}.fragment`}>
              <CommandGroup
                key={`cmd.group.${group.title}.${i}`}
                heading={t(`NavBar.${group.title}`)}
              >
                {group.items.map((item, j) => (
                  <CommandItem
                    key={`cmd.group.${group.title}.${i}.item.${item.title}.${j}`}
                    onSelect={() => handleNavigation(item.href)}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </React.Fragment>
          ))}
          <CommandSeparator />
          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => handleThemeChange("light")}>
              <SunIcon />
              Light
            </CommandItem>
            <CommandItem onSelect={() => handleThemeChange("dark")}>
              <MoonIcon />
              Dark
            </CommandItem>
            <CommandItem onSelect={() => handleThemeChange("system")}>
              <Laptop2Icon />
              System
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export { CommandMenu };
