import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import Blob from "./blob";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const IntegrationSection = () => {
  const icons = [
    require("../../public/icons/amazonwebservices.svg"),
    require("../../public/icons/figma.svg"),
    require("../../public/icons/firebase.svg"),
    require("../../public/icons/github.svg"),
    require("../../public/icons/netlify.svg"),
    require("../../public/icons/notion.svg"),
    require("../../public/icons/railway.svg"),
    require("../../public/icons/slack.svg"),
    require("../../public/icons/supabase.svg"),
    require("../../public/icons/vercel.svg"),
  ];
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
        className="absolute right-10 -z-10 top-[5%] w-36"
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
          <div className="hidden md:flex flex-col gap-5 items-center justify-center">
            <div className="grid grid-cols-4 gap-5 md:max-w-xl md:ml-10">
              {icons.slice(0, 4).map((_, i) => {
                return <BoxCards key={i} icon={_} />;
              })}
            </div>
            <div className="grid grid-cols-4 gap-5 md:max-w-xl md:mr-10">
              {icons.slice(5, 9).map((_, i) => {
                return <BoxCards key={i} icon={_} />;
              })}
            </div>
          </div>
          <div className="md:hidden grid grid-cols-3 gap-5 md:max-w-xl md:ml-10">
            {icons.map((_, i) => {
              return <BoxCards key={i} icon={_} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const BoxCards = ({ icon }: { icon: string | StaticImport }) => {
  return (
    <Card className="w-20 h-20 relative overflow-hidden">
      <CardHeader className="w-full h-full">
        <Image
          src={icon}
          alt="integration apps"
          height={200}
          width={200}
          className="w-full h-full object-cover"
        />
      </CardHeader>
    </Card>
  );
};

export default IntegrationSection;
