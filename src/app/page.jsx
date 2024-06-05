"use client" 

import React, { useState } from 'react';
import MyCalendar from './components/Calendario';
import Header from './components/HeaderHome';
import HeaderHome from './components/HeaderHome';
import AgendamentoForm from './components/AgendamentoForm';

const HomePage = () => {

  return (
    <main className='main-container w-full flex flex-col gap-32 justify-center items-center h-full pt-8 md:pt-16'>
      <HeaderHome />
      <AgendamentoForm />

     

    </main>
  );
};

export default HomePage;
