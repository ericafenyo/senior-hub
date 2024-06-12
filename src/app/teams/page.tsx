import Link from "next/link";

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {getUserTeams} from "@/api/teams/get-user-teams"
import {getUserId} from "@/core/auth"
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react"

const Teams = async () => {
  const userId = await getUserId();
  const teams = await getUserTeams(userId);

  return (
    <div className="container">
      <div className="space-y-4">
        <div className="flex justify-between">
          <h2>Teams</h2>
          <Button variant="secondary" size="sm" asChild>
            <Link href="/teams/new">
              <Plus size="20"/>
              Create team</Link>
          </Button>
        </div>
        {
          teams.map((team) => (
            <Link className="flex space-x-4" key={team.id} href={`teams/${team.id}`}>
              <Avatar className="rounded-sm">
                <AvatarImage src="https://github.com/shadcn.png"/>
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
  );
};

export default Teams;
