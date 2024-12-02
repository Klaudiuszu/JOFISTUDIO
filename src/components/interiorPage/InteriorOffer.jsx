"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-translations/hooks";
import { namespaces } from "../../../translations.config";

const InteriorOffer = () => {

  const { tString } = useTranslation(namespaces.common);

  return (
<section
  id="interior"
  className="flex justify-center align-center lg:pt-16 max-w-screen-2xl relative"
>
  <motion.div
    whileInView={{ opacity: [0, 1] }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex flex-col lg:grid lg:grid-cols-2 items-center pl-4 pr-4 lg:pl-16 xl:pt-[200px] xl:pb-[150px] text-[#171717] pt-[82px] pb-[82px] gap-[18px]">
      {/* Left Column */}
      <div className="justify-start md:text-5xl text-4xl items-center gap-[18px] lg:items-start text-center lg:text-left flex flex-col h-full lg:h-[500px]">
        <h5 className="font-PPHatton-medium text-[32px] xl:text-[39px] xl:h-[80px] md:w-[650px]">
          {tString('interiorOffer.header1')}
        </h5>
        <div className="text-center lg:text-left flex flex-col gap-4 lg:gap-6">
          <ul className="flex flex-col gap-4 text-left max-w-full text-[16px] md:text-[24px] px-12 xl:px-0 leading-normal">
            <li className="flex gap-4 items-start">
              <div className="relative  min-w-2 Rectangle-1469 top-[8px]"></div>
              <a className="mundial-Light-font">{tString('interiorOffer.dot1a')}</a>
            </li>
            <li className="flex gap-4 items-start">
              <div className="relative leading-normal min-w-2 Rectangle-1469 top-[8px]"></div>
              <a className="mundial-Light-font">{tString('interiorOffer.dot1b')}</a>
            </li>
            <li className="flex gap-4 items-start">
              <div className="relative Rectangle-1469 min-w-2 top-[8px]"></div>
              <a className="mundial-Light-font">{tString('interiorOffer.dot1c')}</a>
            </li>
            <li className="flex gap-4 items-start">
              <div className="relative Rectangle-1469 min-w-2 top-[8px]"></div>
              <a className="mundial-Light-font">{tString('interiorOffer.dot1d')}</a>
            </li>
          </ul>
          <h4 className="mundial-Light-font lg:px-0 sm:px-16 md:text-[24px] text-base text-left xl:w-[600px]">
            {tString('interiorOffer.info1')}
          </h4>
        </div>
      </div>
      {/* Right Column */}
      <div className="justify-start md:text-5xl text-4xl items-center gap-[18px] lg:items-start text-center lg:text-left flex flex-col h-full lg:h-[500px]">
        <h5 className="font-PPHatton-medium text-[32px] xl:text-[39px] xl:h-[80px] max-w-full">
          {tString('interiorOffer.header2')}
        </h5>
        <div className="text-center lg:text-left flex flex-col gap-4 lg:gap-6">
          <ul className="flex flex-col gap-4 text-left max-w-full text-[16px] md:text-[24px] px-12 xl:px-0 leading-normal">
            <li className="flex gap-4 items-start">
              <div className="relative bottom-1 min-w-2 Rectangle-1469 top-[8px]"></div>
              <a className="mundial-Light-font">{tString('interiorOffer.dot2a')}</a>
            </li>
            <li className="flex gap-4 items-start">
              <div className="relative leading-[28px] min-w-2 Rectangle-1469 top-[8px]"></div>
              <a className="mundial-Light-font">{tString('interiorOffer.dot2b')}</a>
            </li>
            <li className="flex gap-4 items-start">
              <div className="relative Rectangle-1469 min-w-2 top-[8px]"></div>
              <a className="mundial-Light-font">{tString('interiorOffer.dot2c')}</a>
            </li>
            <li className="flex gap-4 items-start">
              <div className="relative Rectangle-1469 min-w-2 top-[8px]"></div>
              <a className="mundial-Light-font">{tString('interiorOffer.dot2d')}</a>
            </li>
            <li className="flex gap-4 items-start">
              <div className="relative Rectangle-1469 min-w-2 top-[8px]"></div>
              <a className="mundial-Light-font">{tString('interiorOffer.dot2e')}</a>
            </li>
            <li className="flex gap-4 items-start">
              <div className="relative Rectangle-1469 min-w-2 top-[8px]"></div>
              <a className="mundial-Light-font">{tString('interiorOffer.dot2f')}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </motion.div>
</section>

  );
};

export default InteriorOffer