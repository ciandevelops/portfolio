import React from "react";

const Header = () => {
  return (
    <header className="bg-[#0C0C0C] flex justify-between p-8">
      <div className="left text-white font-headings">
        <a className="text-2xl" href="#">
          Cian Butler
        </a>
      </div>
      <div className="right">
        <ul className="app__navbar-links flex space-x-6 text-white font-body">
          <li>
            <a className="hover:border-b-2 border-[#DCCA87]" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="" href="#">
              About
            </a>
          </li>
          <li>
            <a className="" href="#">
              My Work
            </a>
          </li>
          <li>
            <a className="" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
