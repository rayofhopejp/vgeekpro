<script lang="ts" setup>
import type {Member} from "~/pages/index.vue";

type VideoMemberAttributes = {
	members: Member[],
}

type VideoTab = {
	label: string,
	type: string,
	url: string
}

const {locale} = useI18n();
const localePath = useLocalePath();
const config = useRuntimeConfig();

const props = defineProps<VideoMemberAttributes>();

const tabs = ref<VideoTab[]>(reload());

const selectTab = ref<VideoTab>(tabs.value[0]);

function tabChange(tab: VideoTab) {
	selectTab.value = tab;
}

function reload() {
	return [
		{
			label: "videoListBox.scheduled",
			type: "schedule",
			url: `${config.public.WEB_API}/api/search?name=${props.members.map(e => e.profileId).join(",")}&type=liveBefore`
		},
		{
			label: "videoListBox.live",
			type: "live",
			url: `${config.public.WEB_API}/api/search?name=${props.members.map(e => e.profileId).join(",")}&type=liveNow`
		},
		{
			label: "videoListBox.archive",
			type: "archive",
			url: `${config.public.WEB_API}/api/search?name=${props.members.map(e => e.profileId).join(",")}&type=liveAfter`
		},
		{
			label: "videoListBox.video",
			type: "video",
			url: `${config.public.WEB_API}/api/search?name=${props.members.map(e => e.profileId).join(",")}&type=video`
		},
	];
}

watch(() => props.members, async () => {
	tabs.value = reload();
	const newTab = tabs.value.find(e => e.type === selectTab.value.type);
	if (newTab) {
		selectTab.value = newTab;
	} else {
		selectTab.value = tabs.value[0];
	}
}, {
	immediate: true
});


</script>

<template>
	<div class="tw-flex tw-flex-row tw-text-slate-800">
		<button v-for="tab in tabs" :class="{'tw-border-[#F43F5E]': tab.type === selectTab.type}" class="tw-rounded-t-lg tw-py-3 tw-px-5 tw-border-4 tw-border-b-0 tw-border-t-[15px]"
				v-on:click="()=>tabChange(tab)">
			{{ $t(tab.label) }}
		</button>
	</div>
	<div class="tw-border-4 tw-border-[#F43F5E] tw-p-3 tw-rounded-b-lg tw-rounded-tr-lg tw-text-slate-800/30">
		<VideoList :members="props.members" :url="selectTab.url"/>
	</div>
</template>

<style scoped></style>
