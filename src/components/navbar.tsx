"use client";
import React from "react";
import Logo from "./logo";
import { Moon, Sun } from "lucide-react";
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

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { AlignJustify, Search } from "lucide-react";
import { useTheme } from "next-themes";
const Navbar = () => {
  return (
    <div className="fixed w-full bg-white dark:bg-gray-950 border-b py-2 lg:px-8 md:px-5 px-2 flex justify-between z-50">
      <div className="flex gap-5 items-center justify-between">
        <div className="mr-12">
          <Logo />
        </div>
        <div className="lg:hidden md:flex hidden gap-5">
          <AboutFry />
          <More />
        </div>
        <div className="lg:flex items-center gap-5 md:hidden hidden">
          <AboutFry />
          <Features />
          <Resources />
          <Company />
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <div className="md:flex gap-5 items-center hidden">
          <Button variant="outline">Get Demo</Button>
          <Button variant="ghost">Contact sales</Button>
        </div>
        <Button variant="ghost" size="icon">
          <Search />
        </Button>
        <ThemeButton />
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Button variant="outline" size="icon">
                <AlignJustify />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
              <ThemeButton />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

const AboutFry = () => {
  return (
    <NavigationMenu>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit...
                      </p>
                    </div>
                  </NavigationMenuLink>
                );
              })}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const Features = () => {
  return (
    <NavigationMenu>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit...
                      </p>
                    </div>
                  </NavigationMenuLink>
                );
              })}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const Resources = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit...
                      </p>
                    </div>
                  </NavigationMenuLink>
                );
              })}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const Company = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Company</NavigationMenuTrigger>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit...
                      </p>
                    </div>
                  </NavigationMenuLink>
                );
              })}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const More = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>More</NavigationMenuTrigger>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit...
                      </p>
                    </div>
                  </NavigationMenuLink>
                );
              })}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ThemeButton = () => {
  const { setTheme } = useTheme();
  return (
    <Button variant="outline" size="icon">
      <Sun
        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        onClick={() => setTheme("dark")}
      />
      <Moon
        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        onClick={() => setTheme("light")}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
export default Navbar;
