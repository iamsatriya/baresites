"use client";
import { motion } from "framer-motion";
import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

export default function CATButton(
  props: ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <motion.button
      {...props}
      className={clsx(
        "px-4 py-2 bg-gradient-to-r from-primary to-cyan-800 rounded",
        props.className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, delay: 1.2 } }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {props.children}
    </motion.button>
  );
}
