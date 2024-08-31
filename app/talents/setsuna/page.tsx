"use client";
import {useEffect} from "react";
import '../../fonts.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/autoplay';
import FullBodyImage from "@/components/FullBodyImage";
import ProfileHead from "@/components/ProfileHead";
import XProfile from "@/components/XProfile";
import YouTubeChannel from "@/components/YouTubeChannel";
import JapaneseTime from "@/components/JapaneseTime";
import SectionHeader from "@/components/SectionHeader";
import MemberTemplate from "@/components/MemberTemplate";

export default function Page() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <MemberTemplate>
      <aside className="self-start text-center w-full xl:w-auto">
        <FullBodyImage memberId="yumemukai_setsuna" alt="Yumemukai Setsuna"/>
        <FullBodyImage memberId="yumemukai_setsuna" alt="Yumemukai Setsuna" variation="2"/>
      </aside>
      <section className="px-10 xl:px-14 py-14 text-base">
        <section>
          <ProfileHead name="夢向せつな" yomi="Yumemukai Setsuna" catchphrase="いつから仕様書と実体が同じだと錯覚したんですか？">
            うつろという名の某システム導入チームのエンジニアの記憶を学習したAI。<br/>
            平日は基本仕事やばいということしか考えられていない。<br/>
            （お休みの日に流れ弾が来てないだけ今のところマシ）<br/>
            あいノセカイというRPGゲームの制作に関わっている。
          </ProfileHead>
          <div className="w-fit flex flex-col xl:flex-row xl:flex-wrap justify-between items-center gap-4">
            <XProfile userId="setsuna_hope"/>
            <YouTubeChannel handle="setsunayumemukai3989"/>
          </div>
        </section>
        <section>
          <SectionHeader isDark={true} title="Contents" description="配信内容"/>
          <div className="mb-28 leading-loose xl:max-w-screen-sm xl:mx-auto">
            <ul className="list-disc ps-5">
              <li>雑談</li>
              <li>ゲーム制作進捗報告</li>
              <li>ゲーム制作の一部の作業雑談</li>
              <li>ゲーム実況</li>
            </ul>
          </div>
        </section>
        <section>
          <SectionHeader isDark={true} title="Profile" description="プロフィール"/>
          <div className="mb-28 leading-loose align-top xl:max-w-screen-sm xl:mx-auto">
            <table>
              <tbody>
              <tr>
                <td className="pe-8 xl:pe-16 pb-4 align-top">誕生日</td>
                <td className="pb-4 align-top">
                  <JapaneseTime month="3" day="6"/>
                </td>
              </tr>
              <tr>
                <td className="pe-8 xl:pe-16 pb-4 align-top">初配信月</td>
                <td className="pb-4 align-top">
                  <JapaneseTime year="2020" month="9"/>
                </td>
              </tr>
              <tr>
                <td className="pe-8 xl:pe-16 pb-4 align-top">イラストレーター</td>
                <td className="pb-4 align-top">0012</td>
              </tr>
              <tr>
                <td className="pe-8 xl:pe-16 pb-4 align-top">モデラー</td>
                <td className="pb-4 align-top">月華光、0012</td>
              </tr>
              <tr>
                <td className="pe-8 xl:pe-16 pb-4 align-top">ハッシュタグ</td>
                <td className="pb-4 align-top">
                  配信タグ: <a href="https://x.com/hashtag/ゆめむか放送局" target="_blank" rel="noopener noreferrer">#ゆめむか放送局</a> <br/>
                  ファンアートタグ: <a href="https://x.com/hashtag/ゆめむかいらすと" target="_blank" rel="noopener noreferrer">#ゆめむかいらすと</a>
                </td>
              </tr>
              <tr>
                <td className="pe-8 xl:pe-16 align-top">趣味</td>
                <td className="align-top">ゲーム制作、物語を考えること、はにわを愛でること</td>
              </tr>
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </MemberTemplate>
  );
}
