"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DataTable from "./components/table/data-table";
import { columns } from "./components/table/columns";
import { Payment } from "./components/table/types";

export default function Stock() {
  const [dialogTrigger, setDialogTrigger] = useState(false);
  const [item, setItem] = useState<Payment | undefined>({ status: "paid" });
  const [items, setItems] = useState<Payment[]>([]);
  return (
    <>
      <Dialog open={dialogTrigger} onOpenChange={setDialogTrigger}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Add Item</DialogTitle>
            <DialogDescription>Add items to your stock.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Item Name
              </Label>
              <Input
                id="name"
                className="col-span-3"
                value={item?.name}
                onChange={(e) => setItem({ ...item, name: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input
                id="price"
                className="col-span-3"
                type="number"
                value={item?.price}
                onChange={(e) => setItem({ ...item, price: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="payment_status" className="text-right">
                Payment status
              </Label>
              <Select
                defaultValue="paid"
                value={item?.status}
                onValueChange={(e: string) =>
                  // @ts-ignore
                  setItem({ ...item, status: e })
                }
              >
                <SelectTrigger className="w-full col-span-3">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="unpaid">Unpaid</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              onClick={() => {
                setDialogTrigger(false);
                setItem({
                  name: "",
                  price: undefined,
                });
                // @ts-ignore
                setItems((oldArr) => [...oldArr, item]);
              }}
            >
              Add
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <main className="flex flex-1 flex-col gap-4 p-14 m-5 lg:gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold md:text-2xl">Stock</h1>
          {items.length === 0 ? null : (
            <Button onClick={() => setDialogTrigger(true)}>Add item</Button>
          )}
        </div>
        {items.length === 0 ? (
          <div
            className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
            x-chunk="dashboard-02-chunk-1"
          >
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                You have no products
              </h3>
              <p className="text-sm text-muted-foreground">
                You can start selling as soon as you add a product.
              </p>

              <Button className="mt-4" onClick={() => setDialogTrigger(true)}>
                Add Product
              </Button>
            </div>
          </div>
        ) : (
          <DataTable columns={columns} data={items} />
        )}
      </main>
    </>
  );
}
