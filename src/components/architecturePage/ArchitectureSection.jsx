"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-translations/hooks";
import { namespaces } from "../../../translations.config";

const ArchitectureSection = () => {

  const { tString } = useTranslation(namespaces.common);

  return (
    <section
      id="architecture"
      className="flex justify-center align-center max-w-screen-2xl relative"
    >
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col lg:grid lg:grid-cols-2 items-center pt-[70px] pb-[82px] xl:py-[0px] lg:gap-72 gap-[18px] mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-1 items-center pl-4 pr-4 lg:pl-16 xl:pt-[200px] xl:pb-[50px] text-[#171717]">
            <div className="justify-start md:text-5xl text-4xl items-center gap-[18px] lg:items-start text-center mt-4 lg:text-left flex flex-col h-full lg:h-[500px]">
              <h5 className="font-PPHatton-medium text-[32px] xl:text-[39px] xl:h-[80px] md:w-[650px]">{tString('architecture.headerLeft')}</h5>
              <h4 style={{ lineHeight: "normal" }} className="mundial-Light-font lg:px-0 sm:px-16 md:text-[24px] text-base text-left xl:w-[600px]">
                {tString('architecture.infoLeft')}
              </h4>
            </div>
            <div className="flex flex-col gap-3">
            </div>
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-1 items-center pl-4 pr-4 lg:pl-16 xl:pt-[200px] xl:pb-[50px] text-[#171717]">
            <div className="justify-start md:text-5xl text-4xl items-center gap-[18px] lg:items-start text-center mt-4 lg:text-left flex flex-col h-full lg:h-[500px]">
              <h5 className="font-PPHatton-medium text-[32px] xl:text-[39px] xl:h-[80px]">{tString('architecture.headerRight')}</h5>
              <ul className="max-w-[650px] gap-4 flex flex-col lg:px-0 text-left xl:text-left sm:px-16 md:text-[24px] text-base lg:text-left">
                <li className="flex gap-4 items-center">
                  <div className="relative Rectangle-1469"></div>
                  <a className="mundial-Light-font">{tString('architecture.infoRightA')}</a>
                </li>
                <li className="flex gap-4 items-center">
                  <div className="relative Rectangle-1469"></div>
                  <a className="mundial-Light-font">{tString('architecture.infoRightB')}</a>
                </li>
                <li className="flex gap-4 items-center">
                  <div className="relative Rectangle-1469"></div>
                  <a className="mundial-Light-font">{tString('architecture.infoRightC')}</a>
                </li>
                <li className="flex gap-4 items-center">
                  <div className="relative Rectangle-1469"></div>
                  <a className="mundial-Light-font">{tString('architecture.infoRightD')}</a>
                </li>
                <li className="flex gap-4 items-center">
                  <div className="relative Rectangle-1469"></div>
                  <a className="mundial-Light-font">{tString('architecture.infoRightE')}</a>
                </li>
                <li className="flex gap-4 items-center">
                  <div className="relative Rectangle-1469"></div>
                  <a className="mundial-Light-font">{tString('architecture.infoRightF')}</a>
                </li>
                <li className="flex gap-4 items-center">
                  <div className="relative Rectangle-1469"></div>
                  <a className="mundial-Light-font">{tString('architecture.infoRightG')}</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default ArchitectureSection