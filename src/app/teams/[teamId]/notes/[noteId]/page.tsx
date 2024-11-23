import NoteDetails from "./note-details";
import { getNoteById } from "@/api/notes/get-note-by-id";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { deleteNote } from "@/api/notes/delete-note";

type Props = {
  params: Promise<{
    teamId: string;
    noteId: string;
  }>
}

const NoteDetailsPages = async (props: Props) => {
  const params = await props.params;
  const note = await getNoteById(params);

  return (
    <div>
      <div>
        <form action={deleteNote}>
          <Button>
            <Trash className="h-4, w-4" />
          </Button>
          <Button>Update</Button>
          <NoteDetails note={note} />
        </form>
      </div>
    </div>
  );
};

export default NoteDetailsPages;
