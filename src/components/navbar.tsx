import Link from "next/link";
import { PackageOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { getAuthentication } from "@/core/auth";

const AuthenticationActions = () => {
  return (
    <div className=" flex justify-end gap-2">
      <Button variant="outline" className="h-9">
        <Link href={"/login"}>Login</Link>
      </Button>

      <Button className="h-9">
        <Link href={"/sign-up"}>Sign up</Link>
      </Button>
    </div>
  );
};

const Navbar = async () => {
  const { isAuthenticated } = await getAuthentication();

  return (
    <header className=" top-0 z-50 w-full bg-background border-b border-border/40 ">
      <div className="container">
        <div className="flex items-center gap-4 h-14">
          <div className="flex-1">
            <Link href="/public" className="flex items-center gap-2 mr-6">
              <PackageOpen className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">Senior hub</span>
            </Link>
          </div>

          {!isAuthenticated && <AuthenticationActions />}

          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
