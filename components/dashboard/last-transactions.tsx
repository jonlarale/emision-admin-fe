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

interface Transaction {
  id: string;
  concept: string;
  amount: number;
  date: string;
}
const transactionsMock: Transaction[] = [
  {
    id: "1",
    concept: "Cobro de nómina",
    amount: 15000,
    date: "2023-12-20",
  },
  {
    id: "2",
    concept: "Pago de tarjeta de crédito",
    amount: -5000,
    date: "2023-12-20",
  },
  {
    id: "3",
    concept: "Compra de supermercado",
    amount: -1500,
    date: "2023-12-21",
  },
];

export default function LastTransactions() {
  const [transactions, setTransactions] =
    useState<Transaction[]>(transactionsMock);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Últimos movimientos</CardTitle>
      </CardHeader>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-sm">Concepto</TableHead>
            <TableHead className="text-sm">Cantidad</TableHead>
            <TableHead className="text-sm">Fecha</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {transactions.length > 0 ? (
            transactions.map(({ concept, amount, date, id }) => (
              <TableRow key={id}>
                <TableCell className="text-xs">{concept}</TableCell>
                <TableCell className="text-xs">{amount}</TableCell>
                <TableCell className="text-xs"> {date}</TableCell>
              </TableRow>
            ))
          ) : (
            <span>Cargando movimientos...</span>
          )}
        </TableBody>
      </Table>
      <CardFooter className="flex justify-end">
        <Link
          href="/dashboard/transactions"
          className="text-sm hover:underline text-blue-500 text-end"
        >
          Ver todos los movimientos
        </Link>
      </CardFooter>
    </Card>
  );
}
