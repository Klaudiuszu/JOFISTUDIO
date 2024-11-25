"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-translations/hooks";
import { namespaces } from "../../translations.config";
import TextArrow from "../smallComponents/TextArrow";
import ImageWithBorder from "../smallComponents/ImageWithBorder";

const AboutSection = () => {
  const [height, setHeight] = useState(0);
  const refSize = useRef(null);

  const { tString } = useTranslation(namespaces.common);

  useEffect(() => {
    const handleResize = () => {
      if (refSize.current) {
        setHeight(refSize.current.clientHeight);
      }
    };

    handleResize();

    const resizeObserver = new ResizeObserver(() => handleResize());
    if (refSize.current) {
      resizeObserver.observe(refSize.current);
    }

    return () => {
      if (refSize.current) {
        resizeObserver.unobserve(refSize.current);
      }
    };
  }, []);

  return (
    <section ref={refSize} className="about-me-section max-w-screen-2xl lg:px-16 3xl:px-0 mx-auto flex flex-col" id="about">
      <div className="bg" style={{ height: `${height}px` }}></div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex justify-center py-[94px]"
      >
        <div className="flex flex-col lg:grid gap-8 h-full lg:grid-cols-2 items-center pt-8 lg:py-0 px-6 lg:gap-0 lg:px-0  text-[#171717] relative">
          <div className="justify-center md:text-5xl text-4xl items-center lg:items-start text-center gap-[15px] lg:gap-14 mt-4 xl:pr-[96px] lg:text-left flex flex-col h-full">
            <h2 className="font-thin md:text-custom-85 relative leading-tight xl:leading-[87px] xl:bottom-[12px]" style={{letterSpacing: '-2px'}}>{tString('about.header')}</h2>
            <h4 className="relative  lg:px-0 lg:w-[580px] sm:px-16 md:top-[5px] md:text-[24px] md:pb-[6px] text-base text-left mundial-font">
              {tString('about.info')}
            </h4>
            <TextArrow
              buttonText={tString('about.button')}
              iconName={'arrow_right_alt'}
              path={'https://www.instagram.com/jofi_studio'}
            />
          </div>
          <div className="relative bottom-[-94px]">
          <ImageWithBorder />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
