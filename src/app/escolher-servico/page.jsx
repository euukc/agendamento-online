"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function EscolherServico() {

    const [selectedServices, setSelectedServices] = useState([]);

    useEffect(() => {

        const storedServices = JSON.parse(localStorage.getItem('services')) || [];
        setSelectedServices(storedServices);
    }, []);

    const serviceImages = {
        'Unhas - Fibra de Vidro': '/unhas-fibra-vidro.jpg',
        'Manutenção Fibra': '/manutencao-fibra.jpg',
        'Banho de Gel': '/banho-de-gel.jpg',
        'Manutenção Banho de Gel': '/manutencao-banho.jpg',
        'Esmaltação em Gel - Mãos': '/esmaltacao-gel-maos.jfif',
        'Esmaltação em Gel - Pés': '/esmaltacao-gel-pes.jpg'
    };

    const serviceSelected = (value) => {
        const isSelected = selectedServices.includes(value);
        let updatedServices;

        if (isSelected) {
            updatedServices = selectedServices.filter(service => service !== value);
        } else {
            updatedServices = [...selectedServices, value];
        }

        setSelectedServices(updatedServices);
        localStorage.setItem('services', JSON.stringify(updatedServices));
    }

    return (
        <main className="w-full h-min-screen flex flex-col justify-center mt-10">
            <header className="text-center">
                <div className="flex flex-col items-center gap-8 mx-[15px]">
                    <h1 className="text-[19px]">
                        <strong>
                            <Link href="/">MeTime</Link>
                        </strong>
                    </h1>
                    <Image src="/icon-passagem2.png" width={100} height={50} alt="Icon" />
                    <span className="text-[22px]">
                        <strong>Por favor, escolha um serviço:</strong>
                    </span>
                </div>
            </header>

            <div className="w-full flex justify-center gap-10 md:gap-16 flex-wrap items-center mt-[40px] md:mt-[100px] text-[13px]">
                {Object.keys(serviceImages).map((service) => (
                    <div
                        key={service}
                        className={`w-[30%] md:w-[150px] flex justify-center items-center flex-col gap-2 md:gap-8 cursor-pointer ${selectedServices.includes(service) ? 'border-4 border-[#867BEE] p-[0.5px] rounded-xl shadow-lg' : ''}`}
                        onClick={() => serviceSelected(service)}
                    >
                        <img
                            src={serviceImages[service]}
                            alt={`Foto de ${service}`}
                            className="w-[120px] h-[90px] md:w-[150px] md:h-[200px] rounded-lg"
                        />
                        <p className="md:text-[15px]"><strong>{service}</strong></p>
                    </div>
                ))}
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
