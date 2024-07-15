"use client";
import React, { useState } from "react";
import { Payment } from "./components/table/types";
import DataTable from "./components/table/data-table";
import { columns } from "./components/table/columns";
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

const Orders = () => {
  const [dialogTrigger, setDialogTrigger] = useState(false);
  const [item, setItem] = useState<Payment | undefined>({ status: "paid" });
  const [items, setItems] = useState<Payment[]>([]);
  return (
    <main className="py-14 flex flex-1 flex-col gap-4 m-5 lg:gap-6">
      <Dialog open={dialogTrigger} onOpenChange={setDialogTrigger}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Add Orders</DialogTitle>
            <DialogDescription>Add order transactions here.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                className="col-span-3"
                value={item?.name}
                onChange={(e) => setItem({ ...item, name: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                className="col-span-3"
                value={item?.email}
                onChange={(e) => setItem({ ...item, email: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="amount" className="text-right">
                Amount
              </Label>
              <Input
                id="amount"
                className="col-span-3"
                type="number"
                value={item?.amount}
                onChange={(e) => setItem({ ...item, amount: e.target.value })}
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
                  email: "",
                  amount: undefined,
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
      {items.length === 0 ? (
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

            <Button className="mt-4" onClick={() => setDialogTrigger(true)}>
              Add an order
            </Button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex justify-end">
            <Button onClick={() => setDialogTrigger(true)}>Add order</Button>
          </div>
          <DataTable columns={columns} data={items} />
        </>
      )}
    </main>
  );
};

export default Orders;
