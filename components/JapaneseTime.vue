<script setup lang="ts">
type JapaneseTimeAttributes = {
	year?: string|number,
	month?: string|number,
	day?: string|number,
}

const props = defineProps<JapaneseTimeAttributes>();

const dateTimeValue = toRef("");
const displayValue = toRef("");
const usingTimeElement = toRef(true);
if (props.year != undefined) {
	if (props.month != undefined) {
		if (props.day != undefined) {
			displayValue.value = `${props.year}年${props.month}月${props.day}日`
			dateTimeValue.value = `${props.year}-${props.month}-${props.day}`;
		} else {
			displayValue.value = `${props.year}年${props.month}月`
			dateTimeValue.value = `${props.year}-${props.month}`;
		}
	} else {
		displayValue.value = `${props.year}年`
		dateTimeValue.value = `${props.year}`
	}
} else if (props.month != undefined) {
	if (props.day != undefined) {
		displayValue.value = `${props.month}月${props.day}日`
		dateTimeValue.value = `${props.month}-${props.day}`;
	} else {
		displayValue.value = `${props.month}月`;
		usingTimeElement.value = false;
	}
} else if (props.day != undefined) {
	displayValue.value = `${props.day}日${props.day}`;
	usingTimeElement.value = false;
} else {
	usingTimeElement.value = false;
}
</script>

<template>
	<time v-if="usingTimeElement" :datetime="dateTimeValue" v-text="displayValue"></time>
	<span v-else v-text="displayValue"></span>
</template>

<style scoped>

</style>
