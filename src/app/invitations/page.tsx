import { validateInvitation } from "@/api";

import { AcceptInvitation } from "@/app/invitations/accept-invitation";

type Props = {
  searchParams: Promise<{
    token: string;
  }>;
}

const InvitationPage = async (props: Props) => {
  const { token } = (await props.searchParams);

  try {
    const invitation = await validateInvitation(token);
    return (
      <div>
        <AcceptInvitation token={token} invitation={invitation} />
      </div>
    );
  } catch (error) {
    console.error(error);

    return (
      <div>
        <p>Invalid invitation</p>
      </div>
    );
  }
};

export default InvitationPage;
