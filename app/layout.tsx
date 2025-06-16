import { ThemeProvider } from "@/components/providers/theme-provider";
import { TRPCProvider } from "@/components/providers/trpc-provider";
import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";

import "@/app/globals.css";
import { getI18n } from "@/locales/server";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n();

  return {
    title: t("Common.chapter"),
    description: "Sektionen för alla",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className={`${poppins.variable} ${geistMono.variable} antialiased`}>
        <TRPCProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            storageKey="theme-kthit"
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </TRPCProvider>
      </body>
    </html>
  );
}
