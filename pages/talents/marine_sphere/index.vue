<script lang="ts" setup>
definePageMeta({
	layout: 'member-page'
})
const name = "まりんとすふぃあ";
const yomi = "marine&sphere";
const description = "ふたりが一緒なら、未知の技術も怖くない！";
useSeoMeta({
	title: name,
	description,
	ogType: "profile",
	ogTitle: name,
	ogDescription: description,
	profileUsername: name
})
</script>

<template>
	<aside class="tw-self-start tw-text-center tw-w-full xl:tw-w-auto">
		<FullBodyImage
			:alt="yomi"
			memberId="marine_sphere"
		/>
	</aside>
	<section class="tw-px-10 xl:tw-px-14 tw-py-14 tw-text-base">
		<section>
			<ProfileHead :catchphrase="description" :name="name" :yomi="yomi">
				みなさんこんにちは！ まりんとすふぃあです。<br/>
				私たちは、Youtubeをメインに動画投稿をしている2人組エンジニア系VTuberです。（緑の方がまりん、紫がすふぃあ）<br/>
				エンジニア向けの解説動画や、面白そうなコンテンツの紹介動画を定期的に投稿しています！<br/>
				つよつよエンジニアを目指して2人で一緒に成長中！
			</ProfileHead>
			<div class="tw-w-fit tw-flex tw-flex-col xl:tw-flex-row xl:tw-flex-wrap tw-justify-between tw-items-center tw-gap-4">
				<XButtonLink screen-name="MarineSphere_"/>
				<YouTubeChannel handle="MarineSphere8194"/>
			</div>
		</section>
		<section>
			<SectionHeader :isDark="true" description="配信内容" title="Contents"/>
			<div class="tw-mb-28 tw-leading-loose xl:tw-max-w-screen-sm xl:tw-mx-auto">
				<ul class="tw-list-disc tw-ps-5">
					<li>エンジニア向け解説動画</li>
					<li>開発配信</li>
					<li>ゲーム実況</li>
				</ul>
			</div>
		</section>
	</section>

</template>
