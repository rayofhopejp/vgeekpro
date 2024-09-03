<script setup lang="ts">
import UpperBodyImage from "~/components/UpperBodyImage.vue";

type MemberCardAttributes = {
	name: string,
	yomi: string,
	profileId: string,
	imageId: string,
	imageAlt: string,
}

const props = defineProps<MemberCardAttributes>();
</script>

<template>
	<section class="tw-items-center">
		<UpperBodyImage :memberId="props.imageId" :alt="props.imageAlt" :isDisableMarginTopExpand="true" />
			<div class="tw-mb-28 tw-leading-loose tw-text-black">
				<p class="font-slogan tw-text-center tw-text-3xl xl:tw-text-5xl" v-text="props.name"></p>
				<p class="font-slogan tw-text-center tw-mb-14" v-text="props.yomi"></p>
				<div class="tw-flex tw-flex-col">
					<NuxtLink class="tw-self-stretch tw-rounded-full tw-bg-rose-500 hover:tw-bg-rose-700 tw-text-white tw-px-8 tw-py-4 tw-text-center" :href="`/talents/${props.profileId}`" rel="noopener noreferrer">
						紹介ページへ
					</NuxtLink>
				</div>
			</div>
	</section>
</template>

<style scoped>

</style>
