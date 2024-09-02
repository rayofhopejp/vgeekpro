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
        <FullBodyImage memberId="hyondyu" alt="Hyondyu"/>
      </aside>
      <section className="px-10 xl:px-14 py-14 text-base">
        <section>
          <ProfileHead name="ひょんぢゅ" yomi="Hyondyu" catchphrase="コンパイラが通らない！デバッグ神社を立てろ！">
          こんにちは、皆さん！Pythonを主要プログラミング言語として活動しているIT系YouTuberのひょんぢゅです。私のチャンネルでは、Pythonを使ったプログラミングのチュートリアルやプロジェクト、最新のITトピックをわかりやすくお届けしています。<br/>
          私の好きなことは、ゲームとタロットカード、そしてTRPGです。プログラミングの合間には、ゲームでリフレッシュしたり、タロットカードで未来を占ったり、TRPGで友達と冒険に出たりしています。これらの趣味を通じて、皆さんにも楽しさと新しい発見をシェアできればと思っています。<br/>
          プログラミングの技術だけでなく、ゲームやタロット、TRPGの話題もお楽しみください！チャンネル登録して、一緒に楽しい時間を過ごしましょう。質問やリクエストがあれば、コメントで気軽に教えてくださいね！<br/>
          </ProfileHead>
          <div className="w-fit flex flex-col xl:flex-row xl:flex-wrap justify-between items-center gap-4">
            <XProfile userId="if_hyondyu_"/>
            <YouTubeChannel handle="ひょんぢゅ"/>
          </div>
        </section>
      </section>
    </MemberTemplate>
  );
}
