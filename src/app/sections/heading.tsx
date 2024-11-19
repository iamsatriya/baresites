"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import MainBanner from "../components/main-banner";
import MobileBanner from "../components/mobile-banner";
import CATButton from "../components/cat-button";

export default function Heading() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["100%", "-50%"]);
  return (
    <React.Fragment>
      <div className="flex-1 hidden md:grid place-items-center">
        <MainBanner />
      </div>
      <div className="flex justify-center md:hidden">
        <MobileBanner />
      </div>
      <motion.p
        initial={{ y: 60, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 10,
            delay: 1.2,
          },
        }}
      >
        <strong>Barevisual</strong> specializes in capturing the energy and grit
        of running events, from the powerful strides to the focused
        determination of every athlete. Our imagery highlights the thrill of the
        race, the pursuit of personal bests, and the journey each runner
        undertakes. We bring the spirit of running to life, making every moment
        unforgettable.
      </motion.p>
      <div className="flex justify-center my-4">
        <CATButton>Get in touch!</CATButton>
      </div>
      {/* <div className="flex justify-end relative overflow-x-hidden">
        <motion.div
          className="flex justify-end relative -right-40 space-x-4 overflow-x-scroll no-scrollbar"
          // initial={{ x: 1000, opacity: 0 }}
          // animate={{
          //   x: 600,
          //   opacity: 1,
          //   transition: {
          //     type: "spring",
          //     damping: 10,
          //     transition: 0.5,
          //     delay: 1.2,
          //   },
          // }}
        >
          <div className="w-52 h-80 bg-red-500" />
          <div className="w-52 h-80 bg-orange-500" />
          <div className="w-52 h-80 bg-yellow-500" />
          <div className="w-52 h-80 bg-cyan-500" />
        </motion.div>
      </div> */}
      <div className="bg-gray-500 h-[500vh]" ref={targetRef}>
        <div className="sticky h-[100vh] top-0 flex items-center justify-start overflow-clip">
          <motion.div className="flex gap-x-4 px-4" style={{ x }}>
            <div className="w-60 h-80 bg-red-500" />
            <div className="w-60 h-80 bg-orange-500" />
            <div className="w-60 h-80 bg-yellow-500" />
            <div className="w-60 h-80 bg-cyan-500" />
            <div className="w-60 h-80 bg-red-500" />
            <div className="w-60 h-80 bg-orange-500" />
            <div className="w-60 h-80 bg-yellow-500" />
            <div className="w-60 h-80 bg-cyan-500" />
          </motion.div>
        </div>
      </div>
    </React.Fragment>
  );
}
