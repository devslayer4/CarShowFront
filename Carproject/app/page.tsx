"use client";

import HeaderCarLogo from "@/components/navbar/headerCarLogo";
import HeaderImages from "@/components/navbar/headerImage";


import { CarBrands } from "@/components/CarBrands";

export default function Home() {
  return (
    <>
      <HeaderImages />
      <HeaderCarLogo />
      <CarBrands />
    </>
  );
}