"use client"

import React from "react"
import { justifyContent } from "@/database/options"
import { useGlobalContext } from "@/context/GlobalContext"

const OptionBox = () => {
  const { option, setChoosenOption, choosenOption } = useGlobalContext()
  return (
    <>
      <form className="grid grid-cols-2 gap-x-4 gap-y-1 md:max-h-[50px]">
        {option.map((value, index) => (
          <div className="radiobtn" key={index}>
            <input
              type="radio"
              id={value}
              name="drone"
              value={value}
              onChange={() => setChoosenOption(index)}
              checked={choosenOption === index}
            />
            <label className=" text-[13px]" htmlFor={value}>
              {value}
            </label>
          </div>
        ))}
      </form>
    </>
  )
}

export default OptionBox
