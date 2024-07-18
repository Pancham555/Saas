import { Badge } from "@/components/ui/badge";
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
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";

interface ItemProps {
  name: string;
  email: string;
  payment_status: "paid" | "unpaid";
  stock: StockItemProps[];
}

interface StockItemProps {
  name: string;
  price: number;
  quantity: number | string;
}

export default function ItemForm({
  dialogTrigger,
  setDialogTrigger,
  item,
  setItem,
  AddData = () => {},
  stock,
  sendStockList,
  setSendStockList,
}: {
  dialogTrigger: boolean;
  setDialogTrigger: (open: boolean) => void;
  item: ItemProps;
  setItem: Function;
  AddData?: Function;
  stock: StockItemProps[];
  sendStockList: StockItemProps[];
  setSendStockList: Function;
}) {
  return (
    <Dialog open={dialogTrigger} onOpenChange={setDialogTrigger}>
      <DialogContent className="sm:max-w-[600px]">
        <ScrollArea className="h-[26rem]">
          <DialogHeader>
            <DialogTitle>Add an order</DialogTitle>
            <DialogDescription>
              Add items to your orders list.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4 mr-5">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Orderee&apos;s Name
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
                Orderee&apos;s Email
              </Label>
              <Input
                id="email"
                className="col-span-3"
                value={item?.email}
                onChange={(e) => setItem({ ...item, email: e.target.value })}
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
            <div className="grid grid-cols-4 items-center gap-4">
              <Label
                htmlFor="stock
            "
                className="text-right"
              >
                Items purchased
              </Label>
              <Select
                // value={s}
                onValueChange={(e: string) => {
                  // @ts-ignore
                  let dataofStock = stock.filter((val) => val.name === e);

                  setSendStockList((oldItems: []) => {
                    const newItem = {
                      name: dataofStock[0].name,
                      price: dataofStock[0].price,
                    };
                    // @ts-ignore
                    const checkNames = oldItems.map((i) => i.name);
                    if (!checkNames.includes(newItem.name)) {
                      return [...oldItems, newItem];
                    } else {
                      return oldItems;
                    }
                  });
                }}
              >
                <SelectTrigger className="w-full col-span-3">
                  <SelectValue placeholder="Items" />
                </SelectTrigger>
                <SelectContent>
                  {stock.map((data, i) => {
                    return (
                      // @ts-ignore
                      <SelectItem key={i} value={data.name}>
                        {/* @ts-ignore */}
                        {data.name}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <div></div>
              <div className="flex flex-wrap w-full gap-5 col-span-3">
                {sendStockList.map((data, i) => {
                  return (
                    <div
                      key={i}
                      className="border border-dashed py-1 px-2 rounded-md text-sm font-medium flex gap-4 items-center"
                    >
                      <span>{data.name}</span>
                      <X
                        className="cursor-pointer"
                        size={16}
                        onClick={() => {
                          setSendStockList(
                            sendStockList.filter(
                              (val) => val.name !== data.name
                            )
                          );
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {sendStockList.map((data, i) => {
              return (
                <div className="" key={i}>
                  <p className="font-semibold">{data.name}</p>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="stock_quantity" className="text-right">
                      Quantity
                    </Label>
                    <Input
                      id="stock_quantity"
                      type="number"
                      className="col-span-3"
                      value={sendStockList[i].quantity}
                      onChange={(e) => {
                        let arr = [...sendStockList];
                        // @ts-ignore
                        arr[i] = {
                          ...sendStockList[i],
                          quantity: Number(e.target.value),
                          // @ts-ignore
                          total:
                            Number(e.target.value) *
                            Number(sendStockList[i].price),
                        };
                        setSendStockList(arr);
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
        <DialogFooter className="mr-5">
          <Button type="submit" onClick={() => AddData()}>
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
