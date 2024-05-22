import React from "react";
import LoginButton from "./LoginButton";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Header = () => {
    return (
        <header className="bg-black text-white flex justify-between items-center sticky top-0 z-10 border-b border-gray-600">
        <Logo />
        <NavLinks />
        <LoginButton />
      </header>
    );
  };
 export default Header;