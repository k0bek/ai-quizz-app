'use client';



import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';

const NavBar = () => {
  const [user, setUser] = useState({
    email: 'robbie@mlab.com',
    avatar: 'https://via.placeholder.com/50',
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    console.log('Logging out...');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeDropdown);
    return () => {
      document.removeEventListener('mousedown', closeDropdown);
    };
  }, []);

  return (
    <nav className='flex justify-between items-center border-b border-gray-200 bg-white px-5 h-14 border-none shadow-none !shadow-none'>
      {/*  logo 's place */}
      <div className='flex items-center'>
        <ul className='flex space-x-6'>
          {/* Link to profile */}
        </ul>
      </div>
      <div className='flex items-center'>
        <div className='relative'>
          <img
            src={user.avatar}
            alt='User Avatar'
            className='rounded-full cursor-pointer w-10 '
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div ref={dropdownRef} className='absolute right-0 mt-2 w-48 bg-white border rounded-lg py-2'>
              <span className='block px-4 py-2 text-gray-800 font-semibold'>{user.email}</span>
              <Link href="/profile" className='block w-full text-left px-4 py-2 text-gray-700 hover:bg-white hover:text-gray-900 transition-colors'>
                Profile
              </Link>
              <button
                className='block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition-colors'
                onClick={handleLogout}
              >
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
