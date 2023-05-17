"use client"

import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useCallback,
} from "react"

type FlexValue = {
  justifyContent: { value: string }
  alignItems: { value: string }
  flexDirection: { value: string }
  gap: { value: string }
  flexWrap: { value: string }
}

type DataContextType = {
  option: string[]
  setOption: React.Dispatch<React.SetStateAction<string[]>>
  flexValue: FlexValue
  setFlexValue: React.Dispatch<React.SetStateAction<FlexValue>>
  choosenOption: number
  setChoosenOption: React.Dispatch<React.SetStateAction<number>>
  openedCow: number | null
  setOpenedCow: React.Dispatch<React.SetStateAction<number | null>>
  cowStore: { animal: string }[]
  setCowStore: React.Dispatch<
    React.SetStateAction<{ animal: string; color: string }[]>
  >
  addCow: () => void
  removeCow: () => void
}

export const GlobalContext = createContext<DataContextType>({
  option: [],
  setOption: () => {},
  flexValue: {
    justifyContent: { value: "" },
    alignItems: { value: "" },
    flexDirection: { value: "" },
    gap: { value: "" },
    flexWrap: { value: "" },
  },
  setFlexValue: () => {},
  choosenOption: 0,
  setChoosenOption: () => {},
  openedCow: null,
  setOpenedCow: () => {},
  cowStore: [],
  setCowStore: () => {},
  addCow: () => {},
  removeCow: () => {},
})

type GlobalContextProps = {
  children: ReactNode
}

export const GlobalContextProvider = ({ children }: GlobalContextProps) => {
  const [option, setOption] = useState<string[]>([])
  const [flexValue, setFlexValue] = useState({
    justifyContent: { value: "flex-start" },
    alignItems: { value: "flex-start" },
    flexDirection: { value: "row" },
    gap: { value: "0" },
    flexWrap: { value: "nowrap" },
  })
  const [choosenOption, setChoosenOption] = useState(0)
  const [openedCow, setOpenedCow] = useState<number | null>(null)
  const [cowStore, setCowStore] = useState([
    { animal: "cow", color: "red" },
    { animal: "cow", color: "red" },
  ])
  const addCow = useCallback(() => {
    if (cowStore.length === 10) return
    setCowStore((prev) => [...prev, { animal: "cow", color: "red" }])
  }, [cowStore])
  const removeCow = useCallback(() => {
    if (cowStore.length === 1) return
    setCowStore((prev) => prev.slice(0, -1))
  }, [cowStore])

  return (
    <GlobalContext.Provider
      value={{
        option,
        setOption,
        flexValue,
        setFlexValue,
        choosenOption,
        setChoosenOption,
        openedCow,
        setOpenedCow,
        cowStore,
        setCowStore,
        addCow,
        removeCow,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
