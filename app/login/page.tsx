"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { authenticate } from "./actions";

const LoginPage = () => {
  return (
    <div className="container">
      <div className="flex justify-center py-20">
        <Card className="w-[480px]">
          <CardHeader className="px-0">
            <CardTitle className="text-lg">Login</CardTitle>
          </CardHeader>

          <CardContent className="px-0">
            <form action={authenticate} className="space-y-6">
              <div className="space-y-2 w-full">
                <Label htmlFor="email">Email</Label>
                <Input name="email" autoComplete="off" placeholder="" value="mary.smith@yopmail.com" />
              </div>
              <div className="space-y-2 w-full">
                <Label htmlFor="password">Password</Label>
                <Input name="password" autoComplete="off" placeholder="" value="Passw0rd" />
              </div>

              <div>
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
