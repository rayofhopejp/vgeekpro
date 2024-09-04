<script setup lang="ts">
import ButtonLinkBase from "~/components/ButtonLinkBase.vue";

type GitHubProfileAttributes = {
	userId: string,
	useSimpleAnchor?: boolean,
};

const props = defineProps<GitHubProfileAttributes>();
</script>

<template>
	<ButtonLinkBase :href="`https://github.com/${props.userId}`" :useSimpleAncher="props.useSimpleAnchor" rel="noopener noreferrer" target="_blank">
		{{ $t("profileCommon.gitHubLinkButton") }}
	</ButtonLinkBase>
</template>
