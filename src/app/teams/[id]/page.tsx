import { redirect } from "next/navigation";

type Props = {
  params: {
    id: string;
  }
}

const Page = ({ params }: Props) => {
  return redirect(`/teams/${params.id}/reminders`);
};

export default Page;
