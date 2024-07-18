"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Payment } from "./types";
import ItemDropdown from "./itemDropdown";
import { CheckBoxCell, CheckboxHeading } from "./checkboxColumns";
import NameSort from "./nameSort";
import FormattedPrice, { PriceTitle } from "./formattedPrice";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => <CheckboxHeading table={table} />,
    cell: ({ row }) => {
      return <CheckBoxCell row={row} />;
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "payment_status",
    header: "Status",
  },

  {
    accessorKey: "name",
    header: ({ column }) => {
      return <NameSort column={column} />;
    },
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "price",
    header: () => <PriceTitle />,
    cell: ({ row }) => {
      return <FormattedPrice row={row} />;
    },
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;
      return <ItemDropdown id={payment.id ?? ""} />;
    },
  },
];
