import { motion } from "motion/react";
import Image from "next/image";

export const Logo = () => {
  return (
    <a
      href="/dashboard"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <Image src="/logo.svg" alt="Logo" width={30} height={30} priority />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Rental car
      </motion.span>
    </a>
  );
};

export const LogoIcon = () => {
  return (
    <a href="/dashboard" className="relative z-20 flex items-center py-1">
      <Image src="/logo.svg" alt="Logo" width={30} height={30} priority />
    </a>
  );
};
