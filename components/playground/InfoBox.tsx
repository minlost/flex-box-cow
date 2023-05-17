"use client"
import React from "react"
import {
  justifyContentText,
  alignItemsText,
  flexDirectionText,
  gapText,
  flexWrapText,
} from "@/database/guide"
import {
  flexDirection,
  gap,
  justifyContent,
  flexWrap,
  alignItems,
} from "@/database/options"
import { useGlobalContext } from "@/context/GlobalContext"

const InfoBox = () => {
  const { option, flexValue } = useGlobalContext()
  return (
    <>
      <div className="flex justify-center mt-2 px-4 pt">
        <div className=" rounded-lg">
          <div className="text-left md:min-w-[700px] px-[5px] py-[10px] flex justify-center  gap-5 text-[12px] text-lightblack flex-wrap bg-quaternary rounded-lg ">
            <ul className="w-[50%]">
              {option === alignItems
                ? alignItemsText.map((item, index) => (
                    <React.Fragment key={index}>
                      <li className="text-sm font-bold">{item.value}</li>
                      <li className="text-[11px]">{item.description}</li>
                    </React.Fragment>
                  ))
                : null}

              {option === flexDirection
                ? flexDirectionText.map((item, index) => (
                    <React.Fragment key={index}>
                      <li className="text-sm font-bold">{item.value}</li>
                      <li>{item.description}</li>
                    </React.Fragment>
                  ))
                : null}
              {option === justifyContent
                ? justifyContentText.map((item, index) => (
                    <React.Fragment key={index}>
                      <li className="text-sm font-bold">{item.value}</li>
                      <li>{item.description}</li>
                    </React.Fragment>
                  ))
                : null}
              {option === gap
                ? gapText.map((item, index) => (
                    <React.Fragment key={index}>
                      <li className="text-sm font-bold">{item.value}</li>
                      <li>{item.description}</li>
                    </React.Fragment>
                  ))
                : null}
              {option === flexWrap
                ? flexWrapText.map((item, index) => (
                    <React.Fragment key={index}>
                      <li className="text-sm font-bold">{item.value}</li>
                      <li>{item.description}</li>
                    </React.Fragment>
                  ))
                : null}
            </ul>
            <ul className="w-[30%]">
              <li>{".container {"}</li>
              <li>display: flex</li>
              <li>justify-content: {flexValue.justifyContent.value}</li>
              <li>align-items: {flexValue.alignItems.value}</li>
              <li>flex-direction: {flexValue.flexDirection.value}</li>
              <li>gap: {flexValue.gap.value}</li>
              <li>flex-wrap: {flexValue.flexWrap.value}</li>
            </ul>
            <div></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoBox
