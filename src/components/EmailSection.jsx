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
    <section className="about-me-section lg:py-16 max-w-screen-2xl mx-auto flex flex-col" id="contact">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col lg:mt-[80px] mt-10 lg:grid gap-8 lg:grid-cols-1 items-center py-8 px-4 lg:gap-16 lg:px-16 3xl:px-0 text-[#171717]">
          <div className="justify-center items-start md:text-5xl text-4xl text-center gap-4 mt-4 lg:text-left flex flex-col h-full">
            <h2 className="md:text-custom-85 mb-4" style={{ letterSpacing: '-2px' }}>{tString('email.header')}</h2>
            <h3 className=" lg:px-0 sm:px-16 text-[20px] md:text-[28px] leading-[28px] normal-case mundial-font text-left 3xl:w-[1380px]">
              {tString('email.info')}
            </h3>
            <p className=" mb-5 font-bold mundial-font leading-[28px] lg:px-0 sm:px-16 md:text-[24px] text-base text-left">
              {tString('email.step0')}
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:grid gap-8 lg:grid-cols-2 items-center sm:py-8 pb-8 lg:gap-16 lg:px-16 3xl:px-0">
          <div className="justify-start md:text-5xl text-4xl px-4 items-center lg:items-start text-center gap-4 lg:text-left flex flex-col h-full">
            <p className="font-bold mb-5 mundial-font leading-[28px] lg:px-0 sm:px-16 md:text-[24px] text-base text-left">
              {tString('email.step0A')}
            </p>
            <p className="email-paragraph relative mundial-font md:text-[24px] pl-6 mb-5 leading-[28px] before:content-['•'] before:absolute before:left-0 before:top-0 lg:px-0 sm:px-16 text-base text-left 3xl:w-[720px]">
              {tString('email.step1')}
            </p>
            <p className="email-paragraph relative mundial-font mb-5 leading-[28px] before:content-['•'] before:absolute before:left-0 before:top-0 lg:px-0 sm:px-16 md:text-[24px] text-base text-left 3xl:w-[720px]">
              {tString('email.step2')}
            </p>
            <p className="email-paragraph relative mundial-font mb-5 leading-[28px] before:content-['•'] before:absolute before:left-0 before:top-0 lg:px-0 sm:px-16 md:text-[24px] text-base text-left 3xl:w-[720px]">
              {tString('email.step3')}
            </p>
          </div>
          <div className="flex justify-end w-full">
            {emailSubmitted ? (
              <h1 className="text-[#C1E1C1] text-md mt-2">
                {tString('email.sent-mail')}
              </h1>
            ) : (
              <form className="flex flex-col w-full px-4" ref={form} onSubmit={sendEmail}>
                <div className="mb-6">
                  <h6 className="relative mb-2 leading-[28px] lg:px-0 mundial-font sm:px-16 md:text-[24px] text-base text-left">
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
                <div className="mb-6">
                  <h6 className="relative mb-2 leading-[28px] lg:px-0 mundial-font sm:px-16 md:text-[24px] text-base text-left">
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
                <div className="mb-6">
                  <h6 className="relative mb-2 leading-[28px] lg:px-0 mundial-font sm:px-16 md:text-[24px] text-base text-left">
                    {tString('email.text')}
                  </h6>
                  <textarea
                    name="message"
                    id="subject"
                    className="border bg-[#EEECEC] placeholder-[#171717] text-[#171717] h-40 md:h-[370px] text-sm block w-full p-2.5"
                  />
                </div>
                <button
                  type="submit"
                  value="Send"
                  className="flex justify-center gap-4 items-center sm:w-[394px] h-[72px] text-black text-dark font-medium py-2.5 px-5 focus:ring-gray-100 hover:bg-gray-100 border border-[#A6A6A6] w-full bg-primary-500 focus:ring-4 uppercase"
                >
                  <span className="mundial-regular relative text-[22px]" style={{ top: "2px" }}>
                    {tString('email.send')}
                  </span>
                  <img
                    src="/images/arrow_icon.svg"
                    alt="Arrow icon"
                    className="relative font-black"
                    style={{  width: "18px", marginLeft: "8px" }}
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
