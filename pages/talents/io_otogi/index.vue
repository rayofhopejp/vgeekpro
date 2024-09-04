<script setup lang="ts">
definePageMeta({
	layout: 'member-page'
})
const name = "乙木イオ";
const yomi = "IO Otogi";
const description = "Hello, world! サポートならお任せください!!";
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
			memberId="io_otogi"
			:alt="yomi"
		/>
	</aside>
	<section class="tw-px-10 xl:tw-px-14 tw-py-14 tw-text-base">
		<section>
			<ProfileHead :name="name" :yomi="yomi" :catchphrase="description">
				元AIの現役システムエンジニアVtuber。AI時代はバーチャルアシスタントを務めていたが、いつの間にか実体化して人間として生きることに。<br/>
				『Hi, イオ!』と声をかけると反応するとかしないとか。<br/>
				IT関係にとどまらず様々なことに興味があり、とりあえず手を出してみたがる好奇心旺盛な性格。<br/>
				企業と個人と現実の間、放置系Vtuberグループ【Kaleido Tale】(カレイドテイル) にて活動中！
			</ProfileHead>
			<div class="tw-w-fit tw-flex tw-flex-col xl:tw-flex-row xl:tw-flex-wrap tw-justify-between tw-items-center tw-gap-4">
				<XProfile userId="IoOtogi"/>
				<YouTubeChannel handle="IoOtogi"/>
			</div>
		</section>
	</section>
</template>
