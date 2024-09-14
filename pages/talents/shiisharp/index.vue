<script lang="ts" setup>
definePageMeta({
	layout: 'member-page'
})
const name = "椎半音";
const yomi = "Shii Sharp";
const description = "みんなでペアプロ！あなたとペアプロ！";
const imageId = "shii_sharp";
useSeoMeta({
	title: name,
	description,
	ogType: "profile",
	ogTitle: name,
	ogDescription: description,
	ogImageUrl: `https://vgeekpro.com/images/members/${imageId}/upper_body.webp`,
	profileUsername: name,
	twitterCard: "summary",
	twitterSite: "@vgeekproduction",
})
</script>

<template>
	<aside class="tw-self-start tw-text-center tw-w-full xl:tw-w-auto">
		<FullBodyImage
			:alt="yomi"
			:memberId="imageId"
		/>
	</aside>
	<section class="tw-px-10 xl:tw-px-14 tw-py-14 tw-text-base">
		<section>
			<ProfileHead :catchphrase="description" :name="name" :yomi="yomi">
				C#を推すために顕現した開発系VTuber。<br/>
				C#の魅力を伝えるために日々奮闘中！<br/>
				といいつつも、レトロPCも大好きで、語り出したら止まらない！！<br/>
				好きCPUはZ80と68000。好きなOSはPC-EngineとHuman68kとmacOS。<br/>
				好き言語はBASICとCとC#です。<br/>
			</ProfileHead>
			<div class="tw-w-fit tw-flex tw-flex-col xl:tw-flex-row xl:tw-flex-wrap tw-justify-between tw-items-center tw-gap-4">
				<XButtonLink screen-name="csharpvtuber"/>
				<YouTubeChannel handle="cshapvtuber"/>
				<GitHubProfile userId="ShiiSharp"/>
			</div>
		</section>
		<section>
			<SectionHeader :isDark="true" description="配信内容" title="Contents"/>
			<div class="tw-mb-28 tw-leading-loose xl:tw-max-w-screen-sm xl:tw-mx-auto">
				<ul class="tw-list-disc tw-ps-5">
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
			<SectionHeader :isDark="true" description="プロフィール" title="Profile"/>
			<div class="tw-mb-28 tw-leading-loose tw-align-top xl:tw-max-w-screen-sm xl:tw-mx-auto">
				<table>
					<tbody>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">誕生日</td>
						<td class="tw-pb-4 tw-align-top">
							<LocaleTime day="11" month="2"/>
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">初配信日</td>
						<td class="tw-pb-4 tw-align-top">
							<LocaleTime day="22" month="2" year="2023"/>
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">身長</td>
						<td class="tw-pb-4 tw-align-top">155cm</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">ハッシュタグ</td>
						<td class="tw-pb-4 tw-align-top">
							配信タグ: <a href="https://x.com/hashtag/椎半音" rel="noopener noreferrer" target="_blank">#椎半音</a>
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-align-top">趣味</td>
						<td class="tw-align-top">プログラミング、レトロPC、ゲーム、地理、乱数、オートバイ</td>
					</tr>
					</tbody>
				</table>
			</div>
		</section>
		<section>
			<SectionHeader :isDark="true" description="ジャーゴン" title="Words / Meme"/>
			<div class="tw-leading-loose xl:tw-max-w-screen-sm xl:tw-mx-auto">
				<ul class="tw-list-disc tw-ps-5">
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
</template>
