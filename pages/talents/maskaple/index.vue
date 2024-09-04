<script setup lang="ts">
definePageMeta({
	layout: 'member-page'
})
const name = "ますかぷる";
const yomi = "Maskaple";
const description = "あなたの心に、ますかぷる割り込み！";
const imageId = "maskaple";
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
			:memberId="imageId"
			:alt="yomi"
		/>
	</aside>
	<section class="tw-px-10 xl:tw-px-14 tw-py-14 tw-text-base">
		<section>
			<ProfileHead :name="name" :yomi="yomi" :catchphrase="description">
				インフラSEさんに拾われて、いつの間にか自分もインフラSEになっていた飼い猫又。<br/>
				某中小SIer勤務で、1匹でインフラ全般担当しております。<br/>
				好奇心の赴くまま蒐集した知識や技術のコレクションを、皆々様と共有したい！<br/>
				...と思いつつ、猫のマイペースさで、のんびりまったり活動中。<br/>
				裏方の飼い主さんは、情報処理安全確保支援士の資格持ち。
			</ProfileHead>
			<div class="tw-w-fit tw-flex tw-flex-col xl:tw-flex-row xl:tw-flex-wrap tw-justify-between tw-items-center tw-gap-4">
				<XButtonLink screen-name="maskaple"/>
				<YouTubeChannel handle="maskaple"/>
			</div>
		</section>
	</section>
</template>
