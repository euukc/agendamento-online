"use client"

import Image from "next/image";
import Calendar from "react-calendar";
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
                    <Image src="/icon-passagem2.png" width={100} height={50} alt="Icon" />
                    <span className="text-[22px]">
                        <strong>Por favor, escolha um serviço:</strong>
                    </span>
                </div>
            </header>

            <div className="flex justify-center gap-10 md:gap-32 flex-wrap items-center w-full mt-[40px] md:mt-[100px] text-[13px] ">
                <div className="w-[30%] md:w-[150px] flex justify-center items-center flex-col">
                    <img src="/unhas.png" alt="Foto de Unhas" />
                    <p> Unhas </p>
                </div>
                <div className="w-[30%] md:w-[150px] flex justify-center items-center flex-col">
                    <img src="/sobrancelha.png" alt="Foto de sobrancelha" />
                    <p> Sobrancelha</p>
                </div>
                <div className="w-[30%] md:w-[150px] flex justify-center items-center flex-col">
                    <img src="/sobrancelha.png" alt="Foto de Sobrancelha" />
                    <p>Massagem</p>
                </div>
                <div className="w-[30%] md:w-[150px] flex justify-center items-center flex-col">
                    <img src="/corte.png" alt="Foto de Corte" />
                    <p>Corte</p>
                </div>                
            </div>

            <div className="flex justify-center md:justify-center mt-[40px] md:mt-[100px]">
                <button className="border-2 border-transparent p-[10px] rounded-lg bg-[#FDCCC5] text-white w-[149px] font-extrabold">
                    <Link href="/escolher-servico">Próximo</Link>
                </button>
                </div>

            
        </main>
    );
}