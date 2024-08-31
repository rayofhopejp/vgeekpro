"use client";
import {useEffect} from "react";
import '@/app/fonts.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/autoplay';
import MemberTemplate from "@/components/MemberTemplate";
import FullBodyImage from "@/components/FullBodyImage";
import YouTubeChannel from "@/components/YouTubeChannel";
import XProfile from "@/components/XProfile";
import SectionHeader from "@/components/SectionHeader";
import ProfileHead from "@/components/ProfileHead";
import JapaneseTime from "@/components/JapaneseTime";

export default function Page() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <MemberTemplate>
      <aside className="self-start text-center w-full xl:w-auto">
        <FullBodyImage
          memberId="usaneko_large"
          alt="Usaneko Large"
        />
      </aside>
      <section className="px-10 xl:px-14 py-14 text-base">
        <section>
          <ProfileHead name="うさねこらーじ" yomi="Usaneko Large" catchphrase="セキュリティホールから、こんばんらーじ！">
            22才、東大卒、新人セキュリティスペシャリストVTuber。<br/>
            本性はポンコツ。配信ではもっぱらイジられたりツッコまれたりしている。東大卒らしい威厳は一切ない。<br/>
            下ネタとエロをこよなく愛する。ガチ恋勢を増やすべく策略を練っている。しかし、定期的にガチ恋を葬り去るような言動をする。<br/>
            配信をつうじて様々な経験をして、みなさんと一緒に成長していきます！
          </ProfileHead>
          <div className="w-fit flex flex-col xl:flex-row xl:flex-wrap justify-between items-center gap-4">
            <XProfile userId="usaneko_xlarge"/>
            <YouTubeChannel handle="usaneko_xlarge"/>
          </div>
        </section>
        <section>
          <SectionHeader isDark={true} title="Contents" description="配信内容"/>
          <div className="mb-28 leading-loose xl:max-w-screen-sm xl:mx-auto">
            <ul className="list-disc ps-5">
              <li>企画ものフリートーク(「自分のエロ漫画を描く」など)</li>
              <li>CTF (Hack the BoxやpicoCTFなど)</li>
              <li>競技プログラミング (AtCoderなど)</li>
              <li>Webプログラミング (ISUCONなど)</li>
              <li>資格試験の勉強 (IPA資格など)</li>
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
                  <JapaneseTime month="12" day="31"/>
                </td>
              </tr>
              <tr>
                <td className="pe-8 xl:pe-16 pb-4 align-top">初配信日</td>
                <td className="pb-4 align-top">
                  <JapaneseTime year="2023" month="7" day="2"/>
                </td>
              </tr>
              <tr>
                <td className="pe-8 xl:pe-16 pb-4 align-top">身長</td>
                <td className="pb-4 align-top">だいたい170cm</td>
              </tr>
              <tr>
                <td className="pe-8 xl:pe-16 pb-4 align-top">イラストレーター</td>
                <td className="pb-4 align-top">覡あおひ</td>
              </tr>
              <tr>
                <td className="pe-8 xl:pe-16 pb-4 align-top">モデラー</td>
                <td className="pb-4 align-top">うなぬん(2D) / N(3D)</td>
              </tr>
              <tr>
                <td className="pe-8 xl:pe-16 pb-4 align-top">ファンネーム</td>
                <td className="pb-4 align-top">うさねこリスナー</td>
              </tr>
              <tr>
                <td className="pe-8 xl:pe-16 pb-4 align-top">ハッシュタグ</td>
                <td className="pb-4 align-top">
                  配信タグ: <a href="https://x.com/hashtag/usanekoxlarge" target="_blank" rel="noopener noreferrer">#usanekoxlarge</a> <br/>
                  ファンアートタグ: <a href="https://x.com/hashtag/usanekoart" target="_blank" rel="noopener noreferrer">#usanekoart</a>
                </td>
              </tr>
              <tr>
                <td className="pe-8 xl:pe-16 align-top">趣味</td>
                <td className="align-top">配信・プログラミング</td>
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
                わかりました
                <ul>
                  <li>わかっていないときに使う。</li>
                </ul>
              </li>
              <li>
                こわいよー
                <ul>
                  <li>
                    高い声で言うとより怖がっている感が出る。
                  </li>
                </ul>
              </li>
              <li>
                はたして本当にそうでしょうか
                <ul>
                  <li>
                    ノリツッコミ等で多用される
                  </li>
                </ul>
              </li>
              <li>
                結婚しろ(Marry Me)
                <ul>
                  <li>
                    リスナー同士やうさねことのカップリングを安易に成立させるときに使う。
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
