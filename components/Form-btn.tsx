"use client";

import { useFormStatus } from "react-dom";

interface FromButtonProps {
  text: string;
}

export default function FormButton({ text }: FromButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="primary-btn 
        disabled:bg-neutral-400 
        disabled:cursor-not-allowed"
    >
      {pending ? "Loading..." : text}
    </button>
  );
}
