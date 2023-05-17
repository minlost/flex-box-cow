import Header from "@/components/Homepage/Header"
import Main from "@/components/Homepage/Main"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <div className="flex mt-5 md:mt-20 justify-center items-center flex-col mx-5  ">
        <div className=" md:w-[90%] lg:w-[60%] ">
          <Header />
          <Main />
        </div>
      </div>
    </>
  )
}
