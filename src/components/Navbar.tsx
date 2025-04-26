import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#1A1A1A] fixed w-full z-50">
        
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-light tracking-wider mr-10">
              <Link to="/" className="tracking-wide hover:text-[#283593] transition-colors duration-300 cursor-pointer">DREAM<span className="font-bold">HOME</span></Link>
              
            </h1>
            <nav className="hidden md:flex space-x-8">
              <Link to="/V1" className="text-sm font-light tracking-wide hover:text-[#283593] transition-colors duration-300 cursor-pointer">V1</Link>
              {/* <Link to="/V3" className="text-sm font-light tracking-wide hover:text-[#283593] transition-colors duration-300 cursor-pointer">V3</Link> */}
              {/* <Link to="/V6" className="text-sm font-light tracking-wide hover:text-[#283593] transition-colors duration-300 cursor-pointer">V6</Link> */}
              <Link to="/aboutA" className="text-sm font-light tracking-wide hover:text-[#283593] transition-colors duration-300 cursor-pointer">aboutA</Link>
              <Link to="/aboutB" className="text-sm font-light tracking-wide hover:text-[#283593] transition-colors duration-300 cursor-pointer">aboutB</Link>
              <Link to="/canvas" className="text-sm font-light tracking-wide hover:text-[#283593] transition-colors duration-300 cursor-pointer">Canvas</Link>
            </nav>
          </div>

          <div className="flex items-center space-x-6">
            <button className="hidden md:block text-sm bg-[#1A237E] hover:bg-[#283593] px-4 py-2 transition-colors duration-300 whitespace-nowrap cursor-pointer">
              List Property
            </button>
            <div className="flex space-x-4">
              <i className="fas fa-search text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"></i>
              <i className="fas fa-user text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"></i>
            </div>
            <button
              className="md:hidden text-white focus:outline-none cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-sm font-light tracking-wide hover:text-[#1A237E] transition-colors duration-300 cursor-pointer">Home</Link>
              <Link to="/V1" className="text-sm font-light tracking-wide hover:text-[#1A237E] transition-colors duration-300 cursor-pointer">V1</Link>
              <Link to="/V3" className="text-sm font-light tracking-wide hover:text-[#1A237E] transition-colors duration-300 cursor-pointer">V3</Link>
              <Link to="/V6" className="text-sm font-light tracking-wide hover:text-[#1A237E] transition-colors duration-300 cursor-pointer">V6</Link>
              <Link to="/aboutA" className="text-sm font-light tracking-wide hover:text-[#1A237E] transition-colors duration-300 cursor-pointer">aboutA</Link>
              <Link to="/aboutB" className="text-sm font-light tracking-wide hover:text-[#1A237E] transition-colors duration-300 cursor-pointer">aboutB</Link>
              <Link to="/canvas" className="text-sm font-light tracking-wide hover:text-[#1A237E] transition-colors duration-300 cursor-pointer">Canvas</Link>
              <button className="text-sm bg-[#1A237E] hover:bg-[#283593] px-4 py-2 self-start transition-colors duration-300 whitespace-nowrap cursor-pointer">
                List Property
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
