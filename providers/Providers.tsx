"use client"
import React from "react"

import { GlobalContextProvider } from "../context/GlobalContext"
import { ThemeProvider } from "next-themes"

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <GlobalContextProvider>{children}</GlobalContextProvider>
    </ThemeProvider>
  )
}

export default Providers
