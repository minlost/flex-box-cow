"use client"

import React from "react"
import FlexOptionsBtn from "../buttons/FlexOptionsBtn"
import {
  alignItems,
  flexDirection,
  flexWrap,
  gap,
  justifyContent,
} from "@/database/options"
const flexOptionsArr = [
  { buttonOption: justifyContent, text: "justify-content" },
  { buttonOption: alignItems, text: "align-items" },
  { buttonOption: flexDirection, text: "flex-direction" },
  { buttonOption: gap, text: "gap" },
  { buttonOption: flexWrap, text: "flex-wrap" },
]
const ContainerWithOptions = () => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <div className="flex flex-col justify-center items-center ">
          <h3 className=" text-xl">Volby flexu</h3>
          <div className="flex justify-center  gap-1  mt-2  flex-wrap w-[60%] justify ">
            {flexOptionsArr.map((option, index) => (
              <FlexOptionsBtn
                key={index}
                buttonOption={option.buttonOption}
                text={option.text}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ContainerWithOptions
