/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import { Button } from "@/components/ui/stateful-button";
import { cn } from "@/lib/utils";

interface SubmitEditCarButtonProps {
  onClick: () => Promise<any>;
  isValid: boolean;
  isLoading: boolean;
  children: React.ReactNode;
  className?: string;
}

export function SubmitButton({
  onClick,
  isValid,
  isLoading,
  children,
  className,
}: SubmitEditCarButtonProps) {
  return (
    <Button
      type="submit"
      onClick={onClick}
      disabled={!isValid || isLoading}
      className={cn(
        "w-full",
        !isValid && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {children}
    </Button>
  );
}
