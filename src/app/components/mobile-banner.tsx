"use client";
import { motion, Variants } from "framer-motion";

export default function MobileBanner() {
  const parentsVariant: Variants = {
    init: {
      opacity: 0,
      y: 60,
    },
    end: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 10,
        staggerChildren: 0.3,
      },
    },
  };

  const child1: Variants = {
    init: {
      opacity: 0,
      y: 0,
    },
    end: {
      opacity: 1,
      y: -60,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 10,
      },
    },
  };

  const child3: Variants = {
    init: {
      opacity: 0,
      y: 120,
    },
    end: {
      opacity: 0.5,
      y: 60,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 10,
      },
    },
  };

  return (
    <motion.div initial="init" animate="end" variants={parentsVariant}>
      <motion.h1
        className="font-extrabold text-5xl text-transparent text-stroke-white opacity-50 relative -z-20"
        variants={child3}
      >
        BAREVISUAL
      </motion.h1>
      <motion.h1
        className="font-extrabold text-5xl text-stroke-white text-transparent relative -z-10"
        variants={parentsVariant}
      >
        BAREVISUAL
      </motion.h1>
      <motion.h1 className="font-extrabold text-5xl" variants={child1}>
        BAREVISUAL
      </motion.h1>
    </motion.div>
  );
}
