<script setup lang="ts">
const localePath = useLocalePath();
useSeoMeta({
	title: "コミックマーケット特設ページ",
	description: "過去・未来におけるぶいぎーく！メンバーのコミックマーケット参加情報を確認出来ます。"
})
</script>

<template>
	<CommonlyHeader />
	<main id="main-contents" class="tw-pt-40 tw-w-full tw-flex tw-flex-col tw-items-center">
		<CommonHead heading-level="2" ja="コミックマーケット特設ページ" en="Comiket special page" />
		<hr class="py-1 w-75 tw-border-t-4 tw-border-t-fuchsia-300" />
		<p class="tw-py-8">
			過去および、今後開催されるコミックマーケットでのメンバーおよびメンバーに関連するサークル・企業の参加情報です。<br>
			なお、コミックマーケット104以前及び開催時点でぶいぎーく！に参加していなかったメンバーについては各個人の投稿をご確認ください。
		</p>
		<hr class="py-1 w-50 tw-border-t-2 tw-border-t-amber-300" />
		<p class="py-1">
			以下から選択してください。
		</p>
		<ol start="105" reversed class="list-group" data-bs-theme="dark">
			<li class="list-group-item list-group-item-action"><NuxtLink :href="localePath('/comiket/c105/')">コミックマーケット105 (2024年 冬コミ)</NuxtLink></li>
		</ol>
		<div class="tw-my-10 tw-w-full tw-flex tw-justify-around tw-items-start">
			<NuxtLink :href="localePath('/')" class="tw-self-stretch tw-flex-col tw-shrink tw-items-center tw-rounded-full tw-bg-rose-500 hover:tw-bg-rose-700 tw-text-white tw-px-8 tw-py-4" rel="noopener noreferrer">
				トップに戻る
			</NuxtLink>
		</div>
	</main>
</template>
