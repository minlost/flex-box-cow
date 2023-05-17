"use client"

import { AiOutlineHome } from "react-icons/ai"
import DarkModeBtn from "../buttons/DarkModeBtn"

import React from "react"
import Link from "next/link"

const Navbar = () => {
  return (
    <>
      <nav className="absolute right-2 lg:right-4 top-5 flex flex-col md:flex-row justify-end items-center gap-2 mt-20 md:mt-0">
        <Link href="/">
          <AiOutlineHome className="text-3xl hover:scale-105 ease-in-out duration-300 active:scale-110 cursor-pointer" />
        </Link>
        <DarkModeBtn />
      </nav>
    </>
  )
}

export default Navbar
