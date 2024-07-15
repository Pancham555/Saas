"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Payment } from "./types";
import ItemDropdown from "./itemDropdown";
import EmailSort from "./emailSort";
import FormattedAmount, { AmountTitle } from "./formattedAmount";
import { CheckBoxCell, CheckboxHeading } from "./checkboxColumns";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => <CheckboxHeading table={table} />,
    cell: ({ row }) => <CheckBoxCell row={row} />,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return <EmailSort column={column} />;
    },
  },
  {
    accessorKey: "amount",
    header: () => <AmountTitle />,
    cell: ({ row }) => {
      return <FormattedAmount row={row} />;
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
