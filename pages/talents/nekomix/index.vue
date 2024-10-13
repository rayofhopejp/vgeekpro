<script lang="ts" setup>
definePageMeta({
	layout: 'member-page'
})
const name = "猫耳ミクス";
const yomi = "Nekomix";
const description = "知識と想像の交差点へ一歩踏み出す";
const imageId = "nekomix";
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
		<FullBodyImage
			:alt="yomi"
			:memberId="imageId"
			variation="2"
		/>
	</aside>
	<section class="tw-px-10 xl:tw-px-14 tw-py-14 tw-text-base">
		<section>
			<ProfileHead :catchphrase="description" :name="name" :yomi="yomi">
				初めまして、香港出身のVtuber、猫耳です。<br/>
				デジタル世界のバーチャルデータ研究所からリアル世界に来ました。赤狐と雪狐を擬人化したキャラクターとして活動しています。<br/>
				私の配信では、日本麻雀、データサイエンス、科学技術の関連動画、開発配信、そしてゲーム実況を通じて、知識を広めることを目指しています。<br/>
				知識と想像の交差点で、一緒に新しい世界を探求しましょう！
			</ProfileHead>
			<div class="tw-w-fit tw-flex tw-flex-col xl:tw-flex-row xl:tw-flex-wrap tw-justify-between tw-items-center tw-gap-4">
				<XButtonLink screen-name="NekomixNx"/>
				<YouTubeChannel handle="NekomixNx"/>
			</div>
		</section>
		<section>
			<SectionHeader :isDark="true" description="配信内容" title="Contents"/>
			<div class="tw-mb-28 tw-leading-loose xl:tw-max-w-screen-sm xl:tw-mx-auto">
				<ul class="tw-list-disc tw-ps-5">
					<li>日本麻雀：雀魂(雀傑)</li>
					<li>データサイエンス/分析関連動画</li>
					<li>科学技術関連動画</li>
					<li>開発配信</li>
					<li>ゲーム実況</li>
				</ul>
			</div>
		</section>
		<section>
			<SectionHeader :isDark="true" description="プロフィール" title="Profile"/>
			<div class="tw-mb-28 tw-leading-loose tw-align-top xl:tw-max-w-screen-sm xl:tw-mx-auto">
				<table>
					<tbody>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">誕生日</td>
						<td class="tw-pb-4 tw-align-top">
							<LocaleTime day="1" month="8"/>
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">活動開始</td>
						<td class="tw-pb-4 tw-align-top">
							<LocaleTime day="1" month="8" year="2021"/>
						</td>
					</tr>
					</tbody>
				</table>
			</div>
		</section>
	</section>
</template>
