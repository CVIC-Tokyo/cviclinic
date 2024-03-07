'use client'

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [showShadow, setShowShadow] = useState<boolean>(false);

  return (
    <Navbar showShadow={showShadow} setShowShadow={setShowShadow}/>
  );
}
