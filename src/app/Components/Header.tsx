"use client"

import { userInfo,headerItem } from '../constans/constant'
import { TiThMenu } from "react-icons/ti"
import React, { useState } from 'react'
import { NavItem } from '../models/User';
import {Link as ScrollLink }  from 'react-scroll';



const Header: React.FC = () => {
    const [NavItem, showNavItems] =useState<boolean>  (false)

  return (
        <header className='bg-black text-white p-6 justify-between fixed top-0  z-10 w-full md:flex'>

            {/* Left Part of Navbar */}

            <div className='flex justify-between'>
                <h2 className='text-2xl font-bold'>{userInfo.name}</h2>
                <TiThMenu 
                size={25}
                className='md:hidden'
                onClick={()=> showNavItems (prevState => !prevState)}
                />
            </div>

            {/* Right Part of Navbar */}

            <div className={`mr-8 md:space-x-6 mt-3 md:mt-0 md:block ${NavItem ? "block" : "hidden" } `}> 
            

                {
                    Object.keys (headerItem).map(item=>(
                        <ScrollLink
                            to={headerItem[item as keyof NavItem].page}
                            key={headerItem[item as keyof NavItem].label}
                            className='block md:inline-block cursor-pointer hover:text-pink-700'
                            spy={true}
                            smooth={true}
                        >{headerItem[item as keyof NavItem].label}</ScrollLink>
                    ))
                }
            </div>
        </header>
  );
};

export default Header