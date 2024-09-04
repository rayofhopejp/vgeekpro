<script setup lang="ts">
type ProfileHeadAttributes = {
	name: string,
	yomi: string,
	catchphrase: string,
	isDisableCatchphraseBrackets?: boolean,
}
const props = defineProps<ProfileHeadAttributes>();
</script>

<template>
	<div class="tw-mb-28 tw-leading-loose">
		<p class="font-slogan tw-text-center tw-text-3xl xl:tw-text-5xl">{{ props.name }}</p>
		<p class="font-slogan tw-text-center tw-mb-14">{{ props.yomi }}</p>
		<p v-if="!(props.isDisableCatchphraseBrackets ?? false)" class="font-slogan tw-text-center tw-mb-14 tw-text-xl xl:tw-text-3xl">「{{ props.catchphrase }}」</p>
		<p v-else class="font-slogan tw-text-center tw-mb-14 tw-text-xl xl:tw-text-3xl">{{ props.catchphrase }}</p>
		<p class="tw-mb-14">
			<slot />
		</p>
	</div>
</template>
