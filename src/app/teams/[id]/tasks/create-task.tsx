"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import SubmitButton from "@/components/submit-button";
import { Form } from "@/components/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { createTask } from "@/api/tasks/create-task";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectValue
} from "@/components/ui/select";
import { DateInput } from "@/components/date-input";

import { useActionState, useState } from "react";
import { PrioritySelector } from "@/components/ui/priority-selector";

type Props = {
  params: {
    id: string;
  }
};

export const CreateTask = (props: Props) => {
  const [state, submit, isLoading] = useActionState(createTask, null);

  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline" className="h-8">New task</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Task</DialogTitle>
          <DialogDescription>
            Create a new task for this team
          </DialogDescription>
        </DialogHeader>
        <Form action={submit}>
          {state}
          <Form.Field>
            <Input id="title" name="title" type="text" placeholder="Task title" />
          </Form.Field>
          <Form.Field>
            <Input id="description" name="description" type="text" placeholder="Task description" />
          </Form.Field>
          <Form.Field>
            <Label htmlFor="dueDate">Due Date:</Label>
            <DateInput name="dueDate" />
          </Form.Field>
          <Form.Field>
            <PrioritySelector name="priority" />
          </Form.Field>
          <input type="hidden" name="teamId" value={props.params.id} />

          {/*<div className="flex items-center space-x-2">*/}
          {/*  <Switch id="repeat" defaultValue="true" />*/}
          {/*  <Label htmlFor="repeat">Frequency</Label>*/}
          {/*</div>*/}

          {/*<div className="flex gap-4">*/}
          {/*  <div className="">*/}
          {/*    <Select>*/}
          {/*      <SelectTrigger className="w-[180px]">*/}
          {/*        <SelectValue placeholder="Frequency" />*/}
          {/*      </SelectTrigger>*/}
          {/*      <SelectContent>*/}
          {/*        <SelectGroup>*/}
          {/*          <SelectLabel>Frequency</SelectLabel>*/}
          {/*          <SelectItem value="DAILY">Daily</SelectItem>*/}
          {/*          <SelectItem value="WEEKLY">Weekly</SelectItem>*/}
          {/*          <SelectItem value="MONTHLY">Monthly</SelectItem>*/}
          {/*          <SelectItem value="YEARLY">Yearly</SelectItem>*/}
          {/*        </SelectGroup>*/}
          {/*      </SelectContent>*/}
          {/*    </Select>*/}
          {/*  </div>*/}
          {/*  <div className="flex space-x-2">*/}
          {/*    <span>Every</span>*/}
          {/*    <Input type="number" id="interval" name="interval" value="1" min="1" />*/}
          {/*    <span> day(s)</span>*/}
          {/*  </div>*/}
          {/*</div>*/}


          {/*<label htmlFor="interval">Interval:</label>*/}
          {/*<input type="number" id="interval" name="interval" value="1" min="1" required />*/}

          {/*<label htmlFor="startDate">Start Date:</label>*/}
          {/*<input type="date" id="startDate" name="startDate" required />*/}
          <Form.Field>
            <SubmitButton>Create task</SubmitButton>
          </Form.Field>
        </Form>
        <DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};


