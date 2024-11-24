import NoteDetails from "./note-details";
import { getNoteById } from "@/api/notes/get-note-by-id";

type Props = {
  params: Promise<{
    teamId: string;
    noteId: string;
  }>
}

const NoteDetailsPages = async (props: Props) => {
  const params = await props.params;
  const note = await getNoteById(params);

  return (<NoteDetails note={note} />);
};

export default NoteDetailsPages;
