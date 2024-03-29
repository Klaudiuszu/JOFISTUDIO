"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {

  return (
    <section className="lg:py-16 px-4 xl:px-16 hero-section max-w-screen-xxl">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="sm:text-lg mb-6 md:text-3xl hero-section-text">
        ”&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod&nbsp;”
        </p>
        <div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;