'use client';

import { useState } from 'react';

export default function ClienteInfo() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleName = (event) => {
        setName(event.target.value);
        localStorage.setItem('name', event.target.value);
    };

    const handlePhone = (event) => {
        setPhone(event.target.value);
        localStorage.setItem('phone', event.target.value);
    };

    const handleContinue = (event) => {
        event.preventDefault();

        if (!name || !phone) {
            alert('Por favor, informe um nome e telefone para continuar o agendamento.');
        } else {
            window.location.href = '/escolher-profissional';
        }
    };

    return (
        <section className="w-full h-[300px] md:h-[300px] flex items-center flex-col md:pt-[100px]">
            <span className="font-extrabold md:text-[20px] cursor-pointer">
                <div className="flex flex-col items-center gap-8 mx-4">
                    <h1 className="text-2xl font-bold">
                        <a href="/">MeTime</a>
                    </h1>
                </div>
            </span>

            <div className="w-full max-w-md p-6 shadow-xl rounded-2xl bg-white mt-12">
                <h2 className="text-xl font-semibold text-center mb-4">
                    Informe seus dados para continuar com o seu agendamento:
                </h2>

                <form className="space-y-4 mt-24" onSubmit={handleContinue}> {/* OnSubmit para capturar o evento de envio */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium">
                            Nome Completo
                        </label>
                        <input
                            onChange={handleName}
                            value={name}
                            type="text"
                            id="name"
                            placeholder="Seu nome completo"
                            required
                            className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-pink-300"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium">
                            Telefone
                        </label>
                        <input
                            onChange={handlePhone}
                            value={phone}
                            type="tel"
                            id="phone"
                            placeholder="(00) 00000-0000"
                            required
                            className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-pink-300"
                        />
                    </div>

                    <div className="">
                        <button
                            type="submit"
                            className="bg-[#FDCCC5] text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-[#fca39b] transition-colors mt-4 text-center"
                        >
                            Continuar
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
