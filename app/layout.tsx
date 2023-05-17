import Providers from "@/providers/Providers"
import "./globals.css"
import { Anton, Inter } from "next/font/google"
import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"

const anton = Anton({
  weight: ["400"],
  subsets: ["latin"],
})

export const metadata = {
  title: "Flex-Box Cow - Home",
  description: "Virtualní playground pro učení se flexboxu",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`bg-tertiary dark:bg-lightblack dark:text-lightwhite text-lightblack flex min-h-screen flex-col ${anton.className} `}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
