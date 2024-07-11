import React from "react";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const ReviewSection = () => {
  return (
    <div className="container py-16">
      <div className="flex justify-between items-start gap-5 md:flex-row flex-col">
        <div className="flex gap-5 flex-col">
          <h2 className="max-w-96 font-semibold text-3xl">
            Here&apos;s what our{" "}
            <span className="text-green-600">customer</span> has to say
          </h2>
          <div className="">
            <Button
              variant="outline"
              className="rounded-full text-green-600 hover:text-green-600"
            >
              Read customer stories
            </Button>
          </div>
        </div>
        <div className="flex gap-5 max-w-80 items-center">
          <Sparkles size={30} />
          <p className="w-full line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            iure.
          </p>
        </div>
      </div>
      <div className="py-10 grid md:grid-cols-2 grid-cols-1 gap-5">
        {Array.from({ length: 4 }).map((_, i) => {
          return (
            <Card key={i}>
              <CardHeader>
                <CardTitle>Lorem ipsum dolor sit amet consectetur.</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                  dignissimos sed quos voluptas consequuntur necessitatibus
                  dicta pariatur quod ipsum esse.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <div className="flex gap-5 items-center">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="">
                    <p className="font-medium">Abraham Nasir</p>
                    <p className="text-sm text-slate-500">
                      New Holland, Netherlands
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewSection;
