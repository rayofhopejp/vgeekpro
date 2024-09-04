<script setup lang="ts">
import ButtonLinkBase from "~/components/ButtonLinkBase.vue";

type TwitchStreamAttributes = {
	userId: string
	useSimpleAnchor?: boolean,
};

const props = defineProps<TwitchStreamAttributes>();
</script>

<template>
	<ButtonLinkBase :href="`https://www.twitch.tv/${props.userId}`" :useSimpleAncher="props.useSimpleAnchor" rel="noopener noreferrer" target="_blank">
		{{ $t("profileCommon.twitchLinkButton") }} {{ $t("profileCommon.linkButtonStream") }}
	</ButtonLinkBase>
</template>
