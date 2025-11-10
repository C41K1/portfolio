'use client'

import Image from "next/image";

export default function Projetos({ lang }: { lang: string }) {
    return (
        <div id="projetos" className="w-screen flex flex-col bg-linear-to-l from-slate-900 to-indigo-950 items-center py-[5vh] gap-10">
            <h2 className="font-righteous text-lg md:text-5xl font-bold text-center text-transparent bg-linear-to-r from-cyan-500 to-fuchsia-500 bg-clip-text">{lang === "pt-br" ? "Projetos" : "Projects"}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] md:w-[80%] lg:w-[70%] gap-16">
                {
                    (lang === 'pt-br' ? lista : list).map((proj, index) => <button onClick={() => document.location.href = proj.link} className="bg-[#00000055] rounded-3xl hover:scale-110 duration-300 cursor-pointer group" key={index}>
                        <Image className="rounded-t-3xl w-full aspect-video object-cover" width={512} height={256} src={`/assets/projetos/${proj.image}.png`} alt={proj.titulo} />
                        <div className="p-4 flex flex-col gap-2">
                            <label className="text-lg font-bold md:text-2xl text-left">{proj.titulo}</label>
                            <p className="text-gray-400 text-left">{proj.desc}</p>
                            <Image className="w-auto h-8" width={512} height={128} src={`https://skillicons.dev/icons?i=${proj.skills}&theme=dark&perline=15`} alt={"skills"} unoptimized />
                            <label className="w-full text-right text-lg pr-4 after:content-['↗'] text-slate-700 group-hover:scale-110 group-hover:text-cyan-600 duration-300">Github</label>
                        </div>
                    </button>)
                }
                <div className="bg-[#00000055] rounded-3xl hover:scale-110 duration-300 cursor-pointer flex flex-col items-center justify-center gap-2">
                    <label className="text-2xl font-bold md:text-5xl text-center">+</label>
                    <p className="text-gray-400 text-center">{lang === "pt-br" ? "Buscando Adicionar Mais a Essa Lista" : "Looking to Add More to This List"}</p>

                </div>
            </div>
        </div>
    );
}

const lista = [
    {
        "image": "campus_cultural",
        "titulo": "Campus Cultural",
        "desc": "Aplicativo feito em conjunto com minha turma para gerenciar os eventos do Campus. Atuei como Líder Técnico e programador Full-Stack.",
        "skills": "javascript,typescript,react,nestjs,prisma",
        "link": "https://github.com/Fabrica-de-Software-2024/CampusCultural"
    },
    {
        "image": "indhuge",
        "titulo": "Indhuge Landing Page",
        "desc": "Landing Page para a startup Indhuge que desenvolvi enquanto participava do projeto. Aprendi muito sobre Frameworks Web e SEO durante a produção.",
        "skills": "javascript,typescript,nextjs,tailwindcss,materialui,sequelize,supabase,vercel",
        "link": "https://github.com/indhuge/ind-huge-landing-page"
    },
    {
        "image": "sannus",
        "titulo": "Sannus",
        "desc": "E-commerce de Farmácia completo com dashboard de métricas de vendas, SEO e CMS integrado.",
        "skills": "javascript,typescript,nextjs,tailwindcss,materialui,vercel,aws,nestjs,prisma",
        "link": "https://github.com/Fabrica-de-Software-2024/CampusCultural"
    },
    {
        "image": "estoque",
        "titulo": "Sistema de Estoque",
        "desc": "Sistema básico de gestão de estoque feito com React Native para Windows e utilizando um backend com APIs do NextJS.",
        "skills": "javascript,typescript,react,dotnet,visualstudio,nextjs,supabase",
        "link": "https://github.com/C41K1/SistemaEstoque"
    },
    {
        "image": "gateway",
        "titulo": "Gateway",
        "desc": "Projeto de Gateway básico usando Springboot.",
        "skills": "java,spring,supabase",
        "link": "https://github.com/C41K1/Projeto-Springboot"
    },
    {
        "image": "updater",
        "titulo": "Atualizador de Modpack",
        "desc": "Atualizador de Modpack de Minecraft. O programa atualiza o modpack utilizando o versionamento de um repositório do GitHub.",
        "skills": "javascript,nodejs,electron,github",
        "link": "https://github.com/C41K1/CSMP-Updater"
    },
    {
        "image": "cep",
        "titulo": "Buscador de CEP",
        "desc": "Buscador de CEP básico usando Java Swing.",
        "skills": "java",
        "link": "https://github.com/C41K1/Buscador-de-CEP-JAVA"
    },
    {
        "image": "minado",
        "titulo": "Campo Minado em C",
        "desc": "Campo Minado funcional no terminal, feito em C.",
        "skills": "c",
        "link": "https://github.com/C41K1/CampoMinadoC"
    }
]

const list = [
    {
        "image": "campus_cultural",
        "titulo": "Campus Cultural",
        "desc": "Application built with my class to manage Campus events. I acted as Technical Lead and Full-Stack Developer.",
        "skills": "javascript,typescript,react,nestjs,prisma",
        "link": "https://github.com/Fabrica-de-Software-2024/CampusCultural"
    },
    {
        "image": "indhuge",
        "titulo": "Indhuge Landing Page",
        "desc": "Landing Page for the startup Indhuge, which I developed while participating in the project. I learned a lot about Web Frameworks and SEO during its production.",
        "skills": "javascript,typescript,nextjs,tailwindcss,materialui,sequelize,supabase,vercel",
        "link": "https://github.com/indhuge/ind-huge-landing-page"
    },
    {
        "image": "sannus",
        "titulo": "Sannus",
        "desc": "Complete Pharmacy E-commerce with a sales metrics dashboard, SEO, and integrated CMS.",
        "skills": "javascript,typescript,nextjs,tailwindcss,materialui,vercel,aws,nestjs,prisma",
        "link": "https://github.com/Fabrica-de-Software-2024/CampusCultural"
    },
    {
        "image": "estoque",
        "titulo": "Inventory System",
        "desc": "Basic inventory management system built with React Native for Windows and using a NextJS API backend.",
        "skills": "javascript,typescript,react,dotnet,visualstudio,nextjs,supabase",
        "link": "https://github.com/C41K1/SistemaEstoque"
    },
    {
        "image": "gateway",
        "titulo": "Gateway",
        "desc": "Basic Gateway project using Springboot.",
        "skills": "java,spring,supabase",
        "link": "https://github.com/C41K1/Projeto-Springboot"
    },
    {
        "image": "updater",
        "titulo": "Modpack Updater",
        "desc": "Minecraft Modpack Updater. The program updates the modpack using the versioning from a GitHub repository.",
        "skills": "javascript,nodejs,electron,github",
        "link": "https://github.com/C41K1/CSMP-Updater"
    },
    {
        "image": "cep",
        "titulo": "CEP (Zip Code) Finder",
        "desc": "Basic CEP (Brazilian Zip Code) finder using Java Swing.",
        "skills": "java",
        "link": "https://github.com/C41K1/Buscador-de-CEP-JAVA"
    },
    {
        "image": "minado",
        "titulo": "Minesweeper in C",
        "desc": "Functional terminal-based Minesweeper, made in C.",
        "skills": "c",
        "link": "https://github.com/C41K1/CampoMinadoC"
    }
]