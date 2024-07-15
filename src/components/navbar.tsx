"use client";
import React, { useEffect, useState } from "react";
import Logo from "./logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { AlignJustify, Search } from "lucide-react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import ThemeButton from "./themeButton";

interface ItemArrayProps {
  title: string;
  desc?: string;
  url: string;
}

const companyArray: ItemArrayProps[] = [
  {
    title: "Owner's Blog",
    desc: "Read here from the owner of this site.",
    url: "https://www.zenithstech.com",
  },
  {
    title: "Company's Blog",
    desc: "Stay Updated for our latest updates.",
    url: "/blog",
  },
  {
    title: "About us",
    desc: "Know about our company.",
    url: "/about",
  },
];

const resourcesArray: ItemArrayProps[] = [
  {
    title: "Next Js",
    desc: "This is the framework, I've used to build this web app.",
    url: "https://nextjs.org",
  },
  {
    title: "Shadcn",
    desc: "This is the UI library/component library, I've used.",
    url: "https://ui.shadcn.com",
  },
  {
    title: "Tailwind css",
    desc: "This is th Css framework, I've used",
    url: "https://tailwindcss.com",
  },
  {
    title: "Radix UI",
    desc: "This is UI library that shadcn uses under the hood.",
    url: "https://www.radix-ui.com",
  },
  {
    title: "Lucide React",
    desc: "This is the icon library shadcn uses.",
    url: "https://lucide.dev",
  },
  {
    title: "Next Themes",
    desc: "This is the theme library, shadcn uses to enable it's light mode and darkmode functionality.",
    url: "https://github.com/pacocoursey/next-themes",
  },
];
interface StateProps {
  authenticated?: boolean;
  id?: string;
  message?: string;
}
const Navbar = () => {
  const [search, setSearch] = useState<string | undefined>();
  const router = useRouter();
  const [state, setState] = useState<StateProps | undefined>();
  const checkAuth = async () => {
    try {
      const data = await axios.get("/api/protected");
      setState(await { ...data.data.data });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <div className="flex justify-center">
      <div className="max-w-[88rem] fixed w-full bg-white dark:bg-gray-950 border-b py-2 lg:px-8 md:px-5 px-2 flex justify-between z-50">
        <div className="flex gap-5 items-center justify-between">
          <div className="mr-12">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <div className="lg:hidden md:flex hidden gap-5">
            <NavigationWrapper>
              <Resources />
              <More />
            </NavigationWrapper>
          </div>
          <div className="lg:flex items-center gap-5 md:hidden hidden">
            <NavigationWrapper>
              <Resources />
              <Company />
              <Link href="#">
                <Button variant="ghost">Tutorials</Button>
              </Link>
              <Link href="/pricing">
                <Button variant="ghost">Pricing</Button>
              </Link>
            </NavigationWrapper>
          </div>
        </div>
        <div className="flex gap-3.5 items-center">
          <div className="md:flex gap-3.5 items-center hidden">
            {state?.authenticated ? (
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:text-green-600"
                onClick={() => router.push("/dashboard")}
              >
                Dashboard
              </Button>
            ) : (
              <LoginLink>
                <Button variant="outline">Login</Button>
              </LoginLink>
            )}
          </div>
          {/* Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon">
                <Search />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Search</DialogTitle>
                <DialogDescription>
                  Search for you required resources...
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="link" className="sr-only">
                    Link
                  </Label>
                  <Input
                    id="link"
                    placeholder="best ui library..."
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                  />
                </div>
                <Button type="submit" size="sm" className="px-3">
                  <span className="sr-only">Search</span>
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <DialogFooter className="sm:justify-start"></DialogFooter>
            </DialogContent>
          </Dialog>
          {/* Dialog */}

          <ThemeButton />
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <AlignJustify />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <ScrollArea className="w-full h-full scroll-p-5 scroll-m-5">
                  <SheetHeader className="mt-5">
                    <SheetTitle className="flex gap-5">
                      <Logo />
                    </SheetTitle>
                  </SheetHeader>
                  <SheetDescription>
                    <AccordionWraper>
                      <SmallResources />
                      <SmallCompany />
                      <div className="gap-5 my-5 flex flex-col">
                        <Link href="#">
                          <Button variant="ghost" className="w-full">
                            <div className="w-full text-left">Tutorials</div>
                          </Button>
                        </Link>
                        <Link href="/pricing">
                          <Button variant="ghost" className="w-full">
                            <div className="w-full text-left">Pricing</div>
                          </Button>
                        </Link>
                      </div>
                    </AccordionWraper>
                  </SheetDescription>
                  <ScrollBar className="w-0 scroll-p-5 scroll-m-5" />
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavigationWrapper = ({ children }: { children: React.ReactNode }) => {
  return <NavigationMenu>{children}</NavigationMenu>;
};

const AccordionWraper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mr-2">
      <Accordion type="single" collapsible>
        {children}
      </Accordion>
    </div>
  );
};

const AboutFry = () => {
  return (
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>About UIFRY?</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="grid grid-cols-2 p-4 w-[32rem]">
            {["", "", "", "", "", ""].map((_, i) => {
              return (
                <NavigationMenuLink key={i}>
                  <div
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    )}
                  >
                    <div className="text-sm font-medium leading-none">
                      Title
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit...
                    </p>
                  </div>
                </NavigationMenuLink>
              );
            })}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  );
};

