import Link from "next/link";

export default async function Location() {

  return (
    <>
       <div className="flex justify-center px-4 mx-auto sm:px-6 lg:px-8">
      <div className="flex flex-col w-full max-w-5xl lg:flex-row">
        <div className="flex flex-col items-center w-full mt-10 space-y-4 lg:w-1/2 lg:mt-5 ">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1121.427832672608!2d-98.21558048595581!3d19.018903017179053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc16a3a719f17%3A0xf08fcd41055ceb1e!2sXenavar%20Suplementos!5e0!3m2!1ses!2smx!4v1715836575475!5m2!1ses!2smx"  
            width="600" 
            height="450" 
            loading="lazy"
          />
        </div>
        <div className="flex flex-col items-center w-full mt-12 space-y-4 lg:w-1/2">
          <h1 className="text-3xl font-bold text-center md:mt-12 lg:text-4xl">Nos encontramos en</h1>
          <h2 className="font-sans text-xl text-center lg:text-xl">
          📍Calle Nuevo León #305 Col. El Cerrito, Puebla
          <p>⏰ Lunes de 10 A.M. -1:30 P.M.</p>
          <p>⏰Martes a Viernes de 10 A.M. - 7 P.M.</p>	
          <p>📞 222 456 8189</p>
          </h2>
        <div className="mt-4"></div>
          <Link href="https://api.whatsapp.com/send?phone=522224568189&text=Hola,%20tengo%20una%20consulta" target="_blank">
            <button className="relative w-48 h-12 overflow-hidden text-lg font-bold text-white bg-red-600 rounded-md animate__animated animate__heartBeat group">
            Escribenos
              <div className="absolute inset-0 w-full h-full transition-all duration-300 scale-0 rounded-md group-hover:scale-100 group-hover:bg-white/30"></div>
            </button>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}