"use server";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SubmitButton from "@/components/submit-button";
import { createTeam } from "@/api/teams";

const CreateTeam = async () => {
  return (
    <div>
      <div className="container">
        <div className="my-12">

          <div className="w-[480px] m-auto space-y-4">
            <h2>Create Team</h2>
            <form action={createTeam} className="space-y-4">
              <div>
                <Label>Name</Label>
                <Input name="name" />
              </div>

              <div>
                <Label>Description</Label>
                <Input name="description" />
              </div>
              <div>
                <SubmitButton className="w-full">Create team</SubmitButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTeam;
