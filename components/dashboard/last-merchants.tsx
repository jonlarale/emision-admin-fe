"use client";

import { useState, useEffect } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";

interface Merchant {
  id: string;
  merchant_name: string;
  onboard_by: string;
  date: string;
}
const merchantsMock: Merchant[] = [
  {
    id: "1",
    merchant_name: "Nómina KRA",
    onboard_by: "KIA",
    date: "2023-12-20",
  },
  {
    id: "2",
    merchant_name: "Security SA de CV",
    onboard_by: "KIA",
    date: "2023-12-22",
  },
  {
    id: "3",
    merchant_name: "KIA",
    onboard_by: "BLUMONPAY",
    date: "2023-12-20",
  },
];

export default function LastMerchants() {
  const [merchants, setMerchants] = useState<Merchant[]>(merchantsMock);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Últimos merchants agregados</CardTitle>
      </CardHeader>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-sm">Merchant</TableHead>
            <TableHead className="text-sm">Agregado por</TableHead>
            <TableHead className="text-sm">Fecha</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {merchants.length > 0 ? (
            merchants.map(({ id, merchant_name, onboard_by, date }) => (
              <TableRow key={id}>
                <TableCell className="text-xs">{merchant_name}</TableCell>
                <TableCell className="text-xs">{onboard_by}</TableCell>
                <TableCell className="text-xs"> {date}</TableCell>
              </TableRow>
            ))
          ) : (
            <span>Cargando merchants...</span>
          )}
        </TableBody>
      </Table>
      <CardFooter className="flex justify-end">
        <Link
          href="/dashboard/merchants"
          className="text-sm hover:underline text-blue-500 text-end"
        >
          Ver todos los merchants
        </Link>
      </CardFooter>
    </Card>
  );
}
