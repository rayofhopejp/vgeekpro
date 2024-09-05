<script setup lang="ts">
definePageMeta({
	layout: 'member-page'
})
const name = "ますかぷる";
const yomi = "Maskaple";
const description = "あなたの心に、ますかぷる割り込み！";
const imageId = "maskaple";
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
				インフラSEさんに拾われて、いつの間にか自分もインフラSEになっていた飼い猫又。<br/>
				某中小SIer勤務で、1匹でインフラ全般担当しております。<br/>
				好奇心の赴くまま蒐集した知識や技術のコレクションを、皆々様と共有したい！<br/>
				...と思いつつ、猫のマイペースさで、のんびりまったり活動中。<br/>
				裏方の飼い主さんは、情報処理安全確保支援士の資格持ち。
			</ProfileHead>
			<div class="tw-w-fit tw-flex tw-flex-col xl:tw-flex-row xl:tw-flex-wrap tw-justify-between tw-items-center tw-gap-4">
				<XButtonLink screen-name="maskaple"/>
				<YouTubeChannel handle="maskaple"/>
			</div>
		</section>
		<section>
			<SectionHeader :isDark="true" title="Contents" description="配信内容"/>
			<div class="tw-mb-28 tw-leading-loose xl:tw-max-w-screen-sm xl:tw-mx-auto">
				<ul class="tw-list-disc tw-ps-5">
					<li>雑談配信 「Barますかぷる」(定期配信/毎週金曜20時～)</li>
					<li>Primitier実況配信 「吾輩はプリミティアンヤマネコになりたい」(不定期配信)</li>
					<li>雀魂配信 「自棄っぱち麻雀」(不定期配信)</li>
					<li>「インフラSE的ゆるふわIT解説」シリーズ(動画)</li>
					<li>「声に出して読みたいIT用語」シリーズ(ショート動画)</li>
					<li>「明日からきっと役に立たない雑学」シリーズ(動画)</li>
				</ul>
				※猫又のきまぐれで増える場合があります。
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
							<LocaleTime month="12" day="27"/>
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">初配信日</td>
						<td class="tw-pb-4 tw-align-top">
							<LocaleTime year="2023" month="12" day="1"/>
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">身長</td>
						<td class="tw-pb-4 tw-align-top">160cmぐらいだったような気がする</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">ファンネーム</td>
						<td class="tw-pb-4 tw-align-top">おやつびと</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">ハッシュタグ</td>
						<td class="tw-pb-4 tw-align-top">
							配信タグ: <a href="https://x.com/hashtag/ますかぷる" target="_blank" rel="noopener noreferrer">#ますかぷる</a> <br/>
							ファンアートタグ: <a href="https://x.com/hashtag/Barますかぷる" target="_blank" rel="noopener noreferrer">#Barますかぷる</a><br/>
							ファンアートタグ: <a href="https://x.com/hashtag/おやつびと絵巻" target="_blank" rel="noopener noreferrer">#おやつびと絵巻</a>
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-align-top">趣味</td>
						<td class="tw-align-top">Adobe製品さんと仲良くする、Unityさんとの和解を図る、その他ちまちまこまごました作業をする</td>
					</tr>
					</tbody>
				</table>
			</div>
		</section>
	</section>
</template>
