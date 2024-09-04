<script setup lang="ts">
import ButtonLinkBase from "~/components/ButtonLinkBase.vue";

type OtherSiteLinkAttributes = {
	href: string
};

const props = defineProps<OtherSiteLinkAttributes>();
</script>

<template>
	<ButtonLinkBase :href="props.href" target="_blank" rel="noopener noreferrer">
		<slot />
	</ButtonLinkBase>
</template>

<style scoped>
a::before {
	display: inline-block;
	margin-right: .25em;
	font-family: bootstrap-icons !important;
	vertical-align: -.125em;
	font-size: 1em;
	content: "\F3EE";
}
</style>
