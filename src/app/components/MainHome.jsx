import Link from "next/link"
import { useRouter } from "next/router"

export default function MainHome(){
    
   
    return (
        <main className="md:h-[560px] md:flex md:flex-col md:justify-center">
            <div className="flex flex-col justify-center items-center text-center mb-[40px]">
                <h1 className="text-[25px] md:text-[40px] mb-[19px] font-extrabold px-[30px]">Bem-vindos à Esmalteria Boutique 10</h1>
                <p className="text-[#7A7A7A] text-[12px] md:text-[16px] px-[20px]">Mime-se com um momento só seu. Agende seu horário e relaxe!</p>
            </div>
            <div className="flex justify-end md:justify-center pr-8">
                <button className="border-2 border-transparent p-[10px] rounded-lg bg-[#FDCCC5] text-white w-[149px] font-extrabold">
                    <Link href="/escolher-horario">Próximo</Link>
                </button>
            </div>
        </main>
    )
}