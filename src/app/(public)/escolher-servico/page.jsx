"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

const EscolherServico = () => {
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
        <main className="w-full min-h-screen flex flex-col justify-center mt-10">
            <header className="text-center">
                <div className="flex flex-col items-center gap-4 mx-4">
                    <h1 className="text-2xl font-bold">
                        <Link href="/">MeTime</Link>
                    </h1>
                    <Image src="/icon-passagem2.png" width={100} height={50} alt="Icon" />
                    <span className="text-xl font-semibold">Por favor, escolha um serviço:</span>
                </div>
            </header>

            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-4">
                {Object.keys(serviceImages).map((service) => (
                    <div
                        key={service}
                        className={`relative w-full cursor-pointer p-2 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 ease-in-out ${selectedServices.includes(service) ? 'bg-[#FDCCC5] shadow-xl' : 'bg-white'}`}
                        onClick={() => serviceSelected(service)}
                    >
                        <img
                            src={serviceImages[service]}
                            alt={`Foto de ${service}`}
                            className="w-full h-[150px] md:h-[200px] object-cover rounded-lg"
                        />
                        <p className="text-center mt-2 text-sm font-medium">{service}</p>
                        {selectedServices.includes(service) && (
                            <div className="absolute top-2 right-2 bg-white text-green-600 rounded-full p-1 shadow-sm">
                                &#10003;
                            </div>
                        )}
                    </div>
                ))}
            </section>

            <footer className="flex flex-col items-center justify-center mt-12 gap-4">
                <Link href="/confirmar-agendamento">
                    <button className="bg-[#FDCCC5] text-white w-32 h-12 font-bold rounded-lg shadow-lg hover:bg-[#fca39b] transition-colors">
                        Próximo
                    </button>
                </Link>

                <Link href="/escolher-horario">
                    <button className="text-black w-32 h-12 font-bold border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 transition-colors">
                        Voltar
                    </button>
                </Link>
            </footer>
        </main>
    );
};

export default EscolherServico;