'use client'

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect } from "react";
import Image from "next/image";

export default function Skills({ lang }: { lang: string }) {


    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true }, [Autoplay({ delay: 1000 })])

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes())
        }
    }, [emblaApi])

    return (
        <div id="skills" className="w-screen flex flex-col justify-start items-start overflow-x-hidden">
            <div className="w-screen flex items-center justify-center bg-linear-to-l from-slate-900 to-indigo-950">
                <h2 className="font-righteous text-lg md:text-5xl font-bold text-center text-transparent bg-linear-to-r from-cyan-500 to-fuchsia-500 bg-clip-text ">{lang === "pt-br" ? "Competências e Tecnologias" : "Skills & Technology"}</h2>
            </div>
            <ParallaxBanner className="w-screen aspect-video">
                <ParallaxBannerLayer image="/assets/banner/1.png" speed={-95} expanded={true} />
                <ParallaxBannerLayer className="hidden" image="/assets/banner/2.png" speed={-95} expanded={false} />
                <ParallaxBannerLayer image="/assets/banner/3.png" speed={-90} expanded={false} />
                <ParallaxBannerLayer image="/assets/banner/4.png" speed={-85} expanded={false} />
                <ParallaxBannerLayer image="/assets/banner/5.png" speed={-80} expanded={false} />
                <ParallaxBannerLayer image="/assets/banner/6.png" speed={-70} expanded={false} />
                <ParallaxBannerLayer image="/assets/banner/7.png" speed={-60} expanded={false} />
                <ParallaxBannerLayer className="w-screen flex flex-col justify-center items-center z-50 md:z-0" speed={0} expanded={false} >
                    <section className="embla">
                        <div className="embla__viewport" ref={emblaRef}>
                            <div className="embla__container">
                                {slides.map((slide, index) => (
                                    <div className="embla__slide" key={index}>
                                        <div className="embla__slide__number">
                                            <div className="z-100 flex flex-col scale-75 md:scale-100">
                                                <Image className="scale-50 md:scale-100" width={128} height={128} src={slide.img} alt={slide.label} unoptimized />
                                                <label className="text-lg text-center md:inline">{slide.label}</label>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </ParallaxBannerLayer>
                <ParallaxBannerLayer image="/assets/banner/8.png" speed={-40} expanded={false} />
                <ParallaxBannerLayer image="/assets/banner/9.png" speed={-20} expanded={false} />
                <ParallaxBannerLayer image="/assets/banner/10.png" speed={0} expanded={false} />
                <ParallaxBannerLayer className="flex w-screen aspect-video justify-center z-50" /*image="/assets/banner/moldura.png" */ speed={0} expanded={false}>
                    <div className="relative flex w-screen justify-center bg-linear-to-l from-slate-900 to-indigo-950 mask-[url(/assets/moldura.svg)] mask-no-repeat mask-size-[100%_100%] mask-luminance">

                    </div>
                </ParallaxBannerLayer>
            </ParallaxBanner>
        </div>
    )
}

const slides = [

    {
        img: "https://skillicons.dev/icons?i=c&theme=light&perline=15",
        label: "C"
    },
    {
        img: "https://skillicons.dev/icons?i=python&theme=dark&perline=15",
        label: "Python"
    },
    {
        img: "https://skillicons.dev/icons?i=java&theme=dark&perline=15",
        label: "Java"
    },
    {
        img: "https://skillicons.dev/icons?i=html&theme=dark&perline=15",
        label: "HTML"
    },
    {
        img: "https://skillicons.dev/icons?i=css&theme=dark&perline=15",
        label: "CSS"
    },
    {
        img: "https://skillicons.dev/icons?i=javascript&theme=dark&perline=15",
        label: "Javascript"
    },
    {
        img: "https://skillicons.dev/icons?i=typescript&theme=dark&perline=15",
        label: "Typescript"
    },
    {
        img: "https://skillicons.dev/icons?i=postgresql&theme=dark&perline=15",
        label: "Postgres"
    },
    {
        img: "https://skillicons.dev/icons?i=nodejs&theme=dark&perline=15",
        label: "NodeJS"
    },
    {
        img: "https://skillicons.dev/icons?i=sequelize&theme=dark&perline=15",
        label: "Sequelize"
    },
    {
        img: "https://skillicons.dev/icons?i=expressjs&theme=dark&perline=15",
        label: "Express"
    },
    {
        img: "https://skillicons.dev/icons?i=php&theme=dark&perline=15",
        label: "PHP"
    },
    {
        img: "https://skillicons.dev/icons?i=electron&theme=dark&perline=15",
        label: "Electron"
    },
    {
        img: "https://skillicons.dev/icons?i=react&theme=dark&perline=15",
        label: "React"
    },
    {
        img: "https://skillicons.dev/icons?i=nextjs&theme=dark&perline=15",
        label: "NextJS"
    },
    {
        img: "https://skillicons.dev/icons?i=tailwindcss&theme=dark&perline=15",
        label: "TailwindCSS"
    },
    {
        img: "https://skillicons.dev/icons?i=materialui&theme=dark&perline=15",
        label: "MaterialUI"
    },
    {
        img: "https://skillicons.dev/icons?i=vercel&theme=dark&perline=15",
        label: "Vercel"
    },
    {
        img: "https://skillicons.dev/icons?i=nestjs&theme=dark&perline=15",
        label: "NestJS"
    },
    {
        img: "https://skillicons.dev/icons?i=prisma&theme=dark&perline=15",
        label: "Prisma"
    },

    {
        img: "https://skillicons.dev/icons?i=spring&theme=dark&perline=15",
        label: "Spring"
    },

    {
        img: "https://skillicons.dev/icons?i=aws&theme=dark&perline=15",
        label: "AWS"
    },
    {
        img: "https://skillicons.dev/icons?i=supabase&theme=dark&perline=15",
        label: "Supabase"
    },
    {
        img: "https://skillicons.dev/icons?i=docker&theme=dark&perline=15",
        label: "Docker"
    },
    {
        img: "https://skillicons.dev/icons?i=figma&theme=dark&perline=15",
        label: "Figma"
    },
    {
        img: "https://skillicons.dev/icons?i=github&theme=dark&perline=15",
        label: "Github"
    },
    {
        img: "https://skillicons.dev/icons?i=vscode&theme=dark&perline=15",
        label: "VSCode"
    },
    {
        img: "https://skillicons.dev/icons?i=idea&theme=dark&perline=15",
        label: "IntelliJ"
    },
    {
        img: "https://skillicons.dev/icons?i=discord&theme=dark&perline=15",
        label: "Discord"
    },
    {
        img: "https://skillicons.dev/icons?i=postman&theme=dark&perline=15",
        label: "Postman"
    },
    {
        img: "https://skillicons.dev/icons?i=markdown&theme=dark&perline=15",
        label: "Markdown"
    },
];