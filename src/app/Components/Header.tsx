"use client";

import { userInfo, headerItem } from "../constans/constant";
import { TiThMenu } from "react-icons/ti";
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { ThemeBtn } from "@/components/Theme-btn";
import { Sheet, SheetTrigger, SheetContent, SheetHeader } from "@/components/ui/sheet";

const Header: React.FC = () => {
  return (
    <header className="p-6 justify-between fixed top-0 w-full flex items-center border-b backdrop-blur z-10">
      {/* Left Part: Logo */}
      <h2 className="text-2xl font-bold">{userInfo.name}</h2>

      {/* Right Part for Desktop */}
      <nav className="hidden md:flex gap-4 items-center">
        <ScrollLink
          to={headerItem.home.page}
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-pink-600 font-bold"
        >
          {headerItem.home.label}
        </ScrollLink>
        <ScrollLink
          to={headerItem.about.page}
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-pink-600 font-bold"
        >
          {headerItem.about.label}
        </ScrollLink>
        <ScrollLink
          to={headerItem.skills.page}
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-pink-600 font-bold"
        >
          {headerItem.skills.label}
        </ScrollLink>
        <ScrollLink
          to={headerItem.projects.page}
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-pink-600 font-bold"
        >
          {headerItem.projects.label}
        </ScrollLink>
        <ScrollLink
          to={headerItem.contact.page}
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-pink-600 font-bold"
        >
          {headerItem.contact.label}
        </ScrollLink>
        <ThemeBtn />
      </nav>

      {/* Mobile View: Sheet Component */}
      <div className="md:hidden flex items-center gap-4">
        <Sheet>
          <SheetTrigger>
            <TiThMenu size={25} className="cursor-pointer" />
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <nav className="flex flex-col gap-4">
                <ScrollLink
                  to={headerItem.home.page}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-pink-600 font-bold"
                >
                  {headerItem.home.label}
                </ScrollLink>
                <ScrollLink
                  to={headerItem.about.page}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-pink-600 font-bold"
                >
                  {headerItem.about.label}
                </ScrollLink>
                <ScrollLink
                  to={headerItem.skills.page}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-pink-600 font-bold"
                >
                  {headerItem.skills.label}
                </ScrollLink>
                <ScrollLink
                  to={headerItem.projects.page}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-pink-600 font-bold"
                >
                  {headerItem.projects.label}
                </ScrollLink>
                <ScrollLink
                  to={headerItem.contact.page}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-pink-600 font-bold"
                >
                  {headerItem.contact.label}
                </ScrollLink>
              </nav>
            </SheetHeader>
          </SheetContent>
        </Sheet>
                <ThemeBtn />
      </div>
    </header>
  );
};

export default Header;