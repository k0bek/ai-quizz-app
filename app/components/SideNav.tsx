// components/SideNav.tsx
'use client'
import Link from 'next/link';
import React from 'react';

const SideNav = () => {
  return (
    <div className='w-64 h-full border-r border-gray-200 bg-white p-4'>
      <ul className='space-y-2'>
        <li>
          <Link href="/" className='block py-2 px-4 rounded hover:bg-gray-100 transition-colors'>
            Dashboard
          </Link>
        </li>
        {/* Add more navigation items here */}
      </ul>
    </div>
  );
};

export default SideNav;
