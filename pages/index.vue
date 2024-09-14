<script setup lang="ts">
import CommonlyHeader from "~/components/CommonlyHeader.vue";
import SectionHeader from "~/components/SectionHeader.vue";
import MemberCard from "~/components/MemberCard.vue";

type Member = {
	name: string,
	yomi: string,
	profileId: string,
	imageId: string,
	imageAlt: string,
	tag?: string[],
}

/**
 * メンバー一覧
 *
 * メンバーはこの配列の中に記載してください。
 * この配列の中のデータは`v-for`によるリストレンダリングで自動生成されます。
 * 型は上の`Member`の型定義を確認してください。
 * なお、リストレンダリングの主キーには`profileId`が使用されます。
 */
const members: Member[] = [
	{
		name: "うさねこらーじ",
		yomi: "Usaneko Large",
		profileId: "usaneko_xlarge",
		imageId: "usaneko_large",
		imageAlt: "Usaneko Large",
		tag: [
			"member"
		],
	},
	{
		name: "東雲絢芽",
		yomi: "SHINONOME Ayame",
		profileId: "iris2664",
		imageId: "shinonome_ayame",
		imageAlt: "SHINONOME Ayame",
		tag: [
			"member"
		],
	},
	{
		name: "椎半音",
		yomi: "Shii Sharp",
		profileId: "shiisharp",
		imageId: "shii_sharp",
		imageAlt: "Shii Sharp",
		tag: [
			"member"
		],
	},
	{
		name: "夢向せつな",
		yomi: "Yumemukai Setsuna",
		profileId: "setsuna",
		imageId: "yumemukai_setsuna",
		imageAlt: "setsuna",
		tag: [
			"member",			
			"rpgtkoolmz",
			"sqlserver",
			"internet-information-services",
			"windowsserver",
			"solid-js",
			"chatgpt"
		],
	},
	{
		name: "小日向がく",
		yomi: "Kohinata Gaku",
		profileId: "kohinata_gaku",
		imageId: "kohinata_gaku",
		imageAlt: "Kohinata Gaku",
		tag: [
			"member"
		],
	},
	{
		name: "ますかぷる",
		yomi: "Maskaple",
		profileId: "maskaple",
		imageId: "maskaple",
		imageAlt: "Maskaple",
		tag: [
			"member",
			"system-engineer",
			"informaiton-infrastrcture",
			"hardware",
			"network",
			"server",
			"cloud",
			"operating-system",
			"b-to-b",
			"neko"
		],
	},
	{
		name: "ひょんぢゅ",
		yomi: "Hyondyu",
		profileId: "hyondyu",
		imageId: "hyondyu",
		imageAlt: "Hyondyu",
		tag: [
			"member"
		],
	},
	{
		name: "乙木イオ",
		yomi: "IO Otogi",
		profileId: "io_otogi",
		imageId: "io_otogi",
		imageAlt: "IO Otogi",
		tag: [
			"member"
		],
	},
	{
		name: "創好リナ",
		yomi: "Lina Tsukusu",
		profileId: "lina_tsukusu",
		imageId: "lina_tsukusu",
		imageAlt: "Lina Tsukusu",
		tag: [
			"member"
		],
	},
	{
		name: "珠響そうき",
		yomi: "Tamayura Souki",
		profileId: "tamayura_souki",
		imageId: "tamayura_souki",
		imageAlt: "Tamayura Souki",
		tag: [
			"member"
		],
	},
	{
		name: "凪なぎさ",
		yomi: "Nagi Nagisa",
		profileId: "nagi_nagisa",
		imageId: "nagi_nagisa",
		imageAlt: "Nagi Nagisa",
		tag: [
			"member"
		],
	},
	{
		name: "坂道輪",
		yomi: "Rin Sakamichi",
		profileId: "rin_sakamichi",
		imageId: "rin_sakamichi",
		imageAlt: "rin_sakamichi",
		tag: [
			"member"
		],
	},
	{
		name: "Kazuryu",
		yomi: "Kazuryu",
		profileId: "kazuryu",
		imageId: "kazuryu",
		imageAlt: "kazuryu",
		tag: [
			"member"
		],
	},
	{
		name: "まりんとすふぃあ",
		yomi: "marine&sphere",
		profileId: "marine_sphere",
		imageId: "marine_sphere",
		imageAlt: "marine_sphere",
		tag: [
			"member"
		],
	},
	{
		name: "やすビディア",
		yomi: "YASUVIDIA",
		profileId: "yasuvidia",
		imageId: "yasuvidia",
		imageAlt: "YASUVIDIA",
		tag: [
			"member"
		],
	},
	{
		name: "崎津 祥汰",
		yomi: "Shota Sakitsu",
		profileId: "shota_sakitsu",
		imageId: "shota_sakitsu",
		imageAlt: "Shota Sakitsu",
		tag: [
			"staff",
			"backend",
			"frontend",
			"infrastructure"
		],
	},
	{
		name: "黒音キト",
		yomi: "Kuroné Kito",
		profileId: "kurone_kito",
		imageId: "kurone_kito",
		imageAlt: "Kuroné Kito",
		tag: [
			"automation",
			"csharp",
			"docker",
			"web-frontend",
			"linux",
			"macos",
			"member",
			"meow",
			"nodejs",
			"react",
			"solid-js",
			"typescript",
			"udonsharp",
			"unity3d",
			"ui-ux"
		],
	},
	{
		name: "白犬コマ",
		yomi: "Siroinu Koma",
		profileId: "koma_siroinu",
		imageId: "koma_siroinu",
		imageAlt: "Siroinu Koma",
		tag: [
			"member"
		],
	},
];

