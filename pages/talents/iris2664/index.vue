<script setup lang="ts">
definePageMeta({
	layout: 'member-page'
})
const name = "東雲絢芽";
const yomi = "SHINONOME Ayame";
const description = "カーネルの海をクロール中！";
useSeoMeta({
	title: name,
	description,
	ogType: "profile",
	ogTitle: name,
	ogDescription: description,
	profileUsername: name
})
</script>

<template>
	<aside class="tw-self-start tw-text-center tw-w-full xl:tw-w-auto">
		<FullBodyImage
			memberId="shinonome_ayame"
			:alt="yomi"
		/>
	</aside>
	<section class="tw-px-10 xl:tw-px-14 tw-py-14 tw-text-base">
		<section>
			<ProfileHead :name="name" :yomi="yomi" :catchphrase="description">
				いつからかインターネット空間に住み着いた, 情報通信技術が大好きである猫系Virtual YouTuber.<br/>
				低レイヤー・セキュリティ・情報法が好物で，よくそのあたりを漁っている．<br/>
				重度なTwitterユーザーなので, 何時でもTwitterでゴロゴロしている.<br/>
				配信や交流を通して，つよつよな技術猫目指すにゃ～！
			</ProfileHead>
			<div class="tw-w-fit tw-flex tw-flex-col xl:tw-flex-row xl:tw-flex-wrap tw-justify-between tw-items-center tw-gap-4">
				<XButtonLink screen-name="iris2664"/>
				<YouTubeChannel handle="iris2664jp"/>
				<a href="https://vtuber.iris2664.com/" target="_blank" rel="noopener noreferrer">東雲絢芽個人サイト</a>
			</div>
		</section>
		<section>
			<SectionHeader :isDark="true" title="Contents" description="配信内容"/>
			<div class="tw-mb-28 tw-leading-loose xl:tw-max-w-screen-sm xl:tw-mx-auto">
				<ul class="tw-list-disc tw-ps-5">
					<li>雑談・企画フリートーク</li>
					<li>競技プログラミング (AtCoderなど)</li>
					<li>CTF (Hack the Boxなど)</li>
					<li>情報法の勉強・IT関連の判例読み</li>
					<li>資格試験の勉強 (情報処理技術者試験, AWS資格, 簿記, 法学系など)</li>
					<li>ゲーム実況</li>
				</ul>
			</div>
		</section>
		<section>
			<SectionHeader :isDark="true" title="Profile" description="プロフィール"/>
			<div class="tw-mb-28 tw-leading-loose tw-align-top xl:tw-max-w-screen-sm xl:tw-mx-auto">
				<table>
					<tbody>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">誕生日</td>
						<td class="tw-pb-4 tw-align-top">
							<JapaneseTime year="2002" month="5"/>
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">初配信日</td>
						<td class="tw-pb-4 tw-align-top">
							<JapaneseTime year="2024" month="8" day="26"/>
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">身長</td>
						<td class="tw-pb-4 tw-align-top">160cm～170cm</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">イラストレーター</td>
						<td class="tw-pb-4 tw-align-top">N/A</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">モデラー</td>
						<td class="tw-pb-4 tw-align-top">東雲絢芽(3D)</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">ファンネーム</td>
						<td class="tw-pb-4 tw-align-top">しのあやリスナー</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">ハッシュタグ</td>
						<td class="tw-pb-4 tw-align-top">
							配信タグ: <a href="https://x.com/hashtag/shinoaya" target="_blank" rel="noopener noreferrer">#shinoaya</a> <br/>
							ファンアートタグ: <a href="https://x.com/hashtag/shinoayarts" target="_blank" rel="noopener noreferrer">#shinoayarts</a>
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-align-top">趣味</td>
						<td class="tw-align-top">旅行，漫画，アニメ鑑賞，プログラミング，ファッション</td>
					</tr>
					</tbody>
				</table>
			</div>
		</section>
		<section>
			<SectionHeader :isDark="true" title="Words / Meme" description="ジャーゴン"/>
			<div class="tw-leading-loose xl:tw-max-w-screen-sm xl:tw-mx-auto">
				<ul class="tw-list-disc tw-ps-5">
					<li>
						にゃ？
						<ul>
							<li>疑問なときに鳴く鳴き声．</li>
						</ul>
					</li>
					<li>
						にゃーん
						<ul>
							<li>
								間延びした直接言いにくいときに鳴く鳴き声．
							</li>
						</ul>
					</li>
					<li>
						お尋ねの趣旨が必ずしも明らかではないが
						<ul>
							<li>
								回答を留保したり，拒否したり，一般論で返答するに鳴く鳴き声．
							</li>
						</ul>
					</li>
					<li>
						ふむふむ
						<ul>
							<li>
								なんかいい感じのことを言いたいけど思いつかなかったときにとりあえず返事をしたいときに鳴く鳴き声．
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</section>
	</section>
</template>
