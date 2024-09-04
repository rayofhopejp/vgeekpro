<script lang="ts" setup>
import ButtonLinkBase from "~/components/ButtonLinkBase.vue";

type XButtonLinkAttributes = {
	screenName?: string,
	userId?: string,
	type?: "profile" | "follow" | "message" | "compose" | "repost" | "retweet" | "like",
	postId?: string,
	body?: string,
	useSimpleAnchor?: boolean,
};

const props = defineProps<XButtonLinkAttributes>();

const link = computed(() => {
	if (props.userId != undefined) {
		//数値ID処理
		switch (props.type) {
			case "follow":
				return `intent/follow?user_id=${props.userId}`;
			case "message":
				if (props.body != undefined) {
					return `messages/compose?recipient_id=${props.userId}&text=${props.body}`;
				} else {
					return `messages/compose?recipient_id=${props.userId}`;
				}
			case "profile":
			default:
				return `intent/user?user_id=${props.userId}`;
		}
	} else if (props.screenName != undefined) {
		//@ID処理
		if (props.postId != undefined) {
			return `${props.screenName}/status/${props.postId}`;
		} else {
			switch (props.type) {
				case "follow":
					return `intent/follow?screen_name${props.screenName}`;
				case "profile":
					return `intent/user?screen_name${props.screenName}`;
				default:
					return props.screenName;
			}
		}
	} else if (props.postId != undefined && (props.type === "repost" || props.type === "retweet" || props.type === "like")) {
		switch (props.type) {
			case "repost":
			case "retweet":
				return `intent/retweet?tweet_id=${props.postId}`;
			case "like":
				return `intent/like?tweet_id=${props.postId}`;
		}
	} else if (props.type === "compose" || props.body != undefined) {
		//投稿
		if (props.body != undefined) {
			//あらかじめBodyを入力した状態で投稿前の編集へ
			return `compose/post?text=${encodeURIComponent(props.body)}`;
		} else {
			//このサイトのURLとハッシュタグを含んだ状態で投稿前の編集へ
			return "compose/post?text=%0A%0A%23%E3%81%B6%E3%81%84%E3%81%8E%E3%83%BC%E3%81%8F%0Ahttps%3A%2F%2Fvgeekpro.com%2F";
		}
	} else {
		return ""
	}
})
const linkType = computed(() => {
	if (props.userId != undefined) {
		//数値ID処理
		switch (props.type) {
			case "follow":
				return "profileCommon.linkButtonFollow";
			case "message":
				return "profileCommon.linkButtonDirectMessage";
			case "profile":
			default:
				return "profileCommon.linkButtonUser"
		}
	} else if (props.screenName != undefined) {
		//@ID処理
		if (props.postId != undefined) {
			return "profileCommon.linkButtonPostAlt";
		} else {
			switch (props.type) {
				case "follow":
					return "profileCommon.linkButtonFollow";
				case "profile":
				default:
					return "profileCommon.linkButtonUser"
			}
		}
	} else if (props.postId != undefined && (props.type === "repost" || props.type === "retweet" || props.type === "like")) {
		switch (props.type) {
			case "repost":
			case "retweet":
				return "profileCommon.linkButtonRepost";
			case "like":
				return "profileCommon.linkButtonLink";
		}
	} else if (props.type === "compose" || props.body != undefined) {
		//投稿
		return "profileCommon.linkButtonCompose"
	} else {
		return "profileCommon.linkButtonMissing";
	}
})

</script>

<template>
	<ButtonLinkBase :href="`https://x.com/${link}`" :useSimpleAncher="props.useSimpleAnchor" rel="noopener noreferrer" target="_blank">
		{{ $t("profileCommon.xLinkButton") }} {{ $(linkType) }}
	</ButtonLinkBase>
</template>
