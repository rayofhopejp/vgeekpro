"use client";
import {useEffect} from "react";
import '../app/fonts.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Marquee from "react-fast-marquee";
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/autoplay';
import Header from "../app/header";
import Link from "next/link";

export default function MemberTemplate({children}: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Header/>
      <main id="main-contents" className="pt-40 w-full flex flex-col items-center">
        <section id="about" className="bg-maze w-full">
          <div className="relative bg-gradient-to-b from-stone-600 from-60%">
            <div className="z-0 absolute top-40 xl:top-28 overflow-hidden w-full">
              <Marquee><span className="z-0 inline-block font-bold text-stone-500/75 text-[50vw] xl:text-[15vw]">Vgeek Production</span></Marquee>
            </div>
            <div className="z-10 relative flex flex-col xl:flex-row justify-center items-center">
              {children}
            </div>
          </div>
          <div className="my-10 w-full flex justify-around items-start">
            <Link className="self-stretch flex-col shrink items-center rounded-full bg-rose-500 hover:bg-rose-700 text-white px-8 py-4" href="/" rel="noopener noreferrer">
              戻る
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
