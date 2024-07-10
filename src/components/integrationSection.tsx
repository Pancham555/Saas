import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import Blob from "./blob";

const IntegrationSection = () => {
  return (
    <div className="relative">
      <Image
        className="absolute left-0 right-0 -z-10 lg:-top-36 top-0 w-full"
        src={require("../../public/blob.svg")}
        loading="lazy"
        alt="Hero image"
        width={500}
        height={500}
        quality={100}
      />
      <Image
        className="absolute right-0 -z-10 top-[5%] w-36"
        src={require("../../public/switch.svg")}
        loading="lazy"
        alt="Hero image"
        width={500}
        height={500}
        quality={100}
      />
      <div className="container py-28">
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-4xl font-semibold text-center max-w-72">
            Most popular integration apps
          </h2>
          <Button variant="outline" className="rounded-full">
            See all apps
          </Button>
          <div className="flex flex-wrap gap-5 max-w-xl">
            {Array.from({ length: 10 }).map((_, i) => {
              return <BoxCards key={i} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const BoxCards = () => {
  return (
    <Card className="w-24 h-24 relative overflow-hidden p-2">
      <CardHeader></CardHeader>
      <CardContent>
        <Image
          src={require("../../public/vercel.svg")}
          alt="integration apps"
          height={80}
          width={80}
          className="w-20 h-20 absolute inset-1"
        />
      </CardContent>
    </Card>
  );
};

export default IntegrationSection;
