<script setup lang="ts">
import CommonlyHeader from "~/components/CommonlyHeader.vue";
import SectionHeader from "~/components/SectionHeader.vue";
import UpperBodyImage from "~/components/UpperBodyImage.vue";
import MemberCard from "~/components/MemberCard.vue";

const thisYear = toRef((new Date().getFullYear()))

const mailModal = toRef(false);

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
						<Vue3Marquee duration="50">
							<span class="tw-select-none tw-z-0 tw-inline-block tw-font-bold tw-text-stone-500/75 tw-text-[50vw] xl:tw-text-[15vw]">
								Vgeek Production
							</span>
						</Vue3Marquee>
					</client-only>
				</div>
				<div class="tw-z-10 tw-relative tw-flex tw-flex-col xl:tw-flex-row tw-justify-center tw-items-center">
					<section class="tw-px-10 xl:tw-px-14 tw-py-14 tw-text-base">
						<section>
							<SectionHeader title="About" description="ぶいぎーく！とは" titleColor="white" :isDark="true"/>
							<ProfileHead name="ぶいぎーく！" yomi="Vgeek Production" catchphrase="Reality meets Virtuality" :isDisableCatchphraseBrackets="true">
								「ぶいぎーく！」は、IT 系 VTuber のグループです。
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
							<SectionHeader title="Members" titleColor="black" description="ゆかいななかまたち"/>

							<div class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 2xl:tw-grid-cols-4 tw-gap-20">
								<MemberCard name="うさねこらーじ" yomi="Usaneko Large" profileId="usaneko_xlarge" imageId="usaneko_large" imageAlt="Usaneko Large"/>
								<MemberCard name="東雲絢芽" yomi="SHINONOME Ayame" profileId="iris2664" imageId="shinonome_ayame" imageAlt="SHINONOME Ayame"/>
								<MemberCard name="椎半音" yomi="Shii Sharp" profileId="shiisharp" imageId="shii_sharp" imageAlt="Shii Sharp"/>
								<MemberCard name="夢向せつな" yomi="Yumemukai Setsuna" profileId="setsuna" imageId="yumemukai_setsuna" imageAlt="setsuna"/>
								<MemberCard name="ゆにるユニ" yomi="Yuniru Yuni" profileId="yuniru_yuni" imageId="yuniru_yuni" imageAlt="Yuniru Yuni"/>
								<MemberCard name="小日向がく" yomi="Kohinata Gaku" profileId="kohinata_gaku" imageId="kohinata_gaku" imageAlt="Kohinata Gaku"/>
								<MemberCard name="ますかぷる" yomi="Maskaple" profileId="maskaple" imageId="maskaple" imageAlt="Maskaple"/>
								<MemberCard name="ひょんぢゅ" yomi="Hyondyu" profileId="hyondyu" imageId="hyondyu" imageAlt="Hyondyu"/>
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
							<SectionHeader title="Groups" description="なかよしな仲間たち" titleColor="white" :isDark="true"/>
							<section>
								<UpperBodyImage memberId="usaneko_large" alt="Usaneko Large"/>
								<div class="tw-mb-28 tw-leading-loose tw-text-white">
									<p class="font-slogan tw-text-center tw-text-3xl xl:tw-text-5xl">セキュリティガール</p>
									<p class="font-slogan tw-text-center tw-mb-14">Security Girl</p>
									<ul class="tw-mb-6 tw-list-disc tw-ps-5">
										<li>うさねこらーじ</li>
										<li>東雲絢芽</li>
									</ul>
								</div>
							</section>

						</section>
					</section>
				</div>
			</div>
		</section>

		<section id="link" class="tw-w-full">
			<div class="tw-relative tw-bg-stone-400">
				<div class="tw-px-10 xl:tw-px-14 tw-py-14 tw-text-base">
					<SectionHeader title="Link" description="IT系VTuberを探せ！" titleColor="stone-900"/>
					<div class="tw-leading-loose tw-text-center">
						<div class="tw-w-full tw-flex tw-flex-col xl:tw-flex-row xl:tw-flex-wrap tw-justify-between tw-items-center tw-gap-4">
							<a class="tw-self-stretch tw-flex-1 tw-items-center tw-rounded-full tw-bg-rose-500 hover:tw-bg-rose-700 tw-text-white tw-px-8 tw-py-4" href="https://x.com/usaneko_xlarge" target="_blank" rel="noopener noreferrer">
								ぶいぎーく！公式およびうさねこらーじの X (Twitter)
							</a>
							<a class="tw-self-stretch tw-flex-1 tw-items-center tw-rounded-full tw-bg-rose-500 hover:tw-bg-rose-700 tw-text-white tw-px-8 tw-py-4" href="https://www.youtube.com/@usaneko_xlarge" target="_blank" rel="noopener noreferrer">
								ぶいぎーく！公式およびうさねこらーじの YouTube
							</a>
							<button @click.stop="mailModal = !mailModal" class="tw-self-stretch tw-flex-1 tw-items-center tw-rounded-full tw-bg-rose-500 hover:tw-bg-rose-700 tw-text-white tw-px-8 tw-py-4">
								<i class="bi bi-envelope tw-me-0.5" style="vertical-align: -.125em"></i>メール送信<i class="bi bi-box-arrow-up-right tw-ms-0.5" style="font-size: .5em; vertical-align: 1.2em"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="guideline" class="tw-w-full">
			<div class="tw-relative tw-bg-stone-300 tw-text-stone-900">
				<div class="tw-px-10 xl:tw-px-14 tw-py-14 tw-text-base">
					<SectionHeader title="Guideline" description="ぶいぎーく！ ガイドライン"/>
					<div class="tw-leading-loose xl:tw-max-w-screen-sm xl:tw-mx-auto">
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
		<BModal v-model="mailModal" title="メールを送信" title-class="fs-5 tw-text-stone-900" :ok-only="true">
			<div class="tw-flex tw-flex-col">
				<a class="tw-self-stretch tw-my-2 tw-flex-1 tw-items-center tw-rounded-full tw-bg-rose-500 hover:tw-bg-rose-700 tw-text-white tw-px-8 tw-py-4" href="mailto:naomi.lilienthal.jpn@gmail.com" target="_blank" rel="noopener noreferrer">
					メールアプリを開く
				</a>
				<a class="tw-self-stretch tw-my-2 tw-flex-1 tw-items-center tw-rounded-full tw-bg-rose-500 hover:tw-bg-rose-700 tw-text-white tw-px-8 tw-py-4" href="https://mail.google.com/mail/?extsrc=mailto&url=mailto:naomi.lilienthal.jpn@gmail.com" target="_blank" rel="noopener noreferrer">
					Gmailを開く
				</a>
				<a class="tw-self-stretch tw-my-2 tw-flex-1 tw-items-center tw-rounded-full tw-bg-rose-500 hover:tw-bg-rose-700 tw-text-white tw-px-8 tw-py-4" href="https://mail.yahoo.co.jp/compose/?To=mailto:naomi.lilienthal.jpn@gmail.com" target="_blank" rel="noopener noreferrer">
					Yahoo! メールを開く
				</a>
			</div>
		</BModal>
	</main>
	<footer class="tw-my-16 tw-footer tw-text-base tw-text-center">
		<client-only>Copyright &copy; 2023, {{ thisYear }} Usaneko Large</client-only>
	</footer>
</template>
