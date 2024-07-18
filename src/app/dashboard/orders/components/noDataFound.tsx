import { Button } from "@/components/ui/button";
import React from "react";

export default function NoDataFound({
  onAdd = () => {},
}: {
  onAdd?: Function;
}) {
  return (
    <div
      className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
      x-chunk="dashboard-02-chunk-1"
    >
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">
          You have no orders made
        </h3>
        <p className="text-sm text-muted-foreground">
          You can add an order whenever you make a transaction, whether its
          paid/unpaid.
        </p>

        <Button className="mt-4" onClick={() => onAdd()}>
          Add an order
        </Button>
      </div>
    </div>
  );
}
