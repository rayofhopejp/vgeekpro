<script lang="ts" setup>
definePageMeta({
	layout: 'member-page'
})
const name = "三峰スズ";
const yomi = "Mitsumine Suzu";
const description = "「作る」に夢中、三峰スズです！";
const imageId = "suzu_mitsumine";
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
				電子工作、3Dプリンター、プログラミング、各種DIYに取り組む、Tech&DIYなVTuberネコ人間。<br/>
				「なければ作ろう！すでにあっても自分で作ろう！」をモットーに、さまざまな製作を楽しんでいる。<br/>
				情報処理安全確保支援士 試験合格。
			</ProfileHead>
			<div class="tw-w-fit tw-flex tw-flex-col xl:tw-flex-row xl:tw-flex-wrap tw-justify-between tw-items-center tw-gap-4">
				<XButtonLink screen-name="verylowfreq"/>
				<YouTubeChannel handle="MitsumineSuzu"/>
				<OtherSiteLink href="https://www.suzu-m.com/">
					Website
				</OtherSiteLink>
				<GitHubProfile userId="verylowfreq"/>
			</div>
		</section>
		<section>
			<SectionHeader :isDark="true" description="活動内容" title="Contents"/>
			<div class="tw-mb-28 tw-leading-loose xl:tw-max-w-screen-sm xl:tw-mx-auto">
				<ul class="tw-list-disc tw-ps-5">
					<li>ものづくり・製作動画</li>
					<li>電子工作 はんだづけ配信</li>
					<li>プログラミング配信</li>
					<li>イベント出展</li>
					<li>Vlog</li>
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
							<LocaleTime day="15" month="10"/>
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">初配信日</td>
						<td class="tw-pb-4 tw-align-top">
							<LocaleTime month="2" year="2023"/>
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">ハッシュタグ</td>
						<td class="tw-pb-4 tw-align-top">
							<a href="https://x.com/hashtag/suzu3tsu" rel="noopener noreferrer" target="_blank">#suzu3tsu</a>
						</td>
					</tr>
					</tbody>
				</table>
			</div>
		</section>
	</section>
</template>
