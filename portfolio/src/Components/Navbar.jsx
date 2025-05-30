import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Work', path: '/work' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];
  return (
    <div className="flex flex-row justify-between items-center">
      <h1>[Basliel Bedewi's Portfolio]</h1>

      <div className="space-x-4">
           {navItems.map((item) => (
          <a
            key={item.name}
            href={item.path}
            className="relative group"
          >
            {item.name}
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black transition-all group-hover:w-full"></span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
