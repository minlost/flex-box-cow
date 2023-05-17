"use client"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import cow from "../../public/assets/cow.png"
import { useGlobalContext } from "@/context/GlobalContext"

type CowProps = {
  index: number
}

const Cow = ({ index }: CowProps) => {
  const { openedCow, setOpenedCow, cowStore } = useGlobalContext()
  const [bgValue, setBgValue] = useState(
    "bg-red-500" || "bg-yellow-500" || "bg-primary" || "bg-purple-600"
  )
  const [orderValue, setOrderValue] = useState(0)
  const isOpen = index === openedCow

  useEffect(() => {
    setOrderValue(0)
  }, [])

  const openFunc = () => {
    if (isOpen) {
      setOpenedCow(null)
    } else {
      setOpenedCow(index)
    }
  }

  const setBgValueFunc = (value: string) => {
    setBgValue(value)
  }

  return (
    <div
      className={`w-[50px] h-[50px] flex justify-center items-center relative hover:scale-105 ease-in-out ${bgValue}`}
      style={{ order: orderValue }}
    >
      <div
        className={`absolute ${
          isOpen ? "block" : "hidden"
        } bg-white w-[150px] h-[150px] top-10 rounded z-10`}
      >
        <div className="flex justify-center items-center text-[10px] gap-1 p-2 pt-4">
          <button
            className="w-[20px] h-[15px] bg-red-500"
            onClick={() => setBgValueFunc("bg-red-500")}
          ></button>

          <button
            className="w-[20px] h-[15px] bg-yellow-500"
            onClick={() => setBgValueFunc("bg-yellow-500")}
          ></button>

          <button
            className="w-[20px] h-[15px] bg-primary"
            onClick={() => setBgValueFunc("bg-primary")}
          ></button>
          <button
            className="w-[20px] h-[15px] bg-purple-600"
            onClick={() => setBgValueFunc("bg-purple-600")}
          ></button>
        </div>
        <div>
          <h3 className="text-center text-sm">Order:</h3>
          <div className="flex gap-x-3 justify-center flex-wrap">
            {cowStore.map((cow, index) => (
              <button
                key={index}
                value={index}
                onClick={() => setOrderValue(index)}
              >
                {index}
              </button>
            ))}
          </div>
          <div>Můj order: {orderValue}</div>
          <div>Kráva č. {index + 1}</div>
        </div>
      </div>

      <Image
        src={cow}
        fill={true}
        alt="cow"
        onClick={() => openFunc()}
        className="cursor-pointer "
      />
    </div>
  )
}

export default Cow
