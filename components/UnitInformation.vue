<script setup lang="ts">
import UnitImage from "~/components/UnitImage.vue";

type UnitInformation = {
	unitId: string,
	unitName: string,
	unitYomi: string,
	unitImageId?: string,
	unitImageAlt?: string,
	members: UnitMember[],
};

type UnitMember = {
	name: string,
	yomi: string,
}

const props = defineProps<UnitInformation>();
</script>

<template>
	<section>
		<UnitImage :unitId="props.unitImageId ?? props.unitId" :alt="props.unitImageAlt ?? props.unitYomi"/>
		<div class="tw-mb-28 tw-leading-loose tw-text-white">
			<p class="font-slogan tw-text-center tw-text-3xl xl:tw-text-5xl" v-text="props.unitName"></p>
			<p class="font-slogan tw-text-center tw-mb-14" v-text="unitYomi"></p>
			<ul class="tw-mb-6 tw-list-disc tw-ps-5">
				<li v-for="(member, index) in props.members" :key="index" v-text="member.name"></li>
			</ul>
		</div>
	</section>
</template>
