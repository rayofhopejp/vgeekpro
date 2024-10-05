<script lang="ts" setup>
import type { Member } from "~/pages/index.vue";

type VideoMemberAttributes = {
	members: Member[],
}


const { locale } = useI18n();
const localePath = useLocalePath();
const config = useRuntimeConfig();

const props = defineProps<VideoMemberAttributes>();

const tabs : {label:string,url:string}[] = [
	{label: "ライブ前" , url: `${config.public.WEB_API}/api/search?name=${props.members.map(e=>e.profileId).join(",")}&type=liveBefore`},
	{label: "ライブ" , url: `${config.public.WEB_API}/api/search?name=${props.members.map(e=>e.profileId).join(",")}&type=liveNow`},
	{label: "ライブ後" , url: `${config.public.WEB_API}/api/search?name=${props.members.map(e=>e.profileId).join(",")}&type=liveAfter`},
	{label: "ビデオ" , url: `${config.public.WEB_API}/api/search?name=${props.members.map(e=>e.profileId).join(",")}&type=video`},
]

const selectTab = ref(tabs[0]);

function tabChange(tab: {label:string,url:string}){
	selectTab.value = tab;
}

</script>

<template>
	<div class="tw-flex tw-flex-row tw-text-slate-800">
		<button v-for="tab in tabs" class="tw-rounded-t-lg tw-py-3 tw-px-5 tw-border-4 tw-border-b-0 tw-border-t-[15px]" v-on:click="()=>tabChange(tab)"
			:class="{'tw-border-[#F43F5E]': tab.label === selectTab.label}">
			{{`${tab.label}`}}
		</button>
	</div>
	<div class="tw-border-4 tw-border-[#F43F5E] tw-p-3 tw-rounded-b-lg tw-rounded-tr-lg tw-text-slate-800/30">
		<VideoList :members="props.members" :url="selectTab.url" />
	</div>
</template>

<style scoped></style>
