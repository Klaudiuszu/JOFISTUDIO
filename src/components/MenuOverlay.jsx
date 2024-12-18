import React from "react";
import NavLink from "./NavLink";
import { useLanguage } from "../hooks/useLanguage";
import { namespaces } from "../../translations.config";
import { useTranslation } from "next-translations/hooks";
import { useState } from "react";

const MenuOverlay = ({ links, offerLinks, navbarOpen, locale, setNavbarOpenClose }) => {
  const { language, handleChangeLanguage } = useLanguage();
  const [isOfferOpen, setIsOfferOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const toggleOfferSubMenu = () => {
    setIsOfferOpen(!isOfferOpen);
  };

  const handleLinkClick = (index) => {
    setActiveLink(index);
    setNavbarOpenClose(false);
  };

  const handleOfferLinkClick = () => {
    setNavbarOpenClose(false);
  };

  const { tString } = useTranslation(namespaces.common);

  return (
    <nav className={`nav-bar ${navbarOpen ? 'nav-toggle -z-50' : 'nav-close'}`}>
      <button
        onClick={() => setNavbarOpenClose(false)}
        className={`flex items-center fixed px-3 py-2 rounded text-slate-200 navbar-button transition-transform transform hover:rotate-1 ${navbarOpen ? 'navbar-button-close' : ''}`}
      >
        <img className={`w-5 z-10 ${navbarOpen ? '' : 'hidden'}`} src="/images/closeIcon.svg" alt="Close Icon" />
      </button>
      <ul className="menu-list text-left" style={{ fontSize: "22px" }}>
        <li key="offer" className="menu-overlay-li">
          <div>
            <button
              onClick={toggleOfferSubMenu}
              className="cursor-pointer focus:outline-none menu-link text-[22px] textButtonWrapper"
            >
              {tString("navbar.offer")}
            </button>
            {isOfferOpen && (
              <div className="pl-4 mt-2 slide-down">
                <ul className="mt-2 flex flex-col gap-2">
                  {(offerLinks || []).map((link, index) => (
                    <li key={index} className="menu-overlay-sub-li">
                      <button
                        onClick={handleOfferLinkClick}
                        className="cursor-pointer focus:outline-none"
                      >
                        <NavLink href={link.path} title={link.title} />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </li>

        {(links || []).map((link, index) => (
          <li key={index} className="menu-overlay-li my-2">
            <button
              onClick={() => handleLinkClick(index)} // Zamyka menu dla głównych linków
              className="cursor-pointer focus:outline-none menu-link textButtonWrapper"
            >
              {activeLink === index && <img className="inline" />}
              <NavLink href={link.path} title={link.title} />
            </button>
          </li>
        ))}
      </ul>
      <button className="navbar-language overlay" onClick={() => { handleChangeLanguage(language === "en" ? "pl" : "en") }}>
        {locale === "en" ? "PL" : "EN"}
      </button>
    </nav>
  );
};

export default MenuOverlay;


