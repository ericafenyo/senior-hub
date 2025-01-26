"use client";

import React, { useState, useEffect, useActionState } from "react";

import { RichTextarea } from "@/components/rich-textarea";
import { Button } from "@/components/ui/button";
import { deleteNote } from "@/api/notes/delete-note";
import { updateNote } from "@/api/notes/update-note";
import { Input } from "@/components/ui/input";
import { useParams } from "next/navigation";
import { Note } from "@/types";
import { Trash } from "lucide-react";

type Params = {
  teamId: string;
  noteId: string;
}

type Props = {
  note: Note;
}

const NoteDetails = ({ note }: Props) => {
  const [editable, setEditable] = useState(false);
  const { teamId, noteId } = useParams<Params>();

  // const [state, deleteNoteAction, isLoading] = useActionState(deleteNote, undefined);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
  }

  return (
    <form action={updateNote}>
      <div className="flex space-x-2">
        <Button type="button" onClick={() => setEditable(!editable)}>Toggle Editable</Button>
        <Button type="button" onClick={() => deleteNote({ noteId, teamId })}>
          <Trash />
        </Button>

      <Button type="submit">Update</Button>
      </div>

      <Input name="title" defaultValue={note.title} readOnly={!editable} />
      <RichTextarea name="content" value={note.content} />
      <input type="text" hidden defaultValue={teamId} name="teamId" />
      <input type="text" hidden defaultValue={noteId} name="noteId" />
    </form>
  );
};

export default NoteDetails;
