"use client";

import { createContext, useContext } from "react";

export interface CustomizationProps {
  welcomeText: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundImageUrl: string;
  logoUrl: string;
}

const customization: CustomizationProps = {
  welcomeText: process.env.NEXT_PUBLIC_AUTH_WELCOME_TEXT || "Bienvenido",
  primaryColor: process.env.NEXT_PUBLIC_PRIMARY_COLOR || "#000000",
  secondaryColor: process.env.NEXT_PUBLIC_SECONDARY_COLOR || "#FFFFFF",
  backgroundImageUrl:
    process.env.NEXT_PUBLIC_AUTH_BACKGROUND_IMAGE_URL ||
    "https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  logoUrl: process.env.NEXT_PUBLIC_LOGO_URL || "/blumon_pay_logo.jpeg",
};

export const CustomizationContext =
  createContext<CustomizationProps>(customization);

export const useCustomization = () => useContext(CustomizationContext);
