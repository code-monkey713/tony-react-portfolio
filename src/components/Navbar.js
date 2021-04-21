// import { useState } from 'react';
// import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <header className="sticky w-full items-center justify-between px-5 py-3">
        <div className="logo">
          <h2>💻 React Portfolio</h2>
        </div>

        <nav>
          <ul className="flex items-center">
            <li className="mx-2">
              <a href="/">Home</a>
            </li>
            <li>🔎</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
