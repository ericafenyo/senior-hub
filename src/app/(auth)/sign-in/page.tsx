"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { authenticate } from "./actions";

const SignIn = () => {
  return (
    <section className="bg-background h-full">
      <div className="flex justify-center py-20">
        <Card className="w-[480px]">
          <div className="container">
            <CardHeader className="px-0">
              <CardTitle className="text-lg">Login</CardTitle>
            </CardHeader>

            <CardContent className="px-0">
              <form action={authenticate} className="space-y-6">
                <div className="space-y-2 w-full">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    defaultValue="pierre.martin@example.fr"
                    name="email"
                    autoComplete="off" placeholder="" />
                </div>
                <div className="space-y-2 w-full">
                  <Label htmlFor="password">Password</Label>
                  <Input defaultValue="6uV6vc7hn307kblg" name="password" autoComplete="off" placeholder="" />
                </div>

                <div>
                  <Button type="submit" className="w-full">
                    Submit
                  </Button>
                </div>
              </form>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  )
    ;
};

export default SignIn;
