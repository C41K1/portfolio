'use client'
import { useEffect } from "react";

export default function Home() {

  useEffect(()=>{
    document.location.href = '/pt-br'
  })

  return (
    <main className="flex min-h-[200vh] w-screen flex-col bg-black">
    </main>
  );
}
