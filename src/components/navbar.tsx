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
  navigationMenuTriggerStyle,
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
import { useTheme } from "next-themes";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[88rem] fixed w-full bg-white dark:bg-gray-950 border-b py-2 lg:px-8 md:px-5 px-2 flex justify-between z-50">
        <div className="flex gap-5 items-center justify-between">
          <div className="mr-12">
            <Logo />
          </div>
          <div className="lg:hidden md:flex hidden gap-5">
            <NavigationWrapper>
              <AboutFry />
              <More />
            </NavigationWrapper>
          </div>
          <div className="lg:flex items-center gap-5 md:hidden hidden">
            <NavigationWrapper>
              <AboutFry />
              <Features />
              <Resources />
              <Company />
            </NavigationWrapper>
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
                <ScrollArea className="w-full h-full scroll-p-5 scroll-m-5">
                  <SheetHeader className="mt-5">
                    <SheetTitle className="flex gap-5">
                      <Logo />
                    </SheetTitle>
                  </SheetHeader>
                  <SheetDescription>
                    <AccordionWraper>
                      <SmallAboutFry />
                      <SmallFeatures />
                      <SmallResources />
                      <SmallCompany />
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

const Company = () => {
  return (
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

const More = () => {
  return (
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

const SmallCompany = () => {
  return (
    <AccordionItem value="item-4">
      <AccordionTrigger>Company</AccordionTrigger>
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

const ThemeButton = () => {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() =>
        resolvedTheme === "dark" ? setTheme("light") : setTheme("dark")
      }
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 duration-200" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 duration-200" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
export default Navbar;
