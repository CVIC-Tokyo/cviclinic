"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import cvic_logo_600 from "@/public/logos/cvic_logo_600.png";
import { AiOutlineMenu } from "react-icons/ai";
import SideBar from "./SideBar";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { FaLanguage } from "react-icons/fa";
import Dropdown_Home from "./dropdowns/Dropdown_Home";


const Navbar: React.FC<NavBarProps> = () => {
  const [nav, setNav] = useState(false);
  const [showShadow, setShowShadow] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>("ja");

  useEffect(() => {
    const handleShadow = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY >= 90) {
          setShowShadow(true);
        } else {
          setShowShadow(false);
        }
      }
    };

    window.addEventListener("scroll", handleShadow);

    return () => {
      window.removeEventListener("scroll", handleShadow);
    };
  }, []);

  const handleLanguage = () => {
    if (language === "en") {
      setLanguage("ja");
    } else setLanguage("en");
  };

  const handleNav = () => {
    setNav(!nav);
  };

  const homeDropdownPages: DropdownPage[] = [
    { Home: "" },
    { "About CVIC": "about" },
    { Doctors: "doctors" },
    { Equipments: "equipments" },
  ];

  return (
    <div
      className={
        showShadow
          ? "fixed top-0 left-0 right-0 z-[100] bg-white shadow-lg"
          : "fixed top-0 left-0 right-0 z-[100] bg-white"
      }
    >
      <div className="max-w-[1240px] mx-auto flex justify-between items-center p-2">
        <Link className="scroll-false" href="/">
          <Image src={cvic_logo_600} alt="/logo" width="600" unoptimized />
        </Link>
        <div className="hidden md:flex h-full w-auto">
          <div
            className="ml-5 text-3xl flex justify-center items-center w-full h-full cursor-pointer"
            onClick={() => handleLanguage()}
          >
            {language === "ja" ? (
              <div className="flex uppercase">
                <FaLanguage />
                {language}
                <div className="ml-1 hover:scale-110 ease-in duration-300">
                  <BsToggleOff />
                </div>
              </div>
            ) : (
              <div className="flex uppercase">
                <FaLanguage />
                {language}
                <div className="ml-1 hover:scale-110 ease-in duration-300">
                  <BsToggleOn />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto hidden md:flex justify-between items-center pt-2">
        <div className="w-full h-full p-1 grid grid-cols-6">
          <Dropdown_Home homeDropdownPages={homeDropdownPages} />
          <Link href="/" className="navbar-button">
            Services
          </Link>
          <Link href="/" className="navbar-button">
            Process
          </Link>
          <Link href="/" className="navbar-button">
            Contact
          </Link>
          <Link href="/" className="navbar-button">
            Access
          </Link>
          <Link href="/" className="navbar-button">
            More
          </Link>
        </div>
      </div>
      <div onClick={handleNav} className="md:hidden cursor-pointer">
        <AiOutlineMenu
          className="border-y-2 border-r-2 border-[#820000] p-2"
          size={45}
        />
      </div>
      <SideBar
        nav={nav}
        setNav={setNav}
        handleNav={handleNav}
        language={language}
        handleLanguage={handleLanguage}
        homeDropdownPages={homeDropdownPages}
      />
    </div>
  );
};

export default Navbar;
