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
        <FullBodyImage memberId="shinonome_ayame" alt="SHINONOME Ayame"/>
      </aside>
      <section className="px-10 xl:px-14 py-14 text-base">
        <section>
          <ProfileHead name="東雲絢芽" yomi="SHINONOME Ayame" catchphrase="カーネルの海をクロール中！">
            いつからかインターネット空間に住み着いた。ICT好きな猫なVTuber。<br/>
            低レイヤー・セキュリティ・情報法が好物で、よくそのあたりを漁っている。<br/>
            重度なTwitterユーザーなので、何時でもTwitterでゴロゴロしている。<br/>
            配信や交流を通して、つよつよな技術猫目指すにゃ～！
          </ProfileHead>
          <div className="w-fit flex flex-col xl:flex-row xl:flex-wrap justify-between items-center gap-4">
            <XProfile userId="iris2664"/>
            <YouTubeChannel handle="iris2664jp"/>
          </div>
        </section>
      </section>
    </MemberTemplate>
  );
}
