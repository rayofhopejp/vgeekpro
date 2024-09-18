<script lang="ts" setup>
definePageMeta({
	layout: 'member-page'
})
const name = "うさねこらーじ";
const yomi = "Usaneko Large";
const description = "セキュリティホールから、こんばんらーじ！";
const imageId = "usaneko_large";
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
				22才、東大卒、新人セキュリティスペシャリストVTuber。<br/>
				本性はポンコツ。配信ではもっぱらイジられたりツッコまれたりしている。東大卒らしい威厳は一切ない。<br/>
				下ネタとエロをこよなく愛する。ガチ恋勢を増やすべく策略を練っている。しかし、定期的にガチ恋を葬り去るような言動をする。<br/>
				配信をつうじて様々な経験をして、みなさんと一緒に成長していきます！
			</ProfileHead>
			<div class="tw-w-fit tw-flex tw-flex-col xl:tw-flex-row xl:tw-flex-wrap tw-justify-between tw-items-center tw-gap-4">
				<XButtonLink screen-name="usaneko_xlarge"/>
				<YouTubeChannel handle="usaneko_xlarge"/>
			</div>
		</section>
		<section>
			<SectionHeader :isDark="true" description="配信内容" title="Contents"/>
			<div class="tw-mb-28 tw-leading-loose xl:tw-max-w-screen-sm xl:tw-mx-auto">
				<ul class="tw-list-disc tw-ps-5">
					<li>企画ものフリートーク(「自分のエロ漫画を描く」など)</li>
					<li>CTF (Hack the BoxやpicoCTFなど)</li>
					<li>競技プログラミング (AtCoderなど)</li>
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
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">イラストレーター</td>
						<td class="tw-pb-4 tw-align-top">覡あおひ</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">モデラー</td>
						<td class="tw-pb-4 tw-align-top">うなぬん(2D) / N(3D)</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">ファンネーム</td>
						<td class="tw-pb-4 tw-align-top">うさねこリスナー</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">ハッシュタグ</td>
						<td class="tw-pb-4 tw-align-top">
							配信タグ: <a href="https://x.com/hashtag/usanekoxlarge" rel="noopener noreferrer" target="_blank">#usanekoxlarge</a> <br/>
							ファンアートタグ: <a href="https://x.com/hashtag/usanekoart" rel="noopener noreferrer" target="_blank">#usanekoart</a>
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
		<section>
			<SectionHeader :isDark="true" description="ジャーゴン" title="Words / Meme"/>
			<div class="tw-leading-loose xl:tw-max-w-screen-sm xl:tw-mx-auto">
				<ul class="tw-list-disc tw-ps-5">
					<li>
						わかりました
						<ul>
							<li>わかっていないときに使う。</li>
						</ul>
					</li>
					<li>
						こわいよー
						<ul>
							<li>
								高い声で言うとより怖がっている感が出る。
							</li>
						</ul>
					</li>
					<li>
						はたして本当にそうでしょうか
						<ul>
							<li>
								ノリツッコミ等で多用される
							</li>
						</ul>
					</li>
					<li>
						結婚しろ(Marry Me)
						<ul>
							<li>
								リスナー同士やうさねことのカップリングを安易に成立させるときに使う。
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</section>
	</section>
</template>
