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
    <div className="flex flex-col lg:grid lg:grid-cols-2 items-center mx-auto lg:pb-[200px] pb-[50px] lg:gap-20 px-4">
      {/* Left Column */}
      <div className="flex flex-col items-start text-[#171717] lg:pl-16">
        <h5 className="hatton-regular h-[80px] text-4xl xl:text-[39px] mb-4 max-w-full">
          {tString('interiorOffer.header1')}
        </h5>
        <div className="text-center lg:text-left flex flex-col gap-4 lg:gap-6">
          <ul className="flex flex-col gap-4 text-left max-w-full text-[24px]">
            <li className="flex gap-4 items-start">
              <div className="relative  min-w-2 Rectangle-1469 top-[12px]"></div>
              <a className="mundial-regular">{tString('interiorOffer.dot1a')}</a>
            </li>
            <li className="flex gap-4 items-start">
              <div className="relative leading-normal min-w-2 Rectangle-1469 top-[12px]"></div>
              <a className="mundial-regular">{tString('interiorOffer.dot1b')}</a>
            </li>
            <li className="flex gap-4 items-start">
              <div className="relative Rectangle-1469 min-w-2 top-[12px]"></div>
              <a className="mundial-regular">{tString('interiorOffer.dot1c')}</a>
            </li>
            <li className="flex gap-4 items-start">
              <div className="relative Rectangle-1469 min-w-2 top-[12px]"></div>
              <a className="mundial-regular">{tString('interiorOffer.dot1d')}</a>
            </li>
          </ul>
          <h4 className="mundial-regular text-[24px] max-w-full lg:w-auto py-16 xl:py-0">
            {tString('interiorOffer.info1')}
          </h4>
        </div>
      </div>
      {/* Right Column */}
      <div className="flex flex-col items-start text-[#171717] lg:pl-16 h-full">
        <h5 className="hatton-regular h-[80px] text-4xl xl:text-[39px] mb-4 max-w-full">
          {tString('interiorOffer.header2')}
        </h5>
        <div className="text-center lg:text-left flex flex-col gap-4 lg:gap-6">
          <ul className="flex flex-col gap-4 text-left max-w-full text-[24px]">
            <li className="flex gap-4 items-start">
              <div className="relative bottom-1 min-w-2 Rectangle-1469 top-[12px]"></div>
              <a className="mundial-regular">{tString('interiorOffer.dot2a')}</a>
            </li>
            <li className="flex gap-4 items-start">
              <div className="relative leading-[28px] min-w-2 Rectangle-1469 top-[12px]"></div>
              <a className="mundial-regular">{tString('interiorOffer.dot2b')}</a>
            </li>
            <li className="flex gap-4 items-start">
              <div className="relative Rectangle-1469 min-w-2 top-[12px]"></div>
              <a className="mundial-regular">{tString('interiorOffer.dot2c')}</a>
            </li>
            <li className="flex gap-4 items-start">
              <div className="relative Rectangle-1469 min-w-2 top-[12px]"></div>
              <a className="mundial-regular">{tString('interiorOffer.dot2d')}</a>
            </li>
            <li className="flex gap-4 items-start">
              <div className="relative Rectangle-1469 min-w-2 top-[12px]"></div>
              <a className="mundial-regular">{tString('interiorOffer.dot2e')}</a>
            </li>
            <li className="flex gap-4 items-start">
              <div className="relative Rectangle-1469 min-w-2 top-[12px]"></div>
              <a className="mundial-regular">{tString('interiorOffer.dot2f')}</a>
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