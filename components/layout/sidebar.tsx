"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

import {
  LineChart,
  WalletCards,
  ArrowLeftRight,
  Menu,
  Landmark,
} from "lucide-react";

interface NavigationItem {
  name: string;
  href: string;
  icon: React.FC;
}

const navigationItems: NavigationItem[] = [
  {
    name: "Resumen",
    href: "/dashboard",
    icon: LineChart,
  },
];

function NavigationIconItem({
  name,
  href,
  icon: Icon,
  activePage,
  onClick,
}: NavigationItem & { activePage: string } & {
  onClick: (href: string) => void;
}) {
  const isActive = href === activePage;
  return (
    <Link
      href={href}
      className={`flex gap-2 hover:underline text-lg ${
        isActive ? "text-blue-600" : ""
      }`}
      onClick={() => onClick(href)}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Icon />
          </TooltipTrigger>
          <TooltipContent>
            <p>{name}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Link>
  );
}

function NavigationNameItem({
  name,
  href,
  icon: Icon,
  activePage,
  onClick,
}: NavigationItem & { activePage: string } & {
  onClick: (href: string) => void;
}) {
  const isActive = href === activePage;
  return (
    <Link
      href={href}
      className={`flex gap-2 hover:underline text-lg ${
        isActive ? "text-blue-600" : ""
      }`}
      onClick={() => onClick(href)}
    >
      {Icon && <Icon />}
      {name}
    </Link>
  );
}

export default function Sidebar() {
  // TODO: get merchant name and logofrom context provider (const Customization = useCustomization();)
  const merchantName = "Blumonpay";
  const [activePage, setActivePage] = useState("/dashboard");

  const handleNavigationClick = (href: string) => {
    setActivePage(href);
  };

  return (
    <Sheet>
      <div className="flex flex-col gap-8 md:gap-16 pt-4 items-center bg-primary-foreground w-[60px] justify-start px-4 min-h-screen h-full">
        <SheetTrigger className="">
          <Menu />
        </SheetTrigger>
        <div className="flex flex-col gap-8">
          {navigationItems.map((item) => (
            <NavigationIconItem
              {...item}
              key={item.name}
              activePage={activePage}
              onClick={handleNavigationClick}
            />
          ))}
        </div>
      </div>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>
            <div className="flex gap-2">
              <Avatar>
                <AvatarImage src="/blumon_pay_logo.jpeg" />
                <AvatarFallback>Logo</AvatarFallback>
              </Avatar>

              {merchantName}
            </div>
          </SheetTitle>
          <Separator />
          <SheetDescription>
            <div className="flex flex-col gap-8 mt-8 pl-4">
              {navigationItems.map((item) => (
                <NavigationNameItem
                  {...item}
                  key={item.name}
                  activePage={activePage}
                  onClick={handleNavigationClick}
                />
              ))}
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
