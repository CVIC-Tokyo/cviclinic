'use client'

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import Head from "next/head";

export default function Home() {
  const [showShadow, setShowShadow] = useState<boolean>(false);

  useEffect(() => {
    const handleShadow = () => {
        if (window.scrollY >= 90) {
            setShowShadow(true);
        }
        else setShowShadow(false);
    };
    window.addEventListener('scroll', handleShadow);
},[]);

  return (
    <div className='w-full h-full'>
      <div className='w-full h-full flex justify-center'>
        <Navbar showShadow={showShadow} setShowShadow={setShowShadow}/>
        <Carousel/>
      </div>
    </div>
  );
}
