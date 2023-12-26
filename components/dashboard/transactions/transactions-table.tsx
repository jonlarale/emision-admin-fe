"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export interface Transaction {
  date: string;
  description: string;
  amount: number;
}
export interface Card {
  card: string;
  transactions: Transaction[];
}

const data: Card[] = [
  {
    card: "Tarjeta 1",
    transactions: [
      {
        date: "2023-01-01",
        description: "Pago de alquiler",
        amount: 1000,
      },
      {
        date: "2023-01-02",
        description: "Compra en supermercado",
        amount: 320,
      },
      {
        date: "2023-01-03",
        description: "Recarga de transporte público",
        amount: 50,
      },
      {
        date: "2023-01-04",
        description: "Cena en restaurante",
        amount: 450,
      },
      {
        date: "2023-01-05",
        description: "Suscripción a servicio de streaming",
        amount: 120,
      },
      {
        date: "2023-01-06",
        description: "Compra de ropa",
        amount: 800,
      },
      {
        date: "2023-01-07",
        description: "Pago de factura de electricidad",
        amount: 230,
      },
      {
        date: "2023-01-08",
        description: "Compra de libros",
        amount: 150,
      },
      {
        date: "2023-01-09",
        description: "Reserva de hotel para vacaciones",
        amount: 2000,
      },
      {
        date: "2023-01-10",
        description: "Pago de membresía de gimnasio",
        amount: 300,
      },
      {
        date: "2023-01-11",
        description: "Reparación de coche",
        amount: 950,
      },
      {
        date: "2023-01-12",
        description: "Compra de regalos",
        amount: 400,
      },
      {
        date: "2023-01-13",
        description: "Pago de seguro médico",
        amount: 600,
      },
      {
        date: "2023-01-14",
        description: "Compra de equipo electrónico",
        amount: 1200,
      },
      {
        date: "2023-01-15",
        description: "Pago de tarjeta de crédito",
        amount: 1500,
      },
      {
        date: "2023-01-16",
        description: "Donación a caridad",
        amount: 200,
      },
    ],
  },
  {
    card: "Tarjeta 2",
    transactions: [
      {
        date: "2023-01-05",
        description: "Compra en Temu",
        amount: 320,
      },
      {
        date: "2023-01-06",
        description: "Compra en Shein",
        amount: 900,
      },
    ],
  },
  {
    card: "Tarjeta 3",
    transactions: [
      {
        date: "2023-01-13",
        description: "Pago de seguro médico",
        amount: 600,
      },
    ],
  },
];

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "date",
    header: "Fecha",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "description",
    header: "Descripción",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <div
        className="flex items-center justify-end cursor-pointer"
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          column?.getToggleSortingHandler()?.(e);
        }}
      >
        Importe
        <ArrowUpDown className="ml-2" />
      </div>
    ),
    cell: (info) => `$${(info.getValue() as number).toFixed(2)}`,
    enableSorting: true,
  },
];

export function TransactionsTable() {
  const [selectedCard, setSelectedCard] = React.useState("Tarjeta 1");
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([
    { id: "description", value: "" },
  ]);
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [pageIndex, setPageIndex] = React.useState(0);

  //Filter transactions by card
  const filteredData =
    data.find((card) => card.card === selectedCard)?.transactions || [];

  //Return to page 0 when changing card
  React.useEffect(() => {
    setPageIndex(0);
  }, [selectedCard]);

  const table = useReactTable({
    data: filteredData,
    columns,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      pagination: {
        pageIndex,
        pageSize: 10,
      },
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
  });

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center py-4">
        <Input
          placeholder="Buscar por descripción..."
          value={String(table.getState().columnFilters[0]?.value)}
          onChange={(e) =>
            setColumnFilters([{ id: "description", value: e.target.value }])
          }
          className="w-[200px] md:max-w-sm"
        />

        <div className="flex gap-4 w-full">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                {selectedCard} <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {data.map((card) => (
                <DropdownMenuItem
                  key={card.card}
                  onClick={() => setSelectedCard(card.card)}
                >
                  {card.card}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "seleccionadas"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No hay movimientos.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPageIndex((old) => Math.max(old - 1, 0))}
            disabled={!table.getCanPreviousPage()}
          >
            Anterior
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPageIndex((old) => old + 1)}
            disabled={!table.getCanNextPage()}
          >
            Siguiente
          </Button>
        </div>
      </div>
    </div>
  );
}
