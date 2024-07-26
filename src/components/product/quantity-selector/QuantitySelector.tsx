'use client'
import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
    quantity: number;
    onQuantityChanged: (quantity: number) => void;
}

export const QuantitySelector = ({ quantity,onQuantityChanged }: Props) => {
    const onValueChanged = (value: number) => {
        if (quantity + value <= 0) return;
        onQuantityChanged(quantity + value);
    };

    return (
        <div>
            <h3 className="font-bold mb-4">Cantidad</h3>
            <div className="flex">
                <button onClick={() => onValueChanged(-1)} title="-">
                    <IoRemoveCircleOutline size={30} />
                </button>
                <span className="w-20 mx-3 px-5 bg-gray-100 text-center rounded">
                    {quantity}
                </span>
                <button onClick={() => onValueChanged(1)} title="+">
                    <IoAddCircleOutline size={30} />
                </button>
            </div>
        </div>
    );
};
