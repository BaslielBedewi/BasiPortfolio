import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
    const social = [
    { name: "Instagram", path: "/" },
    { name: "LinkedIn", path: "/work" },
    { name: "Tiktok", path: "/about" },
    { name: "Telegram", path: "/contact" },
  ];
  return (
    <div className="absolute flex flex-col justify-between h-screen w-full right-0 bottom-0 p-[10px] z-30">
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-bold">[Basliel Bedewi's Portfolio]</h1>

        <div className="space-x-4">
          {navItems.map((item) => (
            <a key={item.name} href={item.path} className="relative group">
              {item.name}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
      {/* <div className="flex flex-row justify-between items-end">
        <div className="space-y-2">
          <h1 className="font-bold">Contact me</h1>
          <div className=""><p>Phone No: +2519 01014485</p>
          <p>Email address: baslielbedewi0@gmail.com</p></div>
        </div>
        <div className="text-end space-y-2">
          <h1 className="font-bold">Social media</h1>
          <div className="flex flex-col ">
            {social.map((item) => (
            <a key={item.name} href={item.path} className="relative group">
              {item.name}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black transition-all group-hover:w-full"></span>
            </a>
          ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
