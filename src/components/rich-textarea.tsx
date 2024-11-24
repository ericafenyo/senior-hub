"use client";

import React, { useState } from "react";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Toggle } from "@/components/ui/toggle";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code,
  Heading,
  TextQuote,
  List,
  ListOrdered,
  Table,
  Image,
  ListTodo,
  Paperclip, MoreVertical, Plus, Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

type CommandType = "bold" | "italic" | "underline" | "strikethrough";

type Command = {
  execute: () => void,
}

type EditorMenuItemProps = {
  execute: () => void;
  children: React.ReactNode;
  className: string | undefined;
}

const EditorMenuItem = ({ execute, children, className }: EditorMenuItemProps) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      className={className}
      onClick={(event) => {
        event.preventDefault();
        execute();
      }}>
      {children}
    </Button>
  );
};

type EditorMenuProps = {
  editor: Editor;
}

const EditorMenu = ({ editor }: EditorMenuProps) => {
  return (
    <div className="w-full flex items-center py-2">
      <EditorMenuItem
        execute={() => {
          editor.chain().toggleHeading({ level: 3 }).run();
        }}
        className={editor.isActive("heading") ? "" : ""}
      >
        <Heading className="h-4 w-4" />
      </EditorMenuItem>


      <EditorMenuItem
        execute={() => {
          editor.chain().toggleBold().run();
        }}
        className={editor.isActive("heading") ? "" : ""}
      >
        <Bold className="h-4 w-4" />
      </EditorMenuItem>

      <EditorMenuItem
        execute={() => {
          editor.chain().toggleItalic().run();
        }}
        className={editor.isActive("heading") ? "" : ""}
      >
        <Italic className="h-4 w-4" />
      </EditorMenuItem>

      <EditorMenuItem
        execute={() => {
          editor.chain().toggleItalic().run();
        }}
        className={editor.isActive("heading") ? "" : ""}
      >
        <Underline className="h-4 w-4" />
      </EditorMenuItem>

      <EditorMenuItem
        execute={() => {
          editor.chain().toggleCode().run();
        }}
        className={editor.isActive("heading") ? "" : ""}
      >
        <Code className="h-4 w-4" />
      </EditorMenuItem>

      <EditorMenuItem
        execute={() => {
          editor.chain().toggleBlockquote().run();
        }}
        className={editor.isActive("heading") ? "" : ""}
      >
        <TextQuote className="h-4 w-4" />
      </EditorMenuItem>

      <Separator orientation={"vertical"} />

      <EditorMenuItem
        execute={() => {
          editor.commands.toggleBulletList();
        }}
        className={editor.isActive("heading") ? "" : ""}
      >
        <List className="h-4 w-4" />
      </EditorMenuItem>

      <EditorMenuItem
        execute={() => {
          editor.commands.toggleOrderedList();
        }}
        className={editor.isActive("heading") ? "" : ""}
      >
        <ListOrdered className="h-4 w-4" />
      </EditorMenuItem>

      <EditorMenuItem
        execute={() => {
          // editor.commands.t();
        }}
        className={editor.isActive("heading") ? "" : ""}
      >
        <ListTodo className="h-4 w-4" />
      </EditorMenuItem>

      <Separator orientation={"vertical"} />

      <Toggle><Paperclip size={16} /></Toggle>

      <Toggle><Image size={16} /></Toggle>

      <Toggle><Plus size={16} /></Toggle>
    </div>
  );
};

type RichTextareaProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "value"> & {
  className?: string;
  editable?: boolean;
  value?: string | undefined;
}

export const RichTextarea = ({ className, editable, autoFocus, ...props }: RichTextareaProps) => {
  const [value, setValue] = useState<string>();

  const editor = useEditor({
    extensions: [StarterKit],
    editable: editable,
    autofocus: autoFocus,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: "typography max-w-none m-5 focus:outline-none"
      }
    },

    content: props.value,

    onUpdate: ({ editor }) => {
      setValue(editor.getHTML());
    }
  });

  if (!editor) {
    return null;
  }


  return (
    <div className={cn("bg-background border rounded-sm w-full", className)}>
      <div className="border-b border-b-border">
        <EditorMenu editor={editor} />
      </div>
      <EditorContent
        editor={editor}
        className="outline-0 w-full"
      />
      <input type="text" hidden {...props} value={value} defaultValue={props.value} />
    </div>
  );
};
