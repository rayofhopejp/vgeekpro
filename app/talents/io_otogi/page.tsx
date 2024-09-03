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
        <FullBodyImage memberId="io_otogi" alt="IO Otogi"/>
      </aside>
      <section className="px-10 xl:px-14 py-14 text-base">
        <section>
          <ProfileHead name="乙木イオ" yomi="IO Otogi" catchphrase="Hello, world! サポートならお任せください!!">
          元AIの現役システムエンジニアVtuber。AI時代はバーチャルアシスタントを務めていたが、いつの間にか実体化して人間として生きることに。<br/>
          『Hi, イオ!』と声をかけると反応するとかしないとか。<br/>
          IT関係にとどまらず様々なことに興味があり、とりあえず手を出してみたがる好奇心旺盛な性格。<br/>
          企業と個人と現実の間、放置系Vtuberグループ【Kaleido Tale】(カレイドテイル) にて活動中！
         </ProfileHead>
          <div className="w-fit flex flex-col xl:flex-row xl:flex-wrap justify-between items-center gap-4">
            <XProfile userId="IoOtogi"/>
            <YouTubeChannel handle="IoOtogi"/>
          </div>
        </section>
      </section>
    </MemberTemplate>
  );
}
