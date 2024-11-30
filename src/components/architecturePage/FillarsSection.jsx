"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-translations/hooks";
import { namespaces } from "../../../translations.config";

const FillarSection = () => {
  const [height, setHeight] = useState(0);
  const [, setWidth] = useState(0);
  const refSize = useRef(null);

  const { tString } = useTranslation(namespaces.common);

  useEffect(() => {
    setWidth(refSize.current.clientWidth)
    setHeight(refSize.current.clientHeight)
  }, [])

  return (
    <section ref={refSize} className="about-me-section xl:h-[1168px] 3xl:py-[210px] py-[82px] xl:py-[200px] max-w-screen-2xl mx-auto flex flex-col" id="fillar" style={{lineHeight: "normal"}}>
      <div className="bg" style={{ height: `${height}px` }}></div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex justify-center 3xl:w-[1440px] 3xl:px-0 gap-[10px]"
      >
        <div className="flex flex-col lg:pb-[82px] lg:grid gap-8 lg:grid-cols-2 items-center pl-4 pr-4 lg:gap-72 lg:px-16 pb-[18px] text-[#171717] 3xl:px-0 3xl:pt-0">
          <div className="justify-center md:text-5xl text-4xl items-center lg:items-start text-center mt-4 lg:text-left flex flex-col h-full">
            <h5 className="mundial-Bold text-[32px] xl:text-[39px] xl:w-[600px] 3xl:w-[1000px] uppercase mb-4">{tString('fillar.header')}</h5>
            <h4 style={{lineHeight: "normal"}} className="xl:w-[600px] 3xl:w-[1000px] text-[16px] md:text-[24px] mundial-Light max-w-auto 3xl:max-w-[700px] lg:px-0 text-center sm:px-16 lg:text-left">
              {tString('fillar.info')}
            </h4>
          </div>
          <div className="flex flex-col gap-3">
          </div>
        </div>
      </motion.div>
      <div className="flex flex-col gap-3 px-6 w-full 3xl:w-[1440px] 3xl:px-0 h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 lg:px-16 3xl:px-0 3xl:h-[520px] 3xl:pl-[5px] h-full 3xl:gap-y-[5rem]">
          {/* Item 1 */}
          <div className="flex flex-col xs:flex-row xs:gap-2 items-start 3xl:items-center text-center xl:h-[260px] min-w-[280px] relative sm:text-left sm:flex-row px-1 3xl:h-[238px]">
            <div className="h-full relative 3xl:top-[4px] bottom-[10px] xl:bottom-[5px]">
              <div className="w-[39px] h-[39px] relative top-2 bg-black flex items-start justify-center transform rotate-45 sm:mr-4">
                <h2 className="text-white transform -rotate-45 relative mundial-Light-font text-[20px]" style={{ top: "9px" }}>1</h2>
              </div>
            </div>
            <div className="flex flex-col items-start 3xl:absolute 3xl:top-[15px] static left-16 top-0 text-left gap-2 pl-[10px]">
              <h5 className="text-black text-[32px] xl:text-[44px] hatton-regular font-medium">{tString('fillar.f1Header')}</h5>
              <p className="text-[16px] md:text-[24px] mundial-Light leading-[28px]">{tString('fillar.f1Info')}</p>
            </div>
          </div>
          {/* Item 2 */}
          <div className="flex flex-col xs:flex-row xs:gap-2 items-start 3xl:items-center text-center xl:h-[260px] 3xl:h-[238px] min-w-[300px] relative sm:text-left sm:flex-row px-1">
            <div className="h-full relative 3xl:top-[4px] bottom-[10px] xl:bottom-[5px]">
              <div className="w-[39px] h-[39px] relative top-2 bg-black flex items-start justify-center transform rotate-45 sm:mr-4">
                <h2 className="text-white transform -rotate-45 relative mundial-Light-font text-[20px]" style={{ top: "9px" }}>2</h2>
              </div>
            </div>
            <div className="flex flex-col items-start 3xl:absolute 3xl:top-[15px] static left-16 top-0 text-left gap-2 pl-[10px]">
              <h5 className="text-black text-[32px] md:text-[44px] hatton-regular font-medium">{tString('fillar.f2Header')}</h5>
              <p className="text-[16px] md:text-[24px] mundial-Light leading-[28px]">{tString('fillar.f2Info')}</p>
            </div>
          </div>
          {/* Item 3 */}
          <div className="flex flex-col xs:flex-row xs:gap-2 items-start 3xl:items-center text-center xl:h-[260px] 3xl:h-[238px] min-w-[300px] xl:w-[352px] relative sm:text-left sm:flex-row px-1">
            <div className="h-full relative 3xl:top-[4px] bottom-[10px] xl:bottom-[5px]">
              <div className="w-[39px] h-[39px] relative top-2 bg-black flex items-start justify-center transform rotate-45 sm:mr-4">
                <h2 className="text-white transform -rotate-45 relative mundial-Light-font text-[20px]" style={{ top: "9px" }}>3</h2>
              </div>
            </div>
            <div className="flex flex-col items-start 3xl:absolute 3xl:top-[15px] static left-16 top-0 text-left gap-2 pl-[10px]">
              <h5 className="text-black text-[32px] md:text-[44px] hatton-regular font-medium">{tString('fillar.f3Header')}</h5>
              <p className="text-[16px] md:text-[24px] mundial-Light 3xl:xl:w-[352px] leading-[28px]">{tString('fillar.f3Info')}</p>
            </div>
          </div>
          {/* Item 4 */}
          <div className="flex flex-col xs:flex-row xs:gap-2 items-start 3xl:items-center text-center 3xl:h-[238px] min-w-[300px] relative sm:text-left sm:flex-row px-1">
            <div className="h-full relative 3xl:top-[4px] bottom-[10px] xl:bottom-[5px]">
              <div className="w-[39px] h-[39px] relative top-2 bg-black flex items-start justify-center transform rotate-45 sm:mr-4">
                <h2 className="text-white transform -rotate-45 relative mundial-Light-font text-[20px]" style={{ top: "9px" }}>4</h2>
              </div>
            </div>
            <div className="flex flex-col  items-start 3xl:absolute 3xl:top-[15px] static left-16 top-0 text-left gap-2 pl-[10px]">
              <h5 className="text-black text-[32px] md:text-[44px] hatton-regular font-medium">{tString('fillar.f4Header')}</h5>
              <p className="text-[16px] md:text-[24px] mundial-Light leading-[28px]">{tString('fillar.f4Info')}</p>
            </div>
          </div>
          {/* Item 5 */}
          <div className="flex flex-col xs:flex-row xs:gap-2 items-start 3xl:items-center text-center 3xl:h-[238px] min-w-[300px] relative sm:text-left sm:flex-row px-1">
            <div className="h-full relative 3xl:top-[4px] bottom-[10px] xl:bottom-[5px]">
              <div className="w-[39px] h-[39px] relative top-2 bg-black flex items-start justify-center transform rotate-45 sm:mr-4">
                <h2 className="text-white transform -rotate-45 relative mundial-Light-font text-[20px]" style={{ top: "9px" }}>5</h2>
              </div>
            </div>
            <div className="flex flex-col items-start 3xl:absolute 3xl:top-[15px] static left-16 top-0 text-left gap-2 pl-[10px]">
              <h5 className="text-black text-[32px] md:text-[44px] hatton-regular font-medium">{tString('fillar.f5Header')}</h5>
              <p className="text-[16px] md:text-[24px] mundial-Light leading-[28px]">{tString('fillar.f5Info')}</p>
            </div>
          </div>
          {/* Item 6 */}
          <div className="flex flex-col xs:flex-row xs:gap-2 items-start 3xl:items-center text-center 3xl:h-[238px] min-w-[300px] relative sm:text-left sm:flex-row px-1">
            <div className="h-full relative 3xl:top-[4px] bottom-[10px] xl:bottom-[5px]">
              <div className="w-[39px] h-[39px] relative top-2 bg-black flex items-start justify-center transform rotate-45 sm:mr-4">
                <h2 className="text-white transform -rotate-45 relative mundial-Light-font text-[20px]" style={{ top: "9px" }}>6</h2>
              </div>
            </div>
            <div className="flex flex-col items-start 3xl:absolute 3xl:top-[15px] static left-16 top-0 text-left gap-2 pl-[10px]">
              <h5 className="text-black text-[32px]  md:text-[44px] hatton-regular font-medium 3xl:w-[380px]">{tString('fillar.f6Header')}</h5>
              <p className="text-[16px] md:text-[24px] mundial-Light leading-[28px] 3xlxl:w-[352px]">{tString('fillar.f6Info')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FillarSection;
