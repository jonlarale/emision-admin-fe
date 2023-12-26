import { useState } from "react";

import { Switch } from "@/components/ui/switch";
import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export enum CardType {
  VIRTUAL = "virtual",
  PHYSICAL = "physical",
}

export interface BankCardProps {
  id: string;
  type: CardType;
  cardHolder: string;
  cardNumber: string;
  bankLogo: string;
  cardName: string;
}

export const BankCard: React.FC<BankCardProps> = ({
  cardHolder,
  cardNumber,
  bankLogo,
  cardName,
}) => {
  const [isCardActive, setIsCardActive] = useState(true);

  const handleSwitchChange = () => {
    setIsCardActive(!isCardActive);
  };
  return (
    <div
      className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-xl w-80 h-48
  md:w-96 md:h-60 flex flex-col justify-between"
    >
      <div className="flex justify-between">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreVertical />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Tarjeta 1</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Perdida o dañada</DropdownMenuItem>
            <DropdownMenuItem>Editar nombre</DropdownMenuItem>
            <DropdownMenuItem>Ver detalles</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex items-center space-x-2">
          <h2 className="text-lg md:text-xl font-bold text-center">
            {cardName}
          </h2>
        </div>
        <img src={bankLogo} alt="Bank Logo" className="w-20 h-auto" />
      </div>
      <div className="flex justify-center w-full">
        <p className="text-2xl space-x-4">
          •••• •••• •••• {cardNumber.slice(-4)}
        </p>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <small className="text-xs opacity-70">Card Holder</small>
          <p className="text-sm">{cardHolder}</p>
        </div>
        <div className="mt-3">
          <p className="text-xs w-12">
            {isCardActive ? "Activa" : "Bloqueada"}
          </p>
          <Switch checked={isCardActive} onCheckedChange={handleSwitchChange} />
        </div>
      </div>
    </div>
  );
};
