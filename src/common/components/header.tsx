"use client";
// components/Header.tsx
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdHome as HomeIcon } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { cn } from "../lib/utils";
import Data from "@/common/utils/constant-data";
import Button from "./button";

export const Header = () => {
  const path = usePathname();

  return (
    <nav className="bg-[#f0f8ff] rounded-lg shadow-md p-4 mb-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4 text-black">
        <Link
          href="/"
          className="bg-primary p-5 rounded-lg flex justify-center items-center"
        >
          <HomeIcon className="text-white" />
        </Link>
          <Link
            href="/"
            className={cn(path === "/" ? "text-primary" : "", "font-medium")}
          >
            Resume
          </Link>
          <Link
            href="/portfolio"
            className={cn(
              path === "/portfolio" ? "text-primary" : "",
              "font-medium",
            )}
          >
            Portfolio
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          {Object.keys(Data.socials).map((key) => {
            const social = Data.socials[key];
            const IconComponent = social.icon; // Get the icon component
            return (
              <Link href={social.link} target="_blank" key={key}>
                <span className="text-black hover:text-main-color w-4 h-4">
                  <IconComponent className="w-4 h-4" />
                </span>
              </Link>
            );
          })}
          <Link
            href="/contact-us"
            className="ml-4 text-white flex items-center no-underline"
          >
            <Button>
              Hire Me
              <FaTelegramPlane className="w-5 h-5 mr-2" />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
