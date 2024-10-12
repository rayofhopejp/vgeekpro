<script lang="ts" setup>

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

const {locale} = useI18n();
const config = useRuntimeConfig();

const props = defineProps<VideoMemberAttributes>();

const memberVideo = ref<Video[]>([]);
const isStart = ref(true);
const errorLog = ref("");

watch(() => props.url, async () => {
	try {
		memberVideo.value = await $fetch<Video[]>(props.url);
		isStart.value = false;
	} catch (error) {
		errorLog.value = 'API Error!' + error;
	}
}, {
	immediate: true
});

</script>

<template>
	<section class="list-container tw-h-[400px] tw-my-3">
		<div v-if="isStart === false && memberVideo.length !== 0" class="tw-leading-loose tw-text-black tw-flex tw-flex-row tw-h-full tw-overflow-x-auto scrollbar">
			<div v-for="videoItem in memberVideo" class="tw-h-full tw-mx-2">
				<a :key="videoItem.videoId" :href="videoItem.url" class="tw-h-full disable-link-icons">
					<BCard class="video-list-card tw-h-full">
						<template v-slot:img>
							<BCardImg :alt="videoItem.title" :height="1280" :src="videoItem.thumbnail" :width="720" class="thumbnail"/>
						</template>
						<BCardTitle>
							<p class="tw-text-sm tw-text-center text-line-hidden">{{ videoItem.title }}</p>
						</BCardTitle>
						<template v-slot:footer>
							<div class="tw-h-[5em] description-text">
								<small class="channel-name">{{ videoItem.channelTitle }}</small><br>
								<small>
									<span v-if="videoItem.liveBroadcast == 'upcoming'">
										<span class="tw-me-1">{{ $t("videoListBox.scheduledAt").replace("%s", new Date(videoItem.liveScheduledStartTime).toLocaleString(locale, {year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit"})) }}</span>
									</span>
									<span v-else-if="videoItem.liveBroadcast == 'live'">
										<span class="tw-me-1">{{ $t("videoListBox.from").replace("%s", new Date(videoItem.liveActualStartTime).toLocaleString(locale, {year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit"})) }}</span>
									</span>
									<span v-else>
										<span v-if="videoItem.liveActualStartTime != ''">
											<span>{{ $t("videoListBox.from").replace("%s", new Date(videoItem.liveActualStartTime).toLocaleString(locale, {year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit"})) }}</span><br>
											<span>{{ $t("videoListBox.to").replace("%s", new Date(videoItem.liveActualEndTime).toLocaleString(locale, {year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit"})) }}</span>
										</span>
										<span v-else>
											<span>{{ $t("videoListBox.postedAt").replace("%s", new Date(videoItem.publishedAt).toLocaleString(locale, {year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit"})) }}</span>
										</span>
									</span>
								</small>
							</div>
						</template>
					</BCard>
				</a>
			</div>
		</div>
		<div v-if="!isStart && memberVideo.length === 0" class="tw-leading-loose tw-flex tw-flex-row tw-h-full tw-items-center tw-justify-center ">
			<p class="tw-text-5xl">Not Found</p>
		</div>
	</section>
</template>

<style lang="less" scoped>
.list-container {
	container-type: size;
	width: 100cqw
}

.description-text {
	font-size: 10.5pt;
	line-height: 10.5pt;
}

.thumbnail {
	/* 親指の爪…… ではなく縮小版 */
	background-color: #cccccc;
	aspect-ratio: 16/9;
	object-fit: contain;
}

.channel-name {
	font-size: 12pt;
}

.video-list-card {
	width: calc(calc(100cqw / 1.5) - 1rem);
}

@container (width >= 640px) {
	.video-list-card {
		width: calc(calc(100cqw / 2.5) - 1rem);
	}
}

@container (width >= 768px) {
	.video-list-card {
		width: calc(calc(100cqw / 3.5) - 1rem);
	}
}

@container (width >= 1024px) {
	.video-list-card {
		width: calc(calc(100cqw / 4.5) - 1rem);
	}
}

@container (width >= 1280px) {
	.video-list-card {
		width: calc(calc(100cqw / 5.5) - 1rem);
	}
}

@container (width >= 1536px) {
	.video-list-card {
		width: calc(calc(100cqw / 6.5) - 1rem);
	}
}

@container (width >= 1920px) {
	.video-list-card {
		width: calc(calc(100cqw / 7.5) - 1rem);
	}
}

@container (width >= 3840px) {
	.video-list-card {
		width: calc(calc(100cqw / 12.5) - 1rem);
	}
}
</style>
