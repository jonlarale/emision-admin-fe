"use client";

import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

import { useCustomization } from "@/components/theme/CustomizationContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  const {
    welcomeText,
    primaryColor,
    secondaryColor,
    backgroundImageUrl,
    logoUrl,
  } = useCustomization();
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="relative w-full h-full hidden md:block">
        <Image
          src={backgroundImageUrl}
          alt="Auth background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 rounded-xl w-[400px]"
          style={{ color: primaryColor, backgroundColor: secondaryColor }}
        >
          <Image
            src={logoUrl}
            alt="Logo"
            width={300}
            height={300}
            className="rounded-xl mx-auto"
          />
          <h1 className="text-2xl font-bold text-center text-ellipsis mt-4">
            {welcomeText}
          </h1>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div
          className="md:hidden mb-4 rounded-xl w-[400px]"
          style={{ color: primaryColor, backgroundColor: secondaryColor }}
        >
          <Image
            src={logoUrl}
            alt="Logo"
            width={200}
            height={200}
            className="rounded-xl mx-auto"
          />
          <h1 className="text-xl font-bold text-center text-ellipsis mt-4">
            {welcomeText}
          </h1>
        </div>
        <Card>
          <CardContent className="p-8 w-[400px]">{children}</CardContent>
        </Card>
      </div>
    </div>
  );
}
