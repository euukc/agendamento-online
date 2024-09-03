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
                    <div key={name} className={`w-[80%] md:w-[150px] flex justify-start gap-2 items-center md:gap-8 flex-row md:flex-col cursor-pointer ${selectedProfissional === name ? 'bg-[#FDCCC5] p-[0.5px] rounded-xl' : ''}`}
                        onClick={() => profissionalSelected(name)}>
                        <img src="/profissional.jpg" alt="Foto de Unhas" className="w-[100px] h-[100px] md:w-[150px] md:h-[200px] rounded-[5px]" />
                        <div className="w-full flex flex-col justify-end text-justify">
                            <p className="text-[15px] md:text-[15px] text-center"><strong>{name}</strong></p>
                            <p className="text-[13px] md:text-[15px] text-center">Manicure Pé e Mão</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center justify-center mt-[40px] md:mt-[100px] mb-[50px] gap-6 md:gap-2">
                <div className="mt-[40px]">
                    <button className="border-2 border-transparent p-[5px] rounded-lg bg-[#FDCCC5] text-white w-[100px] md:w-[150px] md:h-[50px] text-[13px] font-extrabold">
                        <Link href="/confirmar-agendamento">Próximo</Link>
                    </button>
                </div>
                <div className="mb-[50px]">
                    <button className="text-black w-[100px] md:w-[150px] md:h-[50px] text-[13px] font-extrabold">
                        <Link href="/escolher-servico">Voltar</Link>
                    </button>
                </div>
            </div>
        </main>
    );
}
