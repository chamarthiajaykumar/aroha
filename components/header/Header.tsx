"use client";
import { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Logo from "@/public/Logo.png";
import Logo2 from "@/public/Logo2.png";
import Image from "next/image";

interface HeaderProps {
  inView: boolean;
}

function Header({ inView }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`shadow-md  w-full fixed top-0 left-0 z-50 ${
        inView ? "transparent" : "bg-white"
      }`}
    >
      <div className="px-10 md:px-20 backdrop-blur-md py-4 md:flex justify-between items-center">
        <Image
          src={inView ? Logo : Logo2}
          alt="Logo"
          height={inView ? 60 : 48}
        />

        {/* Desktop */}
        <div className="hidden md:block">
          <ul
            className={`list-none md:flex items-center md:gap-x-12 text-md ${
              inView ? "text-white" : "text-black"
            } `}
          >
            <li className="font-semibold md:my-0 font-raleway cursor-pointer">
              <Link
                className="pb-1"
                activeClass={`${inView ? "activeDark" : "activeLight"}`}
                to="home"
                smooth={true}
                duration={500}
                spy={true}
              >
                Home
              </Link>
            </li>
            <li className="font-semibold md:my-0 font-raleway cursor-pointer">
              <Link
                className="pb-1"
                activeClass={`${inView ? "activeDark" : "activeLight"}`}
                to="services"
                smooth={true}
                duration={500}
                spy={true}
              >
                Services
              </Link>
            </li>
            <li className="font-semibold md:my-0 font-raleway cursor-pointer">
              <Link
                className="pb-1"
                offset={10}
                activeClass={`${inView ? "activeDark" : "activeLight"}`}
                to="testimonial"
                smooth={true}
                duration={500}
                spy={true}
              >
                Testimonial
              </Link>
            </li>
            <li className="font-semibold md:my-0 font-raleway cursor-pointer">
              <Link
                className="pb-1"
                activeClass={`${inView ? "activeDark" : "activeLight"}`}
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-8 top-8 cursor-pointer md:hidden w-7 h-7"
        >
          {isOpen ? (
            <IoClose size={28} color={`#000`} />
          ) : (
            <GiHamburgerMenu size={24} color={`#000`} />
          )}
        </div>

        <div
          className={`bg-white w-full md-hidden pb-4 absolute z-[-1] left-0 pl-9 transition-all duration-500 ease-in ${
            isOpen ? "top-[86px]" : "top-[-490px]"
          }`}
        >
          <ul className="list-none md:flex items-center md:gap-x-8 text-lg">
            <li className="font-semibold my-4 md:my-0 font-raleway">
              <Link
                onClick={() => setIsOpen(false)}
                className="pb-1"
                activeClass={`activeLight`}
                to="home"
                smooth={true}
                duration={500}
                spy={true}
              >
                Home
              </Link>
            </li>
            <li className="font-semibold my-4 md:my-0 font-raleway">
              <Link
                onClick={() => setIsOpen(false)}
                className="pb-1"
                activeClass={`activeLight`}
                to="services"
                smooth={true}
                duration={500}
                spy={true}
              >
                Services
              </Link>
            </li>
            <li className="font-semibold my-4 md:my-0 font-raleway">
              <Link
                onClick={() => setIsOpen(false)}
                className="pb-1"
                activeClass={`activeLight`}
                to="testimonial"
                smooth={true}
                duration={500}
                spy={true}
              >
                Testimonial
              </Link>
            </li>
            <li className="font-semibold my-4 md:my-0 font-raleway">
              <Link
                onClick={() => setIsOpen(false)}
                className="pb-1"
                activeClass={`activeLight`}
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
