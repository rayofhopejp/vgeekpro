"use client"; 
import Image from "next/image";
import { useEffect } from "react";
import './fonts.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Marquee from "react-fast-marquee";
import { Link as Scroll } from 'react-scroll';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])  
  return (
    <main className="flex  flex-col items-center">
      <div className="w-full max-w-5x z-50">
        <p  className="fixed left-0 top-0 flex w-full p-1 w-[min(28vw,500px)] z-50">
        <Scroll to="home"><Image
              src="/logo.png"
              alt="Usaneko Logo"
              className="dark:invert"
              width={300}
              height={100}
              priority
            /></Scroll>
        </p>
        <p className=" z-50 fixed font-slogan font-bold right-[100px] top-[20px] flex justify-between p-1 w-[min(500px,60%)]  rounded-full bg-white bg-opacity-50 border-white border-2">
        <Scroll to="about"><button className="pl-[10px] ">About</button></Scroll>|
        <Scroll to="videos"><button>Videos</button></Scroll>|
        <Scroll to="link"><button>Link</button></Scroll>|
        <Scroll to="history"><button>History</button></Scroll>|
        <Scroll to="guideline"><button className="pr-[10px]">Guideline</button></Scroll>
        </p>
        <p className=" z-50 fixed font-slogan font-bold right-[20px] top-[20px] flex justify-between p-1 w-[60px] rounded-full bg-white bg-opacity-50 border-white border-2">
          JP/EN
        </p>
      </div>

      <div id="home" className="relative video-box">
      <div className=" brightness-50"><video className="video" src="kagura.mp4" autoPlay muted loop/></div>
      <div className="text-white whitespace-nowrap text-[6vw] font-slogan text-box">知のフロンティアは、ここにある。</div>
      </div>

      <div className="z-10 font-slogan justify-items-stretch text-center absolute mt-[50vw] w-full max-w-5x bg-white/50 ">
      <div className="divide-y-8 divide-zinc-200 divide-dotted">
        <div id="about" className="lg:flex">
          <Image
            src="/900x1800-touka.png"
            alt="Usaneko Large"
            className="object-contain"
            width={300}
            height={150}
            priority
          />
          <div className="items-center">
          <div data-aos="fade-right"><p className="text-[min(50px,7vw)]">About</p></div>
          <p className="text-[min(60px,8vw)]">うさねこらーじ</p>
          <p className="text-base">Usaneko Large</p><br/>
          <p className="text-lg">「セキュリティホールから、こんばんらーじ！」</p><br/>
          22歳東大卒新人セキュリティスペシャリストVTuber。<br/>
          その本性はポンコツで、配信ではもっぱらイジられたりツッコまれたりしている（東大卒らしい威厳は一切ない）。<br/>
          下ネタとエロをこよなく愛する。ガチ恋勢を増やすべく策略を練っているらしい（しかし、定期的にガチ恋を葬り去るような言動をする）。<br/><br/>
          配信内容<br/>企画もののフリートーク(「自分のエロ漫画を描く」など)<br/>CTF(Hack the BoxやpicoCTFなど)<br/>競技プログラミング(AtCoderなど)<br/>Webプログラミング(ISUCONなど)<br/>資格試験の勉強(IPA資格など)<br/>
          <p className="text-[min(30px,4vw)]">配信を通じて様々な経験をして、<br/>皆さんと一緒に成長していきます！</p><br/><br/>
          <div className="flex justify-center">
          <table className="table-auto">
          <tbody>
            <tr>
              <td className="border border-gray-500">誕生日</td>
              <td className="border border-gray-500">12月31日</td>
            </tr>
            <tr>
              <td className="border border-gray-500">初配信日</td>
              <td className="border border-gray-500">2023年7月2日</td>
            </tr>
            <tr>
              <td className="border border-gray-500">身長</td>
              <td className="border border-gray-500">だいたい170cm</td>
            </tr>
            <tr>
              <td className="border border-gray-500">イラストレーター/モデラー</td>
              <td className="border border-gray-500">覡あおひ/うなぬん(2D)/N(3D)</td>
            </tr>
            <tr>
              <td className="border border-gray-500">ファンネーム</td>
              <td className="border border-gray-500">うさねこリスナー</td>
            </tr>
            <tr>
              <td className="border border-gray-500">ハッシュタグ</td>
              <td className="border border-gray-500">配信タグ: #usanekoxlarge <br/> ファンアートタグ: #usanekoart</td>
            </tr>
            <tr>
              <td className="border border-gray-500">趣味</td>
              <td className="border border-gray-500">配信・プログラミング</td>
            </tr>
          </tbody>
        </table>
        </div><br/><br/>
        <div className="border-2 border-rose-300">
          <p className="text-xl">Words/Meme</p><br/>
          <div className="text-left">
            わかりました。<br/>
            - わかっていないときに使う。<br/><br/>
            こわいよー<br/>
            - 高い声で言うとより怖がっている感が出る。<br/><br/>
            果たして本当にそうでしょうか<br/>
            - ノリツッコミ等で多用される<br/><br/>
            結婚しろ(Marry Me)<br/>
            - リスナー同士やうさねことのカップリングを安易に成立させるときに使う。
          </div>
        </div><br/><br/>
        </div>
        </div>
        <div>
          <div id="videos" data-aos="fade-right"><p className="text-[min(50px,7vw)]"> Recommended Videos</p></div>
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
          <div id="link" data-aos="fade-right"><p className="text-[min(50px,7vw)]">Link</p></div>
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
          <div id="history" data-aos="fade-right"><p className="text-[min(50px,7vw)]">History</p></div><br/>
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
         </div>
         <div>
          <div id="guideline" data-aos="fade-right"><p className="text-[min(50px,7vw)]">Guideline</p></div>
          <p className="text-lg">うさねこらーじコンテンツガイドライン</p>
          うさねこらーじについて<br/>
         「うさねこらーじ」は個人が運営しています。<br/>
         「うさねこらーじ」または「うさねこらーじが生み出したオリジナル作品」に関する一切の権利は当方に帰属します。<br/><br/>
          二次創作について<br/>
          本ガイドラインでは、以下を「原作」と定義します。<br/>
          <ul className="list-disc">
          <li>「うさねこらーじ」または「うさねこらーじが生み出したオリジナル作品」</li>
          <li>うさねこらーじに権利が帰属する動画や写真、イラスト、音声等</li>
          </ul>
          <br/>
          本ガイドラインでは、以下の作品、行為を「二次創作」と定義し、基本的には自由な活動を許可します。<br/>
          <ul className="list-disc">
          <li>個人活動の範囲で、営利を目的としない、原作を基としたあらゆる創作活動</li>
          </ul>
          <br/>
          以下の作品、行為は「二次創作」とは定義されず、許可されません。<br/>
          <ul className="list-disc">
          <li>個人活動の範囲を超えていると判断できる、営利目的での活動や制作、頒布</li>
          <li>原作を引用の範囲を超えて利用したもの</li>
          </ul><br/>
          下記の行為は、例え「二次創作」の範囲であっても許可されません。<br/>
          <ul className="list-disc">
          <li>二次創作グッズの頒布、販売</li>
          <li>政治的、宗教的な内容、特定の思想等を含む表現</li>
          <li>その他、当方が不適切と判断したもの</li>
          </ul><br/>
          上記のガイドラインは予告なく追加や修正を行う可能性があります。
          コンテンツをお楽しみいただく、または二次創作を行う際は、最新の内容をご確認いただくよう、お願いいたします。

          コンテンツの視聴や、二次創作はすべて自身の責任でお願いいたします。
          うさねこらーじや、原作に関する二次創作、または本ガイドラインによって生じるあらゆる損害に関して、うさねこらーじは一切の責任を負いません。
        </div>
        
        <br/><br/><br/><br/>
        ©Usaneko Large All Rights Reserved.
        </div>
      </div>
      <div className="overflow-hidden z-0  fold font-bold text-[200px] text-white justify-items-stretch text-center absolute mt-[50vw] ">
        <Marquee>
        Usaneko Large<span> </span>
        </Marquee>
      </div>
    </main>
  );
}
