<script lang="ts" setup>
type FullBodyImageAttributes = {
	memberId: string,
	alt: string,
	variation?: string,
	width?: number,
	height?: number
}
const props = defineProps<FullBodyImageAttributes>();
const imagePath = computed({
	get: () => {
		if (props.variation != undefined) {
			return `/images/members/${props.memberId}/full_body_variation_${props.variation}.webp`;
		} else {
			return `/images/members/${props.memberId}/full_body.webp`;
		}
	}
})
</script>

<template>
	<img
		:alt="props.alt"
		:height="props.height ?? 600"
		:src="imagePath"
		:width="props.width ?? 300"
		class="tw-object-contain tw-mt-10 xl:tw-mt-40 tw-mx-auto"
	/>
</template>

<style scoped>

</style>
