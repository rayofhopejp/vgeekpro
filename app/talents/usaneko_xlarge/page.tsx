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
                  src="/others/full-body-transparent.webp"
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
                    <p className="font-slogan text-center text-3xl xl:text-5xl">うさねこらーじ</p>
                    <p className="font-slogan text-center mb-14">Usaneko Large</p>
                    <p className="font-slogan text-center mb-14 text-xl xl:text-3xl">「セキュリティホールから、こんばんらーじ！」</p>
                    <p className="mb-14">22才、東大卒、新人セキュリティスペシャリストVTuber。<br/>
                      本性はポンコツ。配信ではもっぱらイジられたりツッコまれたりしている。東大卒らしい威厳は一切ない。<br/>
                      下ネタとエロをこよなく愛する。ガチ恋勢を増やすべく策略を練っている。しかし、定期的にガチ恋を葬り去るような言動をする。<br/>
                      配信をつうじて様々な経験をして、みなさんと一緒に成長していきます！</p>
                  </div>
                  <div className="w-full flex flex-col xl:flex-row xl:flex-wrap justify-between items-center gap-4">
                  <a className="self-stretch flex items-center rounded-full bg-rose-500 hover:bg-rose-700 text-white px-8 py-4" href="https://x.com/usaneko_xlarge" target="_blank" rel="noopener noreferrer">
                    うさねこらーじの X (Twitter)
                  </a>
                  <a className="self-stretch flex items-center rounded-full bg-rose-500 hover:bg-rose-700 text-white px-8 py-4" href="https://www.youtube.com/@usaneko_xlarge" target="_blank" rel="noopener noreferrer">
                    うさねこらーじの YouTube
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
                      <li>企画ものフリートーク(「自分のエロ漫画を描く」など)</li>
                      <li>CTF (Hack the BoxやpicoCTFなど)</li>
                      <li>競技プログラミング (AtCoderなど)</li>
                      <li>Webプログラミング (ISUCONなど)</li>
                      <li>資格試験の勉強 (IPA資格など)</li>
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
                          <time dateTime="12/31">12月31日</time>
                        </td>
                      </tr>
                      <tr>
                        <td className="pe-8 xl:pe-16 pb-4 align-top">初配信日</td>
                        <td className="pb-4 align-top">
                          <time dateTime="2023/07/02">2023年7月2日</time>
                        </td>
                      </tr>
                      <tr>
                        <td className="pe-8 xl:pe-16 pb-4 align-top">身長</td>
                        <td className="pb-4 align-top">だいたい170cm</td>
                      </tr>
                      <tr>
                        <td className="pe-8 xl:pe-16 pb-4 align-top">イラストレーター</td>
                        <td className="pb-4 align-top">覡あおひ</td>
                      </tr>
                      <tr>
                        <td className="pe-8 xl:pe-16 pb-4 align-top">モデラー</td>
                        <td className="pb-4 align-top">うなぬん(2D) / N(3D)</td>
                      </tr>
                      <tr>
                        <td className="pe-8 xl:pe-16 pb-4 align-top">ファンネーム</td>
                        <td className="pb-4 align-top">うさねこリスナー</td>
                      </tr>
                      <tr>
                        <td className="pe-8 xl:pe-16 pb-4 align-top">ハッシュタグ</td>
                        <td className="pb-4 align-top">
                          配信タグ: <a href="https://x.com/hashtag/usanekoxlarge" target="_blank" rel="noopener noreferrer">#usanekoxlarge</a> <br/>
                          ファンアートタグ: <a href="https://x.com/hashtag/usanekoart" target="_blank" rel="noopener noreferrer">#usanekoart</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="pe-8 xl:pe-16 align-top">趣味</td>
                        <td className="align-top">配信・プログラミング</td>
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
                        わかりました
                        <ul>
                          <li>わかっていないときに使う。</li>
                        </ul>
                      </li>
                      <li>
                        こわいよー
                        <ul>
                          <li>
                            高い声で言うとより怖がっている感が出る。
                          </li>
                        </ul>
                      </li>
                      <li>
                        はたして本当にそうでしょうか
                        <ul>
                          <li>
                            ノリツッコミ等で多用される
                          </li>
                        </ul>
                      </li>
                      <li>
                        結婚しろ(Marry Me)
                        <ul>
                          <li>
                            リスナー同士やうさねことのカップリングを安易に成立させるときに使う。
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
