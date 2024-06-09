import Link from "next/link";

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {getUserTeams} from "@/api/teams/get-user-teams"
import {getUserId} from "@/core/auth"

const Teams = async () => {
  const userId = await getUserId();
  const teams = await getUserTeams(userId);

  return (
    <div className="container">
      <div className="space-y-4">
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
