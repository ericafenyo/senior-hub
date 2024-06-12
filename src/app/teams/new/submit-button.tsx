'use client';

import {useFormStatus} from "react-dom";
import {Button} from "@/components/ui/button";

const SubmitButton = () => {
  const {pending} = useFormStatus()
  return (
    <Button className="w-full" disabled={pending} type="submit">Create team</Button>
  );
}

export default SubmitButton;