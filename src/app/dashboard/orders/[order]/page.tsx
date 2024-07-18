"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AtSign, DollarSign, HandCoins, User } from "lucide-react";

interface DataProps {
  name: string;
  email: string;
  payment_status: "paid" | "unpaid";
  total: number;
  items: ItemProps[];
}

interface ItemProps {
  name: string;
  price: number;
  quantity: number;
  total: number;
}

export default function Order() {
  const params = useParams<{ order: string }>();
  const [showData, setShowData] = useState<DataProps>();
  const getOrderData = async () => {
    try {
      const data = await axios.get(`/api/orders/order?orderId=${params.order}`);

      setShowData(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrderData();
  }, []);

  return (
    <main className="flex flex-1 flex-col gap-4 p-14 m-5 lg:gap-6">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Name</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-semibold break-normal">
              {showData?.name}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Email</CardTitle>
            <AtSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg text-muted-foreground font-medium break-all">
              {showData?.email}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Payment Status
            </CardTitle>
            <HandCoins className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-semibold">
              {showData?.payment_status === "paid" ? "Paid" : "Unpaid"}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${showData?.total}</div>
            <p className="text-xs text-muted-foreground">
              For {showData?.items.length} items
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[5%]">Id</TableHead>
              <TableHead className="w-[50%]">Name</TableHead>
              <TableHead className="w-[15%] text-right">Price</TableHead>
              <TableHead className="w-[15%] text-right">Quantity</TableHead>
              <TableHead className="w-[15%] text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {showData?.items.map((data, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{data.name}</TableCell>
                  <TableCell className="text-right">{data.price}</TableCell>
                  <TableCell className="text-right">{data.quantity}</TableCell>
                  <TableCell className="text-right font-medium">
                    ${data.total}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter className="w-full">
            <TableRow className="w-full rounded-md bg-white hover:bg-white dark:bg-slate-950">
              <TableCell colSpan={4} className="w-full rounded-md">
                Total
              </TableCell>
              <TableCell className="text-right">${showData?.total}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Card>
    </main>
  );
}
