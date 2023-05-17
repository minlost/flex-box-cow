"use client"
import React, { useEffect } from "react"
import OptionBox from "./OptionBox"
import { alignItems } from "@/database/options"
import Board from "./Board"
import AddCowBox from "./AddCowBox"
import { useGlobalContext } from "@/context/GlobalContext"
import InfoBox from "./InfoBox"
import ContainerWithOptions from "./ContainerWithOptions"
import {
  flexDirection,
  gap,
  justifyContent,
  flexWrap,
} from "@/database/options"

type FlexOptions =
  | "justifyContent"
  | "alignItems"
  | "flexDirection"
  | "gap"
  | "flexWrap"

const optionsMapping: Record<FlexOptions, string[]> = {
  justifyContent: justifyContent,
  alignItems: alignItems,
  flexDirection: flexDirection,
  gap: gap,
  flexWrap: flexWrap,
}

export const ContainerMain = () => {
  const {
    option,
    setOption,
    flexValue,
    setFlexValue,
    choosenOption,
    setChoosenOption,
  } = useGlobalContext()

  useEffect(() => {
    setOption(justifyContent)
  }, [])

  useEffect(() => {
    setFlexValue((prev) => {
      const key = Object.keys(optionsMapping).find(
        (key) => optionsMapping[key as FlexOptions] === option
      ) as FlexOptions
      if (key) {
        return {
          ...prev,
          [key]: { value: option[choosenOption] },
        }
      }
      return prev
    })
  }, [choosenOption])

  useEffect(() => {
    const key = Object.keys(optionsMapping).find(
      (key) => optionsMapping[key as FlexOptions] === option
    ) as FlexOptions

    if (key && flexValue[key]) {
      setChoosenOption(
        option.findIndex((value) => value === flexValue[key].value)
      )
    }
  }, [option])

  return (
    <>
      <div className="w-full mb-5">
        <div className="flex flex-col  md:flex-row  md:justify-center md:mt-2">
          <Board />
          <div className="flex justify-center items-center flex-col gap-2    ">
            <AddCowBox />
            <ContainerWithOptions />
            <OptionBox />
          </div>
        </div>
        <InfoBox />
      </div>
    </>
  )
}
