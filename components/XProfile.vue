<script setup lang="ts">
import ButtonLinkBase from "~/components/ButtonLinkBase.vue";

type XProfileAttributes = {
	userId: string
};

const props = defineProps<XProfileAttributes>();
</script>

<template>
	<ButtonLinkBase :href="`https://x.com/${props.userId}`" target="_blank" rel="noopener noreferrer">
		{{ $t("profileCommon.xLinkButton") }}
	</ButtonLinkBase>
</template>
