<script setup lang="ts">
import ButtonLinkBase from "~/components/ButtonLinkBase.vue";

type XProfileAttributes = {
	userId: string
	useSimpleAnchor?: boolean,
};

const props = defineProps<XProfileAttributes>();
</script>

<template>
	<ButtonLinkBase :href="`https://x.com/${props.userId}`" :useSimpleAncher="props.useSimpleAnchor" rel="noopener noreferrer" target="_blank">
		{{ $t("profileCommon.xLinkButton") }}
	</ButtonLinkBase>
</template>
