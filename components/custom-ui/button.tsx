import React from "react";

import { useCustomization } from "../theme/CustomizationContext";
import { Button as ShadcnButton } from "@/components/ui/button";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({ children, className }: ButtonProps) {
  const { primaryColor, secondaryColor } = useCustomization();

  return (
    <ShadcnButton
      className={className}
      style={{ backgroundColor: primaryColor, color: secondaryColor }}
    >
      {children}
    </ShadcnButton>
  );
}
