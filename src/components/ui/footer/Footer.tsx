import { titleFont } from "@/config/fonts"
import Link from "next/link"
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io5"

export const Footer = () => {
  return (
        <>
    <div className="flex justify-center w-full text-xs">
        <Link href="/">
        <span className={`${titleFont.className} antialised font-bold text-red-700`}>Xenavar</span>
        <span className="font-bold"> | Suplements</span>
        <span> © {new Date().getFullYear()}</span>
        </Link>
    </div>
    <div className="flex justify-center w-full text-xs">
        <span>Todos los derechos reservados.</span>
    </div>
    <div className="flex justify-center w-full mt-2 text-xs font-bold text-center">
        <Link href="/location" className="ml-3 hover:text-red-700 ">
            Ubicaciones
        </Link>
        <Link
        className="mx-5 hover:text-red-700"  
        href='https://api.whatsapp.com/send?phone=522224568189&text=Hola,%20me%20puede%20cotizar%20esto%20' target="_blank" rel="noopener noreferrer" >
            Contacto
        </Link>
    </div>
    <div className="flex justify-center w-full mt-4 space-x-3 text-xs">
    <Link href="https://www.facebook.com/profile.php?id=100086923053408&locale=es_LA" className="transition-colors hover:text-red-700" target="_blanck">
        <IoLogoFacebook className="text-2xl" />
    </Link>
    <Link href="https://www.instagram.com/xenavar_suplementos/" className="transition-colors hover:text-red-700" target="_blanck">
        <IoLogoInstagram className="text-2xl" />
    </Link>
    </div>
        </>
  )
}