type Unit = {
	unitId: string,
	unitName: string,
	unitYomi: string,
	unitImageId?: string,
	unitImageAlt?: string,
	members: UnitMember[],
};

type UnitMember = {
	name: string,
	yomi: string,
}

const Units: Unit[] = [
	{
		unitId: "security_girl",
		unitName: "セキュリティガール",
		unitYomi: "Security Girl",
		members: [
			{
				name: "うさねこらーじ",
				yomi: "Usaneko Large",
			},
			{
				name: "東雲絢芽",
				yomi: "SHINONOME Ayame",
			},
		],
	},
];

const {locale} = useI18n();

const mailAddress = "naomi.lilienthal.jpn@gmail.com";

const thisYear = toRef((new Date().getFullYear()))

const mailModal = toRef(false);

const showContributorsModal = toRef(false);

let commandCheckerCount = 0;

const konamiCommandPatterns = [
	"arrowup",
	"arrowup",
	"arrowdown",
	"arrowdown",
	"arrowleft",
	"arrowright",
	"arrowleft",
	"arrowright",
	"b",
	"a",
];

if (import.meta.client) {
	let keyBuffer: string[] = [];
	let timerToken: int | undefined;
	window.addEventListener("keydown", (event) => {
		commandCheckerCount++;
		const currentCommandCheckerCount = commandCheckerCount;
		console.debug(event);
		window.clearTimeout(timerToken);
		switch (event.key.toLowerCase()) {
			case "a":
			case "b":
			case "arrowup":
			case "arrowdown":
			case "arrowleft":
			case "arrowright":
				keyBuffer.push(event.key.toLowerCase());
				break;
		}
		if (keyBuffer.length >= 10) {
			setTimeout(() => {
				console.debug("Checker Start: ", keyBuffer);
				//↑↑↓↓←→←→BA
				let checkStarted = false;
				while (true) {
					if (commandCheckerCount != currentCommandCheckerCount) return;
					let startIndex = keyBuffer.indexOf("arrowup", checkStarted ? 1 : 0)
					let checkBuffer = keyBuffer.slice(startIndex, keyBuffer.length);
					console.debug("Checker Start Index: ", startIndex);
					console.debug("Check Buffer: ", checkBuffer);
					if (checkBuffer.length < 10) {
						console.debug("Not Enough Check Buffer Length")
						return
					}
					let pointer = 0;
					let checkOk = false;
					for (const checkValue of checkBuffer) {
						if (checkValue != konamiCommandPatterns[pointer]) {
							break;
						} else {
							if (pointer == 9) checkOk = true;
						}
						pointer++;
					}
					if (checkOk) {
						console.debug("Check OK");
						showContributorsModal.value = true;
						keyBuffer = [];
						break;
					} else {
						console.debug("Check Failed: ", checkBuffer)
					}
					keyBuffer = checkBuffer
					checkStarted = true;
				}
			}, 250)
		}
	})
	window.addEventListener("keyup", () => {
		window.clearTimeout(timerToken);
		timerToken = window.setTimeout(() => {
			if (keyBuffer.length >= 10) return;
			console.debug("Clear Key");
			keyBuffer = [];
		}, 15 / 60 * 1000);
	})
}

