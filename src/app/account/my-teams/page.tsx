import { SectionHeader } from "@/components/section-header";
import { Building } from "lucide-react";
import { TeamsTable } from "@/components/teams-table";
import { getMemberships } from "@/api/users/get-team-memberships";

const TeamsPage = async () => {
  const memberships = await getMemberships();
  console.log({ memberships });

  return (
    <>
      <SectionHeader title="My teams" icon={Building} />
      <div className="container">
        <TeamsTable memberships={memberships} />
      </div>
    </>
  );
};

export default TeamsPage;