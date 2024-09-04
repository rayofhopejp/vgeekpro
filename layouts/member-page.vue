<template>
	<CommonlyHeader/>
	<main id="main-contents" class="tw-pt-40 tw-w-full tw-flex tw-flex-col tw-items-center">
		<section id="about" class="bg-maze tw-w-full">
			<div class="tw-relative tw-bg-gradient-to-b tw-from-stone-600 tw-from-60%">
				<div class="tw-z-0 tw-absolute tw-top-40 xl:tw-top-28 tw-overflow-hidden tw-w-full">
					<client-only>
						<Vue3Marquee :duration="50">
							<span class="tw-select-none tw-z-0 tw-inline-block tw-font-bold tw-text-stone-500/75 tw-text-[50vw] xl:tw-text-[15vw]">
								Vgeek Production
							</span>
						</Vue3Marquee>
					</client-only>
				</div>
				<div class="tw-z-10 tw-relative tw-flex tw-flex-col xl:tw-flex-row tw-justify-center tw-items-center">
					<slot />
				</div>
			</div>
			<div class="tw-my-10 tw-w-full tw-flex tw-justify-around tw-items-start">
				<NuxtLink :href="localePath('/#members')" class="tw-self-stretch tw-flex-col tw-shrink tw-items-center tw-rounded-full tw-bg-rose-500 hover:tw-bg-rose-700 tw-text-white tw-px-8 tw-py-4" rel="noopener noreferrer">
					戻る
				</NuxtLink>
			</div>
		</section>
	</main>
</template>
<script setup lang="ts">
useHead({
	htmlAttrs: {
		lang: "ja",
	},
	bodyAttrs: {
		class: "font-inter tw-bg-stone-600 tw-text-white"
	}
})
useSeoMeta({
	title: "VGeek",
	titleTemplate: "%s - ぶいぎーく！",
	description: "IT 系 VTuber グループ「ぶいぎーく！」の公式サイトです。",
	ogType: "website",
	ogSiteName: "ぶいぎーく！",
	ogImageUrl: "/images/logo.webp",
	ogDescription: "IT 系 VTuber グループ「ぶいぎーく！」の公式サイトです。",
})

const localePath = useLocalePath();
</script>
