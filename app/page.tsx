import React, { useState, useEffect } from "react";
import Carousel from "@/components/Carousel";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {

  return (
  <div className='w-full h-auto'>
    <Carousel/>
    <Link href='/about'>about</Link>
  </div>

  );
}
