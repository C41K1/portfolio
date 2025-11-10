'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar({ lang }: { lang: string }) {

    const [menu, setMenu] = useState(false);
    const [lingua, setLingua] = useState(false);

    return (
        <div className="w-screen fixed top-0 left-0 right-0 flex flex-row bg-[#00000055] justify-between md:justify-evenly z-90">
            <Link className="p-2" href={"/"}>
                <Image width={48} height={48} src={"/assets/c.png"} alt="Caiki" />
            </Link>
            <div className="hidden md:flex flex-row">
                <button onClick={() => { document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth", block: "start" }) }} className="h-full px-4 hover:bg-[#00000055]">{lang === 'pt-br' ? "Início" : "Home"}</button>
                <button onClick={() => { document.getElementById("educacao")?.scrollIntoView({ behavior: "smooth", block: "start" }) }} className="h-full px-4 hover:bg-[#00000055]">{lang === 'pt-br' ? "Educação" : "Education"}</button>
                <button onClick={() => { document.getElementById("skills")?.scrollIntoView({ behavior: "smooth", block: "start" }) }} className="h-full px-4 hover:bg-[#00000055]">{lang === 'pt-br' ? "Competências" : "Skills"}</button>
                <button onClick={() => { document.getElementById("contribuicoes")?.scrollIntoView({ behavior: "smooth", block: "start" }) }} className="h-full px-4 hover:bg-[#00000055]">{lang === 'pt-br' ? "Contribuições" : "Contributions"}</button>
                <button onClick={() => { document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth", block: "start" }) }} className="h-full px-4 hover:bg-[#00000055]">{lang === 'pt-br' ? "Projetos" : "Projects"}</button>
                <button onClick={() => { document.getElementById("contato")?.scrollIntoView({ behavior: "smooth", block: "start" }) }} className="h-full px-4 hover:bg-[#00000055]">{lang === 'pt-br' ? "Contato" : "Contact"}</button>
                <div className="items-center justify-center group relative flex flex-row p-4 hover:bg-[#00000055]">
                    <Image width={32} height={16} src={lang === "pt-br" ? "/assets/BR.svg" : "/assets/US.svg"} alt={lang === "pt-br" ? "idioma" : "language"} />
                    ⏷
                    <div className="hidden group-hover:flex flex-col absolute top-full gap-2 px-6 py-2 bg-[#00000055]">
                        <Link href={"/en-us"}>
                            <Image width={32} height={16} src={"/assets/US.svg"} alt={"english"} />
                        </Link>
                        <Link href={"/pt-br"}>
                            <Image width={32} height={16} src={"/assets/BR.svg"} alt={"português"} />
                        </Link>
                    </div>
                </div>
            </div>
            <button onClick={() => setMenu(true)} className="flex md:hidden p-2">
                <Image className="invert" width={24} height={24} src={"/assets/menu.svg"} alt={"menu"} unoptimized />
            </button>
            {
                menu && <div className="fixed top-0 right-0 w-[90vw] h-screen flex flex-col bg-slate-900 items-end justify-start pt-[2vh] animate-abrir">
                    <button onClick={() => setMenu(false)} className="w-full flex flex-row justify-between md:hidden p-6 border-b border-slate-500">
                        <label>Menu</label>
                        <Image className="invert -scale-x-100" width={24} height={24} src={"/assets/menu.svg"} alt={"menu"} unoptimized />
                    </button>
                    <button onClick={() => { document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth", block: "start" }); setMenu(false); }} className="w-full p-6 text-left border-b border-slate-500 active:bg-[#00000055]">{lang === 'pt-br' ? "Início" : "Home"}</button>
                    <button onClick={() => { document.getElementById("educacao")?.scrollIntoView({ behavior: "smooth", block: "start" }); setMenu(false); }} className="w-full p-6 text-left border-b border-slate-500 active:bg-[#00000055]">{lang === 'pt-br' ? "Educação" : "Education"}</button>
                    <button onClick={() => { document.getElementById("skills")?.scrollIntoView({ behavior: "smooth", block: "start" }); setMenu(false); }} className="w-full p-6 text-left border-b border-slate-500 active:bg-[#00000055]">{lang === 'pt-br' ? "Competências" : "Skills"}</button>
                    <button onClick={() => { document.getElementById("contribuicoes")?.scrollIntoView({ behavior: "smooth", block: "start" }); setMenu(false); }} className="w-full p-6 text-left border-b border-slate-500 active:bg-[#00000055]">{lang === 'pt-br' ? "Contribuições" : "Contributions"}</button>
                    <button onClick={() => { document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth", block: "start" }); setMenu(false); }} className="w-full p-6 text-left border-b border-slate-500 active:bg-[#00000055]">{lang === 'pt-br' ? "Projetos" : "Projects"}</button>
                    <button onClick={() => { document.getElementById("contato")?.scrollIntoView({ behavior: "smooth", block: "start" }); setMenu(false); }} className="w-full p-6 text-left border-b border-slate-500 active:bg-[#00000055]">{lang === 'pt-br' ? "Contato" : "Contact"}</button>
                    <div className={`items-end justify-center group relative flex flex-row p-4 ${lingua && "bg-[#00000055]"}`}>
                        <button className="flex flex-row" onClick={() => { setLingua(!lingua) }}>
                            <Image width={32} height={16} src={lang === "pt-br" ? "/assets/BR.svg" : "/assets/US.svg"} alt={lang === "pt-br" ? "idioma" : "language"} />
                            ⏷
                        </button>
                        <div className={`${lingua ? "flex" : "hidden"} flex-col absolute top-full gap-2 px-6 py-2 bg-[#00000055]`}>
                            <Link href={"/en-us"}>
                                <Image width={32} height={16} src={"/assets/US.svg"} alt={"english"} />
                            </Link>
                            <Link href={"/pt-br"}>
                                <Image width={32} height={16} src={"/assets/BR.svg"} alt={"português"} />
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}