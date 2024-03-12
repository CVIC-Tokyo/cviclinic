import React, { useState, useEffect } from "react";
import Carousel from "@/app/components/Carousel";
import LoginBar from "@/app/components/LoginBar";
import './styles/globals.css'

export default function Home() {
  return (
    <div className="w-full h-auto pt-36 md:pt-40 lg:pt-52">
      <LoginBar />
      <Carousel />
    </div>
  );
}
