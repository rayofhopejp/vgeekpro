"use client";
import {useEffect} from "react";
import '../../fonts.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/autoplay';
import SectionHeader from "@/components/SectionHeader";
import JapaneseTime from "@/components/JapaneseTime";
import GitHubProfile from "@/components/GitHubProfile";
import YouTubeChannel from "@/components/YouTubeChannel";
import XProfile from "@/components/XProfile";
import MemberTemplate from "@/components/MemberTemplate";
import FullBodyImage from "@/components/FullBodyImage";
import ProfileHead from "@/components/ProfileHead";

export default function Page() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <MemberTemplate>
      <aside className="self-start text-center w-full xl:w-auto">
        <FullBodyImage memberId="shii_sharp" alt="Shii Sharp"/>
      </aside>
      <section className="px-10 xl:px-14 py-14 text-base">
        <section>
          <ProfileHead name="椎半音" yomi="Shii Sharp" catchphrase="みんなでペアプロ！あなたとペアプロ！">
            C#を推すために顕現した開発系VTuber。<br/>
            C#の魅力を伝えるために日々奮闘中！<br/>
            といいつつも、レトロPCも大好きで、語り出したら止まらない！！<br/>
            好きCPUはZ80と68000。好きなOSはPC-EngineとHuman68kとmacOS。<br/>
            好き言語はBASICとCとC#です。<br/>
          </ProfileHead>
          <div className="w-fit flex flex-col xl:flex-row xl:flex-wrap justify-between items-center gap-4">
            <XProfile userId="csharpvtuber"/>
            <YouTubeChannel handle="cshapvtuber"/>
            <GitHubProfile userId="ShiiSharp"/>
          </div>
        </section>
        <section>
          <SectionHeader isDark={true} title="Contents" description="配信内容"/>
          <div className="mb-28 leading-loose xl:max-w-screen-sm xl:mx-auto">
            <ul className="list-disc ps-5">
              <li>C#での開発配信(ゲーム開発、アプリ開発)</li>
              <li>レトロPCでの開発配信(X68000, PC-6001, MZ-700)</li>
              <li>レトロPCやチップについての雑談</li>
              <li>セキュリティ雑談(ソースコード解説等)</li>
              <li>レトロゲーム・レトロっぽいゲームの配信</li>
              <li>地理雑談等</li>
              <li>シチュエーションボイス(不定期)</li>
              <li>乱数放送(不定期)</li>
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
                  <JapaneseTime month="2" day="11"/>
                </td>
              </tr>
              <tr>
                <td className="pe-8 xl:pe-16 pb-4 align-top">初配信日</td>
                <td className="pb-4 align-top">
                  <JapaneseTime year="2023" month="2" day="22"/>
                </td>
              </tr>
              <tr>
                <td className="pe-8 xl:pe-16 pb-4 align-top">身長</td>
                <td className="pb-4 align-top">155cm</td>
              </tr>
              <tr>
                <td className="pe-8 xl:pe-16 pb-4 align-top">ハッシュタグ</td>
                <td className="pb-4 align-top">
                  配信タグ: <a href="https://x.com/hashtag/椎半音" target="_blank" rel="noopener noreferrer">#椎半音</a>
                </td>
              </tr>
              <tr>
                <td className="pe-8 xl:pe-16 align-top">趣味</td>
                <td className="align-top">プログラミング、レトロPC、ゲーム、地理、乱数、オートバイ</td>
              </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section>
          <SectionHeader isDark={true} title="Words / Meme" description="ジャーゴン"/>
          <div className="leading-loose xl:max-w-screen-sm xl:mx-auto">
            <ul className="list-disc ps-5">
              <li>
                かしこい！
                <ul>
                  <li>AIが求めていたソースコードを吐き出してきたときによく出る。</li>
                </ul>
              </li>
              <li>
                *** is どこ?
                <ul>
                  <li>
                    GeoGuessr配信で知らない地名が出たときによく出る。
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </section>
    </MemberTemplate>
  );
}
