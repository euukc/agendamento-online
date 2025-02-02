"use client"

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const EscolherProfissional = () => {
    const [selectedProfissional, setSelectedProfissional] = useState("");

    const profissionalData = {
        'Eduarda Dias': '/profissional.jpg',
        'Rafaela': '/profissional.jpg',
        'Larissa': '/profissional.jpg',
    };

    const profissionalSelected = (value) => {
        setSelectedProfissional(value);
        localStorage.setItem('profissional', value);
    };

    return (
        <main className="w-full min-h-screen flex flex-col justify-center mt-10">
            <header className="text-center">
                <div className="flex flex-col items-center gap-4 mx-4">
                    <h1 className="text-2xl font-bold">
                        <Link href="/">MeTime</Link>
                    </h1>
                    <Image src="/icon-passagem3.png" width={100} height={50} alt="Icon" />
                    <span className="text-xl font-semibold">Agora escolha um profissional:</span>
                </div>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-4">
                {Object.keys(profissionalData).map((name) => (
                    <div
                        key={name}
                        className={`relative w-full cursor-pointer p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 ease-in-out ${selectedProfissional === name ? 'bg-[#FDCCC5] shadow-xl' : 'bg-white'}`}
                        onClick={() => profissionalSelected(name)}
                    >
                        <img                            
                            src={profissionalData[name]}
                            alt={`Foto de ${name}`}
                            className="w-full h-[200px] object-cover rounded-lg"
                        />
                        <p className="text-center mt-2 text-sm font-medium">{name}</p>
                        <p className="text-center text-sm">Manicure Pé e Mão</p>
                        {selectedProfissional === name && (
                            <div className="absolute top-2 right-2 bg-white text-green-600 rounded-full p-1 shadow-sm">
                                &#10003;
                            </div>
                        )}
                    </div>
                ))}
            </section>

            <footer className="flex flex-col items-center justify-center mt-12 gap-4">
                <Link href="/escolher-servico">
                    <button className="bg-[#FDCCC5] text-white w-32 h-12 font-bold rounded-lg shadow-lg hover:bg-[#fca39b] transition-colors">
                        Próximo
                    </button>
                </Link>

                <Link href="/cliente-info">
                    <button className="text-black w-32 h-12 font-bold border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 transition-colors">
                        Voltar
                    </button>
                </Link>
            </footer>
        </main>
    );
};

export default EscolherProfissional;
