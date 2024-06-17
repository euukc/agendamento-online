"use client"

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";


export default function EscolherHorario() {
    const [date, setDate] = useState(new Date());

    const onChange = (newDate) => {
        setDate(newDate);
    };

    return (
        <main className="w-full h-min-screen flex flex-col justify-center mt-10">
            <header className="text-center">
                <div className="flex flex-col items-center gap-8 mx-[15px]">
                    <h1 className="text-[19px]">
                        <strong>MeTime</strong>
                    </h1>
                    <Image src="/icon-passagem4.png" width={100} height={50} alt="Icon" />
                    <span className="text-[18px] md:text-[22px]">
                        <strong>Confirme seu agendamento:</strong>
                    </span>
                </div>
            </header>

            <div className="w-full flex justify-center gap-10 md:gap-16 flex-wrap items-center mt-[40px] md:mt-[100px] text-[13px]">
                <div className="w-ful flex flex-col ml-[10px] justify-center items-center text-[20px]">
                    <span>
                        <strong>Serviço escolhido</strong>
                    </span>
                    <span>Profissional escolhido</span>
                    <span>Dia e Hora</span>
                </div>

            </div>
            <div className="flex justify-center items-center mx-[20px] gap-4">
                <div className="w-[50%] flex justify-end mt-[40px] md:mt-[100px] mb-[50px]">
                    <button className="border-2 border-transparent p-[5px] rounded-lg bg-[#FDCCC5] text-white w-[100px] md:w-[200px] md:h-[200px] text-[13px] md:text-[30px] font-extrabold">
                        <Link href="/escolher-profissional">Voltar</Link>
                    </button>
                </div>
                <div className="w-[50%] flex justify-start mt-[40px] md:mt-[100px] mb-[50px]">
                    <button className="border-2 border-transparent p-[5px] rounded-lg bg-[#FDCCC5] text-white w-[100px] text-[13px] font-extrabold">
                        <Link href="/escolher-profissional">Agendar</Link>
                    </button>
                </div>
            </div>
        </main>
    );
}