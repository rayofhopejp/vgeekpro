<script setup lang="ts">
import ButtonLinkBase from "~/components/ButtonLinkBase.vue";

type TwitCastingStreamAttributes = {
	/**
	 * アカウントタイプを選択します。
	 *
	 * アカウントタイプを選択します。アカウントタイプはツイキャスのIDの先頭から判別出来ます。
	 * IDをすべて記述する場合など、選択しない場合は、`Unknown`を選択してください。
	 * - `c:`: キャスアカウントをメールアドレスとパスワードの組で作成した場合です。
	 * - `g:`: Googleアカウントを使ってアカウントを作成した場合です。
	 * - `f:`: 過去にFacebookでアカウントを作成した場合です。
	 * - `i:`: 過去にInstagramでアカウントを作成した場合です。こちらは`Instagram`が対応します
	 * - `ig:`: 過去にInstagramでアカウントを作成した場合です。こちらは`InstagramAlt`が対応します
	 * - ``(記載なし): TwitterまたはXのアカウントでアカウントを作成した場合です。こちらは`XUser`が対応します
	 * - 該当無し: 一切不明です。こちらは`Unknown`が対応します
	 */
	accountType: "CasAccount"|"XUser"|"Instagram"|"InstagramAlt"|"Facebook"|"Google"|"Unknown"
	userId: string
	useSimpleAnchor?: boolean,
};

const props = defineProps<TwitCastingStreamAttributes>();
const accountPrefix = computed({
	get: () => {
		switch (props.accountType) {
			case "CasAccount":
				return "c:";
			case "Facebook":
				return "f:";
			case "Google":
				return "g:";
			case "Instagram":
				return "i:";
			case "InstagramAlt":
				return "ig:";
			case "XUser":
			case "Unknown":
				return "";
		}
	}
})
</script>

<template>
	<ButtonLinkBase :href="`https://www.twitcasting.tv/${accountPrefix}${props.userId}`" :useSimpleAncher="props.useSimpleAnchor" rel="noopener noreferrer" target="_blank">
		{{ $t("profileCommon.twitCastingLinkButton") }} {{ $t("profileCommon.linkButtonStream") }}
	</ButtonLinkBase>
</template>
