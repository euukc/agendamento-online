"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ConfirmarAgendamento() {
    const router = useRouter();

    const [profissional, setProfissional] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("08:00");
    const [services, setServices] = useState([]);

    useEffect(() => {
        const storedProfissional = localStorage.getItem("profissional");
        const storedDate = localStorage.getItem("date");
        const storedTime = localStorage.getItem("time");
        const storedServices = localStorage.getItem("services");

        if (storedProfissional) {
            setProfissional(storedProfissional);
        }
        if (storedDate) {
            setDate(new Date(storedDate).toLocaleDateString("pt-BR"));
        }
        if (storedTime) {
            setTime(storedTime);
        }
        if (storedServices) {
            setServices(JSON.parse(storedServices));
        }
    }, []);

    const agendamentoConfirmado = () => {
        if (!profissional || !date || !time || services.length === 0) {
            alert("Há informações não escolhidas. Por favor, verifique seu agendamento!");
        } else {
            alert("Agendamento Confirmado!");
            setProfissional("");
            setDate("");
            setTime("");
            setServices([]);
            localStorage.removeItem("profissional");
            localStorage.removeItem("date");
            localStorage.removeItem("time");
            localStorage.removeItem("services");

            setTimeout(() => {
                router.push("/");
            }, 350);
        }
    };

    return (
        <main className="w-full min-h-screen flex flex-col justify-center mt-10">
            <header className="text-center">
                <div className="flex flex-col items-center gap-8 mx-4">
                    <h1 className="text-2xl font-bold">
                        <Link href="/">MeTime</Link>
                    </h1>
                    <Image src="/icon-passagem4.png" width={100} height={50} alt="Icon" />
                    <span className="text-xl font-semibold">Confirme seu agendamento:</span>
                </div>
            </header>

            <section className="flex justify-center items-center mt-10 px-4">
                <div className="w-full max-w-md bg-[#FDCCC5] p-6 rounded-xl shadow-lg">
                    <div className="flex gap-4 items-center mb-4">
                        <Image src="/escolher.png" width={25} height={25} alt="Profissional" />
                        <p className="text-lg font-medium">{profissional}</p>
                    </div>
                    <div className="flex gap-4 items-center mb-4">
                        <Image src="/lixador-de-unha.png" width={25} height={25} alt="Serviços" />
                        <p className="text-lg font-medium">{services.join(", ")}</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <Image src="/time.png" width={25} height={25} alt="Data e Hora" />
                        <p className="text-lg font-medium">{date} - {time}</p>
                    </div>
                </div>
            </section>

            <footer className="flex flex-col items-center mt-12 gap-4">
                <Link href="/escolher-profissional">
                    <button className="text-black text-base font-bold border border-gray-300 rounded-lg py-2 px-6 hover:bg-gray-100 transition-colors">
                        Voltar
                    </button>
                </Link>

                <button 
                    className="bg-[#FDCCC5] text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-[#fca39b] transition-colors mt-4" 
                    onClick={agendamentoConfirmado}
                >
                    Agendar
                </button>
            </footer>
        </main>
    );
}
