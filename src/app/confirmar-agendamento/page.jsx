// pages/confirmar-agendamento.js
"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ConfirmarAgendamento() {
    const [profissional, setProfissional] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [service, setService] = useState('');

    useEffect(() => {

        const storedProfissional = localStorage.getItem('profissional');
        const storedDate = localStorage.getItem('date');
        const storedTime = localStorage.getItem('time');
        const storedService = localStorage.getItem('service');

        if (storedProfissional) {
            setProfissional(storedProfissional);
        }
        if (storedDate) {
            setDate(new Date(storedDate).toLocaleDateString('pt-BR'));
        }
        if (storedTime) {
            setTime(storedTime);
        }
        if (storedService) {
            setService(storedService);
        }
    }, []);

    const agendamentoConfirmado = () => {
        if (!profissional || !date || !time || !service) {
            alert('Há informações não escolhidas. Por favor, verifique seu agendamento!');
        } else {
            alert('Agendamento Confirmado!');
            setProfissional('');
            setDate('');
            setTime('');
            setService('');
            localStorage.removeItem('profissional');
            localStorage.removeItem('date');
            localStorage.removeItem('time');
            localStorage.removeItem('service');        
        }
    }

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
                            <strong>Serviço escolhido: {service || 'Nenhum serviço selecionado'} </strong>
                        </span>
                        <span>Profissional escolhido: {profissional || 'Nenhum profissional selecionado'}</span>

                        <span>Dia e Hora: {date || 'Nenhuma data selecionada'} - {time || 'Nenhum horário selecionado'} </span>
                    </div>
                </div>
                <div className="flex justify-center items-center mx-[20px] gap-4 md:gap-[100px]">
                    <div className="w-[50%] flex justify-end mt-[40px] md:mt-[100px] mb-[50px]">
                        <button className="border-2 border-transparent p-[5px] rounded-lg bg-[#867BEE] text-white w-[100px] md:w-[150px] md:h-[50px] text-[13px] font-extrabold">
                            <Link href="/escolher-profissional">Voltar</Link>
                        </button>
                    </div>
                    <div className="w-[50%] flex justify-start mt-[40px] md:mt-[100px] mb-[50px]">
                        <button className="border-2 border-transparent p-[5px] rounded-lg bg-[#FDCCC5] text-white w-[100px] md:w-[150px] md:h-[50px] text-[13px] font-extrabold"
                            onClick={agendamentoConfirmado}>
                            Agendar
                        </button>
                    </div>
                </div>
            </main>
        );
    }
