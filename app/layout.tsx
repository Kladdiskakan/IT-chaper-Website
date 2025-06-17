import { ThemeProvider } from "@/components/providers/theme-provider";
import { TRPCProvider } from "@/components/providers/trpc-provider";
import { Geist_Mono, Poppins } from "next/font/google";

import "@/app/globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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
            defaultTheme="system"
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
