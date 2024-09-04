<script setup lang="ts">
type SectionHeaderAttributes = {
	isDark?: boolean;
	title: string,
	description: string,
	titleClass?: string,
	descriptionClass?: string
	titleColor?: string,
	descriptionColor?: string,
}

const props = defineProps<SectionHeaderAttributes>();
</script>

<template>
	<div class="tw-mb-14 tw-text-center" data-aos="fade-down" data-aos-duration="2000">
		<div :class="titleClass ?? `tw-font-bold tw-text-3xl${(titleColor !== undefined) ? ` tw-text-${titleColor}` : ''}`" v-text="title"></div>
		<div :class="descriptionClass ?? `tw-text-sm ${((descriptionColor !== undefined) ? `tw-text-${descriptionColor}` : (isDark ?? false) ? 'tw-text-rose-300' : 'tw-text-rose-600')}`" v-text="description"></div>
	</div>
</template>

