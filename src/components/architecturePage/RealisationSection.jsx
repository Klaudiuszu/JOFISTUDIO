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
        <div className="flex flex-col lg:grid xl:grid-cols-6 items-center lg:mx-[64px] 3xl:ml-0 pt-8 gap-1">
          <div className="xl:hidden col-span-3 flex justify-center w-full pb-[82px] xl:pb-[200px]">
            <img
              src="/images/architekturaBG.png"
              alt="Architecture Image"
              className="w-4/5 h-auto max-w-[500px] xl:max-w-[600px]"
            />
          </div>
          <div className="order-2 xl:order-1 col-span-3 bg-[#EEECEC] flex md:w-[800px] flex-col items-center py-[82px] px-6 xl:p-[64px] lg:px-16 text-[#171717] relative xl:top-[450px]">
            <div className="flex flex-col justify-between md:text-5xl text-4xl items-center md:gap-[64px] lg:items-start text-center gap-[18px] lg:text-left w-full">
              <h5
                className="text-left uppercase md:text-custom-85 2xl:mb-0 hatton-light 2xl:top-[10px] relative"
                style={{ letterSpacing: "-2px" }}
              >
                {tString("realisation.header")}
              </h5>
              <h4
                style={{ lineHeight: "normal" }}
                className="text-left sm:px-16 md:text-[24px] text-base lg:text-left lg:px-0 mundial-font 3xl:w-[600px]"
              >
                {tString("realisation.info")}
              </h4>
              <a
                href="https://www.instagram.com/jofi_studio"
                className="flex items-center justify-center uppercase text-black rounded-md text-[20px] font-thin underline underline-offset-8 mundial-Light"
                style={{fontSize: '20px !important'}}
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
