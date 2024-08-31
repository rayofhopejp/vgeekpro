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
                  src="/others/members/setsuna.png"
                  alt="SiiSharp"
                  className="object-contain mt-10 xl:mt-40 mx-auto"
                  width={300}
                  height={600}
                  priority
                />
                <Image
                  src="/others/members/setsuna2.png"
                  alt="SiiSharp"
                  className="object-contain mt-10 xl:mt-40 mx-auto"
                  width={300}
                  height={600}
                  priority
                />
              </aside>
              <section className="px-10 xl:px-14 py-14 text-base">
                <section>
                  <div className="mb-28 leading-loose">
                    <p className="font-slogan text-center text-3xl xl:text-5xl">夢向せつな</p>
                    <p className="font-slogan text-center mb-14">Yumemukai Setsuna</p>
                    <p className="font-slogan text-center mb-14 text-xl xl:text-3xl">「いつから仕様書と実体が同じだと錯覚したんですか？」</p>
                    <p className="mb-14">うつろという名の某システム導入チームのエンジニアの記憶を学習したAI。<br/>
                      平日は基本仕事やばいということしか考えられていない。<br/>
                      （お休みの日に流れ弾が来てないだけ今のところマシ）<br/>
                      あいノセカイというRPGゲームの制作に関わっている。<br/>
                    </p>
                  </div>
                  <div className="w-full flex flex-col xl:flex-row xl:flex-wrap justify-between items-center gap-4">
                  <a className="self-stretch flex items-center rounded-full bg-rose-500 hover:bg-rose-700 text-white px-8 py-4" href="https://x.com/setsuna_hope" target="_blank" rel="noopener noreferrer">
                    X (Twitter)
                  </a>
                  <a className="self-stretch flex items-center rounded-full bg-rose-500 hover:bg-rose-700 text-white px-8 py-4" href="https://www.youtube.com/@setsunayumemukai3989" target="_blank" rel="noopener noreferrer">
                    YouTube
                  </a>
                </div>
                </section>
                <section>
                  <div className="mb-14 text-center" data-aos="fade-down" data-aos-duration="2000">
                    <div className="font-bold text-3xl">Contents</div>
                    <div className="text-sm text-rose-300">配信内容</div>
                  </div>
                  <div className="mb-28 leading-loose xl:max-w-screen-sm xl:mx-auto">
                    <ul className="list-disc ps-5">
                      <li>雑談</li>
                      <li>ゲーム制作進捗報告</li>
                      <li>ゲーム制作の一部の作業雑談</li>
                      <li>ゲーム実況</li>
                    </ul>
                  </div>
                </section>
                <section>
                  <div className="mb-14 text-center" data-aos="fade-down" data-aos-duration="2000">
                    <div className="font-bold text-3xl">Profile</div>
                    <div className="text-sm text-rose-300">プロフィール</div>
                  </div>
                  <div className="mb-28 leading-loose align-top xl:max-w-screen-sm xl:mx-auto">
                    <table>
                      <tbody>
                      <tr>
                        <td className="pe-8 xl:pe-16 pb-4 align-top">誕生日</td>
                        <td className="pb-4 align-top">
                          <time dateTime="12/31">3月6日</time>
                        </td>
                      </tr>
                      <tr>
                        <td className="pe-8 xl:pe-16 pb-4 align-top">初配信日</td>
                        <td className="pb-4 align-top">
                          <time dateTime="2023/07/02">2020年9月</time>
                        </td>
                      </tr>
                      <tr>
                        <td className="pe-8 xl:pe-16 pb-4 align-top">イラストレーター</td>
                        <td className="pb-4 align-top">
                          <time dateTime="2023/07/02">0012</time>
                        </td>
                      </tr>
                      <tr>
                        <td className="pe-8 xl:pe-16 pb-4 align-top">モデラー</td>
                        <td className="pb-4 align-top">
                          <time dateTime="2023/07/02">月華光、0012</time>
                        </td>
                      </tr>
                      <tr>
                        <td className="pe-8 xl:pe-16 pb-4 align-top">ハッシュタグ</td>
                        <td className="pb-4 align-top">
                          配信タグ: <a href="https://x.com/hashtag/ゆめむか放送局" target="_blank" rel="noopener noreferrer">#ゆめむか放送局</a> <br/>
                          ファンアートタグ: <a href="https://x.com/hashtag/ゆめむかいらすと" target="_blank" rel="noopener noreferrer">#ゆめむかいらすと</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="pe-8 xl:pe-16 align-top">趣味</td>
                        <td className="align-top">ゲーム制作、物語を考えること、はにわを愛でること</td>
                      </tr>
                      </tbody>
                    </table>
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
