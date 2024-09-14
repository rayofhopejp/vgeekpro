<script lang="ts" setup>
definePageMeta({
	layout: 'member-page'
})
const name = "坂道輪";
const yomi = "Rin Sakamichi";
const description = "データ構造とアルゴリズム、そして天才貪欲を届けたい！";
const imageId = "rin_sakamichi";
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
				競技プログラミングにハマった自転車VTuberです。<br/>
				AtCoderから競プロ沼に落ち込んで以来、競技プログラミングの楽しさを広めようとしています。<br/>
				元々のゲーム好きと融合して、対戦ゲームBotコンテストのCodinGameでは世界TOP100に入る腕前を誇ります。<br/>
				プログラミングとロードバイクの二刀流で、文武両道・才色兼備を目指して、視聴者と一緒に精進していきます。
			</ProfileHead>
			<div class="tw-w-fit tw-flex tw-flex-col xl:tw-flex-row xl:tw-flex-wrap tw-justify-between tw-items-center tw-gap-4">
				<XButtonLink screen-name="RinSakamichi"/>
				<YouTubeChannel handle="RinSakamichi"/>
				<OtherSiteLink href="https://rinsakamichi.github.io/">
					Website
				</OtherSiteLink>
			</div>
		</section>
		<section>
			<SectionHeader :isDark="true" description="配信内容" title="Contents"/>
			<div class="tw-mb-28 tw-leading-loose xl:tw-max-w-screen-sm xl:tw-mx-auto">
				<ul class="tw-list-disc tw-ps-5">
					<li>雑談</li>
					<li>競技プログラミング</li>
					<li>何かの勉強</li>
					<li>ゲーム実況</li>
				</ul>
			</div>
		</section>
		<section>
			<SectionHeader :isDark="true" description="プロフィール" title="Profile"/>
			<div class="tw-mb-28 tw-leading-loose tw-align-top xl:tw-max-w-screen-sm xl:tw-mx-auto">
				<table>
					<tbody>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">初配信日</td>
						<td class="tw-pb-4 tw-align-top">
							<LocaleTime day="17" month="8" year="2018"/>
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">イラスト・モデル</td>
						<td class="tw-pb-4 tw-align-top">セルフ</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">ハッシュタグ</td>
						<td class="tw-pb-4 tw-align-top">
							汎用タグ: <a href="https://x.com/hashtag/坂道輪" rel="noopener noreferrer" target="_blank">#坂道輪</a>
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-align-top">趣味</td>
						<td class="tw-align-top">自転車、スノーボード、プログラミング、ゲーム</td>
					</tr>
					</tbody>
				</table>
			</div>
		</section>
	</section>
</template>
