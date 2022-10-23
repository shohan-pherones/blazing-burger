import React from "react";

const Footer = () => {
  return (
    <footer className="container mx-auto text-center py-10 border-t-2">
      <p>
        &copy; {new Date().getFullYear()} Blazing Burger. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
