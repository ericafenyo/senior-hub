import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getUserTeams } from "@/api/teams/get-user-teams";
import { Button } from "@/components/ui/button";
import { Plus, Building } from "lucide-react";
import { SectionHeader } from "@/components/section-header";

const Teams = async () => {
  const teams = await getUserTeams();
  return (
    <section>
      <SectionHeader title="Teams" icon={Building} />
      <div className="space-y-4">
        <div className="container">
          <div className="flex justify-between">
            <Button variant="secondary" size="sm" asChild>
              <Link href="/teams/new">
                <Plus size="20" />
                Create team</Link>
            </Button>
          </div>
          {
            teams.map((team) => (
              <Link className="flex space-x-4" key={team.id} href={`teams/${team.id}`}>
                <Avatar className="rounded-sm">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>{team.name}</div>
              </Link>
            ))
          }
        </div>
        <div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
