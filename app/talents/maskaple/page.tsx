"use client";
import {useEffect} from "react";
import '../../fonts.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/autoplay';
import MemberTemplate from "@/components/MemberTemplate";
import FullBodyImage from "@/components/FullBodyImage";
import ProfileHead from "@/components/ProfileHead";
import XProfile from "@/components/XProfile";
import YouTubeChannel from "@/components/YouTubeChannel";
import GitHubProfile from "@/components/GitHubProfile";

export default function Page() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <MemberTemplate>
      <aside className="self-start text-center w-full xl:w-auto">
        <FullBodyImage memberId="maskaple" alt="Maskaple"/>
      </aside>
      <section className="px-10 xl:px-14 py-14 text-base">
        <section>
          <ProfileHead name="ますかぷる" yomi="Maskaple" catchphrase="あなたの心に、ますかぷる割り込み！">
          インフラSEさんに拾われて、いつの間にか自分もインフラSEになっていた飼い猫又。<br/>
          某中小SIer勤務で、1匹でインフラ全般担当しております。<br/>
          好奇心の赴くまま蒐集した知識や技術のコレクションを、皆々様と共有したい！<br/>
          ...と思いつつ、猫のマイペースさで、のんびりまったり活動中。<br/>
          裏方の飼い主さんは、情報処理安全確保支援士の資格持ち。
         </ProfileHead>
          <div className="w-fit flex flex-col xl:flex-row xl:flex-wrap justify-between items-center gap-4">
            <XProfile userId="maskaple"/>
            <YouTubeChannel handle="maskaple"/>
          </div>
        </section>
      </section>
    </MemberTemplate>
  );
}
