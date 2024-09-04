<script setup lang="ts">
type ButtonLinkBaseAttributes = {
	href: string,
	target?: string,
	rel?: string,
	useSimpleAnchor?: boolean,
	class?: string,
};
const props = defineProps<ButtonLinkBaseAttributes>()
</script>

<template>
	<a v-if="!(props.useSimpleAnchor ?? false)" :class="`tw-self-stretch tw-flex tw-shrink tw-items-center tw-rounded-full tw-bg-rose-500 hover:tw-bg-rose-700 tw-text-white tw-px-8 tw-py-4${(props.class != undefined ? ` ${props.class}` : '')}`" :href="props.href" :rel="props.rel ?? ''" :target="props.target ?? ''">
		<slot />
	</a>
	<a v-else :class="props.class ?? ''" :href="props.href" :rel="props.rel ?? ''" :target="props.target ?? ''">
		<slot/>
	</a>
</template>

<style scoped>

</style>
