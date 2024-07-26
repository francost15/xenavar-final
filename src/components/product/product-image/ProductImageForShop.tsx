"use client"
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import Image from "next/image"
interface Props{
    src?: string;
    alt: string;
    className?: React.StyleHTMLAttributes<HTMLImageElement>['className'];
    style?: React.StyleHTMLAttributes<HTMLImageElement>['style'];
    width: number;
    height: number;
}
export const ProductImageForShop = ({src,alt,className,width,height,style}:Props) => {
    const localSrc = (src) 
    ? src.startsWith('http')
    ? src
    : `/products/${src}`
    : '/imgs/placeholder.jpg'
    return(
      <Zoom>
        <Image 
        src={localSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={style}
        />
      </Zoom>
  )
}
