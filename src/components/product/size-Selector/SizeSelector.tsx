import type { Size } from "@/interfaces"
import clsx from 'clsx';

interface Props {
    selectedSize?: Size;
    availableSizes: Size[];
    onSizeChanged : (size: Size) => void;
}
export const SizeSelector = ({selectedSize,availableSizes,onSizeChanged}: Props) => {
  return (
    <div className="my-5">
        <h3 className="font-bold mb-4">Tallas disponibles</h3>
        <div className="flex">
            {availableSizes.map(size => (
                <button 
                    key={size}
                    onClick={()=> onSizeChanged(size)} 
                    className={clsx(
                        "mx-2 hover:bg-blue-500 hover:text-white hover:rounded-md text-lg p-1",
                        {
                            'bg-blue-500  text-white rounded-md p-1': size === selectedSize
                        }
                    )}
                >
                    {size}
                </button>
            ))}
        </div>
    </div>
  )
}