</script>

<template>
	<CommonlyHeader/>
	<main id="main-contents" class="tw-w-full tw-flex tw-flex-col tw-items-center">

		<div id="home" class="tw-overflow-hidden tw-relative tw-w-full tw-h-svh xl:tw-h-svh">
			<div class="tw-relative tw-w-[400svw] tw-left-[-150svw] xl:tw-left-0 xl:tw-w-full tw-h-full">
				<div class="tw-z-10 tw-relative tw-w-full tw-h-svh tw-bg-gradient-to-b tw-from-transparent tw-from-40% xl:tw-from-60% tw-to-stone-900"></div>
				<img
					alt="top illust"
					class="tw-object-cover"
					style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
					src="/images/topillust.webp">
				<div class="tw-z-20 tw-absolute tw-ps-[3vw] tw-w-full tw-bottom-14 tw-whitespace-nowrap tw-text-center tw-text-[6vw] font-slogan">Reality Meets Virtuality</div>
			</div>
		</div>

		<section id="about" class="bg-maze tw-w-full">
			<div class="tw-relative tw-bg-gradient-to-b tw-from-stone-600 tw-from-60%">
				<div class="tw-z-0 tw-absolute tw-top-40 xl:tw-top-28 tw-overflow-hidden tw-w-full">
					<client-only>
						<Vue3Marquee :duration="50">
							<span class="tw-select-none tw-z-0 tw-inline-block tw-font-bold tw-text-stone-500/75 tw-text-[50vw] xl:tw-text-[15vw]">
								Vgeek Production
							</span>
						</Vue3Marquee>
					</client-only>
				</div>
				<div class="tw-z-10 tw-relative tw-flex tw-flex-col xl:tw-flex-row tw-justify-center tw-items-center">
					<section class="tw-px-10 xl:tw-px-14 tw-py-14 tw-text-base">
						<section>
							<SectionHeader :description="$t('topPage.aboutVgeekPro')" :isDark="true" title="About" titleColor="white"/>
							<ProfileHead name="ぶいぎーく！" yomi="Vgeek Production" catchphrase="Reality meets Virtuality" :isDisableCatchphraseBrackets="true">
								{{ $t('topPage.vgeekDescription') }}
							</ProfileHead>
						</section>
					</section>
				</div>
			</div>
		</section>


		<section id="members" class="tw-w-full">
			<div class="tw-relative tw-bg-gradient-to-b tw-from-stone-100 tw-from-90%">
				<div class="tw-z-10 tw-relative tw-flex tw-flex-col xl:tw-flex-row tw-justify-center tw-items-center">
					<section class="tw-px-10 xl:tw-px-14 tw-py-10 tw-text-base">
						<section>
							<SectionHeader :description="$t('topPage.membersSubtitle')" title="Members" titleColor="black"/>
							<div class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 2xl:tw-grid-cols-4 tw-gap-20">
								<MemberCard v-for="member in members" :key="member.profileId" :name="member.name" :yomi="member.yomi" :profileId="member.profileId" :imageId="member.imageId" :imageAlt="member.imageAlt" />
							</div>
						</section>
					</section>
				</div>
			</div>
		</section>

		<section id="groups" class="bg-maze tw-w-full">
			<div class="tw-relative tw-bg-gradient-to-b tw-from-stone-600 tw-from-60%">
				<div class="tw-z-10 tw-relative tw-flex tw-flex-col xl:tw-flex-row tw-justify-center tw-items-center">
					<section class="tw-px-10 xl:tw-px-14 tw-py-14 tw-text-base">
						<section>
							<SectionHeader :description="$t('topPage.groupsSubtitle')" :isDark="true" title="Groups" titleColor="white"/>
							<section>
								<UnitInformation v-for="unit in Units" :key="unit.unitId" :unit-id="unit.unitId" :unit-name="unit.unitName" :unit-yomi="unit.unitYomi" :members="unit.members" :unit-image-alt="unit.unitImageAlt" :unit-image-id="unit.unitImageId"/>
							</section>
						</section>
					</section>
				</div>
			</div>
		</section>

		<section id="link" class="tw-w-full">
			<div class="tw-relative tw-bg-stone-400">
				<div class="tw-px-10 xl:tw-px-14 tw-py-14 tw-text-base">
					<SectionHeader :description="$t('topPage.linkSubtitle')" title="Link" titleColor="stone-900"/>
					<div class="tw-leading-loose tw-text-center">
						<div class="tw-w-full tw-flex tw-flex-col xl:tw-flex-row xl:tw-flex-wrap tw-justify-between tw-items-center tw-gap-4">
							<a class="tw-self-stretch tw-flex-1 tw-items-center tw-rounded-full tw-bg-rose-500 hover:tw-bg-rose-700 tw-text-white tw-px-8 tw-py-4" href="https://x.com/vgeekproduction" target="_blank" rel="noopener noreferrer">
								{{ $t('topPage.xLinkButton') }}
							</a>
							<a class="tw-self-stretch tw-flex-1 tw-items-center tw-rounded-full tw-bg-rose-500 hover:tw-bg-rose-700 tw-text-white tw-px-8 tw-py-4" href="https://www.youtube.com/@usaneko_xlarge" target="_blank" rel="noopener noreferrer">
								{{ $t('topPage.youTubeLinkButton') }}
							</a>
							<button @click.stop="mailModal = !mailModal" class="tw-self-stretch tw-flex-1 tw-items-center tw-rounded-full tw-bg-rose-500 hover:tw-bg-rose-700 tw-text-white tw-px-8 tw-py-4">
								<i class="bi bi-envelope tw-me-0.5" style="vertical-align: -.125em"></i>
								{{ $t('topPage.openMailModal') }}
								<i class="bi bi-box-arrow-up-right tw-ms-0.5" style="font-size: .5em; vertical-align: 1.2em"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="guideline" class="tw-w-full" lang="ja">
			<div class="tw-relative tw-bg-stone-300 tw-text-stone-900">
				<div class="tw-px-10 xl:tw-px-14 tw-py-14 tw-text-base">
					<SectionHeader :description="$t('topPage.guidelineSubtitle')" title="Guideline"/>
					<div class="tw-leading-loose xl:tw-max-w-screen-sm xl:tw-mx-auto">
						<div v-if="locale != 'ja'" class="fs-5 tw-mb-12" lang="en">
							The Guidelines are only valid in the original Japanese language.<br>
							They can be read using translations if necessary,
							but in some cases they may not be correct,
							as the Japanese version takes precedence over any discrepancies
							created by the translations.
						</div>
						<section>
							<p class="tw-mb-6 tw-font-bold">ぶいぎーく！について</p>
							<p class="tw-mb-12">
								「ぶいぎーく！」は個人が運営するIT系VTuber同士が助け合うためのグループです。
								実際の活動は各VTuberに任されており、「ぶいぎーく！」は各VTuberの活動に対する責任を負いません
							</p>
						</section>
						<section>
							<p class="tw-mb-6 tw-font-bold">参加したい方へ</p>
							<section>
								<p class="tw-mb-6">「ぶいぎーく！」では、以下の条件を満たすVTuberの参加をお待ちしています。</p>
								<ul class="tw-mb-6 tw-list-disc tw-ps-5">
									<li>Discord または LINE で運営からの連絡に15日以内に回答できる。</li>
									<li>Xなど上記以外の連絡手段を運営と共有する。</li>
									<li>社会的に不適切な行為（ハラスメント、差別、それらを助長する行為等）を行わない。</li>
									<li>「ぶいぎーく！」のDiscordサーバーや運営とのコミュニケーションを許可なく外部に共有しない。</li>
									<li>本ウェブサイトに掲載するための名前（日本語および英語表記）、立ち絵などの画像、口上、説明文を用意できる。</li>
									<li>メンバーの特別な紹介でない場合、成人している (18歳以上である) こと</li>
								</ul>
							</section>
							<section>
								<p class="tw-mb-6">参加希望者は、以下のいずれかの方法で運営までご連絡ください。</p>
								<ul class="tw-mb-6 tw-list-disc tw-ps-5">
									<li>Discord: usaneko_xlarge</li>
									<li>X (Twitter): <a class="disable-link-icons" href="https://x.com/messages/compose?recipient_id=1644686586318327808" target="_blank" rel="noopener noreferrer">@usaneko_xlarge</a></li>
									<li>このページに記載のメールアドレス</li>
								</ul>
							</section>
							<section>
								<p class="tw-mb-6 tw-font-bold">ガイドラインの改訂および一般事項</p>
								<p class="tw-mb-6">本ガイドラインは予告なく追加や修正される場合があります。コンテンツをお楽しみいただく際や二次創作を行う際は、最新の内容をご確認ください。</p>
								<p>「ぶいぎーく！」やその二次創作、または本ガイドラインによって生じる損害については一切の責任を負いません。</p>
							</section>
						</section>
					</div>
				</div>
			</div>
		</section>
		<BModal v-model="mailModal" :ok-only="true" :title="$t('topPage.mailModalTitle')" title-class="fs-5 tw-text-stone-900">
			<div class="tw-flex tw-flex-col">
				<a class="tw-self-stretch tw-my-2 tw-flex-1 tw-items-center tw-rounded-full tw-bg-rose-500 hover:tw-bg-rose-700 tw-text-white tw-px-8 tw-py-4" :href="`mailto:${mailAddress}`" target="_blank" rel="noopener noreferrer">
					{{ $t('topPage.openMailApp') }}
				</a>
				<a class="tw-self-stretch tw-my-2 tw-flex-1 tw-items-center tw-rounded-full tw-bg-rose-500 hover:tw-bg-rose-700 tw-text-white tw-px-8 tw-py-4" :href="`https://mail.google.com/mail/?extsrc=mailto&url=mailto:${mailAddress}`" target="_blank" rel="noopener noreferrer">
					{{ $t('topPage.openGmail') }}
				</a>
				<a class="tw-self-stretch tw-my-2 tw-flex-1 tw-items-center tw-rounded-full tw-bg-rose-500 hover:tw-bg-rose-700 tw-text-white tw-px-8 tw-py-4" :href="`https://mail.yahoo.co.jp/compose/?To=mailto:${mailAddress}`" target="_blank" rel="noopener noreferrer">
					{{ $t('topPage.openYahooJapanMail') }}
				</a>
			</div>
		</BModal>
		<client-only>
			<BModal v-model="showContributorsModal" title="OSINT" title-class="fs-2 tw-text-stone-900" body-class="tw-text-stone-900" :ok-only="true">
				<div class="container">
					<div class="row">
						<span class="fs-3">コントリビュータ</span>
						<ul class="list-group">
							<li class="list-group-item">
								<span class="fs-4">うさねこらーじ</span>
								<ul class="list-group">
									<li class="list-group-item list-group-item-info">主な貢献</li>
									<li class="list-group-item">プロジェクトオーナー</li>
									<li class="list-group-item">プロトタイプ制作</li>
								</ul>
							</li>
							<li class="list-group-item">
								<span class="fs-4">羽山 祥樹</span>
								<ul class="list-group">
									<li class="list-group-item list-group-item-info">主な貢献</li>
									<li class="list-group-item">デザイン最適化</li>
									<li class="list-group-item">レスポンシブ対応</li>
								</ul>
							</li>
							<li class="list-group-item">
								<span class="fs-4">崎津 祥汰 / 秋雪 こおり</span>
								<ul class="list-group">
									<li class="list-group-item list-group-item-info">主な貢献</li>
									<li class="list-group-item">細部デザイン調整</li>
									<li class="list-group-item">リファクタリング</li>
								</ul>
							</li>
							<li class="list-group-item">
								<span class="fs-4">Special Thanks</span>
								<ul class="list-group">
									<li class="list-group-item list-group-item-info">テストや応援などを行ってくださる</li>
									<li class="list-group-item">各配信者のファンの皆様</li>
									<li class="list-group-item">ふとした時に流れてきたVTuberリスナーの皆様</li>
									<li class="list-group-item">このサイトや各チャンネル・ストリームにアクセスした皆様</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</BModal>
		</client-only>
	</main>
	<footer class="tw-my-16 tw-footer tw-text-base tw-text-center">
		<a class="tw-inline xl:tw-hidden" @click.stop="showContributorsModal = true">
			<client-only>Copyright &copy; 2023, {{ thisYear }} Usaneko Large</client-only>
		</a>
		<a class="tw-hidden xl:tw-inline">
			<client-only>Copyright &copy; 2023, {{ thisYear }} Usaneko Large</client-only>
		</a>
	</footer>
</template>
