import { SectionHeader } from "@/components/section-header";
import { CircleUser } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Profile } from "@/app/account/profile/profile";

const Page = () => {
  return (
    <div>
      <SectionHeader title="Personal Information" icon={CircleUser} />
      <div className="container">
        <Profile />
      </div>
    </div>
  );
};

export default Page;