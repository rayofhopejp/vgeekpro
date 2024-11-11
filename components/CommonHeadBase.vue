<script setup lang="ts">
const { locale } = useI18n();
type CommonHeadProps = {
	en: string;
	ja: string;
}
const props = defineProps<CommonHeadProps>()
</script>

<template>
	<div class="font-slogan tw-text-center tw-text-3xl xl:tw-text-5xl" v-text="locale == 'ja' ? props.ja : props.en"></div>
	<div class="font-slogan tw-text-center tw-mb-14" v-text="locale == 'ja' ? props.en : props.ja "></div>
</template>

<style scoped>

</style>
