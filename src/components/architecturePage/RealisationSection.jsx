"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-translations/hooks";
import { namespaces } from "../../../translations.config";

const RealisationSection = () => {
  const { tString } = useTranslation(namespaces.common);

  return (
    <section
      id="architecture"
      className="flex justify-center items-center pt-24 lg:pt-16 max-w-screen-2xl xl:max-w-sc relative h-auto lg:mt-[149px] xl:bg-[url('/images/architekturaBG.png')] bg-no-repeat bg-bottom 3xl:mt-[200px] bg-contain xl:h-[2000px]"
    >
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <div className="flex flex-col lg:grid xl:grid-cols-6 items-center lg:mx-[64px] 3xl:ml-0 pt-8 pb-8 gap-1">
          <div className="xl:hidden col-span-3 flex justify-center w-full">
            <img
              src="/images/architekturaBG.png"
              alt="Architecture Image"
              className="w-4/5 h-auto max-w-[500px] xl:max-w-[600px]"
            />
          </div>
          <div className="order-2 xl:order-1 col-span-3 bg-[#EEECEC] flex md:w-[800px] flex-col items-center py-8 px-4 lg:px-16 text-[#171717] relative xl:top-[450px]">
            <div className="flex flex-col justify-between md:text-5xl text-4xl items-center gap-4 lg:items-start text-center mt-4 lg:text-left w-full lg:h-[500px]">
              <h5
                className="text-left uppercase md:text-custom-85 mb-2 hatton-light"
                style={{ letterSpacing: "-2px" }}
              >
                {tString("realisation.header")}
              </h5>
              <h4
                style={{ lineHeight: "normal" }}
                className="text-center sm:px-16 md:text-[24px] text-base lg:text-left lg:px-0 2xl:pb-[30px] mundial-Light"
              >
                {tString("realisation.info")}
              </h4>
              <a
                href="https://www.instagram.com/jofi_studio"
                className="flex items-center justify-center py-2 uppercase text-black rounded-md text-[22px] font-thin underline underline-offset-8 mundial-Light"
              >
                {tString("realisation.button")}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default RealisationSection;
