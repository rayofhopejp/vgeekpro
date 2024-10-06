<script lang="ts" setup>
import type { Member } from "~/pages/index.vue";

type VideoMemberAttributes = {
	url: string,
}

type Video = {
	url: string,
	videoId: string,
	publishedAt: string,
	channelTitle: string,
	title: string,
	description: string,
	thumbnail: string,
	liveBroadcast: string,
	liveScheduledStartTime: string,
	liveActualStartTime: string,
	liveActualEndTime: string
}

const { locale } = useI18n();
const localePath = useLocalePath();
const config = useRuntimeConfig();

const props = defineProps<VideoMemberAttributes>();

const memberVideo = ref<Video[]>([]);
const isStart = ref(true);
const errorLog = ref("");

watch(() => props.url, async()=>{
	try {
		memberVideo.value = await $fetch<Video[]>(props.url);
		isStart.value = false;
	} catch (error) {
		errorLog.value = 'API Error!' + error;
	}
},{
	immediate: true
});

</script>

<template>
	<section class="tw-w-[80vw] tw-h-[300px] tw-my-3">
		<div v-if="isStart === false && memberVideo.length !== 0" class="tw-leading-loose tw-text-black tw-flex tw-flex-row tw-h-full tw-overflow-x-auto scrollbar">
			<div v-for="videoItem in memberVideo" class="tw-h-full tw-mx-2">
				<a :key="videoItem.videoId" :href="videoItem.url"  class="tw-h-full">
					<div class="flex flex-col tw-w-[300px] tw-h-[85%] tw-rounded-lg tw-bg-stone-100 tw-overflow-hidden tw-items-center tw-justify-center tw-shadow-md">
						<img
							:alt="videoItem.title"
							:height="1280"
							:src="videoItem.thumbnail"
							:width="720"
							class="tw-h-auto"
						/>
						<div class="p-2">
							<p class="tw-text-sm tw-text-center textline-hidden">{{ `${videoItem.title}`}}</p>
						</div>
					</div>
				</a>
			</div>
		</div>
		<div v-if="isStart === false && memberVideo.length === 0" class="tw-leading-loose tw-flex tw-flex-row tw-h-full tw-flex tw-items-center tw-justify-center ">
			<p class="tw-text-5xl">Not Found</p>
		</div>
	</section>
</template>

<style scoped></style>
