"use client";

import { useEffect } from "react";
import { Note } from "@/types";
import Link from "next/link";
import { FileText } from "lucide-react";
import { useStore } from "@/stores/notes-store";

type Props = {
  params: {
    teamId: string;
  },
  notes: Note [];
};
export const NotesList = ({ notes, params }: Props) => {
  const store = useStore();

  useEffect(() => {
    store.setNotes(notes);
  }, [notes]);

  return (
    <div className="flex-col flex">
      {notes.map((note: Note) => (
        <Link
          key={note.id}
          className="flex-col flex rounded-md bg-background px-4 py-2"
          href={`/teams/${params.teamId}/notes/${note.id}`}
        >
          <div className="flex items-start space-x-4">
            <FileText className="h-5 w-5 mt-1" />
            <div className="space-y-1">
              <p className="font-medium">{note.title}</p>
              <p className="text-sm text-muted-foreground">
                Owned by: {note.author.firstName} {note.author.lastName}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
