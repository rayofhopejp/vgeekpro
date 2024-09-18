<script lang="ts" setup>
definePageMeta({
	layout: 'member-page'
})
const name = "ゆにるユニ";
const yomi = "Yuniru Yuni";
const description = "未来からきてみたけど21世紀のゲームが今日も楽しい！";
const imageId = "yuniru_yuni";
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
		<FullBodyImage
			:alt="yomi"
			:memberId="imageId"
			variation="2"
		/>
	</aside>
	<section class="tw-px-10 xl:tw-px-14 tw-py-14 tw-text-base">
		<section>
			<ProfileHead :catchphrase="description" :name="name" :yomi="yomi">
				未だに使われている技術的負債だらけの21世紀コードを直すため2222年からきたIT-TechLead🌟でも実際は遊んでばかり？！<br/>
				主にゲーム(RTA or ランダムに初見)をTwitchで配信中！遊んでいて欲しくなった色々なツールを作る配信をしたりもしています⭐<br/>
				興味に従って新技術を学んだり数学書を読んだり、歌やピアノなどのやったことのない新しいスキルを身に着ける挑戦をしたりします✨
			</ProfileHead>
			<div class="tw-w-fit tw-flex tw-flex-col xl:tw-flex-row xl:tw-flex-wrap tw-justify-between tw-items-center tw-gap-4">
				<XButtonLink screen-name="yuniruyuni"/>
				<TwitchStream userId="yuniruyuni"/>
				<OtherSiteLink href="http://yuniruyuni.net/">
					Website
				</OtherSiteLink>
				<GitHubProfile userId="yuniruyuni"/>
				<YouTubeChannel handle="yuniruyuni"/>
			</div>
		</section>
	</section>
</template>
