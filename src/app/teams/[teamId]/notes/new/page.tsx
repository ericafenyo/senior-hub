import { CreateNote } from "../create-note";

type Props = {
  params: Promise<{
    teamId: string;
  }>
}

const Page = async (props: Props) => {
  return <CreateNote params={(await props.params)} />;
};

export default Page;