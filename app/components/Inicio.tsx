'use client'
import Link from "next/link";
import Image from "next/image";
import Digitando from "./Digitando"

export default function Inicio({ lang }: { lang: string }) {
    return (
        <div id="inicio" className="w-screen flex flex-col bg-linear-to-r from-slate-900 to-indigo-950 items-center justify-center pt-[25vh] gap-10">
            <h1 className="font-righteous text-lg md:text-5xl font-bold text-center text-transparent bg-linear-to-r from-cyan-500 to-fuchsia-500 bg-clip-text">{lang === "pt-br" ? "Olá, eu sou o Caiki" : "Hello, I am Caiki"}</h1>
            <label className="text-xl font-bold animate-pulse md:text-5xl">{lang === "pt-br" ? "Engenheiro de Software" : "Software Engineer"}</label>
            <Digitando texto={lang === "pt-br" ? "Sou um desenvolvedor de software apaixonado, com especialidade em desenvolvimento web e mobile, utilizando JavaScript, TypeScript, React Native e NextJS. Construo experiências interativas e aplicações web, combinando tecnologias de front-end e back-end. Com forte foco em código limpo, colaboração e aprendizado contínuo, busco criar soluções inovadoras que aprimoram as experiências do usuário." : "I'm a passionate software developer with expertise in web and mobile development using JavaScript, TypeScript, React Native, and NextJS. I build interactive experiences and web applications, leveraging both front-end and back-end technologies. With a strong focus on clean code, collaboration, and continuous learning, I strive to create innovative solutions that enhance user experiences."} delay={50} />
            <div className="flex flex-row gap-4">
                <Link className="hover:animate-pulse active:animate-ping" href={"https://github.com/C41K1"}>
                    <Image className="w-10 aspect-square invert" width={512} height={512} src={"/assets/github.svg"} alt={"github"} unoptimized/>
                </Link>
                <Link className="hover:animate-pulse active:animate-ping" href={"https://linkedin.com/in/caiki"}>
                    <Image className="w-10 aspect-square" width={512} height={512} src={"/assets/linkedin.svg"} alt={"linkedin"} unoptimized />
                </Link>
                <Link className="hover:animate-pulse active:animate-ping" href={"mailto:caiki2003@gmail.com"}>
                    <Image className="w-10 aspect-square" width={512} height={512} src={"/assets/email.svg"} alt={"email"} unoptimized />
                </Link>
            </div>
            <button className="w-screen h-[10vh] cursor-pointer text-5xl animate-bounce mt-[10vh] md:mt-[20vh] flex items-center justify-center" onClick={() => { document.getElementById("educacao")?.scrollIntoView({ behavior: "smooth", block: "start" }) }}>
                <Image className="w-10 aspect-square invert" width={512} height={512} src={"/assets/seta.svg"} alt={"descer"} unoptimized />
            </button>
        </div>
    )
}