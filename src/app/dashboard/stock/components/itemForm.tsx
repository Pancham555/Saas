import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

interface ItemProps {
  name: string;
  price: string | number;
  quantity: number;
  payment_status: "paid" | "unpaid";
}

export default function ItemForm({
  dialogTrigger,
  setDialogTrigger,
  item,
  setItem,
  AddData,
}: {
  dialogTrigger: boolean;
  setDialogTrigger: (open: boolean) => void;
  item: ItemProps;
  setItem: Function;
  AddData: Function;
}) {
  return (
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
            <Label htmlFor="quantity" className="text-right">
              Quantity
            </Label>
            <Input
              id="quantity"
              className="col-span-3"
              type="number"
              value={item?.quantity}
              onChange={(e) =>
                setItem({ ...item, quantity: Number(e.target.value) })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="payment_status" className="text-right">
              Payment status
            </Label>
            <Select
              value={item?.payment_status}
              onValueChange={(e: string) =>
                // @ts-ignore
                setItem({ ...item, payment_status: e })
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
          <Button type="submit" onClick={() => AddData()}>
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
