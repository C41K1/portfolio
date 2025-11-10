import Link from "next/link";

export default function Footer({ lang }: { lang: string }) {



    return (
        <p className="w-screen h-[20vh] flex flex-col items-center justify-end bg-linear-to-l from-slate-900 to-indigo-950">{lang === "pt-br" && "Design original do Banner por "} {lang === "en-us" && "Original Banner Design by "} <Link href="https://www.vector4free.com/">vector4free.com</Link></p>
    )
}