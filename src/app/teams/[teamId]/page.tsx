import { redirect } from "next/navigation";

type Props = {
  params: Promise<{
    teamId: string;
  }>
}

const Page = async (props: Props) => {
  const params = await props.params;
  return redirect(`/teams/${params.teamId}/reminders`);
};

export default Page;
