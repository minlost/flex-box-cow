import React from "react"
import FooterLinks from "./FooterLinks"

function Footer() {
  return (
    <>
      <footer className="w-full pt-3 pb-1 flex-col text-center  mt-auto bg-primary ">
        <FooterLinks />

        <span className="text-secondary text-center">
          &#169; Václav Vlček - 2023
        </span>
      </footer>
    </>
  )
}

export default Footer
