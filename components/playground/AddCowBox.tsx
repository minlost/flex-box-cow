"use client"
import { useGlobalContext } from "@/context/GlobalContext"
import { BsPatchPlus } from "react-icons/bs"
import { BsPatchMinus } from "react-icons/bs"

const AddCowBox = () => {
  const { addCow, removeCow } = useGlobalContext()
  return (
    <>
      <div>
        <h3 className="text-center">Přídej krávu</h3>
        <div className=" flex justify-center  items-center gap-4 tex-3xl  p-1">
          <BsPatchPlus
            className="text-3xl active:scale-110 ease-in-out duration-300 hover:scale-105 "
            onClick={addCow}
          />
          <BsPatchMinus
            className="text-3xl active:scale-110 ease-in-out duration-300 hover:scale-105 "
            onClick={removeCow}
          />
        </div>
      </div>
    </>
  )
}

export default AddCowBox
