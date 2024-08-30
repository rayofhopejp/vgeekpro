"use client";
import Image from "next/image";
import {useEffect} from "react";
import '../../fonts.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Marquee from "react-fast-marquee";
import {Link as Scroll} from 'react-scroll';
import {A11y, Autoplay} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/autoplay';
import Header from "../../header";

const thisYear = new Date().getFullYear();

export default function Page() {
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
              <aside className="self-start text-center w-full xl:w-auto">
                <Image
                  src="/others/iris2664.jpg"
                  alt="Usaneko Large"
                  className="object-contain mt-10 xl:mt-40 mx-auto"
                  width={300}
                  height={600}
                  priority
                />
              </aside>
              <section className="px-10 xl:px-14 py-14 text-base">
                <section>
                  <div className="mb-28 leading-loose">
                    <p className="font-slogan text-center text-3xl xl:text-5xl">東雲絢芽</p>
                    <p className="font-slogan text-center mb-14">SHINONOME Ayame</p>
                    <p className="font-slogan text-center mb-14 text-xl xl:text-3xl">「カーネルの海をクロール中！」</p>
                    <p className="mb-14">いつからかインターネット空間に住み着いた。ICT好きな猫なVTuber。<br/>
                    低レイヤー・セキュリティ・情報法が好物で、よくそのあたりを漁っている。<br/>
                    重度なTwitterユーザーなので、何時でもTwitterでゴロゴロしている。<br/>
                    配信や交流を通して、つよつよな技術猫目指すにゃ～！</p>
                  </div>
                </section>
              </section> 
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
