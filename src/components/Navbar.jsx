import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { useRouter } from "next/router";
import { useTranslation } from "next-translations/hooks";
import { namespaces } from '../constants/namespaces';
import { useLanguage } from '../hooks/useLanguage';
import Link from "next/link";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { push } = useRouter();
  const [currentPath] = useState("");

  const router = useRouter();
  const currentUrl = router.asPath;

  const toggleLanguage = () => {
    const newLocale = currentUrl.includes('pl') ? 'pl' : currentUrl.includes('en') ? 'en' : 'en';
    push(currentPath, undefined, { locale: newLocale });
  };

  const { tString } = useTranslation(namespaces.common);
  const { language } = useLanguage();

  const navLinks = [
    {
      title: tString('navbar.about'),
      path: `https://www.instagram.com/jofi_studio`,
    },
    {
      title: tString('navbar.portfolio'),
      path: `/${language}/consultation`,
    },
    {
      title: tString('navbar.contact'),
      path: `/${language}/#footer`,
    },
  ];

  const offerLinks = [
    {
      title: tString('navbar.architecture'),
      path: `/${language}/architecture`,
    },
    {
      title: tString('navbar.interior'),
      path: `/${language}/interior`,
    },
    {
      title: tString('navbar.furniture'),
      path: `/${language}/furniture`,
    },
    {
      title: tString('navbar.consulting'),
      path: `/${language}/consulting`,
    },
  ];

  const handleNavbarOpen = (isOpen) => {
    setNavbarOpen(isOpen);
  };

  return (
    <nav className="navbar absolute mx-auto top-0 left-0 right-1 z-10">
      <div className="flex max-w-screen-2xl items-baseline xl:items-center max-w-sc min-w-72 flex-wrap justify-between mx-auto px-6 xl:px-[16px] 2xl:px-[0] py-2 relative ">
        <div className="flex w-screen items-center">
          <div className="flex-1 flex items-center xl:justify-start justify-start relative">
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center py-2 rounded text-slate-200 navbar-button gap-2 relative top-[2px]"
            >
              <Bars3Icon className="h-[39px] w-8 z-10 relative bottom-[2px]" />
              <label className="hidden lg:block text-center relative text-[22px]  mundial-regular">
                MENU
              </label>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center pl-2">
            <a href={`/${language}/`}>
            <img src="/images/logo.svg" className=" w-136 h-[37px]" />
            </a>
          </div>
          <Link 
            href={`/${language}/consultation`}
            className="flex-1 flex text-end h-full items-end md:flex xs:hidden justify-end lg:block relative top-1 cursor-pointer mundial-regular text-[22px] font-medium pb-[6px]"
            style={{ textTransform: 'uppercase' }}
          >
              {tString('navbar.consultation')}
          </Link>
        </div>
      </div>
      <MenuOverlay
        setNavbarOpenClose={handleNavbarOpen}
        offerLinks={offerLinks}
        links={navLinks}
        navbarOpen={navbarOpen}
        toggleLanguage={toggleLanguage}
        locale={language}
      />
    </nav>
  );
};

export default Navbar;
