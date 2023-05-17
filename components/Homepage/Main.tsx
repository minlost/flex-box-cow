import { Content, Pacifico } from "next/font/google"
import Link from "next/link"
import React from "react"

const pacifico = Pacifico({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
})

const Main = () => {
  return (
    <>
      <h2 className={`${pacifico.className} text-3xl mb-4 `}>
        a proč vlastně...?
      </h2>

      <main className="px-10 mb-10 ">
        <ul className="list-disc">
          <li>
            Jednoduchá syntaxe: Flexbox má relativně jednoduchou syntaxi, což
            usnadňuje rychlé a efektivní vytváření flexibilních rozložení a
            uspořádání prvků na webové stránce.
          </li>
          <li>
            Responsivní design: Flexbox je skvělý pro tvorbu responsivního
            designu a snadno se přizpůsobuje různým zařízením a obrazovkám.
          </li>
          <li>
            Jednoduché zarovnání prvků: Flexbox umožňuje snadné zarovnání prvků
            ve vodorovném i svislém směru bez složitého kódu.
          </li>
          <li>
            Flexibilní řazení prvků: S Flexboxem můžete snadno změnit pořadí
            prvků na základě potřeby a upravit jejich pořadí na různých
            rozlišeních.
          </li>
          <li>
            Podpora v React Native: Flexbox je v React Native používán jako
            výchozí způsob uspořádání prvků, což usnadňuje tvorbu responzivních
            uživatelských rozhraní a kompatibilitu napříč platformami.
          </li>
        </ul>
        <div className="w-full border-dashed border-b border-lightblack my-10"></div>
      </main>

      <h2 className={`${pacifico.className} text-3xl mb-4  `}>
        {" "}
        prosím o zpětnou vazbu...
      </h2>
      <section className="m-5">
        <p className="md:mx-10">
          Pokud jste si oblíbili PlayGround a máte nápady na zlepšení nebo
          přidání nových funkcí, rád bych o nich slyšel. Prosím, kontaktujte mě
          prostřednictvím jedné ze sociálních sítí, které najdete v zápatí
          stránky. Kromě toho je k dispozici i GitHub repozitář, na kterém
          můžete najít a případně přispět k dalšímu rozvoji projektu. Vaše
          zpětná vazba a příspěvky jsou vítány a pomáhají nám vytvářet lepší
          nástroje pro vás a další vývojáře. Děkuji!{" "}
          <Link
            href={"https://github.com/minlost/flex-box-cow"}
            className="text-2xl"
          >
            GITHUB
          </Link>
        </p>
      </section>
    </>
  )
}

export default Main
