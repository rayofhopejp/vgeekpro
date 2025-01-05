<script lang="ts" setup>
definePageMeta({
	layout: 'member-page'
})
const name = "にころ・ちゅーりんぐ";
const yomi = "Nicoro Turing";
const description = "コンパイラが通らない！デバッグ神社を立てろ！";
const imageId = "nicoro_turing";
useSeoMeta({
	title: name,
	description,
	ogType: "profile",
	ogTitle: name,
	ogDescription: description,
	ogImageUrl: `https://vgeekpro.com/images/members/${imageId}/upper_body.webp`,
	profileUsername: name,
	twitterCard: "summary",
	twitterSite: "@vgeekproduction",
})
</script>

<template>
	<aside class="tw-self-start tw-text-center tw-w-full xl:tw-w-auto">
		<FullBodyImage
			:alt="yomi"
			:memberId="imageId"
		/>
	</aside>
	<section class="tw-px-10 xl:tw-px-14 tw-py-14 tw-text-base">
		<section>
			<ProfileHead :catchphrase="description" :name="name" :yomi="yomi">
				こんにちは、皆さん！Pythonを主要プログラミング言語として活動しているIT系YouTuberのにころ・ちゅーりんぐです。私のチャンネルでは、Pythonを使ったプログラミングのチュートリアルやプロジェクト、最新のITトピックをわかりやすくお届けしています。<br/>
				私の好きなことは、ゲームとタロットカード、そしてTRPGです。プログラミングの合間には、ゲームでリフレッシュしたり、タロットカードで未来を占ったり、TRPGで友達と冒険に出たりしています。これらの趣味を通じて、皆さんにも楽しさと新しい発見をシェアできればと思っています。<br/>
				プログラミングの技術だけでなく、ゲームやタロット、TRPGの話題もお楽しみください！チャンネル登録して、一緒に楽しい時間を過ごしましょう。質問やリクエストがあれば、コメントで気軽に教えてくださいね！<br/>
			</ProfileHead>
			<div class="tw-w-fit tw-flex tw-flex-col xl:tw-flex-row xl:tw-flex-wrap tw-justify-between tw-items-center tw-gap-4">
				<XButtonLink screen-name="if__256_turing_"/>
				<YouTubeChannel handle="256_Turing"/>
			</div>
		</section>
	</section>
</template>
