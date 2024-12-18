"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-translations/hooks";
import { namespaces } from "../../translations.config";

const TextSection = () => {
  const { tString } = useTranslation(namespaces.common);

  return (
    <section className=" py-[50px] md:py-[82px] xl:py-[200px] max-w-screen-2xl mx-auto flex flex-col" id="about">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex justify-center"
      >
        <div className="flex flex-col	 lg:grid gap-8 lg:grid-cols-2 items-center md:pb-8 mb-0 px-6 lg:gap-16 lg:px-16 3xl:px-0">
          <div className="items-center about-me-section-wrapper text-[#171717] pt-[32px] md:pt-0">
            <div className="justify-center md:text-5xl text-4xl items-center lg:items-start text-center gap-4 mt-0 md:mt-4 lg:text-left flex flex-col h-full">
              <h2 style={{letterSpacing: '-2px'}} className="max-w-5x xl:w-[1000px] font-thin	leading-tight xl:leading-[87px] md:w-[700px] md:text-custom-85 mb-0 md:mb-4">
                {tString('section3.header')}
              </h2>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex justify-center"
      >
        <div className="flex flex-col	lg:mr-[62px] lg:grid gap-8 lg:grid-cols-1 items-center py-[18px] md:py-8 px-6 lg:gap-16 3xl:px-0 lg:pb-16 lg:pt-0">
          <div className="flex justify-center about-me-section-wrapper text-[#171717]">
            <h4 className="xl:px-0 max-w-4xl sm:px-16 md:text-[24px] text-left mundial-font 3xl:max-w-[960px]">
              {tString('section3.info')}
            </h4>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TextSection;
