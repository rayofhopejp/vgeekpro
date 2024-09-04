<script setup lang="ts">
type ButtonLinkBaseAttributes = {
	href: string,
	target?: string,
	rel?: string,
};
const props = defineProps<ButtonLinkBaseAttributes>()
</script>

<template>
	<a class="tw-self-stretch tw-flex tw-shrink tw-items-center tw-rounded-full tw-bg-rose-500 hover:tw-bg-rose-700 tw-text-white tw-px-8 tw-py-4" :href="props.href" :target="props.target ?? ''" :rel="props.rel ?? ''">
		<slot />
	</a>
</template>

<style scoped>

</style>
