import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-[#1A1A1A] py-4 px-6 fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-light tracking-wider">DREAM<span className="text-[#1A237E] font-bold">HOME</span></h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-white hover:text-[#1A237E] transition-colors duration-300 font-light tracking-wide cursor-pointer">Home</Link>
          <Link to="/V1" className="text-white hover:text-[#1A237E] transition-colors duration-300 font-light tracking-wide cursor-pointer">V1</Link>
          <Link to="/V3" className="text-white hover:text-[#1A237E] transition-colors duration-300 font-light tracking-wide cursor-pointer">V3</Link>
          <Link to="/aboutA" className="text-white hover:text-[#1A237E] transition-colors duration-300 font-light tracking-wide cursor-pointer">About A</Link>
          <Link to="/aboutB" className="text-white hover:text-[#1A237E] transition-colors duration-300 font-light tracking-wide cursor-pointer">About B</Link>
          <Link to="/canvas" className="text-white hover:text-[#1A237E] transition-colors duration-300 font-light tracking-wide cursor-pointer">Canvas</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-[#1A237E] transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
            <i className="fa fa-search text-lg"></i>
          </button>
          <button className="text-white hover:text-[#1A237E] transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
            <i className="fa fa-user text-lg"></i>
          </button>
          <button className="md:hidden text-white hover:text-[#1A237E] transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
            <i className="fa fa-bars text-lg"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
