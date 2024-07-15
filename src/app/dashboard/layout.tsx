"use client";
import Link from "next/link";
import {
  Bell,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  Settings,
  ShoppingCart,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Logo from "@/components/logo";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import ThemeButton from "@/components/themeButton";

import { useDispatch, useSelector } from "react-redux";
import { change, State } from "../auth";
import { RootState } from "../store";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
interface StateProps {
  authenticated?: boolean;
  id?: string;
  message?: string;
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const dashboardRoutes = [
    {
      link: "/dashboard",
      Icon: Home,
      name: "Dashboard",
    },
    {
      link: "/dashboard/orders",
      Icon: ShoppingCart,
      name: "Orders",
    },
    {
      link: "/dashboard/inventory",
      Icon: Package,
      name: "Inventory",
    },
    {
      link: "/dashboard/stock",
      Icon: Package2,
      name: "Stock",
    },
    {
      link: "/dashboard/analytics",
      Icon: LineChart,
      name: "Analytics",
    },
    {
      link: "/dashboard/settings",
      Icon: Settings,
      name: "Settings",
    },
  ];
  const [state, setState] = useState<StateProps | undefined>();
  const user = useSelector((state: RootState) => state.reducer);
  const checkAuth = useCallback(async () => {
    try {
      const data = await axios.get("/api/protected");
      setState(await { ...data.data.data });
      dispatch(change({ ...user, email: `${data.data.data.email}` }));
    } catch (error) {
      console.log(error);
      router.push("/");
    }
  }, [dispatch, router, user]);
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  if (state === undefined) {
    return <p className="p-5">Loading...</p>;
  }
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className=""></div>
      <div className="hidden border-r bg-muted/40 md:block fixed top-0 left-0 bottom-0 z-50 md:max-w-52 lg:max-w-[17rem]">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="px-3 justify-between flex items-center border-b lg:h-[60px] h-14 py-5">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Logo />
              <span className="">Zenith SaaS</span>
            </Link>
            <ThemeButton />
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {dashboardRoutes.map(({ link, Icon, name }, i) => {
                return (
                  <Link
                    key={i}
                    href={link}
                    className={`flex items-center gap-3 rounded-lg  px-3 py-2 ${
                      pathname === link
                        ? "text-primary bg-muted"
                        : "text-muted-foreground"
                    } transition-all hover:text-primary`}
                  >
                    <Icon className="h-4 w-4" />
                    {name}{" "}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card x-chunk="dashboard-02-chunk-0">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
        <header className="fixed top-0 right-0 left-0 z-40 justify-end flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 bg-white dark:bg-slate-950">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Logo />
                  <span className="sr-only">Zenith SaaS</span>
                </Link>
                {dashboardRoutes.map((data, i) => {
                  return (
                    <Link
                      key={i}
                      href={data.link}
                      className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 ${
                        pathname === data.link
                          ? "text-foreground bg-muted"
                          : "text-muted-foreground"
                      }  hover:text-foreground`}
                    >
                      <data.Icon className="h-5 w-5" />
                      {data.name}
                      {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                          6
                        </Badge> */}
                    </Link>
                  );
                })}
              </nav>
              <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                      Unlock all features and get unlimited access to our
                      support team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      Upgrade
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex justify-end flex-1">
            <form className="md:w-2/3 lg:w-1/3 w-full">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none"
                />
              </div>
            </form>
          </div>

          <Button variant="secondary" size="icon" className="rounded-full">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Toggle notifications</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <Avatar>
                  {/* @ts-ignore */}
                  <AvatarImage src={user.picture} />
                  <AvatarFallback>{`${user.given_name[0] ?? "A"}${
                    user.family_name[0] ?? "B"
                  }`}</AvatarFallback>
                </Avatar>
                {/* <CircleUser className="h-5 w-5" /> */}
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => router.push("/dashboard/settings")}
              >
                Settings
              </DropdownMenuItem>
              <Link href="mailto:panchamb63@gmail.com">
                <DropdownMenuItem>Support</DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <LogoutLink>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </LogoutLink>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        {children}
      </div>
    </div>
  );
}
{
  /* <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <Users className="h-4 w-4" />
                  Customers
                </Link> */
}