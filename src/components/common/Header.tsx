import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav>
      <ul className="flex space-x-6 items-center py-4 px-8 bg-gray-100 shadow-md rounded">
        <li>
          <Link
            href="/"
            className="text-blue-600 font-semibold hover:underline hover:text-blue-800 transition-colors duration-200 mr-4"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-blue-600 font-semibold hover:underline hover:text-blue-800 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/dashboard"
            className="text-blue-600 font-semibold hover:underline hover:text-blue-800 transition-colors duration-200"
          >
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
