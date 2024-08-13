import Image from 'next/image';
import Link from 'next/link';


export const ProductTable = () => {
  return (
    <div className='w-full h-auto mt-6'>
    <div className="flex items-center justify-center grid-cols-3 space-x-9">
      <Link href="/marca/dragonpharma" className='ml-2'>
      <div className="border-2 rounded-md shadow-md card hover:border-red-700">
        <Image src="/imgs/dragonlogo.jpg" className="w-auto h-auto transition-all card-img-top opacity-70 hover:opacity-100" alt="logo-dragonpharma" width={100} height={100} />
      </div>
      </Link>
      <Link href="/marca/raw" className='ml-2'>
      <div className="border-2 rounded-md shadow-md card hover:border-red-700">
        <Image src="/imgs/rawlogo.jpg" className="w-auto h-auto transition-all card-img-top opacity-70 hover:opacity-100" alt="logo-raw" width={100} height={100} />
      </div>
      </Link>
      <Link href="/marca/gat" className='ml-2'>
      <div className="border-2 rounded-md shadow-md card hover:border-red-700">
        <Image src="/imgs/gatlogo.png" className="w-auto h-auto transition-all card-img-top opacity-70 hover:opacity-100" alt="logo-dragonpharma" width={100} height={100} />
      </div>
      </Link>
    </div>
    <div className="flex items-center justify-center grid-cols-3 mt-4 space-x-9">
      <Link href="/marca/mutant" className='ml-2'>
      <div className="bg-white border-2 rounded-md shadow-md card hover:border-red-700 ">
        <Image src="/imgs/mutantlogo.jpg" className="w-auto h-auto transition-all card-img-top opacity-70 hover:opacity-100" alt="logo1" width={100} height={100} />
      </div>
      </Link>
      <Link href="/marca/muscletech" className='ml-2'>
      <div className="bg-white border-2 rounded-md shadow-md card hover:border-red-700">
        <Image src="/imgs/musclelogo.png" className="w-auto h-auto transition-all card-img-top opacity-70 hover:opacity-100" alt="logo2" width={100} height={100} />
      </div>
      </Link>
      <Link href="/marca/insanelabz" className='ml-2'>
      <div className="bg-white border-2 rounded-md shadow-md card hover:border-red-700">
        <Image src="/imgs/insanelogo.png" className="w-auto h-auto transition-all card-img-top opacity-70 hover:opacity-100" alt="logo3" width={100} height={100} />
      </div>
      </Link>
    </div>
  </div>
  )
}
