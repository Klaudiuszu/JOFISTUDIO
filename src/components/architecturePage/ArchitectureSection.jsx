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
      className="flex justify-center align-center 3xl:pt-[200px] max-w-screen-2xl relative"
    >
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col lg:grid lg:grid-cols-2 items-center py-8 lg:gap-72 mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-1 items-center py-8 pl-4 pr-4 lg:pl-16 text-[#171717]">
            <div className="justify-start md:text-5xl text-4xl items-center gap-4 lg:items-start text-center mt-4 lg:text-left flex flex-col h-full lg:h-[500px]">
              <h5 className="hatton-regular h-[80px] text-4xl xl:text-[39px] mb-4 md:w-[650px]">{tString('architecture.headerLeft')}</h5>
              <h4 style={{ lineHeight: "normal" }} className="mundial-regular lg:px-0 text-center sm:px-16 md:text-[24px] text-base md:text-left xl:w-[600px]">
                {tString('architecture.infoLeft')}
              </h4>
            </div>
            <div className="flex flex-col gap-3">
            </div>
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-1 items-center py-8 pl-4 pr-4 lg:pl-16 text-[#171717]">
            <div className="justify-start md:text-5xl text-4xl items-center gap-4 lg:items-start text-center mt-4 lg:text-left flex flex-col h-full lg:h-[500px]">
              <h5 className="hatton-regular text-4xl h-[80px] xl:text-[39px] mb-4">{tString('architecture.headerRight')}</h5>
              <ul className="max-w-[650px] gap-4 flex flex-col lg:px-0 text-left xl:text-center sm:px-16 md:text-[24px] text-base lg:text-left">
                <li className="flex gap-4 items-center">
                  <div className="relative bottom-1 Rectangle-1469"></div>
                  <a className="mundial-regular">{tString('architecture.infoRightA')}</a>
                </li>
                <li className="flex gap-4 items-center">
                  <div className="relative Rectangle-1469"></div>
                  <a className="mundial-regular">{tString('architecture.infoRightB')}</a>
                </li>
                <li className="flex gap-4 items-center">
                  <div className="relative Rectangle-1469"></div>
                  <a className="mundial-regular">{tString('architecture.infoRightC')}</a>
                </li>
                <li className="flex gap-4 items-center">
                  <div className="relative Rectangle-1469"></div>
                  <a className="mundial-regular">{tString('architecture.infoRightD')}</a>
                </li>
                <li className="flex gap-4 items-center">
                  <div className="relative Rectangle-1469"></div>
                  <a className="mundial-regular">{tString('architecture.infoRightE')}</a>
                </li>
                <li className="flex gap-4 items-center">
                  <div className="relative Rectangle-1469"></div>
                  <a className="mundial-regular">{tString('architecture.infoRightF')}</a>
                </li>
                <li className="flex gap-4 items-center">
                  <div className="relative Rectangle-1469"></div>
                  <a className="mundial-regular">{tString('architecture.infoRightG')}</a>
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