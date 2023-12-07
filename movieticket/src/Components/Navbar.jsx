import React from "react";
import { BiMoviePlay } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="flex mx-44 my-4 justify-between">
      <div className="flex gap-24">
        <div className="flex items-center gap-1">
          <BiMoviePlay size={24} />
          <h1 className="text-xl font-medium">Cineflix Movies</h1>
        </div>
          <ul className="flex font-medium gap-8 items-center cursor-pointer">
            <li>Home</li>
            <li>Movies </li>
            <li>New Releases</li>
            <li>Events</li>
          </ul>
      </div>
      <div className="flex font-semibold items-center gap-4 cursor-pointer">
        <h2>Login</h2>
        <button className="bg-primary hover:bg-[#cb3f4f] text-white font-semibold py-2 px-4 rounded">
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
