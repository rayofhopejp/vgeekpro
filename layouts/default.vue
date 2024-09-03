<template>
	<slot />
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
</script>
