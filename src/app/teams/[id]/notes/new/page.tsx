import { CreateNote } from "../create-note";

type Props = {
  params: {
    id: string;
  }
}

const Page = (props: Props) => {
  return <CreateNote params={props.params} />;
};

export default Page;