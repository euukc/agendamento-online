// pages/escolher-profissional.js

"use client"

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function EscolherProfissional() {
    const [profissional, setProfissional] = useState('');
    const [selectedProfissional, setSelectedProfissional] = useState('');

    const profissionalData = {
        'Eduarda Dias': '/path-to-eduarda-image.jpg',
        'Rafaela': '/path-to-rafaela-image.jpg',
        'Larissa': '/path-to-larissa-image.jpg',
    };

    const profissionalSelected = (value) => {
        setProfissional(value);
        setSelectedProfissional(value);
        localStorage.setItem('profissional', value);
    };

    return (
        <main className="w-full h-min-screen flex flex-col justify-center mt-10">
            <header className="text-center">
                <div className="flex flex-col items-center gap-8 mx-[15px]">
                    <h1 className="text-[19px]">
                        <strong>
                            <Link href="/">MeTime</Link>
                        </strong>
                    </h1>
                    <Image src="/icon-passagem3.png" width={100} height={50} alt="Icon" />
                    <span className="text-[22px]">
                        <strong>Agora escolha um profissional:</strong>
                    </span>
                </div>
            </header>

            <div className="w-full flex justify-center gap-10 md:gap-16 flex-wrap items-center mt-[40px] md:mt-[100px] text-[13px]">
                {Object.keys(profissionalData).map((name) => (
                    <div key={name} className={`w-[80%] md:w-[150px] flex justify-start gap-2 items-center md:gap-8 flex-row md:flex-col cursor-pointer ${selectedProfissional === name ? 'border-4 border-[#867BEE]  bg-[#867BEE] p-[0.5px] rounded-xl' : ''}`}
                        onClick={() => profissionalSelected(name)}>
                        <img src="/profissional.jpg" alt="Foto de Unhas" className="w-[100px] h-[100px] md:w-[150px] md:h-[200px] rounded-lg" />
                        <div className="w-full flex flex-col justify-end text-justify">
                            <p className="text-[15px] md:text-[15px]"><strong>{name}</strong></p>
                            <p className="text-[13px] md:text-[15px]">Manicure Pé e Mão</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center md:justify-center mt-[40px] md:mt-[100px] mb-[50px] gap-6 md:gap-[100px]">
                <div className="w-[50%] flex justify-end mt-[40px] md:mt-[100px] mb-[50px]">
                    <button className="border-2 border-transparent p-[5px] rounded-lg bg-[#867BEE] text-white w-[100px] md:w-[150px] md:h-[50px] text-[13px] font-extrabold">
                        <Link href="/escolher-servico">Voltar</Link>
                    </button>
                </div>
                <div className="w-[50%] flex justify-start mt-[40px] md:mt-[100px] mb-[50px]">
                    <button className="border-2 border-transparent p-[5px] rounded-lg bg-[#FDCCC5] text-white w-[100px] md:w-[150px] md:h-[50px] text-[13px] font-extrabold">
                        <Link href="/confirmar-agendamento">Próximo</Link>
                    </button>
                </div>
            </div>
        </main>
    );
}
