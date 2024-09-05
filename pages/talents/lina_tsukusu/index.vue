<script setup lang="ts">
definePageMeta({
	layout: 'member-page'
})
const name = "創好リナ";
const yomi = "Lina Tsukusu";
const description = "僭越ながらバーチャルイキリプログラマをやらせて頂いております";
const imageId = "lina_tsukusu";
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
			:memberId="imageId"
			:alt="yomi"
		/>
	</aside>
	<section class="tw-px-10 xl:tw-px-14 tw-py-14 tw-text-base">
		<section>
			<ProfileHead :name="name" :yomi="yomi" :catchphrase="description">
				バーチャルイキリプログラマを名乗るVTuber系フリーランスWebエンジニア｡<br/>
				エンジニア界隈でよく行われるLTなどのような"技術でエンタメ"を作りたくて配信を始める｡<br/>
				とはいえ普段は仕事に追われて倒れているか時間融解ゲームにのめり込んでいることが多い｡配信や動画投稿していたら褒めてあげよう｡
			</ProfileHead>
			<div class="tw-w-fit tw-flex tw-flex-col xl:tw-flex-row xl:tw-flex-wrap tw-justify-between tw-items-center tw-gap-4">
				<XButtonLink screen-name="TsukusuLina"/>
				<YouTubeChannel handle="linatsukusu"/>
				<TwitchStream userId="tsukusulina"/>
				<GitHubProfile userId="neverclear86"/>
			</div>
		</section>
		<section>
			<SectionHeader :isDark="true" title="Profile" description="プロフィール"/>
			<div class="tw-mb-28 tw-leading-loose tw-align-top xl:tw-max-w-screen-sm xl:tw-mx-auto">
				<table>
					<tbody>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">誕生日</td>
						<td class="tw-pb-4 tw-align-top">
							<LocaleTime month="10" day="5"/>
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">初配信日</td>
						<td class="tw-pb-4 tw-align-top">
							<LocaleTime year="2018" month="6" day="27"/>
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">モデル詳細</td>
						<td class="tw-pb-4 tw-align-top">
							<a href="https://hub.vroid.com/characters/3916633358793880827/models/6775955148744018672" rel="noopener noreferrer" target="_blank">{{ $t("profileCommon.vRoidHubLinkButton") }}</a>
						</td>
					</tr>
					</tbody>
				</table>
			</div>
		</section>
	</section>
</template>
