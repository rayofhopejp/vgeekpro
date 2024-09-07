<script setup lang="ts">
definePageMeta({
	layout: 'member-page'
})
const name = "崎津 祥汰";
const yomi = "Shota Sakitsu";
let description = "ウチはアイドル目指すエンジニア系大神や！";
const imageId = "shota_sakitsu";
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

const  { locale } = useI18n();

if (locale.value != "ja") description = "‘I'm an engineer wolf who wants to be an idol!’";
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
				<span v-if="locale == 'ja'">
					とある世界の狼人族の里からやってきたアイドル志望の狼。<br>
					いずれはエンジニアとしてもアイドルとしても有名になってみせると意気込んでいる。
				</span>
				<span v-else>
					A werewolf of the idol choice that came from the village of the werewolf of the different world.<br>
					I am determined when I become a famous engineer in the future.
				</span>
			</ProfileHead>
			<div class="tw-w-fit tw-flex tw-flex-col xl:tw-flex-row xl:tw-flex-wrap tw-justify-between tw-items-center tw-gap-4">
				<XButtonLink screen-name="Shota_Sakitsu" />
				<YouTubeChannel handle="Shota-Sakitsu" />
				<TwitchStream user-id="shota_sakitsu" />
				<TwitCastingStream user-id="shota_sakitsu" account-type="CasAccount" />
				<GitHubProfile user-id="Shota-Sakitsu" />
				<OtherSiteLink href="https://www.virtlive.jp/talents/jp/gen0/shota/">
					Official Profile
				</OtherSiteLink>
			</div>
		</section>
		<section>
			<SectionHeader :isDark="true" title="Contents" description="配信内容"/>
			<div class="tw-mb-28 tw-leading-loose xl:tw-max-w-screen-sm xl:tw-mx-auto">
				<ul class="tw-list-disc tw-ps-5">
					<li>ゲーム</li>
					<li>プログラミング</li>
					<li>雑談</li>
				</ul>
			</div>
		</section>
		<section>
			<SectionHeader :isDark="true" title="Profile" description="プロフィール"/>
			<div class="tw-mb-28 tw-leading-loose tw-align-top xl:tw-max-w-screen-sm xl:tw-mx-auto">
				<table>
					<tbody>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">役目</td>
						<td class="tw-pb-4 tw-align-top">
							スタッフ
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">分野</td>
						<td class="tw-pb-4 tw-align-top">
							<ul class="tw-list-disc tw-ps-5">
								<li>インフラストラクチャー</li>
								<li>Webバックエンド</li>
								<li>Webフロントエンド</li>
								<li>レガシー技術</li>
								<li>ガラパゴス技術</li>
							</ul>
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">誕生日</td>
						<td class="tw-pb-4 tw-align-top">
							<LocaleTime year="2004" month="7" day="28"/>
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">初配信日</td>
						<td class="tw-pb-4 tw-align-top">
							<LocaleTime year="2023" month="4" day="14"/>
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">身長</td>
						<td class="tw-pb-4 tw-align-top">
							平常時: <LocaleHeight original-unit="centimeter" :height="167.9" />
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">プロデューサー</td>
						<td class="tw-pb-4 tw-align-top">秋雪 こおり</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">ファンネーム</td>
						<td class="tw-pb-4 tw-align-top">クロム族</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">ハッシュタグ</td>
						<td class="tw-pb-4 tw-align-top">
							配信タグ: <a href="https://x.com/hashtag/WolframiumV" target="_blank" rel="noopener noreferrer">#WolframiumV</a> <br/>
							ファンアートタグ: <a href="https://x.com/hashtag/クロム族あーと" target="_blank" rel="noopener noreferrer">#クロム族あーと</a> / <a href="https://x.com/hashtag/ChromiumArts" target="_blank" rel="noopener noreferrer">#ChromiumArts</a>
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-align-top">趣味</td>
						<td class="tw-align-top">サイト運営・開発</td>
					</tr>
					</tbody>
				</table>
			</div>
		</section>
	</section>
</template>
