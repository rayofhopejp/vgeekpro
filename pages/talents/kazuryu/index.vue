<script lang="ts" setup>
definePageMeta({
	layout: 'member-page'
})
const name = "Kazuryu";
const yomi = "Kazuryu";
const description = "Vtuberを魅せるシステムを！";
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
			:alt="yomi"
			memberId="kazuryu"
		/>
	</aside>
	<section class="tw-px-10 xl:tw-px-14 tw-py-14 tw-text-base">
		<section>
			<ProfileHead :catchphrase="description" :name="name" :yomi="yomi">
				ゲーミングチームに所属しており，Vtuber用ゲーム大会の配信用オーバーレイを開発している現役大学生プログラマー．<br/>
				ロボコンからWebアプリケーション開発まで浅く広く経験．つよつよプログラマーになりたい！<br/>
				今はRustや量子コンピュータについて勉強中．
			</ProfileHead>
			<div class="tw-w-fit tw-flex tw-flex-col xl:tw-flex-row xl:tw-flex-wrap tw-justify-between tw-items-center tw-gap-4">
				<XButtonLink screen-name="kazuryu_RL"/>
				<YouTubeChannel handle="kazuryu"/>
			</div>
		</section>
	</section>
</template>
