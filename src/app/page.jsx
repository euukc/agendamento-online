"use client"

import React, { useState } from 'react';
import HeaderHome from './components/HeaderHome';
import MainHome from './components/MainHome';


const HomePage = () => {

  return (

    <main className='w-full h-full flex flex-col my-[35px]'>
      <HeaderHome />
      <MainHome />
    </main>
  );
};

export default HomePage;
