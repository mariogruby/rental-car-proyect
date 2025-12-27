/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, useAnimate } from "motion/react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

type ButtonState = "idle" | "loading" | "success" | "error";

export const Button = ({ className, children, ...props }: ButtonProps) => {
  const [scope, animate] = useAnimate();
  const [state, setState] = useState<ButtonState>("idle");

  /* ---------------- Animations ---------------- */

  const animateLoading = async () => {
    setState("loading");
    await animate(
      ".loader",
      { width: "20px", scale: 1, display: "block" },
      { duration: 0.2 }
    );
  };

  const animateSuccess = async () => {
    setState("success");

    await animate(
      ".loader",
      { width: "0px", scale: 0, display: "none" },
      { duration: 0.2 }
    );

    await animate(
      ".check",
      { width: "20px", scale: 1, display: "block" },
      { duration: 0.2 }
    );

    setTimeout(() => setState("idle"), 2000);
  };

  const animateError = async () => {
    setState("error");

    await animate(
      ".loader",
      { width: "0px", scale: 0, display: "none" },
      { duration: 0.2 }
    );

    await animate(
      ".error",
      { width: "20px", scale: 1, display: "block" },
      { duration: 0.2 }
    );

    setTimeout(() => setState("idle"), 2500);
  };

  /* ---------------- Click handler ---------------- */

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (props.disabled || state === "loading") return;

    try {
      await animateLoading();
      await props.onClick?.(event);
      await animateSuccess();
    } catch (error) {
      console.error(error);
      await animateError();
      throw error; // importante para forms
    }
  };

  /* ---------------- Cleanup props ---------------- */

  const {
    onClick,
    onDrag,
    onDragStart,
    onDragEnd,
    onAnimationStart,
    onAnimationEnd,
    disabled,
    ...buttonProps
  } = props;

  /* ---------------- Render ---------------- */

  return (
    <motion.button
      ref={scope}
      layout
      disabled={disabled || state === "loading"}
      onClick={handleClick}
      className={cn(
        "flex min-w-[120px] items-center justify-center gap-2 rounded-full px-4 py-2 font-medium text-white transition duration-200",
        state === "idle" && "bg-green-500 ring-offset-2 hover:ring-2 hover:ring-green-500 cursor-pointer",
        state === "loading" && "bg-green-500 opacity-80 cursor-wait",
        state === "success" && "bg-green-500",
        state === "error" && "bg-red-500",
        disabled && "ring-offset-0 hover:ring-0",
        className
      )}
      {...buttonProps}
    >
      <motion.div layout className="flex items-center gap-2">
        <Loader />
        <CheckIcon />
        <ErrorIcon />
        <motion.span layout>{children}</motion.span>
      </motion.div>
    </motion.button>
  );
};

/* ================= Icons ================= */

const Loader = () => (
  <motion.svg
    animate={{ rotate: [0, 360] }}
    initial={{ scale: 0, width: 0, display: "none" }}
    transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="loader text-white"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 3a9 9 0 1 0 9 9" />
  </motion.svg>
);

const CheckIcon = () => (
  <motion.svg
    initial={{ scale: 0, width: 0, display: "none" }}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="check text-white"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M9 12l2 2l4 -4" />
  </motion.svg>
);

const ErrorIcon = () => (
  <motion.svg
    initial={{ scale: 0, width: 0, display: "none" }}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="error text-white"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
    <path d="M5 19h14l-7 -14z" />
  </motion.svg>
);
