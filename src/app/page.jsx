"use client" 

import React, { useState } from 'react';
import HeaderHome from './components/HeaderHome';
import MainHome from './components/MainHome';



const HomePage = () => {

  return (
    <main className='w-full h-min-full flex flex-col mt-10'>
      <HeaderHome />
      <MainHome />

     

    </main>
  );
};

export default HomePage;
