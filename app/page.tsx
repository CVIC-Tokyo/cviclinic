import React, { useState, useEffect } from "react";
import Carousel from "@/components/Carousel";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoginBar from "@/components/LoginBar";

export default function Home() {

  return (
  <div className='w-full h-auto pt-36 md:pt-40 lg:pt-52'>
    <LoginBar/>
    <Carousel/>
  </div>

  );
}
