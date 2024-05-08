"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { AuthStatus, UserRole, useSessionContext } from "../auth/session-context";
import { jwtDecode } from "jwt-decode";

import { Accounts } from "@senior-hub/network";

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: "mary.smith@yopmail.com",
      password: "Passw0rd",
    },
  });

  const router = useRouter();

  const session = useSessionContext();

  const submit: SubmitHandler<FormValues> = async (values: FormValues) => {
    const result = await Accounts.authenticate(values);
    if (result.succeeded) {
      const token = result.data?.accessToken;
      localStorage.setItem("access-token", token!);

      const decoded = jwtDecode(token!);
      const userId = decoded.sub ? decoded.sub.split("|")[1] : "";

      session.setStatus(AuthStatus.AUTHENTICATED);
      session.setUser({
        id: userId,
        role: UserRole.CARETAKER,
      });

      session.setTokens({
        accessToken: token!,
        refreshToken: "",
        expiresAt: decoded.exp,
      });

      router.push("/caretaker");
    }
  };

  return (
    <div className="container">
      <div className="flex justify-center py-20">
        <Card className="w-[480px]">
          <CardHeader className="px-0">
            <CardTitle className="text-lg">Login</CardTitle>
          </CardHeader>

          <CardContent className="px-0">
            <form onSubmit={handleSubmit(submit)} className="space-y-6">
              <div className="space-y-2 w-full">
                <Label htmlFor="email">Email</Label>
                <Input autoComplete="off" placeholder="" {...register("email")} />
              </div>
              <div className="space-y-2 w-full">
                <Label htmlFor="password">Password</Label>
                <Input autoComplete="off" placeholder="" {...register("password")} />
              </div>

              <div>
                <Button className="w-full">Submit</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
