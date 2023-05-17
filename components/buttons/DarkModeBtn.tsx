"use client"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { FiSun } from "react-icons/fi"
import { FaRegMoon } from "react-icons/fa"

const DarkModeBtn = () => {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const currentTheme = theme === "system" ? systemTheme : theme

  return (
    <div>
      {currentTheme === "dark" ? (
        <FiSun
          className="h-6 w-6  text-lightwhite hover:scale-105 ease-in-out duration-300 active:scale-110 cursor-pointer"
          onClick={() => {
            setTheme("light")
          }}
        />
      ) : (
        <FaRegMoon
          className="h-6 w-6  text-lightblack hover:scale-105 ease-in-out duration-300 active:scale-110 cursor-pointer"
          onClick={() => {
            setTheme("dark")
          }}
        />
      )}
    </div>
  )
}
export default DarkModeBtn
