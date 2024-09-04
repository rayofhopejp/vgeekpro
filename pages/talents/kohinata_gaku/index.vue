<script setup lang="ts">
definePageMeta({
	layout: 'member-page'
})
const name = "小日向がく";
const yomi = "Kohinata Gaku";
const description = "はっきんぐ？なにそれおいし～の？";
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
			memberId="kohinata_gaku"
			:alt="yomi"
		/>
	</aside>
	<section class="tw-px-10 xl:tw-px-14 tw-py-14 tw-text-base">
		<section>
			<ProfileHead :name="name" :yomi="yomi" :catchphrase="description">
				CEH，OSCP，OSEP等のハッキング能力を証明する資格を取得しているハッカー系Vtuber💻💀<br/>
				Youtubeにてハッカー（攻撃者）がどのようにしてあなたの情報を日々狙っているのかを解説している<br/>
				映画のような遠い世界の話のように感じるハッキング行為だが、気づかないうちに意外と身近に危険は潜んでいる<br/>
				日頃からの情報セキュリティの備え方について一緒に学んでいこう！✨
			</ProfileHead>
			<div class="tw-w-fit tw-flex tw-flex-col xl:tw-flex-row xl:tw-flex-wrap tw-justify-between tw-items-center tw-gap-4">
				<XButtonLink screen-name="427Kohi"/>
				<YouTubeChannel handle="逸般人のがくHackerGaku"/>
			</div>
		</section>
	</section>
</template>
