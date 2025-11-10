'use client'

import { useEffect, useState } from "react"

export default function Digitando({ texto, delay, cor }: { texto: string, delay: number, cor?: boolean }) {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < texto.length) {
            setTimeout(() => {
                setIndex(index + 1);
            }, delay)
        }
    }, [delay, index, texto.length])




    return (
        <label className={`font-righteous text-sm md:text-lg font-bold text-center max-w-[95vw] md:max-w-[50vw] ${cor ? "text-transparent bg-linear-to-r from-cyan-500 to-fuchsia-500 bg-clip-text" : "text-gray-300"}`}>{texto.slice(0, index)}<span className="animate-pisca text-white text-xl">|</span></label>
    )
}