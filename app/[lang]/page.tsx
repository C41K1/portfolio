import { createClient } from "@/prismicio";
import { reverseLocaleLookup } from "@/i18n";
import Footer from "../components/Footer";
import Inicio from "../components/Inicio";
import Skills from "../components/Skills";
import Navbar from "../components/Navbar";
import Contribuicoes from "../components/Contribuicoes";
import Historico from "../components/historico";
import Projetos from "../components/Projetos";
import Contato from "../components/Contato";

type Params = { lang: string; uid: string };

export default async function Home({ params }: { params: Promise<Params> }) {
  const client = createClient();
  const page = await client.getByUID("home", (await params).lang, {
    lang: reverseLocaleLookup((await params).lang),
  });
  return (
    <main className="flex min-h-[200vh] w-screen flex-col bg-black">
      <Navbar lang={page.lang} />
      <Inicio lang={page.lang} />
      <Historico lang={page.lang} />
      <Skills lang={page.lang} />
      <Contribuicoes lang={page.lang} />
      <Projetos lang={page.lang} />
      <Contato lang={page.lang} />
      <Footer lang={page.lang} />
    </main>
  );
}

