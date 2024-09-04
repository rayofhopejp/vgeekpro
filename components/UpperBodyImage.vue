<script setup lang="ts">
type UpperBodyImageAttributes = {
	memberId: string,
	alt: string,
	variation?: string,
	width?: number,
	height?: number
	replaceClass?: string,
	isDisableMarginTopExpand?: boolean,
}
const props = defineProps<UpperBodyImageAttributes>();
const imagePath = computed({
	get: () => {
		if (props.variation != undefined) {
			return `/images/members/${props.memberId}/upper_body_variation_${props.variation}.webp`;
		} else {
			return `/images/members/${props.memberId}/upper_body.webp`;
		}
	}
})
</script>

<template>
	<img
		:class="props.replaceClass ?? (`tw-object-contain tw-mt-10 ${(props.isDisableMarginTopExpand ?? false) ? '' : 'xl:tw-mt-40 '}tw-mx-auto`)"
		:src="imagePath"
		:alt="props.alt"
		:width="props.width ?? 200"
		:height="props.height ?? 200"
		/>
</template>

<style scoped>

</style>
