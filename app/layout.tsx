"use client";

import { Inter } from "next/font/google";
import "./globals.css";

import {
  CustomizationContext,
  CustomizationProps,
  useCustomization,
} from "@/components/theme/CustomizationContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const customization: CustomizationProps = useCustomization();
  return (
    <html lang="es">
      <CustomizationContext.Provider value={customization}>
        <body className={inter.className}>
          <div>{children}</div>
        </body>
      </CustomizationContext.Provider>
    </html>
  );
}
