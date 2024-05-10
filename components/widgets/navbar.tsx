import Link from "next/link";

import { Button } from "../ui/button";

import { PackageOpen } from "lucide-react";

const Navbar = () => {
  return (
    <header className=" top-0 z-50 w-full bg-background border-b border-border/40 ">
      <div className="container flex items-center h-14">
        <div>
          <Link href="/" className="flex  items-center space-x-2 mr-6">
            <PackageOpen className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">Senior hub</span>
          </Link>
        </div>
        <div className=" flex justify-end flex-1 space-x-2">
          <Button variant="outline" className="h-9">
            <Link href="/login">Login</Link>
          </Button>

          <Button className="h-9">
            <Link href="/signup">Sign up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
