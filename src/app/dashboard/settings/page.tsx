"use client";
import { RootState } from "@/app/store";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Settings() {
  const user = useSelector((state: RootState) => state.reducer);
  const [frontUser, setFrontUser] = useState({
    id: "",
    kindeId: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const { toast } = useToast();
  const onSave = async () => {
    try {
      await axios.post(
        "/api/settings",
        {
          ...frontUser,
        },
        { withCredentials: true }
      );
      toast({
        title: "Data updated",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const InitialData = async () => {
    try {
      const data = await axios.get(`/api/settings?id=${user.id}`);

      setFrontUser(data.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    InitialData();
  }, []);

  return (
    <main className="space-x-5 space-y-5 m-5 py-14">
      <Card>
        <CardHeader>
          <CardTitle>Personal Details</CardTitle>
          <CardDescription>Update your personal information.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="fullname">First Name</Label>
                <Input
                  id="fullname"
                  placeholder="Your Full Name"
                  value={frontUser.firstName}
                  onChange={(e) =>
                    setFrontUser({ ...frontUser, firstName: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="fullname">Last Name</Label>
                <Input
                  id="fullname"
                  placeholder="Your Full Name"
                  value={frontUser.lastName}
                  onChange={(e) =>
                    setFrontUser({ ...frontUser, lastName: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Your email"
                  value={frontUser.email}
                  onChange={(e) =>
                    setFrontUser({ ...frontUser, email: e.target.value })
                  }
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="border-t px-6 py-4 flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button onClick={onSave}>Save</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
