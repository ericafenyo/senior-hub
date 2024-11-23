import React from "react";
import { Form } from "@/components/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RichTextarea } from "@/components/rich-textarea";
import SubmitButton from "@/components/submit-button";
import { createNote } from "@/api/notes/create-notes";

type Props = {
  params: {
    teamId: string;
  }
};

export const CreateNote = ({ params }: Props) => {
  return (
    <main className="w-full">
      <div className="mx-6 py-6 text-2xl">
        <h2>Notes</h2>
      </div>
      <div className="bg-background rounded mx-6 p-4">
        <div className="flex items-center justify-between">
          <Form className="w-full" action={createNote}>
            <Form.Field>
              <Label />
              <Input name="title" />
            </Form.Field>
            <Form.Field>
              <Label />
              <RichTextarea name="content" />
            </Form.Field>
            <Form.Field>
              <SubmitButton>Create task</SubmitButton>
            </Form.Field>
            <input type="hidden" name="teamId" value={params.teamId} />
          </Form>
        </div>
      </div>
    </main>
  );
};
