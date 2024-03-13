import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

interface HomeSideBarProps {
  homeDropdownPages: DropdownPage[];
  setNav: (arg0: boolean) => void;
}

const SideBar_Home: React.FC<HomeSideBarProps> = ({
  homeDropdownPages,
  setNav,
}) => {
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
      <div
        className="navbar-button h-auto"
        ref={dropdownRef}
        onClick={toggleDropdown}
      >
        Home
        {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
      </div>
      {isOpen && (
        <div className="col-span-1 z-10 h-auto bg-white shadow-sm mt-2 w-full">
          {homeDropdownPages.map((item, index) => (
            <Link
              key={index}
              href={`/${Object.values(item)[0]}`}
              className="block px-4 py-2 text-sm text-gray-700 md:text-sm lg:text-base"
              onClick={() => setNav(false)}
            >
              {Object.keys(item)[0]}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SideBar_Home;
