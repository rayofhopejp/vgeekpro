"use client"; 
import Image from "next/image";
import { useEffect } from "react";
import './fonts.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Marquee from "react-fast-marquee";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])  
  return (
    <main className="flex  flex-col items-center">
      <div className="w-full max-w-5x z-10">
        <p className="fixed left-0 top-0 flex w-full p-1 w-[min(28vw,500px)] z-50">
        <Image
              src="/logo.png"
              alt="Usaneko Logo"
              className="dark:invert"
              width={300}
              height={100}
              priority
            />
        </p>
        <p className=" z-50 fixed font-slogan font-bold right-[100px] top-[20px] flex justify-between p-1 w-[min(500px,60%)]  rounded-full bg-white bg-opacity-50 border-white border-2">
          <button className="pl-[10px] ">About</button>|
          <button>Videos</button>|
          <button>Guidline</button>|
          <button>Link</button>|
          <button className="pr-[10px]">History</button>
        </p>
        <p className=" z-50 fixed font-slogan font-bold right-[20px] top-[20px] flex justify-between p-1 w-[60px] rounded-full bg-white bg-opacity-50 border-white border-2">
          JP/EN
        </p>
      </div>

      <div className="relative video-box">
      <div className=" brightness-50"><video className="video" src="kagura.mp4" autoPlay muted loop/></div>
      <div className="text-white whitespace-nowrap text-[6vw] font-slogan text-box">知のフロンティアは、ここにある。</div>
      </div>

      <div className="z-10 font-slogan justify-items-stretch text-center absolute mt-[50vw] w-full max-w-5x bg-white/50 ">
      <div className="divide-y-8 divide-zinc-200 divide-dotted">
        <div>
          <div data-aos="fade-right"><p className="text-[min(50px,7vw)]">About</p>
          <p className="text-sm text-rose-500">セキュリティホールから、こんばんらーじ！</p><br/></div>
          「うさねこらーじ」は、22歳東大卒新人セキュリティスペシャリストVTuberです。
          <p className="text-[min(30px,4vw)]">様々な経験をして、皆さんと一緒に成長していきます。</p>
          <button className="rounded-full bg-rose-500 text-white justify-self-center m-10 p-2">
            View More ➤
          </button>
        </div>

        <div>
          <div data-aos="fade-right"><p className="text-[min(50px,7vw)]"> Recommended Videos</p></div>
          <Marquee autoFill={true} pauseOnHover={true}>
          <div className="flex justify-center items-center gap-4">
          <a href="https://youtu.be/8rR9A1r_02U"  target="_blank" rel="noopener noreferrer"><Image src="/thmbnail/atcoder_beginner.png" alt={"thumbnail"} width={300} height={300}/></a>
          <a href="https://www.youtube.com/live/BmgETVET1QA"  target="_blank" rel="noopener noreferrer"><Image src="/thmbnail/eromanga.png" alt={"thumbnail"} width={300} height={300}/></a>
          <a href="https://youtube.com/live/WJ0fLH3_2uk" target="_blank" rel="noopener noreferrer"><Image src="/thmbnail/htb.jpg" alt={"thumbnail"} width={300} height={300}/></a>
          <a href="https://youtu.be/BejCkc1K4qs" target="_blank" rel="noopener noreferrer"><Image src="/thmbnail/jikosyoukai.jpg" alt={"thumbnail"} width={300} height={300}/></a>
          <a href="https://youtube.com/live/FE1EaxIJDR8" target="_blank" rel="noopener noreferrer"><Image src="/thmbnail/happyou.png" alt={"thumbnail"} width={300} height={300}/></a>
          <a href="https://youtube.com/live/g_QTfqi8_Ig" target="_blank" rel="noopener noreferrer"><Image src="/thmbnail/koba789_1.png" alt={"thumbnail"} width={300} height={300}/></a>
          <span>   </span>
          </div>
          </Marquee>
          <a href="https://www.youtube.com/@usaneko_xlarge" target="_blank" rel="noopener noreferrer"><button className="rounded-full bg-rose-500 text-white justify-self-center m-10 p-2">
            More on YouTube ➤
          </button></a>
        </div>

        <div>
          <div data-aos="fade-right"><p className="text-[min(50px,7vw)]">Guideline</p></div>
          <p className="text-[min(30px,4vw)]">二次創作などにおけるガイドラインを定めています</p>
          <button className="rounded-full bg-rose-500 text-white justify-self-center m-10 p-2">
            View More ➤
          </button>
        </div>

        <div>
          <div data-aos="fade-right"><p className="text-[min(50px,7vw)]">Link</p></div>
          <a href="https://x.com/usaneko_xlarge" target="_blank" rel="noopener noreferrer"><button className="rounded-full bg-rose-500 text-white justify-self-center m-10 p-2 w-[200px]">
            X(Twitter)
          </button></a>
          <a href="https://www.youtube.com/@usaneko_xlarge" target="_blank" rel="noopener noreferrer"><button className="rounded-full bg-rose-500 text-white justify-self-center m-10 p-2 w-[200px]">
            YouTube
          </button></a>
          <a href="https://discord.gg/zRBavEQz6T" target="_blank" rel="noopener noreferrer"><button className="rounded-full bg-rose-500 text-white justify-self-center m-10 p-2 w-[200px]">
            Discord Server
          </button></a>
          <a href="https://peing.net/ja/usaneko_xlarge" target="_blank" rel="noopener noreferrer"><button className="rounded-full bg-rose-500 text-white justify-self-center m-10 p-2 w-[200px]">
            Peing<br/> (Anonymas Messages)
          </button></a>
          <a href="https://skeb.jp/@usaneko_xlarge" target="_blank" rel="noopener noreferrer"><button className="rounded-full bg-rose-500 text-white justify-self-center m-10 p-2 w-[200px]">
            Skeb
          </button></a>
          <a href="https://usaneko-xlarge.fanbox.cc/" target="_blank" rel="noopener noreferrer"><button className="rounded-full bg-rose-500 text-white justify-self-center m-10 p-2 w-[200px]">
            FanBox
          </button></a>
          <a href="mailto:naomi.lilienthal.jpn@gmail.com" target="_blank" rel="noopener noreferrer"><button className="rounded-full bg-rose-500 text-white justify-self-center m-10 p-2 w-[200px]">
           Mail
          </button></a>
        </div>

        <div>
          <div data-aos="fade-right"><p className="text-[min(50px,7vw)]">History</p></div><br/>
          <p className="text-[min(30px,4vw)]">VTuber を始めた後の出来事</p>
          <p>2023年7月2日 3D 化 & 1 万人記念ライブ</p>
          <p>2023年12月 情報処理安全確保支援士試験合格</p>
          <p>2023年7月2日 VTuber としてデビュー</p><br/>
          <p className="text-[min(30px,4vw)]">VTuber を始める前の出来事</p>
         <p>東京大学工学部卒業</p>
         <p>主著である論文が国際学会を通過、数百回以上引用される</p>
         <p>卒業論文が国際学会を通過</p>
         <p>情報オリンピック予選 A ランク・本戦出場</p>
         <p>応用情報技術者試験合格</p>
         <p>AWS 認定試験 9 個合格 (Security Specialist 含む) </p>
         <p>3 歳時の IQ が 188</p>
        </div><br/><br/><br/><br/>
        ©Usaneko Large All Rights Reserved.
        </div>
      </div>
      <div className="z-0  font-bold text-[200px] text-white justify-items-stretch text-center absolute mt-[50vw] ">
        <Marquee autoFill={true}>
        Usaneko Large<span> </span>
        </Marquee>
      </div>
    </main>
  );
}
