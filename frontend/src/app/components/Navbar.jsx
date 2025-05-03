'use client';

import React, { useState } from 'react';
import { navBarLinks } from '../config/constants';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const CapitalizeFirstLetter = (string) => {
        return (typeof string !== 'string') ? string : string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <nav className='px-4 sm:px-20 flex fixed justify-between items-center w-full h-16 bg-transparent text-white z-50'>
            <div className='text-2xl font-bold'>3D Product</div>

            {/* Desktop Menu */}
            <ul className='hidden sm:flex space-x-4'>
                {navBarLinks.map((link, index) => (
                    link.href ? (
                        <Link href={link.href} key={index} className='hover:text-gray-400 cursor-pointer'>
                            {CapitalizeFirstLetter(link.name)}
                        </Link>
                    ) : (
                        <span key={index} className='hover:text-gray-400 cursor-pointer'>
                            {CapitalizeFirstLetter(link.name)}
                        </span>
                    )
                ))}
            </ul>

            {/* Hamburger Icon */}
            <div className="sm:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-black text-white p-4 sm:hidden">
                    <ul className='space-y-4 justify-center items-center flex flex-col'>
                        {navBarLinks.map((link, index) => (
                            link.href ? (
                                <Link href={link.href} key={index} className='block hover:text-gray-400'>
                                    {CapitalizeFirstLetter(link.name)}
                                </Link>
                            ) : (
                                <span key={index} className='block hover:text-gray-400'>
                                    {CapitalizeFirstLetter(link.name)}
                                </span>
                            )
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;