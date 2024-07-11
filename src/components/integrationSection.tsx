import React from "react";
import { Button } from "./ui/button";
import { Card, CardHeader } from "./ui/card";
import Image from "next/image";
import Amazonwebservices from "./icons/amazonwebservices";
import Figma from "./icons/figma";
import Firebase from "./icons/firebase";
import Github from "./icons/github";
import Netlify from "./icons/netlify";
import Notion from "./icons/notion";
import Railway from "./icons/railway";
import Slack from "./icons/slack";
import Supabase from "./icons/supabase";
import Vercel from "./icons/vercel";
const IntegrationSection = () => {
  const icons = [
    Amazonwebservices,
    Figma,
    Firebase,
    Github,
    Netlify,
    Notion,
    Railway,
    Slack,
    Supabase,
    Vercel,
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
      <div className="relative overflow-hidden">
        <Image
          className="absolute -right-10 -z-10 top-[5%] w-36"
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
                {icons.slice(0, 4).map((Icon, i) => {
                  return (
                    <BoxCards key={i}>
                      <Icon />
                    </BoxCards>
                  );
                })}
              </div>
              <div className="grid grid-cols-4 gap-5 md:max-w-xl md:mr-10">
                {icons.slice(5, 9).map((Icon, i) => {
                  return (
                    <BoxCards key={i}>
                      <Icon />
                    </BoxCards>
                  );
                })}
              </div>
            </div>
            <div className="md:hidden grid grid-cols-3 gap-5 md:max-w-xl md:ml-10">
              {icons.map((Icon, i) => {
                return (
                  <BoxCards key={i}>
                    <Icon />
                  </BoxCards>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BoxCards = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card className="w-20 h-20 relative overflow-hidden">
      <CardHeader className="w-full h-full">{children}</CardHeader>
    </Card>
  );
};

export default IntegrationSection;
