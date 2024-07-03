"use client"

import Image from "next/image";
import Calendar from "react-calendar";
import { useState } from "react";
import Link from "next/link";



export default function EscolherHorario() {
    const [date, setDate] = useState(new Date());

    const onChange = (newDate) => {
        setDate(newDate);
        localStorage.setItem('date', newDate.toISOString());
    };

    const [time, setTime] = useState('08:00');

    const chooseTime = (event) => {
        const selectedTime = event.target.value;
        setTime(selectedTime);
        localStorage.setItem('time', selectedTime);
    }

    return (
        <main className="w-full h-[300px] md:h-[300px] flex justify-center mt-10">
            <header className="text-center">
                <div className="flex flex-col items-center gap-8 mx-[15px]">
                    <h1 className="text-[19px]">
                        <strong>MeTime</strong>
                    </h1>
                    <Image src="/icon-passagem.png" width={100} height={50} alt="Icon" />
                    <span className="text-[22px]">
                        <strong>Por favor, escolha um dia e horário:</strong>
                    </span>
                </div>
                <div>
                    <Calendar
                        onChange={onChange}
                        value={date}
                        locale="pt-BR"
                        className="border-transparent rounded-2xl p-4 m-2 shadow-md shadow-[#FDCCC5]"
                    />
                </div>
                <div className="flex flex-col w-full items-center mt-[30px]">
                    <label className="text-[#867BEE] text-[12px] flex" htmlFor="text">Horários Disponíveis:</label>
                    <select className="bg-[#E1DAFF] w-[230px] rounded-[8px]" name="time" id="time" onChange={chooseTime}>
                        <option value="08:00">08:00</option>
                        <option value="09:00">09:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                        <option value="18:00">18:00</option>
                    </select>
                </div>
                <div className="flex justify-center md:justify-center">
                    <button className="border-2 border-transparent p-[10px] rounded-lg bg-[#FDCCC5] text-white w-[149px] font-extrabold mt-[20px]">
                        <Link href="/escolher-servico">Próximo</Link>
                    </button>
                </div>
            </header>
        </main>
    );
}