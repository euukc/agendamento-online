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
                    <Image src="/icon-passagem2.png" width={100} height={50} alt="Icon" />
                    <span className="text-[22px]">
                        <strong>Por favor, escolha um serviço:</strong>
                    </span>
                </div>
            </header>

            <div className="w-full flex justify-center gap-10 md:gap-16 flex-wrap items-center mt-[40px] md:mt-[100px] text-[13px]">
                <div className="w-[30%] md:w-[150px] flex justify-center items-center flex-col md:gap-8">
                    <img src="/unhas-fibra-vidro.jpg" alt="Foto de Unhas" className="w-[120px] h-[90px] md:w-[150px] md:h-[200px] rounded-lg"/>
                    <p className="md:text-[15px]"><strong>Unhas - Fibra de Vidro</strong></p>
                </div>
                <div className="w-[30%] md:w-[150px] flex justify-center items-center flex-col gap-2 md:gap-8">
                    <img src="/manutencao-fibra.jpg" alt="Foto de Manutencao da Fibra" className="w-[120px] h-[90px] md:w-[150px] md:h-[200px] rounded-lg" />
                    <p className="md:text-[15px]"> <strong>Manutenção Fibra</strong></p>
                </div>
                <div className="w-[30%] md:w-[150px] flex justify-center items-center flex-col gap-2 md:gap-8">
                    <img src="/banho-de-gel.jpg" alt="" className="w-[120px] h-[90px] md:w-[150px] md:h-[200px] rounded-lg" />
                    <p className="md:text-[15px]"><strong>Banho<br></br>de Gel</strong></p>
                </div>
                <div className="w-[30%] md:w-[150px] flex justify-center items-center flex-col gap-2 md:gap-8">
                    <img src="/manutencao-banho.jpg" alt="" className="w-[120px] h-[90px] md:w-[150px] md:h-[200px] rounded-lg" />
                    <p className="md:text-[15px]"><strong>Manutenção Banho de Gel</strong></p>
                </div>
                <div className="w-[30%] md:w-[150px] flex justify-center items-center flex-col gap-2 md:gap-8">
                    <img src="esmaltacao-gel-maos.jfif" alt="" className="w-[120px] h-[90px] md:w-[150px] md:h-[200px] rounded-lg" />
                    <p className="md:text-[15px]"><strong>Esmaltação em Gel - Mãos</strong></p>
                </div>
                <div className="w-[30%] md:w-[150px] flex justify-center items-center flex-col gap-2 md:gap-8">
                    <img src="esmaltacao-gel-pes.jpg" alt="" className="w-[120px] h-[90px] md:w-[150px] md:h-[200px] rounded-lg" />
                    <p className="md:text-[15px]"><strong>Esmaltação em Gel - Pés</strong></p>
                </div>
            </div>

            <div className="flex justify-center md:justify-center mt-[40px] md:mt-[100px] mb-[50px]">
                <button className="border-2 border-transparent p-[10px] rounded-lg bg-[#FDCCC5] text-white w-[149px] font-extrabold">
                    <Link href="/escolher-profissional">Próximo</Link>
                </button>
            </div>


        </main>
    );
}