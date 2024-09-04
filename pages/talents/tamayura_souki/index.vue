<script setup lang="ts">
definePageMeta({
	layout: 'member-page'
})
const name = "珠響そうき";
const yomi = "Tamayura Souki";
const description = "魔術世界からバーチャル世界へ SSH！";
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
			memberId="tamayura_souki"
			:alt="yomi"
		/>
	</aside>
	<section class="tw-px-10 xl:tw-px-14 tw-py-14 tw-text-base">
		<section>
			<ProfileHead :name="name" :yomi="yomi" :catchphrase="description">
				ウィザードを目指して魔術世界からバーチャル世界に来たホムンクルス<br/>
				バーチャル世界の魔術であるプログラミングや機械学習の勉強をしたりしなかったり<br/>
				KusoKoudoKaigi を主催したり、プログラミングVを表にまとめたりする習性がある
			</ProfileHead>
			<div class="tw-w-fit tw-flex tw-flex-col xl:tw-flex-row xl:tw-flex-wrap tw-justify-between tw-items-center tw-gap-4">
				<XButtonLink screen-name="tamayurasouki"/>
				<YouTubeChannel handle="tamayurasouki"/>
				<GitHubProfile userId="tamayura-souki"/>
			</div>
		</section>
	</section>
</template>
