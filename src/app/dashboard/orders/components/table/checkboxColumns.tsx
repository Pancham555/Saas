import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

export function CheckboxHeading({
  table,
}: {
  table: {
    getIsAllPageRowsSelected: Function;
    getIsSomePageRowsSelected: Function;
    toggleAllPageRowsSelected: Function;
  };
}) {
  return (
    <Checkbox
      checked={
        table.getIsAllPageRowsSelected() ||
        (table.getIsSomePageRowsSelected() && "indeterminate")
      }
      onCheckedChange={(value: boolean) =>
        table.toggleAllPageRowsSelected(!!value)
      }
      aria-label="Select all"
    />
  );
}

export function CheckBoxCell({
  row,
}: {
  row: {
    getIsSelected: Function;
    toggleSelected: Function;
  };
}) {
  return (
    <Checkbox
      checked={row.getIsSelected()}
      onCheckedChange={(value: boolean) => row.toggleSelected(!!value)}
      aria-label="Select row"
    />
  );
}
