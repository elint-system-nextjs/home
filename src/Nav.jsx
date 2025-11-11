import React, { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { logo } from "../src/assets/asset";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-snow-white shadow-2xl fixed top-0 right-0 left-0 z-50">
        <div className="px-6 md:px-14 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} className="h-10 w-auto" alt="logo" />
          </Link>

          {/* === Desktop Nav === */}
          <nav className="hidden lg:flex gap-10 items-center text-[18px]">
            <Link
              to="/"
              className="cursor-pointer hover:text-tech-blue transition"
            >
              Home
            </Link>

            <Link
              to="/solutions"
              className="cursor-pointer hover:text-tech-blue transition"
            >
              Solutions
            </Link>

            <Link
              to="/products"
              className="cursor-pointer hover:text-tech-blue transition"
            >
              Products
            </Link>

            <Link
              to="/contact"
              className="cursor-pointer hover:text-tech-blue transition"
            >
              Contact Us
            </Link>
          </nav>

          {/* === Hamburger Button (Mobile) === */}
          <button
            className="lg:hidden p-2 text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* === Mobile Menu === */}
        <div
          className={`lg:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-500 ${
            menuOpen ? "max-h-[9999px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col items-start gap-6 py-6 px-6 text-[18px] font-medium overflow-y-auto max-h-[90vh]">
            <Link to="/" onClick={() => setMenuOpen(false)} className="w-full">
              Home
            </Link>

            <Link
              to="/solutions"
              onClick={() => setMenuOpen(false)}
              className="w-full"
            >
              Solutions
            </Link>

            <Link
              to="/products"
              onClick={() => setMenuOpen(false)}
              className="w-full"
            >
              Products
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="w-full"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Nav;