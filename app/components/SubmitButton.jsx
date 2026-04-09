"use client";
import { Button } from "@heroui/react";
import { useFormStatus } from "react-dom";

export default function SubmitButton({
  label = "Submit",
  loadingLabel = "Adding...",
  color = "primary",
}) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      color={color}
      className="w-full"
      isDisabled={pending}
      isLoading={pending}
    >
      {pending ? loadingLabel : label}
    </Button>
  );
};