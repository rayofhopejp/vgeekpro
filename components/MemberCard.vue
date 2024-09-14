<script lang="ts" setup>
import UpperBodyImage from "~/components/UpperBodyImage.vue";

type MemberCardAttributes = {
	name: string,
	yomi: string,
	profileId: string,
	imageId: string,
	imageAlt: string,
}

const {locale} = useI18n();
const localePath = useLocalePath();

const props = defineProps<MemberCardAttributes>();
</script>

<template>
	<section class="tw-items-center">
		<UpperBodyImage :alt="props.imageAlt" :isDisableMarginTopExpand="true" :memberId="props.imageId"/>
		<div class="tw-mb-28 tw-leading-loose tw-text-black">
			<p class="font-slogan tw-text-center tw-text-3xl xl:tw-text-5xl" v-text="locale == 'ja' ? props.name : props.yomi"></p>
			<p class="font-slogan tw-text-center tw-mb-14" v-text="locale == 'ja' ? props.yomi : props.name "></p>
			<div class="tw-flex tw-flex-col">
				<NuxtLink :href="localePath(`/talents/${props.profileId}`)" class="tw-self-stretch tw-rounded-full tw-bg-rose-500 hover:tw-bg-rose-700 tw-text-white tw-px-8 tw-py-4 tw-text-center" rel="noopener noreferrer">
					{{ $t("topPage.toProfilePage") }}
				</NuxtLink>
			</div>
		</div>
	</section>
</template>

<style scoped>

</style>
