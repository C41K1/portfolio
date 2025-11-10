'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react"
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import AlertTitle from "@mui/material/AlertTitle";

export default function Contato({ lang }: { lang: string }) {

    const [dados, setDados] = useState({ nome: "", email: "", mensagem: "" });
    const [alerta, setAlerta] = useState(0);

    const submit = async () => {
        const resp = await fetch("https://discord.com/api/webhooks/1437261500074033154/llYXmXbkfBOJK8UbDgQI9_DCQCqqN4zx687P7DRJ54-DQBkGS5NMBAmRpl_1oqoXtYEP", {
            method: "Post",
            body: JSON.stringify({
                embeds: [
                    { title: dados.nome, author: { name: "Novo Formulario Recebido!" }, footer: { text: dados.email }, description: dados.mensagem, color: 1752220 }
                ]
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(resp.ok){
            setAlerta(1);
            setTimeout(()=>{
                setAlerta(0);
            },2000)
        }
        else {
            setAlerta(2);
            setTimeout(() => {
                setAlerta(0);
            }, 2000)
        }
    }

    return (
        <>
            <Collapse in={alerta === 1}>
                <Alert className="w-screen md:w-[30vw] fixed left-0 bottom-[20vh]" variant="filled" severity="success"><AlertTitle>{lang === "pt-br" ? "Formulario enviado!" : "Form Submitted!"}</AlertTitle></Alert>
            </Collapse>
            <Collapse in={alerta === 2}>
                <Alert className="w-screen md:w-[30vw] fixed left-0 bottom-[20vh]" variant="filled" severity="warning">
                    <AlertTitle>{lang === "pt-br" ? "Um Erro desconhecido ocorreu!" : "An Error has occurred!"}</AlertTitle>
                    {lang === "pt-br" ? "Por favor entre em contato por uma das outras opções" : "Please use another way of contact"}
                </Alert>
            </Collapse>

            <div id="contato" className="w-screen flex flex-col bg-linear-to-l from-slate-900 to-indigo-950 items-center py-[5vh] gap-10">
                <h2 className="font-righteous text-lg md:text-5xl font-bold text-center text-transparent bg-linear-to-r from-cyan-500 to-fuchsia-500 bg-clip-text">{lang === "pt-br" ? "Contato" : "Contact"}</h2>
                <div className="w-full md:w-[80%] flex flex-col md:flex-row justify-center">
                    <div className="flex flex-col w-full md:w-[40%] p-8 gap-4">
                        <label className="text-lg font-bold animate-pulse md:text-3xl">{lang === 'pt-br' ? "Entre em Contato!" : "Get in Touch!"}</label>
                        <p>{lang === 'pt-br' ? "Preencha o Formulário ou entre em contato por uma das opções abaixo." : "Submit the Form or use one of the options below."}</p>
                        <div className="flex flex-row gap-4">
                            <Link className="hover:animate-pulse active:animate-ping" href={"mailto:caiki2003@gmail.com"}>
                                <Image className="w-7 aspect-square" width={512} height={512} src={"/assets/email.svg"} alt={"email"} unoptimized />
                            </Link>
                            <Link className="hover:animate-pulse active:animate-ping" href={"https://linkedin.com/in/caiki"}>
                                <Image className="w-7 aspect-square" width={512} height={512} src={"/assets/linkedin.svg"} alt={"linkedin"} unoptimized />
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col w-full md:w-[40%] p-8 bg-[#00000055] text-white rounded-3xl">
                        <label>{lang === 'pt-br' ? "Nome" : "Name"}</label>
                        <input onChange={(e) => setDados({ ...dados, nome: e.target.value })} value={dados.nome} className="mb-4 border border-white p-2 rounded-xl" placeholder={lang === 'pt-br' ? "João Silva" : "John Doe"} />
                        <label>{lang === 'pt-br' ? "Email" : "Email"}</label>
                        <input onChange={(e) => setDados({ ...dados, email: e.target.value })} value={dados.email} className="mb-4 border border-white p-2 rounded-xl" placeholder={lang === 'pt-br' ? "joao@email.com" : "john@mail.com"} />
                        <label>{lang === 'pt-br' ? "Mensagem" : "Message"}</label>
                        <textarea onChange={(e) => setDados({ ...dados, mensagem: e.target.value })} value={dados.mensagem} className="mb-4 h-20 border border-white p-2 rounded-xl" placeholder={lang === 'pt-br' ? "Mensagem..." : "Message..."} />
                        <div>
                            <button onClick={submit} className="py-4 px-16 float-right bg-linear-to-r from-cyan-500 to-fuchsia-500 rounded-xl hover:scale-105 active:opacity-50 duration-300">{lang === 'pt-br' ? "Enviar" : "Submit"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}