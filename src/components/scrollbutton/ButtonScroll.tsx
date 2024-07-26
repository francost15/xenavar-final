'use client';

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { IoChevronUp } from "react-icons/io5";

export const ButtonScroll = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisible);
        return () => {
            window.removeEventListener("scroll", toggleVisible);
        };
    }, []);

    return (
        <div className='fixed bottom-4 right-4 transition-opacity duration-500'>
            <button
                title="click-scroll"
                onClick={scrollToTop}
                className={`bg-black rounded-full p-2 text-white transition-all hover:bg-gray-800 ${visible ? 'opacity-100' : 'opacity-0'}`}>
                <IoChevronUp size={20} />
            </button>
        </div>
    );
};