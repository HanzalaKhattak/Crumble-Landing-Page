import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/crumbleLogo1.png"
import search from "../assets/search.png"
import user from "../assets/user.png"
import cart from "../assets/cart.png"
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className='bg-white shadow-md px-4 sm:px-8 py-4 sm:py-6 relative z-50'>
      
      {/* Top Row */}
      <div className='flex justify-between items-center'>
        {/* Logo */}
        <div className='w-[120px] sm:w-[180px] md:w-[250px]'>
          <img src={Logo} alt="Logo" className='w-full h-auto object-contain' />
        </div>

        {/* Desktop Links */}
        <div className='hidden sm:flex gap-6'>
          <Link to="/" className='text-[#050897] text-base md:text-lg hover:text-gray-600'>Home</Link>
          <Link to="/menu" className='text-[#050897] text-base md:text-lg hover:text-gray-600'>Menu</Link>
          <Link to="/careers" className='text-[#050897] text-base md:text-lg hover:text-gray-600'>Careers</Link>
        </div>

        {/* Right Side Icons */}
        <div className='flex items-center gap-4 sm:gap-6'>
          <img src={search} alt="search" className='w-5 h-5 sm:w-6 sm:h-6 md:w-[28px] md:h-[28px] cursor-pointer' onClick={() => setShowSearch(true)} />
          
          {/* Search bar */}
          <div className={`transition-all duration-500 ease-in-out overflow-hidden ${showSearch ? 'w-40 sm:w-64 opacity-100' : 'w-0 opacity-0'}`}>
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
              className="px-3 py-1 w-full rounded-full border border-gray-300 focus:outline-none"
              onBlur={() => setShowSearch(false)}
            />
          </div>

          <img src={user} alt="user" className='w-5 h-5 sm:w-6 sm:h-6 md:w-[28px] md:h-[28px] cursor-pointer' />
          <img src={cart} alt="cart" className='w-5 h-5 sm:w-6 sm:h-6 md:w-[28px] md:h-[28px] cursor-pointer' />

          {/* Hamburger Icon for Small Screens */}
          <button
            className='sm:hidden focus:outline-none text-[#050897]'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='sm:hidden mt-4 flex flex-col gap-4'>
          <Link to="/" className='text-[#050897] text-base hover:text-gray-600' onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/menu" className='text-[#050897] text-base hover:text-gray-600' onClick={() => setIsMobileMenuOpen(false)}>Menu</Link>
          <Link to="/careers" className='text-[#050897] text-base hover:text-gray-600' onClick={() => setIsMobileMenuOpen(false)}>Careers</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
