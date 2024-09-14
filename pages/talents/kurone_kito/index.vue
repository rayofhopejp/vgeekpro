<script lang="ts" setup>
definePageMeta({
	layout: 'member-page'
})
const name = "黒音キト";
const yomi = "Kuroné Kito";
const description = "お仕事ぱたぱたいっぱい大変にゃんにゃん！";
const imageId = "kurone_kito";
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
				いっぱいにゃんにゃん鳴いている、黒猫にゃんにゃん VTuber。<br/>
				ゲームとプログラミング作業のライブ配信を半々でやっているほか、VRChat で集会を開催したり参加したりと活動しています。<br/>
				偶にイラスト描いたり DTM したりと、割と何でも屋かも。
			</ProfileHead>
			<div class="tw-w-fit tw-flex tw-flex-col xl:tw-flex-row xl:tw-flex-wrap tw-justify-between tw-items-center tw-gap-4">
				<XButtonLink screen-name="kurone_kito"/>
				<YouTubeChannel handle="kuronekito"/>
				<GitHubProfile userId="kurone-kito"/>
				<OtherSiteLink href="https://kit.black/">
					Website
				</OtherSiteLink>
			</div>
		</section>
		<section>
			<SectionHeader :isDark="true" description="配信内容" title="Contents"/>
			<div class="tw-mb-28 tw-leading-loose xl:tw-max-w-screen-sm xl:tw-mx-auto">
				<ul class="tw-list-disc tw-ps-5">
					<li>ライブプログラミング作業</li>
					<ul>
						<li>VRChat アセット・ワールド制作 (代表作: VRCUI・VR 睡眠もできるイベントスペース: Miaŭ・THE MIND MIRROR〜貴方の性格を映す鏡)</li>
						<li>Web 制作 (代表作: Dantalion・Launchpad Icons)</li>
						<li>VRChat で“にゃんにゃん集会”と“UI/UX デザイン集会”を定期開催</li>
					</ul>
					<li>APEX Legends・雀魂を中心とした、さまざまなゲームの実況プレイ</li>
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
							<LocaleTime day="9" month="10"/>
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">活動開始</td>
						<td class="tw-pb-4 tw-align-top">
							<LocaleTime day="2" month="11" year="2018"/>
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">初配信日</td>
						<td class="tw-pb-4 tw-align-top">
							<LocaleTime day="23" month="11" year="2018"/>
						</td>
					</tr>
					<tr>
						<td class="tw-pe-8 xl:tw-pe-16 tw-pb-4 tw-align-top">ファンネーム</td>
						<td class="tw-pb-4 tw-align-top">◯◯ にゃん</td>
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
						“大変”
						<ul>
							<li>大変な時によく言う</li>
						</ul>
					</li>
					<li>
						“いっぱい大変”
						<ul>
							<li>
								いっぱい大変な時によく言う
							</li>
						</ul>
					</li>
					<li>
						“ぱたぱた”
						<ul>
							<li>
								大抵お仕事で多忙になっている時に言う
							</li>
						</ul>
					</li>
					<li>
						“いっぱいぱたぱた”
						<ul>
							<li>
								大抵お仕事でいっぱい多忙になっている時に言う
							</li>
						</ul>
					</li>
					<li>
						“にゃーん”
						<ul>
							<li>
								複数の意味がある
								<ul>
									<li>・マイクテスト</li>
									<li>・いっぱいにゃんにゃん</li>
									<li>・こんにちは or こんばんは</li>
									<li>・社会性フィルター</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</section>
	</section>
</template>
