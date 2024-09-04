<script setup lang="ts">
type UnitImageAttributes = {
	unitId: string,
	alt: string,
	variation?: string,
	width?: number,
	height?: number
	replaceClass?: string,
	isDisableMarginTopExpand?: boolean,
}
const props = defineProps<UnitImageAttributes>();
const imagePath = computed({
	get: () => {
		if (props.variation != undefined) {
			return `/images/units/${props.unitId}/unit_image_variation_${props.variation}.webp`;
		} else {
			return `/images/units/${props.unitId}/unit_image.webp`;
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
