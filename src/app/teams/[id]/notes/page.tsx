import { getNotes } from "@/api/notes/get-notes";
import { Note } from "@/types";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import Link from "next/link";

type Props = {
  params: {
    id: string;
  }
}

const Page = async ({ params }: Props) => {
  const notes = await getNotes(params.id);
  return (
    <div>
      <div>
        <Button asChild>
          <Link href={`/teams/${params.id}/notes/new`}>New note</Link>
        </Button>
      </div>
      <div className="flex-col flex">
        {notes.map((note: Note) => (
          <div key={note.id} className="flex-col flex rounded-md bg-background px-4 py-2">
            <div className="flex items-start space-x-4">
              <FileText className="h-5 w-5 mt-1"/>
              <div className="space-y-1">
                <p className="font-medium">{note.title}</p>
                <p className="text-sm text-muted-foreground">
                  Owned by: {note.author.firstName} {note.author.lastName}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>);
};

export default Page;
