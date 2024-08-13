"use client";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nav, NavLink, Navbar } from "react-bootstrap";
import { FaTelegramPlane } from "react-icons/fa";
import Data from "../utils/constant-data";
import Button from "./button";

export const Header = () => {
  const path = usePathname();

  return (
    <Navbar expand="lg" className="rounded-md shadow-md p-4">
      <Nav.Link as={NavLink} to="/">
        <Navbar.Brand className="p-2 bg-[#425cbb] flex justify-center items-center rounded-sm">
          <HomeIcon style={{ color: "white" }} />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link
            as={NavLink}
            to="/"
            className={
              path === "/" ? "text-[#425cbb] font-medium" : "text-[#425cbb]"
            }
          >
            Resume
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              path === "/portfolio"
                ? "text-[#425cbb] font-medium"
                : "text-[#425cbb]"
            }
          >
            Protfolio
          </Nav.Link>
        </Nav>
        <div className=" flex items-center text-[#425cbb]">
          {Object.keys(Data.socials).map((key) => {
            const social = Data.socials[key];
            const IconComponent = social.icon; // Get the icon component
            return (
              <div className="flex gap-5" key={key}>
                <Link href={social.link} target="_blank" key={key}>
                  <span className="flex gap-5">
                    <IconComponent className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            );
          })}
          <Link href="/contact-us" style={{ textDecoration: "none" }}>
            <Button>
              Hire Me
              <FaTelegramPlane className="w-10 h-5 mr-2" />
            </Button>
          </Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
