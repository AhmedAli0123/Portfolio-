"use client"

import { userInfo, headerItem } from '../constans/constant'
import { TiThMenu } from "react-icons/ti"
import React, { useState, useRef, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'

const Header: React.FC = () => {
    const [NavItem, showNavItems] = useState<boolean>(false)
    const navRef = useRef<HTMLDivElement>(null)

    const handleNavItemClick = () => {
        showNavItems(false) // Hide navbar when a link is clicked
    }

    const toggleNav = () => {
        console.log("Toggle menu:", !NavItem);  // Debugging: check state toggle
        showNavItems(prevState => !prevState)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                showNavItems(false) // Close navbar if clicked outside
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <header className='bg-black text-white p-6 justify-between fixed top-0 z-10 w-full md:flex'>

            {/* Left Part of Navbar */}
            <div className='flex justify-between'>
                <h2 className='text-2xl font-bold'>{userInfo.name}</h2>
                <TiThMenu 
                    size={25}
                    className='md:hidden cursor-pointer'
                    onClick={toggleNav} // Toggle navbar on click
                />
            </div>

            {/* Right Part of Navbar with smooth transition */}
            <div
                ref={navRef}
                className={`gap-2 flex flex-col absolute top-[2.5rem] left-[60%] bg-black w-[86.25px] md:w-[380px] md:static md:flex-row transition-all duration-300 ease-in-out  ${NavItem ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden md:flex md:opacity-100 md:max-h-full`}
            >
                <ScrollLink
                    to={headerItem.home.page}
                    smooth={true}
                    duration={500}
                    className='ml-3 cursor-pointer hover:text-pink-600 font-bold'
                    onClick={handleNavItemClick}
                    
                >
                    {headerItem.home.label}
                </ScrollLink>
                <ScrollLink
                    to={headerItem.about.page}
                    smooth={true}
                    duration={500}
                    className='ml-3 cursor-pointer hover:text-pink-600 font-bold'
                    onClick={handleNavItemClick}
                >
                    {headerItem.about.label}
                </ScrollLink>
                <ScrollLink
                    to={headerItem.skills.page}
                    smooth={true}
                    duration={500}
                    className='ml-3 cursor-pointer hover:text-pink-600 font-bold'
                    onClick={handleNavItemClick}
                >
                    {headerItem.skills.label}
                </ScrollLink>
                <ScrollLink
                    to={headerItem.projects.page}
                    smooth={true}
                    duration={500}
                    className='ml-3 cursor-pointer hover:text-pink-600 font-bold'
                    onClick={handleNavItemClick}
                >
                    {headerItem.projects.label}
                </ScrollLink>
                <ScrollLink
                    to={headerItem.contact.page}
                    smooth={true}
                    duration={500}
                    className='ml-3 cursor-pointer hover:text-pink-600 font-bold'
                    onClick={handleNavItemClick}
                >
                    {headerItem.contact.label}
                </ScrollLink>
            </div>
        </header>
    )
}

export default Header
