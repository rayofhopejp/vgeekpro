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

export default function Page() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <MemberTemplate>
      <aside className="self-start text-center w-full xl:w-auto">
        <FullBodyImage memberId="yuniru_yuni" alt="Yuniru Yuni"/>
        <FullBodyImage memberId="yuniru_yuni" alt="Yuniru Yuni" variation="2"/>
      </aside>
      <section className="px-10 xl:px-14 py-14 text-base">
        <section>
          <ProfileHead name="ゆにるユニ" yomi="Yuniru Yuni" catchphrase="未来からきてみたけど21世紀のゲームが今日も楽しい！">
            未だに使われている技術的負債だらけの21世紀コードを直すため2222年からきたIT-TechLead🌟でも実際は遊んでばかり？！<br/>
            主にゲーム(RTA or ランダムに初見)をTwitchで配信中！遊んでいて欲しくなった色々なツールを作る配信をしたりもしています⭐<br/>
            興味に従って新技術を学んだり数学書を読んだり、歌やピアノなどのやったことのない新しいスキルを身に着ける挑戦をしたりします✨
         </ProfileHead>
          <div className="w-fit flex flex-col xl:flex-row xl:flex-wrap justify-between items-center gap-4">
            <XProfile userId="yuniruyuni"/>
            <YouTubeChannel handle="yuniruyuni"/>
            <a className="self-stretch flex shrink items-center rounded-full bg-rose-500 hover:bg-rose-700 text-white px-8 py-4" href={`https://www.twitch.tv/yuniruyuni`} target="_blank" rel="noopener noreferrer">
              Twitch
            </a>
          </div>
        </section>
      </section>
    </MemberTemplate>
  );
}
