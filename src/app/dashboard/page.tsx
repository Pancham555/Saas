"use client";
import { useEffect, useState } from "react";
import { CreditCard, DollarSign, Package, Package2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface DashboardDataProps {
  sales: number;
  cash_sales: number;
  credit_sales: number;
  inventory: {
    _count: {
      _all: number;
    };
    _sum: {
      total: number;
    };
  };

  stock: {
    _count: {
      _all: number;
    };
    _sum: {
      total: number;
    };
  };
  data: DataProps[];
}

interface DataProps {
  name: string;
  email: string;
  payment_status: "paid" | "unpaid";
  total: number;
}
export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState<DashboardDataProps>();
  const user = useSelector((state: RootState) => state.reducer);
  const getData = async () => {
    try {
      const data = await axios.get(`/api/dashboard?userId=${user.id}`);
      setDashboardData(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="flex flex-1 flex-col gap-4 md:gap-8 m-5 py-14">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card x-chunk="dashboard-01-chunk-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${dashboardData?.sales ?? 0}
            </div>
            <p className="text-xs text-muted-foreground">
              ${dashboardData?.cash_sales ?? 0} on cash, $
              {dashboardData?.credit_sales ?? 0} on credit.
            </p>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Inventory</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              +{dashboardData?.inventory._sum.total ?? 0}
            </div>
            <p className="text-xs text-muted-foreground">
              +{dashboardData?.inventory._count._all ?? 0} items
            </p>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Stock</CardTitle>
            <Package2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              +{dashboardData?.stock._sum.total ?? 0}
            </div>
            <p className="text-xs text-muted-foreground">
              +{dashboardData?.stock._count._all ?? 0} items
            </p>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-3">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Credit Sales</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              +{dashboardData?.credit_sales ?? 0}
            </div>
            <p className="text-xs text-muted-foreground">
              ${dashboardData?.cash_sales ?? 0} cash sales
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="">
        <Card x-chunk="dashboard-01-chunk-4">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-8">
            {dashboardData?.data.map((data, i) => {
              return (
                <div className="flex items-center gap-4" key={i}>
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarFallback>{data.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                      {data.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {data.email}
                    </p>
                  </div>
                  <div className="ml-auto font-medium">+${data.total ?? 0}</div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
