import { FaFacebook } from "react-icons/fa"
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineInstagram,
} from "react-icons/ai"
import Link from "next/link"
const FooterLinks = () => {
  return (
    <div className="text-3xl text-secondary flex justify-center mb-2 gap-2 cursor-pointer">
      <Link href={"https://github.com/minlost"}>
        <AiFillGithub />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/v%C3%A1clav-vl%C4%8Dek-45a265158/"}
      >
        <AiFillLinkedin />
      </Link>
      <Link href={"https://www.facebook.com/vaclav.vlcek.581/"}>
        <FaFacebook />
      </Link>
      <Link href={"https://twitter.com/VlcakVac"}>
        <AiFillTwitterCircle />
      </Link>
      <Link href={"https://www.instagram.com/ramonevv/ "}>
        <AiOutlineInstagram />
      </Link>
    </div>
  )
}

export default FooterLinks
