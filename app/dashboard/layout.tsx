"use client";

import { Inter } from "next/font/google";

import {
  CustomizationContext,
  CustomizationProps,
  useCustomization,
} from "@/components/theme/CustomizationContext";

import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const Customization = useCustomization();
  return (
    <html lang="es">
      <CustomizationContext.Provider value={Customization}>
        <body className={inter.className}>
          <Navbar />
          <div className="flex">
            <div className="relative z-20">
              <Sidebar />
            </div>
            <div className="w-full mt-[60px]">{children}</div>
          </div>
          <Toaster />
        </body>
      </CustomizationContext.Provider>
    </html>
  );
}
