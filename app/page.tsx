import React, { useState, useEffect } from "react";
import Carousel from "@/app/components/Carousel";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import LoginBar from "@/app/components/LoginBar";

export default function Home() {
  return (
    <div className="w-full h-auto pt-36 md:pt-40 lg:pt-52">
      <LoginBar />
      <Carousel />
    </div>
  );
}
