import React from "react";

import { Customization } from "@/app/layout";
import { Button as ShadcnButton } from "@/components/ui/button";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({ children, className }: ButtonProps) {
  const { primaryColor, secondaryColor } = Customization;

  return (
    <ShadcnButton
      className={className}
      style={{ backgroundColor: primaryColor, color: secondaryColor }}
    >
      {children}
    </ShadcnButton>
  );
}
