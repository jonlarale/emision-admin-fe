import React from "react";

import {
  BankCard,
  BankCardProps,
  CardType,
} from "@/components/dashboard/wallet/bank-card";

const Cards: BankCardProps[] = [
  {
    id: "1",
    type: CardType.PHYSICAL,
    cardHolder: "John Doe",
    cardNumber: "1234",
    bankLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Mastercard-logo.png/1200px-Mastercard-logo.png",
    cardName: "Tarjeta 1",
  },
  {
    id: "2",
    type: CardType.VIRTUAL,
    cardHolder: "John Doe",
    cardNumber: "4321",
    bankLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Mastercard-logo.png/1200px-Mastercard-logo.png",
    cardName: "Tarjeta 2",
  },
  {
    id: "3",
    type: CardType.VIRTUAL,
    cardHolder: "John Doe",
    cardNumber: "1234",
    bankLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Mastercard-logo.png/1200px-Mastercard-logo.png",
    cardName: "Tarjeta 3",
  },
  {
    id: "4",
    type: CardType.VIRTUAL,
    cardHolder: "John Doe",
    cardNumber: "4321",
    bankLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Mastercard-logo.png/1200px-Mastercard-logo.png",
    cardName: "Tarjeta 4",
  },
  {
    id: "5",
    type: CardType.VIRTUAL,
    cardHolder: "John Doe",
    cardNumber: "1234",
    bankLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Mastercard-logo.png/1200px-Mastercard-logo.png",
    cardName: "Tarjeta 5",
  },
  {
    id: "6",
    type: CardType.VIRTUAL,
    cardHolder: "John Doe",
    cardNumber: "4321",
    bankLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Mastercard-logo.png/1200px-Mastercard-logo.png",
    cardName: "Tarjeta 6",
  },
];

export function Wallet() {
  return (
    <div className="flex flex-col gap-8 mt-8">
      <div className="flex flex-col bg-primary-foreground p-4 rounded-lg">
        <h1 className="text-2xl font-bold">Física</h1>
        <div className="flex flex-col flex-wrap md:flex-row gap-4 mt-4 md:mt-8">
          <div className="flex flex-wrap gap-4">
            {Cards.filter((card) => card.type === CardType.PHYSICAL).map(
              (card) => (
                <BankCard key={card.id} {...card} />
              )
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-primary-foreground p-4 rounded-lg">
        <h1 className="text-2xl font-bold">Virtual</h1>
        <div className="flex flex-col flex-wrap md:flex-row gap-4 mt-4 md:mt-8">
          <div className="flex flex-wrap gap-4 mx-auto">
            {Cards.filter((card) => card.type === CardType.VIRTUAL).map(
              (card) => (
                <BankCard key={card.id} {...card} />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
