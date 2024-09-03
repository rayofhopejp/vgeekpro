<script setup lang="ts">
import ButtonLinkBase from "~/components/ButtonLinkBase.vue";

type GitHubProfileAttributes = {
	userId: string
};

const props = defineProps<GitHubProfileAttributes>();
</script>

<template>
	<ButtonLinkBase :href="`https://github.com/${props.userId}`" target="_blank" rel="noopener noreferrer">
		GitHub
	</ButtonLinkBase>
</template>
