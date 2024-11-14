"use client";
import React from "react";
import { motion } from "framer-motion";

import MainBanner from "../components/main-banner";
import MobileBanner from "../components/mobile-banner";
import CATButton from "../components/cat-button";

export default function Heading() {
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
        className='max-w-3xl mx-auto'
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
    </React.Fragment>
  );
}
