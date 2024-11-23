"use client";

import React, { useState, useEffect } from "react";

import { RichTextarea } from "@/components/rich-textarea";
import { Button } from "@/components/ui/button";
import { deleteNote } from "@/api/notes/delete-note";
import { updateNote } from "@/api/notes/update-note";
import { Input } from "@/components/ui/input";
import { useParams } from "next/navigation";
import { Note } from "@/types";

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

  return (
    <div>
      <div className="flex space-x-2">
        <Button onClick={() => setEditable(!editable)}>Toggle Editable</Button>
      </div>
      <Input defaultValue={note.title} readOnly={!editable} />
      <RichTextarea value={note.content} editable={editable} autoFocus={true} />
      <input type="text" hidden defaultValue={teamId} name="teamId" />
      <input type="text" hidden defaultValue={noteId} name="noteId" />
    </div>
  );
};

export default NoteDetails;
