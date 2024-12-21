<script lang="ts" setup>
definePageMeta({
	layout: 'member-page'
})
const name = "朱兎ねこら";
const yomi = "SYUTO Nekora";
const description = "弱音は飲み込む、足は止めない──時にそれが狂気と呼ばれても";
const imageId = "syutonekora";
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
				赤いフードに猫耳を隠し、宙を舞う兎型ロボを相棒に、サイバーパンクな世界を生き抜く VTuber。<br/>
				東京大学を卒業し、エンジニアとしての腕前をさらに高めようと、黙々と鍛錬を続けている。<br/>
				彼女の目指す先は「人間として胸を張れる存在になる」こと。<br/>
				朱兎ねこらの物語が、あなたの前で始まる。
			</ProfileHead>
			<div class="tw-w-fit tw-flex tw-flex-col xl:tw-flex-row xl:tw-flex-wrap tw-justify-between tw-items-center tw-gap-4">
				<XButtonLink screen-name="syutonekora"/>
				<YouTubeChannel handle="syutonekora"/>
			</div>
		</section>
		<section>
			<SectionHeader :isDark="true" description="配信内容" title="Contents"/>
			<div class="tw-mb-28 tw-leading-loose xl:tw-max-w-screen-sm xl:tw-mx-auto">
				<ul class="tw-list-disc tw-ps-5">
					<li>CTF (Hack the BoxやpicoCTFなど)</li>
					<li>競技プログラミング (LeetCode, AtCoderなど)</li>
					<li>Webプログラミング (ISUCONなど)</li>
					<li>資格試験の勉強 (IPA資格など)</li>
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
							<LocaleTime day="31" month="12"/>
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">初配信日</td>
						<td class="tw-pb-4 tw-align-top">
							<LocaleTime day="2" month="7" year="2023"/>
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">身長</td>
						<td class="tw-pb-4 tw-align-top">
							<LocaleHeight :height="170" :is-approx="true" original-unit="centimeter"/>
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">モデラー</td>
						<td class="tw-pb-4 tw-align-top">082様</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">ファンネーム</td>
						<td class="tw-pb-4 tw-align-top">ねこりす</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">ハッシュタグ</td>
						<td class="tw-pb-4 tw-align-top">
							配信タグ: <a href="https://x.com/hashtag/syutonekora" rel="noopener noreferrer" target="_blank">#syutonekora</a> <br/>
							ファンアートタグ: <a href="https://x.com/hashtag/nekorart" rel="noopener noreferrer" target="_blank">#nekorart</a>
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-align-top">趣味</td>
						<td class="tw-align-top">配信・プログラミング</td>
					</tr>
					</tbody>
				</table>
			</div>
		</section>
	</section>
</template>
