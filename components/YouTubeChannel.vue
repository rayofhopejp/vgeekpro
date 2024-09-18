<script lang="ts" setup>
import ButtonLinkBase from "~/components/ButtonLinkBase.vue";

type YouTubeChannelAttributes = ({
	/**
	 * チャンネルの一意のIDです。おおよそ`UC****`のようなIDです。
	 */
	channelId?: string,
	/**
	 * `@`から始まる認識しやすいIDです。
	 */
	handle?: string,
	/**
	 * ハンドル化以前にカスタムリンクを設定したユーザーの`/c/`以降です
	 */
	customLink?: string,
	/**
	 * 従来のユーザーIDです。`/user/`以降のことを指します。
	 */
	userId?: string
	useSimpleAnchor?: boolean,
});

const props = defineProps<YouTubeChannelAttributes>();

const href = computed({
	get: () => {
		if (props.channelId != undefined) {
			return `https://www.youtube.com/channel/${props.channelId}`;
		} else if (props.customLink != undefined) {
			return `https://www.youtube.com/c/${props.customLink}`;
		} else if (props.userId != undefined) {
			return `https://www.youtube.com/user/${props.userId}`;
		} else if (props.handle != undefined) {
			return `https://www.youtube.com/@${props.handle}`;
		} else {
			return ""
		}
	}
})
const target = computed({
	get: () => {
		if (props.channelId != undefined || props.customLink != undefined || props.userId != undefined || props.handle != undefined) {
			return "_blank";
		} else {
			return ""
		}
	}
})
const rel = computed({
	get: () => {
		if (props.channelId != undefined || props.customLink != undefined || props.userId != undefined || props.handle != undefined) {
			return "noopener noreferrer";
		} else {
			return ""
		}
	}
})
const text = computed({
	get: () => {
		if (props.channelId != undefined || props.customLink != undefined || props.userId != undefined || props.handle != undefined) {
			return "profileCommon.youTubeLinkButton";
		} else {
			return "profileCommon.unknownYouTubeLinkButton";
		}
	}
})
</script>

<template>
	<ButtonLinkBase :href="href" :rel="rel" :target="target" :useSimpleAncher="props.useSimpleAnchor">
		{{ $t(text) }}
	</ButtonLinkBase>
</template>
