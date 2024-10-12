<script lang="ts" setup>
import type {Member} from "~/pages/index.vue";
import {hash} from "ohash";

type VideoMemberAttributes = {
	members: Member[],
}

type VideoTab = {
	label: string,
	type: string,
	url: string
}

const {locale} = useI18n();
const config = useRuntimeConfig();

const props = defineProps<VideoMemberAttributes>();

const tabs = computed<{ [tabId: string | symbol]: VideoTab }>(() => {
	return {
		schedule: {
			label: "videoListBox.scheduled",
			type: "schedule",
			url: `${config.public.WEB_API}/api/search?name=${props.members.map(e => e.profileId).join(",")}&type=liveBefore`
		},
		live: {
			label: "videoListBox.live",
			type: "live",
			url: `${config.public.WEB_API}/api/search?name=${props.members.map(e => e.profileId).join(",")}&type=liveNow`
		},
		archive: {
			label: "videoListBox.archive",
			type: "archive",
			url: `${config.public.WEB_API}/api/search?name=${props.members.map(e => e.profileId).join(",")}&type=liveAfter`
		},
		video: {
			label: "videoListBox.video",
			type: "video",
			url: `${config.public.WEB_API}/api/search?name=${props.members.map(e => e.profileId).join(",")}&type=video`
		},
	};
});

const updateId = toRef<number>(0);

function tabChange(tabId: string | symbol) {
	selectedTab.value = tabId;
}

const lastFetched = toRef(new Date(0));
const selectedTab = toRef<string | symbol>("live");

const update = () => {
	updateId.value += 1
	lastFetched.value = new Date()
	console.log(lastFetched.value);
}

onMounted(() => {
	update();
	setInterval(update, 600000);
});

</script>

<template>
	<div class="video-list-wrapper">
		<ul id="video-list-container" class="nav nav-tabs" role="tablist">
			<li v-for="tab in tabs" class="nav-item" role="presentation">
				<button @click="()=>tabChange(tab.type)" class="nav-link" :id="`#${tab.type}-tab`" type="button" role="tab" :aria-controls="`${tab.type}-tab-pane`" :class="{'active':tab.type == selectedTab}" :aria-selected="tab.type == selectedTab">
					{{ $t(tab.label) }}
				</button>
			</li>
		</ul>
		<div class="tab-content border-bottom border-start border-end p-2 rounded-bottom">
			<div v-for="tab in tabs" :key="hash(tab)" :id="`${tab.type}-tab-pane`" class="tab-pane fade" :class="{'show': tab.type == selectedTab, 'active': tab.type == selectedTab}" role="tabpanel" :aria-labelledby="`${tab.type}-tab`" tabindex="0">
				<VideoList :key="updateId" :url="tab.url"/>
			</div>
		</div>
	</div>
	<div class="tw-flex">
		<small class="ms-auto tw-text-black">{{ $t("videoListBox.lastFetched").replace("%s", lastFetched.toLocaleString(locale, {year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit"})) }}</small>
	</div>
</template>

<style>
.video-list-wrapper {
	container-type: inline-size;
	height: fit-content;
}
.tab-content {
	background: #ffffff;
	container-type: inline-size;
}
.tab-pane {
	container-type: inline-size;
}
</style>
