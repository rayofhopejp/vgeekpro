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
        <FullBodyImage memberId="kohinata_gaku" alt="Kohinata Gaku"/>
      </aside>
      <section className="px-10 xl:px-14 py-14 text-base">
        <section>
          <ProfileHead name="小日向がく" yomi="Kohinata Gaku" catchphrase="はっきんぐ？なにそれおいし～の？">
          CEH，OSCP，OSEP等のハッキング能力を証明する資格を取得しているハッカー系Vtuber💻💀<br/>
          Youtubeにてハッカー（攻撃者）がどのようにしてあなたの情報を日々狙っているのかを解説している<br/>
          映画のような遠い世界の話のように感じるハッキング行為だが、気づかないうちに意外と身近に危険は潜んでいる<br/>
          日頃からの情報セキュリティの備え方について一緒に学んでいこう！✨
         </ProfileHead>
          <div className="w-fit flex flex-col xl:flex-row xl:flex-wrap justify-between items-center gap-4">
            <XProfile userId="427Kohi"/>
            <YouTubeChannel handle="逸般人のがくHackerGaku"/>
          </div>
        </section>
      </section>
    </MemberTemplate>
  );
}
