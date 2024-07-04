import { titleFont } from "@/config/fonts"
import Image from "next/image"
import Link from "next/link"

export const PageNotFount = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-[600px] w-full justify-center items-center align-middle">
        <div className="text-center px-5 mx-5">
            <h2 className={`${titleFont.className} antialiased text-8xl text-blue-900`}>404</h2>
            <p className="font-semibold">Oops! Lo sentimos mucho</p>
            <p className="font-light">
                <span>Puedes regresar al </span>
                <Link
                href='/'
                className="font-normal hover:underline transition-all">
                    Inicio
                </Link>
            </p>
        </div>
        <div className="ox-5 mx-5">
            <Image
            src="/imgs/starman_750x750.png"
            alt="starman"
            className="p-5 sm:p-0"
            width={550}
            height={550}/>

        </div>
    </div>
  )
}
