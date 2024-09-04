<script setup lang="ts">
import ButtonLinkBase from "~/components/ButtonLinkBase.vue";

type OtherSiteLinkAttributes = {
	href: string
	useSimpleAnchor?: boolean,
};

const props = defineProps<OtherSiteLinkAttributes>();
</script>

<template>
	<ButtonLinkBase :href="props.href" :useSimpleAncher="props.useSimpleAnchor" rel="noopener noreferrer" target="_blank">
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
