'use client'

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function Historico({ lang }: { lang: string }) {
    return (
        <div id="educacao" className="w-screen flex flex-col bg-linear-to-l from-slate-900 to-indigo-950 items-center py-[5vh] gap-10">
            <h2 className="font-righteous text-lg md:text-5xl font-bold text-center text-transparent bg-linear-to-r from-cyan-500 to-fuchsia-500 bg-clip-text">{lang === "pt-br" ? "Histórico e Educação" : "History & Education"}</h2>
            <div className='md:w-[50vw] w-full'>
                <Timeline>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            2018 - 2020
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className='bg-[#00000055] shadow-md rounded-2xl flex flex-col p-4 mb-16'>
                                <label className="text-lg font-bold md:text-2xl">{lang === 'pt-br' ? "Ensino Médio" : "Highschool"}</label>
                                <p className='text-gray-400 mt-2'>
                                    {lang === 'pt-br' ? "Cursei o ensino médio no Colégio Zeta Objetivo, período em que descobri meu interesse pela área de desenvolvimento." : "I attended high school at Colégio Zeta Objetivo, during which time I discovered my interest in the development field."}
                                </p>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            2021
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className='bg-[#00000055] shadow-md rounded-2xl flex flex-col p-4 mb-16'>
                                <label className="text-lg font-bold md:text-2xl">{lang === 'pt-br' ? "Ensino Superior" : "Graduation"}</label>
                                <p className='text-gray-400 mt-2'>
                                    {lang === 'pt-br' ? "Ingressei na Universidade Tecnológica Federal do Paraná (UTFPR) para aprofundar meus conhecimentos nesta área de interesse." : "I enrolled at the Federal University of Technology - Paraná (UTFPR) to deepen my knowledge in this area of interest."}
                                </p>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            2023
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className='bg-[#00000055] shadow-md rounded-2xl flex flex-col p-4 mb-16'>
                                <label className="text-lg font-bold md:text-2xl">{lang === 'pt-br' ? "Projeto de Extensão" : "Academic extension project"}</label>
                                <p className='text-gray-400 mt-2'>
                                    {lang === 'pt-br' ? "Participei de um projeto de extensão focado em desenvolvimento web, onde adquiri experiência na criação de Landing Pages e Blog Posts, e na aplicação de SEO. Trabalhamos com a integração de CMS e frameworks modernos, como Next.js e Tailwind CSS." : "I participated in an extension project focused on web development, where I gained experience creating Landing Pages, Blog Posts, and applying SEO. We worked with CMS integration and modern frameworks like Next.js and Tailwind CSS."}
                                </p>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            2024
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className='bg-[#00000055] shadow-md rounded-2xl flex flex-col p-4 mb-16'>
                                <label className="text-lg font-bold md:text-2xl">{lang === 'pt-br' ? "Aplicativo de Eventos" : "Event Management App"}</label>
                                <p className='text-gray-400 mt-2'>
                                    {lang === 'pt-br' ? "Atuei como Líder Técnico e Desenvolvedor Full-Stack na criação de um aplicativo para gestão de eventos universitários. Nesta função, aprimorei minhas habilidades em React Native e Expo (frontend), além de NestJS e Prisma (backend)." : "I worked as a TechLead and Full-Stack Developer in the creation of a university event management application. In this role, I honed my skills in React Native and Expo (frontend), as well as NestJS and Prisma (backend)."}
                                </p>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            {lang === 'pt-br' ? "Agosto de 2025" : "August 2025"}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className='bg-[#00000055] shadow-md rounded-2xl flex flex-col p-4 mb-16'>
                                <label className="text-lg font-bold md:text-2xl">{lang === 'pt-br' ? "Ensino Superior Completo" : "Graduation Degree"}</label>
                                <p className='text-gray-400 mt-2'>
                                    {lang === 'pt-br' ? "Concluí minha graduação em Engenharia de Software pela Universidade Tecnológica Federal do Paraná (UTFPR). O curso proporcionou um entendimento profundo sobre o ciclo de vida do desenvolvimento de software, desde o levantamento de requisitos até a fase de manutenção." : "I graduated with a degree in Software Engineering from the Federal University of Technology - Paraná (UTFPR). The program provided a deep understanding of the software development life cycle, from requirements gathering to the maintenance phase."}
                                </p>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            {lang === 'pt-br' ? "Setembro de 2025" : "September 2025"}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className='bg-[#00000055] shadow-md rounded-2xl flex flex-col p-4'>
                                <label className="text-lg font-bold md:text-2xl">{lang === 'pt-br' ? "Pós Graduação" : "Post Graduation Degree"}</label>
                                <p className='text-gray-400 mt-2'>
                                    {lang === 'pt-br' ? "Iniciei minha Pós Graduação em Java na Universidade Tecnológica Federal do Paraná (UTFPR)" : "I started my Post Graduation in Java on University of Technology - Paraná (UTFPR)."}
                                </p>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        </div>
    )
}