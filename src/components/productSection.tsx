import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollBar, ScrollArea } from "./ui/scroll-area";
import Image from "next/image";
import Blob from "./blob";
const ProductSection = () => {
  const data: string[] = [
    "https://images.unsplash.com/photo-1714852575817-79e1e6ef27e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1719930222062-5e63c50077cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1681051346868-f25a92bbb0d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfDF8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaHxlbnwwfDF8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1680700308566-543a60569017?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHRlY2h8ZW58MHwxfDB8fHww",
    "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHRlY2h8ZW58MHwxfDB8fHww",
    "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHRlY2h8ZW58MHwxfDB8fHww",
  ];
  return (
    <div className="container py-16 relative">
      <div className="absolute top-10 md:-top-[30%] lg:-top-2/4 -scale-x-100 -left-28 md:-left-36 right-0 -z-10">
        <Blob />
      </div>
      <div className="flex justify-between items-start md:items-end gap-5 md:flex-row flex-col">
        <h2 className="max-w-96 font-semibold text-3xl">
          Choose from over 10+ cutting—edge products
        </h2>
        <Button variant="outline" className="rounded-full">
          See all products
        </Button>
      </div>
      <div className="flex justify-center">
        <ScrollArea className="bg-white dark:bg-slate-950 overflow-hidden mt-20 mb-14 lg:max-w-[90vw] md:max-w-[85vw] max-w-[82vw] h-full whitespace-nowrap rounded-md border">
          <div className="flex w-max space-x-4 p-4">
            {data.map((_, i) => (
              <Card key={i} className="shrink-0 w-64">
                <div className="overflow-hidden rounded-md">
                  <Image
                    src={_}
                    alt={`Photo`}
                    className="h-64 w-full object-cover"
                    width={300}
                    height={400}
                  />
                </div>
                <CardHeader className="max-w-64">
                  <CardTitle className="line-clamp-2 text-lg">
                    Lorem ipsum dolor sit.
                  </CardTitle>
                  <CardDescription className="line-clamp-2 flex flex-wrap">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum, esse.
                  </CardDescription>
                </CardHeader>
                {/* <figcaption className="pt-2 text-xs text-muted-foreground">
                  Photo by{" "}
                  <span className="font-semibold text-foreground">
                    Lorem, ipsum.
                  </span>
                </figcaption> */}
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
};

//  <ScrollArea className="">
{
  /* flex gap-5 overflow-x-scroll lg:max-w-[90vw] md:max-w-[85vw] max-w-[80vw] mt-10  rounded-md border space-x-2 space-y-2 p-2 */
}
//  <div className="flex gap-5 lg:max-w-[90vw] md:max-w-[85vw] max-w-[80vw] mt-10  rounded-md space-x-2 space-y-2 p-2">
//  {Array.from({ length: 10 }).map((_, i) => (
//       <Card className="w-56 h-96 min-w-56" key={i}>
//         <CardContent className="flex items-center justify-center p-6"></CardContent>
//       </Card>
//     ))}
//   </div>
//   <ScrollBar orientation="horizontal" />
// </ScrollArea>

export default ProductSection;
