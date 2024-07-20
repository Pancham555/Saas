import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import DropDown from "./dropDown";
import { Payment } from "./table/types";

export default function TableComponent({
  items,
  deleteItem,
  updateItem,
  sum,
}: {
  items: Payment[];
  deleteItem: Function;
  updateItem: Function;
  sum: number;
}) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0 m-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[5%]">Id</TableHead>
              <TableHead className="w-[10%]">Status</TableHead>
              <TableHead className="w-[45%]">Name</TableHead>
              <TableHead className="w-[15%]">Price</TableHead>
              <TableHead className="w-[10%]">Quantity</TableHead>
              <TableHead className="text-right w-[5%]">Total</TableHead>
              <TableHead className="w-[1%]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items?.map((data, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{data.public_id}</TableCell>
                  <TableCell className="font-medium">
                    {data.payment_status === "paid" ? "Paid" : "Unpaid"}
                  </TableCell>
                  <TableCell>{data.name}</TableCell>
                  <TableCell>${data.price}</TableCell>
                  <TableCell className="text-right">{data.quantity}</TableCell>
                  <TableCell className="text-right">{data.total}</TableCell>
                  <TableCell className="text-right">
                    <DropDown
                      id={data.id}
                      updateItem={() => updateItem({ id: `${data.id}` })}
                      deleteItem={() => deleteItem({ id: `${data.id}` })}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>

          <TableFooter className="w-full rounded-md bg-white hover:bg-white dark:bg-slate-950">
            <TableRow className="w-full dark:hover:bg-slate-950 hover:bg-white rounded-md">
              <TableCell colSpan={5} className="w-full">
                Total
              </TableCell>
              <TableCell className="text-right w-full">${sum}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardContent>
    </Card>
  );
}
