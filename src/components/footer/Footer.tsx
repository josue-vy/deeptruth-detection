import React from "react";
import FooterLogo from "./FooterLogo";
import FooterInfo from "./FooterInfo";
import FooterLinks from "./FooterLinks";
const Footer = () => {
    return (
      <footer className="bg-black py-4">
        <div className="container mx-auto">
          <FooterLogo />
          <div className="flex justify-between items-center border-t border-gray-700 pt-4">
            <FooterInfo />
            <div className="flex-grow text-right">
              <FooterLinks />
            </div>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;