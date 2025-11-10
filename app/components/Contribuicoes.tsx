import Image from "next/image";

export default function Contribuicoes({ lang }: { lang: string }) {
    return (
        <div id="contribuicoes" className="w-screen flex flex-col bg-linear-to-r from-slate-900 to-indigo-950 items-center justify-center py-[5vh] gap-10">
            <h2 className="font-righteous text-lg md:text-5xl font-bold text-center text-transparent bg-linear-to-r from-cyan-500 to-fuchsia-500 bg-clip-text">{lang === "pt-br" ? "Contribuições" : "Contributions"}</h2>
            <div className="md:w-[90%] lg:w-[70%] w-full flex flex-col md:flex-row">
                <Image className="w-full md:w-[60%]" width={512} height={256} src={`https://github-readme-stats-pi-five-13.vercel.app/api?username=C41K1&count_private=true&show_icons=true&theme=github_dark&bg_color=00000000&rank_icon=github&hide_border=true&locale=${lang === 'en-us' ? 'en' : 'pt-br'}&hide=stars,issues&include_all_commits=true&show=prs_merged`} alt="readme stats" unoptimized />
                <Image className="w-full md:w-[40%]" width={512} height={256} src={`https://github-readme-stats-pi-five-13.vercel.app/api/top-langs/?username=C41K1&langs_count=8&layout=compact&theme=github_dark&bg_color=00000000&hide_border=true&size_weight=0.5&count_weight=0.5&locale=${lang === 'en-us' ? 'en' : 'pt-br'}&exclude_repo=CSMP,CSMP2,CSMP-3,CSMP-4,CSMP-5`} alt="top langs" unoptimized />
            </div>
            <Image className="p-1" width={512} height={256} src={`https://github-readme-streak-stats-neon-chi.vercel.app?user=C41K1&theme=github-dark-blue&locale=${lang === 'en-us' ? 'en' : 'pt-br'}&mode=weekly&background=00000000`} alt="streak" unoptimized />
            <div className="flex flex-col">
                <label className="w-full font-bold text-base text-center md:text-left md:ml-5 md:text-3xl text-[#549ff6]">Commits</label>
                <Image width={1024} height={256} src={"https://raw.githubusercontent.com/C41K1/C41K1/refs/heads/output/github-contribution-grid-snake-dark-2.svg"} alt={"commit snake"} unoptimized />
            </div>
        </div>
    )
}