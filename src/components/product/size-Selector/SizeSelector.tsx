import type { Flavors} from "@/interfaces"
import clsx from 'clsx';

interface Props {
    selectedFlavor?: Flavors;
    availableFlavors: Flavors[];
    onFlavorChanged : (flavor: Flavors) => void;
}
export const SizeSelector = ({
    selectedFlavor,
    availableFlavors,
    onFlavorChanged
}: Props) => {
return (
    <div className="my-5">
        <h3 className="mb-4 font-bold">Sabores disponibles</h3>
        <div className="flex text-xs sm:text-sm md:text-md lg:text-lg xl:text-md">
            {availableFlavors.map(flavor => (
                <button 
                    key={flavor}
                    onClick={()=> onFlavorChanged(flavor)} 
                    className={clsx(
                        "mx-2 hover:bg-black hover:text-white hover:rounded-md  p-1",
                        {
                            'bg-black  text-white rounded-md p-1': flavor === selectedFlavor
                        }
                    )}
                >
                    {flavor}
                </button>
            ))}
        </div>
    </div>
)
}
