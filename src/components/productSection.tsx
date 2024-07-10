import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollBar, ScrollArea } from "./ui/scroll-area";
const ProductSection = () => {
  return (
    <div className="container py-16">
      <div className="flex justify-between items-start md:items-end gap-5 md:flex-row flex-col">
        <h2 className="max-w-96 font-semibold text-3xl">
          Choose from over 10+ cutting—edge products
        </h2>
        <Button variant="outline" className="rounded-full">
          See all products
        </Button>
      </div>
      <div className="overflow-hidden flex justify-center">
        <div className="flex gap-5 overflow-x-scroll lg:max-w-[90vw] md:max-w-[85vw] max-w-[80vw] mt-10  rounded-md border space-x-2 space-y-2 p-2">
          {Array.from({ length: 10 }).map((_, index) => (
            <Card className="w-56 h-96 min-w-56">
              <CardContent className="flex items-center justify-center p-6"></CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
