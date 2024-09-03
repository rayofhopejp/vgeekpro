<script setup lang="ts">
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
		class="tw-object-contain tw-mt-10 xl:tw-mt-40 tw-mx-auto"
		:src="imagePath"
		:alt="props.alt"
		:width="props.width ?? 300"
		:height="props.height ?? 600"
		/>
</template>

<style scoped>

</style>
