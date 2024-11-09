<script lang="ts" setup>
definePageMeta({
	layout: 'member-page'
})
const name = "知推 カナエ";
const yomi = "Chisui Kanae";
const description = "データサイエンスをもっと身近に！";
const imageId = "chisui_kanae";
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
				こんちす！嫁に監視されてるVTuberの知推カナエです。<br>
				本業&副業ともにデータサイエンティストで、多業界でデータ分析を行ったりAI製品化してます！<br>
				「AIってなあに？」という方向けに、みんなにデータサイエンスを身近に感じてもらえるような配信を目指していきます！！<br>
				<br>
				車が大好き&浪費家で1年間で使った金額は1500万。嫁からは収支から位置情報、更にはYouTubeまで監視されています...<br>
				嫁の監視から逃げられるメン限配信をするのが夢！！！
			</ProfileHead>
			<div class="tw-w-fit tw-flex tw-flex-col xl:tw-flex-row xl:tw-flex-wrap tw-justify-between tw-items-center tw-gap-4">
				<XButtonLink screen-name="CHISUI_KANAE"/>
				<YouTubeChannel handle="CHISUI_KANAE"/>
			</div>
		</section>
		<section>
			<SectionHeader :isDark="true" description="配信内容" title="Contents"/>
			<div class="tw-mb-28 tw-leading-loose xl:tw-max-w-screen-sm xl:tw-mx-auto">
				<ul class="tw-list-disc tw-ps-5">
					<li>初心者向けのデータサイエンス紹介</li>
					<li>サーキット走行・反省会</li>
					<li>雑談したり激辛のもの食べたり</li>
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
							<LocaleTime day="27" month="7"/>
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">初配信日</td>
						<td class="tw-pb-4 tw-align-top">
							<LocaleTime day="15" month="6" year="2024"/>
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">身長</td>
						<td class="tw-pb-4 tw-align-top">158cm</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">イラストレーター</td>
						<td class="tw-pb-4 tw-align-top">三十六 いざよ</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">モデラー</td>
						<td class="tw-pb-4 tw-align-top">三十六 いざよ</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">ハッシュタグ</td>
						<td class="tw-pb-4 tw-align-top">
							一般タグ: <a href="https://x.com/search?q=%23%E3%81%A1%E3%81%A3%E3%81%99%E3%82%93" rel="noopener noreferrer" target="_blank">#ちっすん</a> <br/>
							ファンアートタグ: <a href="https://x.com/search?q=%23%E7%B5%B5%E3%81%A1%E3%81%99%E3%81%84" rel="noopener noreferrer" target="_blank">#絵ちすい</a>
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-align-top">趣味</td>
						<td class="tw-align-top">ドライブ、サーキット、飲酒</td>
					</tr>
					</tbody>
				</table>
			</div>
		</section>
	</section>
</template>
