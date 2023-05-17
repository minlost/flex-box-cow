"use client"

import { useGlobalContext } from "@/context/GlobalContext"
import React, { use } from "react"

type FlexOptionsBtnProps = {
  buttonOption: string[]
  text: string
}

const FlexOptionsBtn = ({ buttonOption, text }: FlexOptionsBtnProps) => {
  const { setOption } = useGlobalContext()
  return (
    <button
      className="border py-1 px-2 text-sm hover :bg-gray-200 hover:bg-gray-200 ease-in-out  duration-300 active:scale-105 rounded-sm"
      onClick={() => setOption(buttonOption)}
    >
      {text}
    </button>
  )
}

export default FlexOptionsBtn
