<script setup lang="ts">
import ButtonLinkBase from "~/components/ButtonLinkBase.vue";

type TwitchStreamAttributes = {
	userId: string
};

const props = defineProps<TwitchStreamAttributes>();
</script>

<template>
	<ButtonLinkBase :href="`https://www.twitch.tv/${props.userId}`" target="_blank" rel="noopener noreferrer">
		Twitch
	</ButtonLinkBase>
</template>
