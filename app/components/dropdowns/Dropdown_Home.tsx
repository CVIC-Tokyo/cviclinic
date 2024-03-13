import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import {
  IoMdArrowDropdown,
  IoMdArrowDropup,
} from "react-icons/io";


interface HomeDropDownProps {
  homeDropdownPages: DropdownPage[];
};

const Dropdown_Home: React.FC<HomeDropDownProps> = ({ homeDropdownPages }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickoutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickoutside);

    return () => {
      document.removeEventListener("click", handleClickoutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="navbar-button" ref={dropdownRef} onClick={toggleDropdown}>
        Home
        {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
      </div>
      {isOpen && (
        <div className="dropdown absolute col-span-1 z-10 h-auto bg-white shadow-xl mt-2 w-[200px]">
          {homeDropdownPages.map((item, index) => (
            <Link key={index} href={`/${Object.values(item)[0]}`}
              className="block px-4 py-2 text-sm text-gray-700 md:text-sm lg:text-base">
                {Object.keys(item)[0]}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown_Home;
