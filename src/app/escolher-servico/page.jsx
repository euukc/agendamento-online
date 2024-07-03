"use client"

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function EscolherServico() {
    const [service, setService] = useState('');
    const [selectedService, setSelectedService] = useState('');

    const serviceSelected = (value) => {
        setService(value);
        setSelectedService(value); 
        localStorage.setItem('service', value);
    }

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
                <div className={`w-[30%] md:w-[150px] flex justify-center items-center flex-col md:gap-8 cursor-pointer ${selectedService === 'Unhas - Fibra de Vidro' ? 'border-4 border-[#867BEE] p-[0.5px] rounded-xl shadow-lg' : ''}`}
                    onClick={() => serviceSelected('Unhas - Fibra de Vidro')}>
                    <img src="/unhas-fibra-vidro.jpg" alt="Foto de Unhas" className="w-[120px] h-[90px] md:w-[150px] md:h-[200px] rounded-lg"/>
                    <p className="md:text-[15px]"><strong>Unhas - Fibra de Vidro</strong></p>
                </div>
                <div className={`w-[30%] md:w-[150px] flex justify-center items-center flex-col gap-2 md:gap-8 cursor-pointer ${selectedService === 'Manutenção Fibra' ? 'border-4 border-[#867BEE] p-[0.5px] rounded-xl shadow-lg' : ''}`}
                    onClick={() => serviceSelected('Manutenção Fibra')}>
                    <img src="/manutencao-fibra.jpg" alt="Foto de Manutencao da Fibra" className="w-[120px] h-[90px] md:w-[150px] md:h-[200px] rounded-lg" />
                    <p className="md:text-[15px]"><strong>Manutenção Fibra</strong></p>
                </div>
                <div className={`w-[30%] md:w-[150px] flex justify-center items-center flex-col gap-2 md:gap-8 cursor-pointer ${selectedService === 'Banho de Gel' ? 'border-4 border-[#867BEE] p-[0.5px] rounded-xl shadow-lg' : ''}`}
                    onClick={() => serviceSelected('Banho de Gel')}>
                    <img src="/banho-de-gel.jpg" alt="Foto de Banho de Gel" className="w-[120px] h-[90px] md:w-[150px] md:h-[200px] rounded-lg" />
                    <p className="md:text-[15px]"><strong>Banho<br/>de Gel</strong></p>
                </div>
                <div className={`w-[30%] md:w-[150px] flex justify-center items-center flex-col gap-2 md:gap-8 cursor-pointer ${selectedService === 'Manutenção Banho de Gel' ? 'border-4 border-[#867BEE] p-[0.5px] rounded-xl shadow-lg' : ''}`}
                    onClick={() => serviceSelected('Manutenção Banho de Gel')}>
                    <img src="/manutencao-banho.jpg" alt="Foto de Manutenção de Banho de Gel" className="w-[120px] h-[90px] md:w-[150px] md:h-[200px] rounded-lg" />
                    <p className="md:text-[15px]"><strong>Manutenção Banho de Gel</strong></p>
                </div>
                <div className={`w-[30%] md:w-[150px] flex justify-center items-center flex-col gap-2 md:gap-8 cursor-pointer ${selectedService === 'Esmaltação em Gel - Mãos' ? 'border-4 border-[#867BEE] p-[0.5px] rounded-xl shadow-lg' : ''}`}
                    onClick={() => serviceSelected('Esmaltação em Gel - Mãos')}>
                    <img src="/esmaltacao-gel-maos.jfif" alt="Foto de Esmaltação em Gel para Mãos" className="w-[120px] h-[90px] md:w-[150px] md:h-[200px] rounded-lg" />
                    <p className="md:text-[15px]"><strong>Esmaltação em Gel - Mãos</strong></p>
                </div>
                <div className={`w-[30%] md:w-[150px] flex justify-center items-center flex-col gap-2 md:gap-8 cursor-pointer ${selectedService === 'Esmaltação em Gel - Pés' ? 'border-4 border-[#867BEE] p-[0.5px] rounded-xl shadow-lg' : ''}`}
                    onClick={() => serviceSelected('Esmaltação em Gel - Pés')}>
                    <img src="/esmaltacao-gel-pes.jpg" alt="Foto de Esmaltação em Gel para Pés" className="w-[120px] h-[90px] md:w-[150px] md:h-[200px] rounded-lg" />
                    <p className="md:text-[15px]"><strong>Esmaltação em Gel - Pés</strong></p>
                </div>
            </div>

            <div className="flex justify-center md:justify-center mt-[40px] md:mt-[100px] mb-[50px] gap-6 md:gap-[100px]">
                <div className="w-[50%] flex justify-end mt-[40px] md:mt-[100px] mb-[50px]">
                    <button className="border-2 border-transparent p-[5px] rounded-lg bg-[#867BEE] text-white w-[100px] md:w-[150px] md:h-[50px] text-[13px] font-extrabold">
                        <Link href="/escolher-horario">Voltar</Link>
                    </button>
                </div>
                <div className="w-[50%] flex justify-start mt-[40px] md:mt-[100px] mb-[50px]">
                    <button className="border-2 border-transparent p-[5px] rounded-lg bg-[#FDCCC5] text-white w-[100px] md:w-[150px] md:h-[50px] text-[13px] font-extrabold">
                        <Link href="/escolher-profissional">Próximo</Link>
                    </button>
                </div>
            </div>
        </main>
    );
}
