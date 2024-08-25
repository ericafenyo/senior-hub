import { capitalize } from "@/utilities";
import { getRoles, addTeamMember } from "@/api";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Props = {
  params: {
    id: string;
  }
}

const MemberListPage = async (props: Props) => {
  console.log(props);
  const roles = await getRoles();
  const { id } = props.params;

  return (
    <div>
      <div className="container">
        <div className="w-80 mx-auto">
          <h1>Members</h1>
          Add a member
          <form action={addTeamMember}>
            <label htmlFor="email">Enter your email address</label>
            <Input name="email" type="text" placeholder="Email Address" />
            <Label htmlFor="role">Select a role for the team member</Label>
            <Select name="role">
              <SelectTrigger>
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                {
                  roles.map(role => (<SelectItem value={role.name} key={role.id}>{capitalize(role.name)}</SelectItem>))
                }
              </SelectContent>
            </Select>
            <Input name="teamId" type="hidden" value={id} />
            <Button>Add</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MemberListPage;
