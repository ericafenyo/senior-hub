"use client";

import { useFormState, useFormStatus } from "react-dom";
import { acceptInvitation } from "@/api";
import { Invitation } from "@/app/types";
import SubmitButton from "@/components/submit-button";

type Props = {
  invitation: Invitation;
  token: string;
}

export const AcceptInvitation = ({ token }: Props) => {
  const [state, formAction] = useFormState(acceptInvitation, undefined);
  const { pending } = useFormStatus();

  return (
    <div>
      <form action={formAction}>
        <p>You have been invited to join a team</p>
        <input type="hidden" name="token" value={token} />
        <SubmitButton>Accept</SubmitButton>
      </form>
    </div>
  );
};
