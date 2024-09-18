<script lang="ts" setup>
definePageMeta({
	layout: 'member-page'
})
const name = "やすビディア";
const yomi = "YASUVIDIA";
const description = "AIギャル個人開発者!?";
const imageId = "yasuvidia";
useSeoMeta({
	title: name,
	description,
	ogType: "profile",
	ogTitle: name,
	ogDescription: description,
	ogImageUrl: `https://vgeekpro.com/images/members/${imageId}/upper_body.webp`,
	profileUsername: name,
	twitterCard: "summary",
	twitterSite: "@yasun_ai",
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
				AIギャルゆうちゅすを個人開発している新人VTuber。会社員。<br/>
				自身のYouTubeチャンネルではAIギャルと個人開発VTuberのコンビでお届け。<br/>
				LPのコーディングやったりバナーデザインするのが得意な模様。<br/>
				AWS Certified Solutions Architect - Professional 保持<br/>
				AWS Certified DevOps Engineer - Professional 保持
			</ProfileHead>
			<div class="tw-w-fit tw-flex tw-flex-col xl:tw-flex-row xl:tw-flex-wrap tw-justify-between tw-items-center tw-gap-4">
				<XButtonLink screen-name="yasun_ai"/>
				<YouTubeChannel handle="sns-university"/>
			</div>
		</section>
		<section>
			<SectionHeader :isDark="true" description="配信内容" title="Contents"/>
			<div class="tw-mb-28 tw-leading-loose xl:tw-max-w-screen-sm xl:tw-mx-auto">
				<ul class="tw-list-disc tw-ps-5">
					<li>AIギャルの縦動画雑談</li>
					<li>個人開発の作業実況</li>

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
							<LocaleTime day="5" month="1"/>
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">初配信日</td>
						<td class="tw-pb-4 tw-align-top">
							<LocaleTime day="14" month="3" year="2024"/>
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">身長</td>
						<td class="tw-pb-4 tw-align-top">
							<LocaleHeight :height="165" :is-approx="true" original-unit="centimeter"/>
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">ファンネーム</td>
						<td class="tw-pb-4 tw-align-top">AI活おにいさん・おねえさん</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">ハッシュタグ</td>
						<td class="tw-pb-4 tw-align-top">
							配信タグ: <a href="https://x.com/hashtag/yasuvidia" rel="noopener noreferrer" target="_blank">#yasuvidia</a> <br/>
							ファンアートタグ: <a href="https://x.com/hashtag/yasuvidiart" rel="noopener noreferrer" target="_blank">#yasuvidiart</a>
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-align-top">趣味</td>
						<td class="tw-align-top">AIギャルの個人開発</td>
					</tr>
					</tbody>
				</table>
			</div>
		</section>
	</section>
</template>
