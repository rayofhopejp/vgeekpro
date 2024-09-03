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
				いつからかインターネット空間に住み着いた。ICT好きな猫なVTuber。<br/>
				低レイヤー・セキュリティ・情報法が好物で、よくそのあたりを漁っている。<br/>
				重度なTwitterユーザーなので、何時でもTwitterでゴロゴロしている。<br/>
				配信や交流を通して、つよつよな技術猫目指すにゃ～！
			</ProfileHead>
			<div class="tw-w-fit tw-flex tw-flex-col xl:tw-flex-row xl:tw-flex-wrap tw-justify-between tw-items-center tw-gap-4">
				<XProfile userId="iris2664"/>
				<YouTubeChannel handle="iris2664jp"/>
			</div>
		</section>
	</section>
</template>
