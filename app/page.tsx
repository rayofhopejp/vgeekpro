"use client";
import Image from "next/image";
import {useEffect} from "react";
import './fonts.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Marquee from "react-fast-marquee";
import {Link as Scroll} from 'react-scroll';
import {A11y, Autoplay} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/autoplay';
import Header from "./header";
import Link from "next/link";

const thisYear = new Date().getFullYear();

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Header/>
      <main id="main-contents" className="w-full flex flex-col items-center">

        <div id="home" className="overflow-hidden relative w-full h-svh xl:h-svh">
          <div className="relative w-[400svw] left-[-150svw] xl:left-0 xl:w-full h-full">
            <div className="z-10 relative w-full h-svh bg-gradient-to-b from-transparent from-40% xl:from-60% to-stone-900"></div>
            <Image
              src="/others/topillust.png"
              alt="top illust"
              style={{ objectFit: "cover" }}
              fill
              priority
              />
            <div className="z-20 absolute ps-[3vw] w-full bottom-14 whitespace-nowrap text-center text-[6vw] font-slogan">Reality Meets Virtuality</div>
          </div>
        </div>

        <section id="about" className="bg-maze w-full">
        <div className="relative bg-gradient-to-b from-stone-600 from-60%">
            <div className="z-0 absolute top-40 xl:top-28 overflow-hidden w-full">
              <Marquee><span className="z-0 inline-block font-bold text-stone-500/75 text-[50vw] xl:text-[15vw]">Vgeek Production</span></Marquee>
            </div>
            <div className="z-10 relative flex flex-col xl:flex-row justify-center items-center">
              <section className="px-10 xl:px-14 py-14 text-base">
                <section>
                  <div className="mb-14 text-center" data-aos="fade-down" data-aos-duration="2000">
                    <div className="font-bold text-3xl text-white">About</div>
                    <div className="text-sm text-rose-600">ぶいぎーく！とは</div>
                  </div>
                  <div className="mb-28 leading-loose">
                    <p className="font-slogan text-center text-3xl xl:text-5xl">ぶいぎーく！</p>
                    <p className="font-slogan text-center mb-14">Vgeek Production</p>
                    <p className="font-slogan text-center mb-14 text-xl xl:text-3xl">Reality meets Virtuality</p>
                    <p className="mb-14">「ぶいぎーく！」は、IT 系 VTuber のグループです。</p>
                  </div>
                </section>
              </section>
            </div>
            </div>
            </section>


            <section id="members" className="w-full">
            <div className="relative bg-gradient-to-b from-stone-100 from-90%">
            <div className="z-10 relative flex flex-col xl:flex-row justify-center items-center">
              <section className="px-10 xl:px-14 py-14 text-base">
                <section>
                  <div className="mb-14 text-center" data-aos="fade-down" data-aos-duration="2000">
                    <div className="font-bold text-3xl text-black">Members</div>
                    <div className="text-sm text-rose-600">ゆかいななかまたち</div>
                  </div>
                  <section>
                      <Image
                        src="/others/upper-body.webp"
                        alt="Usaneko Large"
                        className="object-contain mt-10 xl:mt-40 mx-auto"
                        width={200}
                        height={200}
                        priority
                      />
                    <div className="mb-28 leading-loose text-black">
                    <p className="font-slogan text-center text-3xl xl:text-5xl">うさねこらーじ</p>
                    <p className="font-slogan text-center mb-14">Usaneko Large</p>
                    <Link className="self-stretch flex items-center rounded-full bg-rose-500 hover:bg-rose-700 text-white px-8 py-4 text-center" href="/talents/usaneko_xlarge" rel="noopener noreferrer">
                    紹介ページへ
                  </Link>
                  </div>
                  </section>

                  <section>
                      <Image
                        src="/others/iris2664up.png"
                        alt="SHINONOME Ayame"
                        className="object-contain mt-10 xl:mt-40 mx-auto"
                        width={200}
                        height={200}
                        priority
                      />
                    <div className="mb-28 leading-loose text-black">
                    <p className="font-slogan text-center text-3xl xl:text-5xl">東雲絢芽</p>
                    <p className="font-slogan text-center mb-14">SHINONOME Ayame</p>
                    <Link className="self-stretch flex items-center rounded-full bg-rose-500 hover:bg-rose-700 text-white px-8 py-4 text-center" href="/talents/iris2664" rel="noopener noreferrer">
                    紹介ページへ
                  </Link>
                  </div>
                  </section>
                  
                </section>
              </section>
            </div>
          </div>
        </section>

        <section id="groups" className="bg-maze w-full">
        <div className="relative bg-gradient-to-b from-stone-600 from-60%">
            <div className="z-10 relative flex flex-col xl:flex-row justify-center items-center">
              <section className="px-10 xl:px-14 py-14 text-base">
                <section>
                  <div className="mb-14 text-center" data-aos="fade-down" data-aos-duration="2000">
                    <div className="font-bold text-3xl text-white">Groups</div>
                    <div className="text-sm text-rose-600">なかよしな仲間たち</div>
                  </div>
                  <section>
                      <Image
                        src="/others/upper-body.webp"
                        alt="Usaneko Large"
                        className="object-contain mt-10 xl:mt-40 mx-auto"
                        width={200}
                        height={200}
                        priority
                      />
                    <div className="mb-28 leading-loose text-white">
                    <p className="font-slogan text-center text-3xl xl:text-5xl">セキュリティガール</p>
                    <p className="font-slogan text-center mb-14">Security Girl</p>
                    <ul className="mb-6 list-disc ps-5">
                      <li>うさねこらーじ</li>
                      <li>東雲絢芽</li>
                    </ul>
                  </div>
                  </section>
                  
                </section>
              </section>
            </div>
            </div>
            </section>
        
        <section id="link" className="w-full">
          <div className="relative bg-stone-400">
            <div className="px-10 xl:px-14 py-14 text-base">
              <div className="mb-14 text-center" data-aos="fade-down" data-aos-duration="2000">
                <div className="font-bold text-3xl text-stone-900">Link</div>
                <div className="text-sm text-rose-600">IT 系 VTuber を探せ！</div>
              </div>
              <div className="leading-loose text-center">
                <div className="w-full flex flex-col xl:flex-row xl:flex-wrap justify-between items-center gap-4">
                  <a className="self-stretch flex items-center rounded-full bg-rose-500 hover:bg-rose-700 text-white px-8 py-4" href="https://x.com/usaneko_xlarge" target="_blank" rel="noopener noreferrer">
                   ぶいぎーく！公式およびうさねこらーじの X (Twitter)
                  </a>
                  <a className="self-stretch flex items-center rounded-full bg-rose-500 hover:bg-rose-700 text-white px-8 py-4" href="https://www.youtube.com/@usaneko_xlarge" target="_blank" rel="noopener noreferrer">
                   ぶいぎーく！公式およびうさねこらーじの YouTube
                  </a>
                  <a className="self-stretch flex items-center rounded-full bg-rose-500 hover:bg-rose-700 text-white px-8 py-4" href="mailto:naomi.lilienthal.jpn@gmail.com" target="_blank" rel="noopener noreferrer">
                    Mail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="guideline" className="w-full">
          <div className="relative bg-stone-300 text-stone-900">
            <div className="px-10 xl:px-14 py-14 text-base">
              <div className="mb-14 text-center" data-aos="fade-down" data-aos-duration="2000">
                <div className="font-bold text-3xl">Guideline</div>
                <div className="text-sm text-rose-600">ぶいぎーく！ ガイドライン</div>
              </div>
              <div className="leading-loose xl:max-w-screen-sm xl:mx-auto">
                <section>
                  <p className="mb-6 font-bold">ぶいぎーく！について</p>
                  <p className="mb-12">「ぶいぎーく！」は個人が運営している、IT 系 VTuber どうしが助け合うためのグループです。<br/>
                  「ぶいぎーく！」に所属する VTuber たちの言動に対する責任を取るような組織ではありませんので予めご了承ください。</p>
                </section>
                <section>
                  <p className="mb-6 font-bold">参加したい方へ</p>
                  <section>
                    <p className="mb-6">ぶいぎーく！に参加したい方は、以下の条件を満たし続けることが必要です。</p>
                    <ul className="mb-6 list-disc ps-5">
                      <li>Discord または Line のどちらかで連絡が取れること。運営の連絡には 15 日以内に回答してください。</li>
                      <li>上記以外の連絡手段を1つ以上持つこと (Twitter など) </li>
                      <li>過度に社会的に不適切な行為 (差別発言等) を行わないこと</li>
                      <li>ぶいぎーく！の Discord サーバー内のやりとりや運営とのやりとりのうち、許可されていないコンテンツを外部に共有しないこと。</li>
                      <li>ウェブサイトに掲載するための名前、英語名、立ち絵などの絵、口上、説明文を用意できる方</li>
                    </ul>
                  </section>
                  <section>
                    <p className="mb-6">ぶいぎーく！に参加されたい方は以下のいずれかの方法で運営までご連絡ください。</p>
                    <ul className="mb-6 list-disc ps-5">
                      <li>Discord: usaneko_xlarge</li>
                      <li>Twitter: @usaneko_xlarge</li>
                      <li>このページに記載のメールアドレス</li>
                    </ul>
                  </section>
                  <section>
                    <p className="mb-6 font-bold">ガイドラインの改訂および一般事項</p>
                    <p className="mb-6">本ガイドラインは予告なく追加や修正を行う可能性があります。</p>
                    <p className="mb-6">コンテンツをお楽しみいただく、または二次創作を行う際は、最新の内容をご確認いただくよう、お願いいたします。</p>
                    <p className="mb-6">コンテンツの視聴や、二次創作はすべて自身の責任でお願いいたします。</p>
                    <p>ぶいぎーく！や、原作に関する二次創作、または本ガイドラインによって生じるあらゆる損害に関して、ぶいぎーく！は一切の責任を負いません。</p>
                  </section>
                </section>
              </div>
            </div>
          </div>
        </section>
        <footer className="my-16 footer text-base text-center">Copyright &copy; 2023, {thisYear} Usaneko Large</footer>
      </main>
    </>
  );
}
//NOTE: All rights reservedは現行の著作権法においては不要である。なお、Copyrightは"○で囲われたC"の代替として機能するらしい。(後者は真偽不明)
//      一般的なコピーライト文に近くなるよう Copyright (C) {starting_year}, {last_changed_year} {copyright_holder} のような形にした。
