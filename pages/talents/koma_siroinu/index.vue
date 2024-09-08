<script setup lang="ts">
definePageMeta({
	layout: 'member-page'
})
const name = "白犬コマ";
const yomi = "Siroinu Koma";
const description = "技術を以って我が道(タオ)を証す!";
const imageId = "koma_siroinu";
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
				台湾出身狛犬Vtuber。<br/>
				深山で仙人として修練をし続けてきたが、末法時代で霊力を使えなくなったため、代わりに現代技術を研鑽する狛犬。<br/>
				道果を得るため日々修練を重ねてる。<br/><br/>
				大人犬の都合で活動頻度がまだ低い<br/><br/>
				※道果:仏教や道教においで修行によって得られる境地、またはその成果<br/>
				道果を虚空に託すことで不滅になりうる
			</ProfileHead>
			<div class="tw-w-fit tw-flex tw-flex-col xl:tw-flex-row xl:tw-flex-wrap tw-justify-between tw-items-center tw-gap-4">
				<XButtonLink screen-name="Koma_Siroinu"/>
				<YouTubeChannel handle="komasiroinu"/>
			</div>
		</section>
		<section>
			<SectionHeader :isDark="true" title="Contents" description="配信内容"/>
			<div class="tw-mb-28 tw-leading-loose xl:tw-max-w-screen-sm xl:tw-mx-auto">
				<ul class="tw-list-disc tw-ps-5">
					<li>スプラ3(ワイパー使い)</li>
					<li>雀魂(初心者)</li>
					<li>中国語(語学、小ネタ)</li>
					<li>AIVtuber配信</li>
					<li>技術関連動画?</li>
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
							<LocaleTime month="1" day="11" />(わんわんわん!)
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">初配信日</td>
						<td class="tw-pb-4 tw-align-top">
							<LocaleTime year="2023" month="5" day="5" />(AIコマとデビュー、現在アーカイブ非公開)
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">身長</td>
						<td class="tw-pb-4 tw-align-top">
							<LocaleHeight :height="155" original-unit="centimeter" />
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">イラストレーター</td>
						<td class="tw-pb-4 tw-align-top">ゆの　様</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">モデラー</td>
						<td class="tw-pb-4 tw-align-top">live2D(自作)/3D(自力改変、ベースはあまとうさぎ様が制作したライムちゃん) </td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">ハッシュタグ</td>
						<td class="tw-pb-4 tw-align-top">
							配信タグ: <a href="https://x.com/hashtag/白犬物語" target="_blank" rel="noopener noreferrer">#白犬物語</a> <br/>
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-align-top">趣味</td>
						<td class="tw-align-top">LLM、音声合成、AITuber、XRアプリビルド、live2D、vroid、unity、blenderなど<br/>興味ある技術を広く浅く触る。</td>
					</tr>
					</tbody>
				</table>
			</div>
		</section>
		<section>
			<SectionHeader :isDark="true" title="Words / Meme" description="ジャーゴン"/>
			<div class="tw-leading-loose xl:tw-max-w-screen-sm xl:tw-mx-auto">
				<ul class="tw-list-disc tw-ps-5">
					<li>
						癖になってんだ、ネタで喋るの
						<ul>
							<li>
								脳内日本語モデルはアニメ、ラノベなどを
								データセットとして用いて訓練してた故。
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</section>
	</section>
</template>
