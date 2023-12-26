import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { CircleUser, Bell } from "lucide-react";

export default function Navbar() {
  return (
    <div className="absolute top-0 left-0 w-full h-[60px] border-b border-gray-200 z-10">
      <div className="flex w-full justify-end items-center h-full gap-8 pr-4 md:pr-8">
        <div className="">
          <Link href="/dashboard/notifications">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Bell />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Notificaciones</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
        </div>
        <div className="grow-0">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <CircleUser />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Mi cuenta</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="grow-0">
              <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/dashboard/profile">Perfil</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Cerrar sesión</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
