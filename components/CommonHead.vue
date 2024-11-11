<script setup lang="ts">
const {locale} = useI18n();
type CommonHeadProps = {
	headingLevel: 1 | 2 | 3 | 4 | 5 | 6 | "1" | "2" | "3" | "4" | "5" | "6" | "none" | null | undefined;
	en: string;
	ja: string;
}
const props = defineProps<CommonHeadProps>()
const parsedHeadingLevel = computed(() => {
	switch (props.headingLevel) {
		case 1:
		case "1":
			return 1
		case 2:
		case "2":
			return 2
		case 3:
		case "3":
			return 3
		case 4:
		case "4":
			return 4
		case 5:
		case "5":
			return 5
		case 6:
		case "6":
			return 6
		default:
			return 0
	}
})
</script>

<template>
	<h1 v-if="parsedHeadingLevel == 1">
		<CommonHeadBase :ja="props.ja" :en="props.en"/>
	</h1>
	<h2 v-else-if="parsedHeadingLevel == 2">
		<CommonHeadBase :ja="props.ja" :en="props.en"/>
	</h2>
	<h3 v-else-if="parsedHeadingLevel == 3">
		<CommonHeadBase :ja="props.ja" :en="props.en"/>
	</h3>
	<h4 v-else-if="parsedHeadingLevel == 4">
		<CommonHeadBase :ja="props.ja" :en="props.en"/>
	</h4>
	<h5 v-else-if="parsedHeadingLevel == 5">
		<CommonHeadBase :ja="props.ja" :en="props.en"/>
	</h5>
	<h6 v-else-if="parsedHeadingLevel == 6">
		<CommonHeadBase :ja="props.ja" :en="props.en"/>
	</h6>
	<div v-else>
		<CommonHeadBase :ja="props.ja" :en="props.en"/>
	</div>
</template>
