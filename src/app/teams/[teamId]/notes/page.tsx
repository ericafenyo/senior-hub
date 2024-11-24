import { getNotes } from "@/api/notes/get-notes";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NotesList } from "@/app/teams/[teamId]/notes/notes-list";

type Props = {
  params: Promise<{
    teamId: string;
  }>
}

const NotePage = async (props: Props) => {
  const params = await props.params;
  const notes = await getNotes(params.teamId);
  return (
    <div>
      <div>
        <Button asChild>
          <Link href={`/teams/${params.teamId}/notes/new`}>New note</Link>
        </Button>
      </div>
      <NotesList params={params} notes={notes} />
    </div>);
};

export default NotePage;