const Features = () => {
  return (
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Features</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="grid grid-cols-2 p-4 w-[32rem]">
            {["", "", "", "", "", ""].map((_, i) => {
              return (
                <NavigationMenuLink key={i}>
                  <div
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    )}
                  >
                    <div className="text-sm font-medium leading-none">
                      Title
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit...
                    </p>
                  </div>
                </NavigationMenuLink>
              );
            })}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  );
};

const Resources = () => {
  return (
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="grid grid-cols-2 p-4 w-[32rem]">
            {resourcesArray.map((data, i) => {
              return (
                <NavigationMenuLink
                  key={i}
                  href={data.url}
                  target={
                    data.url.startsWith("https://") ? "_blank" : undefined
                  }
                >
                  <div
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    )}
                  >
                    <div className="text-sm font-medium leading-none">
                      {data.title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      {data.desc}
                    </p>
                  </div>
                </NavigationMenuLink>
              );
            })}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  );
};

const Company = () => {
  return (
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Company</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="grid grid-cols-2 p-4 w-[32rem]">
            {companyArray.map((data, i) => {
              return (
                <NavigationMenuLink
                  key={i}
                  href={data.url}
                  target={
                    data.url.startsWith("https://") ? "_blank" : undefined
                  }
                >
                  <div
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    )}
                  >
                    <div className="text-sm font-medium leading-none">
                      {data.title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      {data.desc}
                    </p>
                  </div>
                </NavigationMenuLink>
              );
            })}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  );
};

const More = () => {
  return (
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>More</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="grid grid-cols-2 p-4 w-[32rem]">
            {[
              ...resourcesArray,
              ...companyArray,
              { title: "Pricing", url: "/pricing" },
            ].map((data, i) => {
              return (
                <Link
                  key={i}
                  href={data.url}
                  target={
                    data.url.startsWith("https://") ? "_blank" : undefined
                  }
                >
                  <div
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    )}
                  >
                    <div className="text-sm font-medium leading-none">
                      {data.title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      {data?.desc ?? ""}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  );
};

const SmallAboutFry = () => {
  return (
    <AccordionItem value="item-1">
      <AccordionTrigger>About UIFRY?</AccordionTrigger>
      <AccordionContent>
        <div className="grid grid-cols-1">
          {["", "", "", "", "", ""].map((_, i) => {
            return (
              <div
                key={i}
                className={cn(
                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                )}
              >
                <div className="text-sm font-medium leading-none">Title</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </p>
              </div>
            );
          })}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

const SmallFeatures = () => {
  return (
    <AccordionItem value="item-2">
      <AccordionTrigger>Features</AccordionTrigger>
      <AccordionContent>
        <div className="grid grid-cols-1">
          {["", "", "", "", "", ""].map((_, i) => {
            return (
              <div
                key={i}
                className={cn(
                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                )}
              >
                <div className="text-sm font-medium leading-none">Title</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </p>
              </div>
            );
          })}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

const SmallResources = () => {
  return (
    <AccordionItem value="item-3">
      <AccordionTrigger>Resources</AccordionTrigger>
      <AccordionContent>
        <div className="grid grid-cols-1">
          {resourcesArray.map((data, i) => {
            return (
              <Link
                href={data.url}
                target={data.url.startsWith("https://") ? "_blank" : undefined}
                key={i}
                className={cn(
                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                )}
              >
                <div className="text-sm font-medium leading-none">
                  {data.title}
                </div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  {data.desc}
                </p>
              </Link>
            );
          })}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

const SmallCompany = () => {
  return (
    <AccordionItem value="item-4">
      <AccordionTrigger>Company</AccordionTrigger>
      <AccordionContent>
        <div className="grid grid-cols-1">
          {companyArray.map((data, i) => {
            return (
              <Link
                href={data.url}
                target={data.url.startsWith("https://") ? "_blank" : undefined}
                key={i}
                className={cn(
                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                )}
              >
                <div className="text-sm font-medium leading-none">
                  {data.title}
                </div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  {data.desc}
                </p>
              </Link>
            );
          })}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default Navbar;
