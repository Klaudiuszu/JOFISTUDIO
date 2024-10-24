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
      className="flex justify-center items-center 3xl:pt-[607px]  pt-24 lg:pt-16 lg:pb-[64px] max-w-screen-2xl xl:max-w-sc relative bg-cover h-auto bg-center lg:mt-[149px] xl:bg-[url('/images/architekturaBG.png')] bg-no-repeat"
    >
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <div className="flex flex-col lg:grid xl:grid-cols-6 items-center lg:mx-[64px] 3xl:ml-0 pt-8 pb-8">
          <div className="col-span-3 bg-[#EEECEC] flex md:w-[770px] flex-col items-center py-8 px-4 2xl:pt-[76px] lg:px-16 2xl:pb-[64px] text-[#171717]">
            <div className="flex flex-col justify-between md:text-5xl text-4xl items-center gap-4 lg:items-start text-center lg:text-left w-full lg:gap-[30px]">
              <h5 className="text-left uppercase md:text-custom-85 mb-2 hatton-light">{tString('realisation.header')}</h5>
              <h4
                style={{ lineHeight: "normal" }}
                className=" text-center sm:px-16 md:text-[24px] text-base lg:text-left lg:px-0 2xl:pb-[30px]"
              >
                {tString('realisation.info')}
              </h4>
              <a href="https://www.instagram.com/jofi_studio" className="flex items-center justify-center py-2 uppercase text-black rounded-md text-[22px] font-thin underline underline-offset-8">
                <img src="/images/inst.png" alt="Instagram" className="w-8 mr-2" />
                {tString('realisation.button')}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default RealisationSection;
