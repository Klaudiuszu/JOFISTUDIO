"use client";
import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "next-translations/hooks";
import { namespaces } from "../../translations.config";
import { useLanguage } from '../hooks/useLanguage';
import { useRouter } from 'next/router';

const Footer = () => {
    const [height, setHeight] = useState(0);
    const [, setWidth] = useState(0);
    const refSize = useRef(null);
    const { tString } = useTranslation(namespaces.common);
    const router = useRouter();
    const { language } = useLanguage();

    useEffect(() => {
        setWidth(refSize.current.clientWidth)
        setHeight(refSize.current.clientHeight)
      }, [])

      const handleMoveToPolicy = () => {
        router.push(`/${language}/PrivacyPolicy`);
      };
      const handleMoveToCookies = () => {
        router.push(`/${language}/cookiesPolicy`);
      };
      const handleMoveToObligation = () => {
        router.push(`/${language}/informationObligation`);
      };
      const handleMoveToFormRegulation = () => {
        router.push(`/${language}/formRegulations`);
      };


    return (
        <footer id="footer" ref={refSize}  className="about-me-section py-3 lg:py-8 max-w-screen-2xl mx-auto flex flex-col">
            <div className="bg" style={{ height: `${height}px` }}></div>
            <div className="flex flex-col min-w-72 flex-wrap items-center justify-between w-full mx-auto pt-12">
                <div className="md:flex md:justify-between px-3 w-full">
                    <div className="grid grid-cols-2 w-full gap-8 sm:gap-6 sm:grid-cols-4 text-[#000]">
                        <div className="flex justify-start flex-col">
                            <img src="/images/logo.svg" className=" w-136 h-7" />
                        </div>
                        <div className="flex justify-center flex-col">
                            <h2 className="mb-4 text-sm uppercase font-bold">
                                {tString("footer.col2Header")}
                            </h2>
                            <ul className=" font-thin">
                                <li className="mb-4">
                                    <a
                                        className=" flex gap-2 font-bold items-center"
                                    >
                                        biuro@jofistudio.pl
                                    </a>
                                    <a className=" flex gap-2 items-center">{tString("footer.col2NumberMikolaj")}</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex justify-start flex-col">
                            <h2 className="mb-4 text-sm uppercase font-bold">
                                {tString("footer.col3Header")}
                            </h2>
                            <ul className=" font-thin">
                                <li className="mb-4">
                                    <a className=" flex gap-2 items-center">{tString("footer.col3Adress")}</a>
                                    <a
                                        href="https://www.google.com/maps/dir/Rozbrat+34%2F36,+Warszawa//@52.226312,21.0318993,17z/data=!4m9!4m8!1m5!1m1!1s0x471eccfc4829fe67:0xe2c2ba714d89cb90!2m2!1d21.0344742!2d52.2263087!1m0!3e0?entry=ttu"
                                        className="flex gap-2 items-center w-fit"
                                        style={{borderBottom: "1px solid #000"}}
                                    >
                                        {tString("footer.col3Map")}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex justify-start flex-col">
                            <h2 className="mb-4 text-sm uppercase font-bold">
                                {tString("footer.col4Media")}
                            </h2>
                            <ul className=" font-thin">
                                <li className="mb-4 flex gap-5">
                                    <a href="/">
                                    <img src="/images/fb.png" className=" w-136 h-7" />
                                    </a>
                                    <a href="https://www.instagram.com/jofi_studio/">
                                    <img src="/images/inst.png" className=" w-136 h-7" />
                                    </a>
                                    <a href="https://www.linkedin.com/company/jofi-studio/">
                                    <img src="/images/linkedin.png" className=" w-136 h-7" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-medium uppercase">
                                {tString("footer.col4Header")}
                            </h2>
                            <ul className="font-thin flex flex-col gap-2">
                                <li className="mb-4">
                                    <a href="#" className="">
                                        {tString("footer.col4Item1")}
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="">
                                        {tString("footer.col4Item2")}
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="">
                                        {tString("footer.col4Item3")}
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="">
                                        {tString("footer.col4Item4")}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center text-white py-4 font-thin">
                    <span>{tString("footer.col5Item1")}</span>
                </div>
            </div>
            <div className="flex gap-4 lg:flex-row flex-col">
                <div style={{fontFamily: 'PPHatton-Light'}}>
                <a onClick={handleMoveToPolicy} className="text-black font-thin cursor-pointer hover:font-semibold">{tString("footer.politics")}</a>
                </div>
                <div style={{fontFamily: 'PPHatton-Light'}}>
                <a onClick={handleMoveToCookies} className="text-black font-thin cursor-pointer hover:font-semibold">{tString("footer.cookies")}</a>
                </div>
                <div style={{fontFamily: 'PPHatton-Light'}}>
                <a onClick={handleMoveToObligation} className="text-black font-thin cursor-pointer hover:font-semibold">{tString("footer.obligation")}</a>
                </div>
                <div style={{fontFamily: 'PPHatton-Light'}}>
                <a onClick={handleMoveToFormRegulation} className="text-black font-thin cursor-pointer hover:font-semibold">{tString("footer.form")}</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
