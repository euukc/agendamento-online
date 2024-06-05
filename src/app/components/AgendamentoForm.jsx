"use client"

import React from "react"
import Calendar from "react-calendar"
import { useState } from "react";

const CalendarComponent = () => {
    const [date, setDate] = useState(new Date());
  
    const onChange = (date) => {
      setDate(date);
    };
  
    return (
      <div className="w-full lg:h-[900px] flex justify-start flex-col items-center gap-4">        
        <div>
            <Calendar onChange={onChange} value={date}/>  
        </div>
        <div className="flex flex-col w-[330px]">
            <label className="text-[#867BEE]" htmlFor="text">Horários Disponíveis:</label>
            <select className="bg-[#E1DAFF]" name="time" id="time">
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
        <div className="flex flex-col w-[330px]">
            <label className="text-[#867BEE]" htmlFor="text">Escolha o Serviço:</label>
            <select className="bg-[#E1DAFF]" name="time" id="time">
                <option value="Fibra de Vidro">Fibra de Vidro - R$ 200,00</option>
                <option value="Manutenção Fibra">Manutenção Fibra - R$ 150,00</option>
                <option value="Banho de Gel">Banho de Gel - R$ 150,00</option>
                <option value="Manutenção Banho">Manutenção Banho - R$ 130,00</option>
                <option value="Esmaltação em Gel Mãos">Esmaltação em Gel Mãos - R$ 80,00</option>
                <option value="Esmaltação em Gel Pés">Esmaltação em Gel Pés - R$ 90,00</option>
                <option value="Esmaltação em Gel Mão e Pés">Esmaltação em Gel Mão + Pés - R$ 150,00</option>
                
            </select>
        </div>
        <div className="flex flex-col w-[330px]">
            <label className="text-[#867BEE]" htmlFor="text">Escolha o profissional:</label>
            <select className="bg-[#E1DAFF]" name="time" id="time">
                <option value="Eduarda Dias">Eduarda Dias</option>
                <option value="Fernanda Silva">Fernanda Silva</option>
                <option value="Claudia Ferreira">Claudia Ferreira</option>
                <option value="Vitória Gonzales">Vitória Gonzales</option>
                
            </select>
        </div>

        <button className="border-2 rounded-lg p-2 w-[200px] bg-gradient-to-r from-[#867BEE] to-[#E1DAFF] my-8"> 
            CONFERIR
        </button>
              
      </div>
      
    );
  };
  
  export default CalendarComponent;