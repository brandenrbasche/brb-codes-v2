import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "./provider";

const archivo = Archivo( { subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Branden's Portfolio",
  description: "Branden Basche portfolio 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
