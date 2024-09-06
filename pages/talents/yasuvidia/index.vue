<script setup lang="ts">
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
			:memberId="imageId"
			:alt="yomi"
		/>
	</aside>
	<section class="tw-px-10 xl:tw-px-14 tw-py-14 tw-text-base">
		<section>
			<ProfileHead :name="name" :yomi="yomi" :catchphrase="description">
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
			<SectionHeader :isDark="true" title="Contents" description="配信内容"/>
			<div class="tw-mb-28 tw-leading-loose xl:tw-max-w-screen-sm xl:tw-mx-auto">
				<ul class="tw-list-disc tw-ps-5">
					<li>AIギャルの縦動画雑談</li>
                    <li>個人開発の作業実況</li>

				</ul>
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
							<LocaleTime month="1" day="5" />
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">初配信日</td>
						<td class="tw-pb-4 tw-align-top">
							<LocaleTime year="2024" month="3" day="14" />
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">身長</td>
						<td class="tw-pb-4 tw-align-top">
							<LocaleHeight :height="165" original-unit="centimeter" :is-approx="true" />
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">ファンネーム</td>
						<td class="tw-pb-4 tw-align-top">AI活おにいさん・おねえさん</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">ハッシュタグ</td>
						<td class="tw-pb-4 tw-align-top">
							配信タグ: <a href="https://x.com/hashtag/yasuvidia" target="_blank" rel="noopener noreferrer">#yasuvidia</a> <br/>
							ファンアートタグ: <a href="https://x.com/hashtag/yasuvidiart" target="_blank" rel="noopener noreferrer">#yasuvidiart</a>
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
