"use client"
import { Pacifico } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import cow from "../../public/assets/cow.png"

const pacifico = Pacifico({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
})

const Header = () => {
  return (
    <header>
      <div className="text-center">
        <h1 className={`text-6xl  ${pacifico.className} `}>
          Nauč se flexbox s
        </h1>
        <div className="flex justify-center items-center">
          <Link href="/playground">
            <Image
              src={cow}
              width={100}
              height={100}
              alt="cow"
              className="cursor-pointer mt-5 hover:scale-105 ease-in-out duration-300 "
            />
          </Link>
        </div>
      </div>
      <div className="p-5  md:mt-6">
        <p>
          Flexbox a Grid jsou relativně pokročilé způsoby vytváření layoutu
          stránky, které mohou na začátku působit komplikovaně. Nicméně, jakmile
          se s nimi seznámíte, objevíte, že jsou velmi mocné a efektivní.
        </p>
        <p>
          Rád bych vám představil jednoduchý playground, kde si můžete
          vyzkoušet, jak Flexbox funguje a jak s ním pracovat. Zde si můžete
          vytvořit a upravovat flexibilní rozložení prvků a experimentovat s
          jejich zarovnáním a velikostí.
        </p>
        <div className="mt-5 flex justify-center  ">
          <Link href="/playground">
            <button className="border px-4 py-2 rounded-lg text-3xl hover:bg-primary hover:text-lightwhite ease-in-out duration-300 shadow-xl active:scale-105">
              PlayGround <span className="flex  justify-center ">👉</span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
