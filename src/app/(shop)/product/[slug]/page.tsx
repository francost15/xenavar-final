export const revalidate = 60480;
import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { titleFont } from '@/config/fonts';
import { ProductMobileSlideshow, ProductSlideshow, QuantitySelector, SizeSelector, StockLabel } from '@/components';
import { getProductBySlug } from '@/actions';
import { AddToCart } from './ui/AddToCart';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import Link from 'next/link';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;
 
  // fetch data
  const product = await getProductBySlug(slug)
 
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: (product?.title ?? 'Product not found') + 'WIMX|TELECOM',
    description: product?.description ?? 'Product not found',
    openGraph: {
      title: product?.title ?? 'Product not found',
      description: product?.description ?? '',
      images: [`/products/${product?.images[1]}`],
    },
  }
}


export default async function ProductBySlugPage( { params }: Props ) {

  const { slug } = params;
  const product = await getProductBySlug(slug);

  if ( !product ) {
    notFound();
  }



  return (
    <div className="grid grid-cols-1 gap-3 mt-5 mb-20 md:grid-cols-3">

      {/* Slideshow */ }
      <div className="col-span-1 md:col-span-2 ">
        
        {/* Mobile Slideshow */}
        <ProductMobileSlideshow 
          title={ product.title }
          images={ product.images }
          className="block md:hidden"
        />
        
        {/* Desktop Slideshow */}
        <ProductSlideshow 
          title={ product.title }
          images={ product.images }
          className="hidden md:block"
        />

        
      </div>

      {/* Detalles */ }
      <div className="col-span-1 px-5">
        <StockLabel slug={product.slug} />
        <h1 className={ ` ${ titleFont.className } antialiased font-bold text-xl` }>
          { product.title }
        </h1>
        <p className="mb-5 text-2xl font-semibold">${ product.price }</p>
       {/* Addtocart */}
        <AddToCart product={product} />
        {/* Marca */ }
        {/* <h3 className="mt-4 text-sm font-bold">Marca</h3>
        <p className="font-light">
          { product.marcaId }
        </p> */}
        {/* Descripción */ }
        <h3 className="mt-4 text-sm font-bold">Descripción</h3>
        <p className="font-light">
          { product.description }
        </p>
        <Link
        href='https://api.whatsapp.com/send?phone=522224568189&text=Hola,%20me%20puede%20cotizar%20esto%20' target="_blank" rel="noopener noreferrer" 
        className='flex items-center p-2 mt-4 text-white bg-red-700 rounded-md w-44 hover:bg-red-600'>
          Mandar mensaje
          <IoChatbubbleEllipsesOutline className='flex w-5 h-5 ml-2'/>
        </Link>

      </div>

    </div>
  );
}