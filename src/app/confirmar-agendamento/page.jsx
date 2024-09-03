"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';


export default function ConfirmarAgendamento() {
    const router = useRouter();

    const [profissional, setProfissional] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('08:00');
    const [services, setServices] = useState([]);

    useEffect(() => {

        const storedProfissional = localStorage.getItem('profissional');
        const storedDate = localStorage.getItem('date');
        const storedTime = localStorage.getItem('time');
        const storedServices = localStorage.getItem('services');

        if (storedProfissional) {
            setProfissional(storedProfissional);
        }
        if (storedDate) {
            setDate(new Date(storedDate).toLocaleDateString('pt-BR'));
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
            alert('Há informações não escolhidas. Por favor, verifique seu agendamento!');
        } else {
            alert('Agendamento Confirmado!');
            setProfissional('');
            setDate('');
            setTime('');
            setServices([]);
            localStorage.removeItem('profissional');
            localStorage.removeItem('date');
            localStorage.removeItem('time');
            localStorage.removeItem('services');

            setTimeout(() => {
                router.push('/');
            }, 350);
        }
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
                    <Image src="/icon-passagem4.png" width={100} height={50} alt="Icon" />
                    <span className="text-[22px]">
                        <strong>Confirme seu agendamento:</strong>
                    </span>
                </div>
            </header>

            <div className="w-full flex justify-center gap-10 md:gap-16 flex-wrap items-center mt-[40px] md:mt-[100px] text-[13px]">
                <div className="w-full flex flex-col justify-center items-center text-[15px] md:text-[20px] ">
                    <span className="min-w-[330px] md:w-[25%] border-2-transparent min-h-[200px] rounded-xl shadow-md flex flex-col items-start justify-center gap-4 px-[10px] bg-[#FDCCC5]">
                        <div className="flex gap-4 items-center justify-center">
                            <Image src="/escolher.png" width={25} height={20} />
                            <p>{profissional}</p>
                        </div>
                        <div className="flex gap-4 items-center justify-center">
                            <Image src="/lixador-de-unha.png" width={25} height={20} />
                            {services.join(', ')}
                        </div>

                        <div className="flex gap-6">
                            <Image src="/time.png" width={25} height={20} />
                            <p> {date} - {time} </p>
                        </div>
                    </span>
                </div>
            </div>

            <div className="flex flex-col-reverse justify-center items-center mx-[20px] mt-10">
                <div className="flex">
                    <button className="text-black text-[15px] font-extrabold">
                        <Link href="/escolher-profissional">Voltar</Link>
                    </button>
                </div>
                <div className="flex mb-[50px] mt-10">
                    <button className="border-2 border-transparent p-[10px] rounded-lg bg-[#FDCCC5] text-white w-[100px] md:w-[150px] md:h-[50px] text-[15px] font-extrabold"
                        onClick={agendamentoConfirmado}>
                        Agendar
                    </button>
                </div>
            </div>
        </main>
    );
}
