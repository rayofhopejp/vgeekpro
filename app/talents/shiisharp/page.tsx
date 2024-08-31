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
                  src="/others/members/shiisharp.png"
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
                    <p className="font-slogan text-center text-3xl xl:text-5xl">椎半音</p>
                    <p className="font-slogan text-center mb-14">Shii Sharp</p>
                    <p className="font-slogan text-center mb-14 text-xl xl:text-3xl">「みんなでペアプロ！あなたとペアプロ！」</p>
                    <p className="mb-14">C#を推すために顕現した開発系VTuber。<br/>
                      C#の魅力を伝えるために日々奮闘中！<br/>
                      といいつつも、レトロPCも大好きで、語り出したら止まらない！！<br/>
                      好きCPUはZ80と68000。好きなOSはPC-EngineとHuman68kとmacOS。<br/>
                      好き言語はBASICとCとC#です。<br/>
                    </p>
                  </div>
                  <div className="w-full flex flex-col xl:flex-row xl:flex-wrap justify-between items-center gap-4">
                  <a className="self-stretch flex items-center rounded-full bg-rose-500 hover:bg-rose-700 text-white px-8 py-4" href="https://x.com/csharpvtuber" target="_blank" rel="noopener noreferrer">
                    X (Twitter)
                  </a>
                  <a className="self-stretch flex items-center rounded-full bg-rose-500 hover:bg-rose-700 text-white px-8 py-4" href="https://www.youtube.com/@cshapVtuber" target="_blank" rel="noopener noreferrer">
                    YouTube
                  </a>
                  <a className="self-stretch flex items-center rounded-full bg-rose-500 hover:bg-rose-700 text-white px-8 py-4" href="https://github.com/ShiiSharp" target="_blank" rel="noopener noreferrer">
                    GitHub
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
                      <li>C#での開発配信(ゲーム開発、アプリ開発)</li>
                      <li>レトロPCでの開発配信(X68000, PC-6001, MZ-700)</li>
                      <li>レトロPCやチップについての雑談</li>
                      <li>セキュリティ雑談(ソースコード解説等)</li>
                      <li>レトロゲーム・レトロっぽいゲームの配信</li>
                      <li>地理雑談等</li>
                      <li>シチュエーションボイス(不定期)</li>
                      <li>乱数放送(不定期)</li>
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
                          <time dateTime="12/31">2月11日</time>
                        </td>
                      </tr>
                      <tr>
                        <td className="pe-8 xl:pe-16 pb-4 align-top">初配信日</td>
                        <td className="pb-4 align-top">
                          <time dateTime="2023/07/02">2023年2月22日</time>
                        </td>
                      </tr>
                      <tr>
                        <td className="pe-8 xl:pe-16 pb-4 align-top">身長</td>
                        <td className="pb-4 align-top">155cm</td>
                      </tr>
                      <tr>
                        <td className="pe-8 xl:pe-16 pb-4 align-top">ハッシュタグ</td>
                        <td className="pb-4 align-top">
                          配信タグ: <a href="https://x.com/hashtag/椎半音" target="_blank" rel="noopener noreferrer">#椎半音</a> <br/>
                        </td>
                      </tr>
                      <tr>
                        <td className="pe-8 xl:pe-16 align-top">趣味</td>
                        <td className="align-top">プログラミング、レトロPC、ゲーム、地理、乱数、オートバイ</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
                <section>
                  <div className="mb-14 text-center" data-aos="fade-down" data-aos-duration="2000">
                    <div className="font-bold text-3xl">Words / Meme</div>
                    <div className="text-sm text-rose-300">ジャーゴン</div>
                  </div>
                  <div className="leading-loose xl:max-w-screen-sm xl:mx-auto">
                    <ul className="list-disc ps-5">
                      <li>
                       かしこい！
                        <ul>
                          <li>AIが求めていたソースコードを吐き出してきたときによく出る。</li>
                        </ul>
                      </li>
                      <li>
                       *** is どこ?
                        <ul>
                          <li>
                          GeoGuessr配信で知らない地名が出たときによく出る。
                          </li>
                        </ul>
                      </li>
                    </ul>
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
