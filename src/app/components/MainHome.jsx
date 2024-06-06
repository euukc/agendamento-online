import Link from "next/link"

export default function MainHome(){
    return (
        <main>
            <div className="flex flex-col justify-center items-center text-center mb-[77px]">
                <h1 className="text-[32px] mb-[19px] mx-[30px] mt-[70px] font-extrabold">Bem-vindos à Esmalteria Eduarda Dias</h1>
                <p className="text-[#7A7A7A]">Mime-se com um momento só seu. Agende seu horário e relaxe!</p>
            </div>
            <div className="flex justify-end md:justify-center pr-8">
                <button className="border-2 border-transparent p-[10px] rounded-lg bg-[#FDCCC5] text-white w-[149px] font-extrabold">
                    <Link href="/">Começar</Link>
                </button>
            </div>
        </main>
    )
}