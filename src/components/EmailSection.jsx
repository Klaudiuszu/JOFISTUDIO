"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-translations/hooks";
import { namespaces } from "../../translations.config";
import emailjs from '@emailjs/browser';

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const { tString } = useTranslation(namespaces.common);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2jgdy5b', 'template_6udbhov', form.current, {
        publicKey: 'k1_yYXTUCICFZAjt0',
      })
      .then(
        () => {
          setEmailSubmitted(true);
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className="about-me-section lg:py-16 max-w-screen-2xl mx-auto flex flex-col py-[82px] xl:py-[200px]" id="contact">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col mt-10 lg:grid gap-[18px] lg:grid-cols-1 items-center px-6 lg:gap-16 lg:px-16 3xl:px-0 text-[#171717]">
          <div className="justify-center items-start xl:text-5xl text-4xl text-center gap-[18px] mt-4 lg:text-left flex flex-col h-full">
            <h2 className="xl:text-custom-85 w-full xl:w-auto" style={{ letterSpacing: '-2px' }}>{tString('email.header')}</h2>
            <h3 className=" lg:px-0 text-[16px] xl:text-[24px] leading-[24px] normal-case mundial-font text-left 3xl:w-[1380px]">
              {tString('email.info')}
            </h3>
            <p className=" mb-[18px] font-bold mundial-font leading-[24px] lg:px-0 xl:text-[24px] text-base text-left xl:mt-[28px] xl:mb-[48px]">
              {tString('email.step0')}
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:grid gap-[18px] lg:grid-cols-2 items-center lg:gap-16 lg:px-16 3xl:px-0">
          <div className="justify-start xl:text-5xl text-4xl px-6 lg:px-0 items-center lg:items-start text-center gap-[18px] lg:text-left flex flex-col h-full">
            <p className="font-bold mundial-font leading-[24px] lg:px-0 xl:text-[24px] text-base text-left">
              {tString('email.step0A')}
            </p>
            <div>
              <div className="relative top-[16px] min-w-2 Rectangle-1469"></div>
              <p className="email-paragraph relative mundial-font xl:text-[24px] pl-6 leading-[24px] before:absolute before:left-0 before:top-0 lg:px-0 sm:px-16 text-base text-left 3xl:w-[720px]">
                {tString('email.step1')}
              </p>
            </div>
            <div>
              <div className="relative top-[16px] min-w-2 Rectangle-1469"></div>
              <p className="email-paragraph relative mundial-font xl:text-[24px] pl-6 leading-[24px] before:absolute before:left-0 before:top-0 lg:px-0 sm:px-16 text-base text-left 3xl:w-[720px]">
                {tString('email.step2')}
              </p>
            </div>
            <div>
              <div className="relative top-[16px] min-w-2 Rectangle-1469"></div>
              <p className="email-paragraph relative mundial-font xl:text-[24px] pl-6 leading-[24px] before:absolute before:left-0 before:top-0 lg:px-0 sm:px-16 text-base text-left 3xl:w-[720px]">
                {tString('email.step3')}
              </p>
            </div>
          </div>
          <div className="flex justify-end w-full">
            {emailSubmitted ? (
              <h1 className="text-[#C1E1C1] text-xl mt-2">
                {tString('email.sent-mail')}
              </h1>
            ) : (
              <form className="flex flex-col w-full px-6 gap-[18px]" ref={form} onSubmit={sendEmail}>
                <div>
                  <h6 className="relative leading-[24px] lg:px-0 mundial-font xl:text-[24px] text-base text-left pb-[4px]">
                    {tString('email.name')}
                  </h6>
                  <input
                    name="user_name"
                    type="text"
                    id="senderName"
                    required
                    className="border bg-[#EEECEC] placeholder-[#171717] text-[#171717] text-sm block w-full p-2.5"
                  />
                </div>
                <div>
                  <h6 className="relative leading-[24px] lg:px-0 mundial-font xl:text-[24px] text-base text-left  pb-[4px]">
                    {tString('email.email')}
                  </h6>
                  <input
                    name="user_email"
                    type="email"
                    id="to"
                    required
                    className="border bg-[#EEECEC]  placeholder-[#171717] text-[#171717] text-sm block w-full p-2.5"
                  />
                </div>
                <div>
                  <h6 className="relative leading-[24px] lg:px-0 mundial-font xl:text-[24px] text-base text-left  pb-[4px]">
                    {tString('email.text')}
                  </h6>
                  <textarea
                    name="message"
                    id="subject"
                    className="border bg-[#EEECEC] placeholder-[#171717] text-[#171717] h-40 xl:h-[370px] text-sm block w-full p-2.5"
                  />
                </div>
                <button
                  type="submit"
                  value="Send"
                  className="flex justify-center gap-[18px] items-center sm:w-[394px] h-[72px] text-black text-dark font-medium py-2.5 px-5 focus:ring-gray-100 hover:bg-gray-100 border border-[#A6A6A6] w-full bg-primary-500 focus:ring-4 uppercase"
                >
                  <span className="mundial-regular relative text-[20px]" style={{ top: "2px" }}>
                    {tString('email.send')}
                  </span>
                  <img
                    src="/images/arrow_icon.svg"
                    alt="Arrow icon"
                    className="relative font-black"
                    style={{ width: "18px", marginLeft: "8px" }}
                  />
                </button>

              </form>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EmailSection;
