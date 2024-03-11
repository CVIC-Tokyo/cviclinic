'use client'

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";

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
    <div className='w-full h-screen'>
      <div className='w-full h-auto'>
        <Navbar showShadow={showShadow} setShowShadow={setShowShadow}/>
        <Carousel/>
        <Footer/>
      </div>
    </div>
  );
}
