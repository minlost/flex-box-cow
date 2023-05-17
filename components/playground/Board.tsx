"use clienr"

import React from "react"
import Cow from "./Cow"
import { useGlobalContext } from "@/context/GlobalContext"

const Board = () => {
  const { flexValue, cowStore, setOpenedCow } = useGlobalContext()
  const { justifyContent, alignItems, flexDirection, gap, flexWrap } = flexValue

  const closeCow = () => {
    if (cowStore.length < 0) {
      return
    }
    if (cowStore.length > 0) {
      setOpenedCow(null)
    }
  }

  return (
    <div className="flex justify-center text-center " onClick={closeCow}>
      <div
        className={`bg-primary w-[300px] h-[300px]  border-b border-l border-r rounded-b-lg md:border-t md:rounded-t-lg flex p-2 `}
        style={{
          justifyContent: justifyContent.value,
          alignItems: alignItems.value,
          flexDirection: flexDirection.value as
            | "row"
            | "column"
            | "row-reverse"
            | "column-reverse"
            | undefined,
          gap: `${gap.value}`,
          flexWrap: flexWrap.value as "wrap" | "nowrap" | "wrap-reverse",
        }}
      >
        {cowStore.map((cow, index) => (
          <Cow key={index} index={index} />
        ))}
      </div>
    </div>
  )
}

export default Board
