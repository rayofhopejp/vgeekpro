<script setup lang="ts">
const route = useRoute();

const {locale, locales, setLocale} = useI18n();
const localePath = useLocalePath();

const setLocaleTo = (locale: string) => {
	console.debug(`Set Locale: ${locale}`);
	setLocale(locale);
}
</script>

<template>
	<header>
		<a class="tw-transition tw-left-0 tw-bg-primary tw-text-primary-content tw-absolute tw-p-3 tw-m-3 tw--translate-y-16 focus:tw-translate-y-0" href="#main-contents" v-smooth-scroll="{offset: -50}">Skip to main contents</a>
		<nav class="tw-z-30 tw-fixed tw-left-0 tw-top-0 tw-flex tw-justify-between tw-items-start tw-p-4 xl:tw-font-bold tw-pointer-events-none tw-w-[100vw]">
			<div class="tw-flex tw-shrink tw-justify-items-start">
				<NuxtLink v-smooth-scroll="{offset: -50}" :href="localePath('/#home')" class="tw-cursor-pointer tw-pointer-events-auto">
					<img
						src="/images/logo.webp"
						alt="Vgeek Logo"
						width="544"
						height="267"
						class="tw-object-contain tw-w-auto tw-h-auto tw-max-w-[40vw] xl:tw-max-w-full tw-max-h-[30vh] xl:tw-max-h-[15vh]"/>
				</NuxtLink>
			</div>
			<div class="tw-flex tw-glow tw-justify-items-end">
				<div class="tw-text-stone-900 tw-hidden xl:tw-flex tw-text-base tw-pointer-events-auto">
					<NuxtLink v-smooth-scroll="{offset: -50}" :href="localePath('/#about')" class="tw-ps-10 tw-pe-8 tw-py-4 tw-rounded-s-full tw-border-white tw-border-s-2 tw-border-y-2 tw-bg-white tw-bg-opacity-75 tw-cursor-pointer hover:tw-text-white hover:tw-bg-rose-500 hover:tw-bg-opacity-75">
						About
					</NuxtLink>
					<NuxtLink v-smooth-scroll="{offset: -50}" :href="localePath('/#members')" class="tw-px-8 tw-py-4 tw-border-white tw-border-y-2 tw-bg-white tw-bg-opacity-75 tw-cursor-pointer hover:tw-text-white hover:tw-bg-rose-500 hover:tw-bg-opacity-75">
						Members
					</NuxtLink>
					<NuxtLink v-smooth-scroll="{offset: -50}" :href="localePath('/#groups')" class="tw-px-8 tw-py-4 tw-border-white tw-border-y-2 tw-bg-white tw-bg-opacity-75 tw-cursor-pointer hover:tw-text-white hover:tw-bg-rose-500 hover:tw-bg-opacity-75">
						Groups
					</NuxtLink>
					<NuxtLink v-smooth-scroll="{offset: -50}" :href="localePath('/#link')" class="tw-px-8 tw-py-4 tw-border-white tw-border-y-2 tw-bg-white tw-bg-opacity-75 tw-cursor-pointer hover:tw-text-white hover:tw-bg-rose-500 hover:tw-bg-opacity-75">
						Link
					</NuxtLink>
					<NuxtLink v-smooth-scroll="{offset: -50}" :href="localePath('/#guideline')" class="tw-ps-8 tw-pe-10 tw-py-4 tw-rounded-e-full tw-border-white tw-border-e-2 tw-border-y-2 tw-bg-white tw-bg-opacity-75 tw-cursor-pointer hover:tw-text-white hover:tw-bg-rose-500 hover:tw-bg-opacity-75">
						Guideline
					</NuxtLink>
				</div>
				<div class="xl:tw-ms-6 tw-flex tw-flex-auto tw-shrink tw-text-stone-900 tw-text-xs xl:tw-text-base tw-pointer-events-auto">
					<button :class="`tw-ps-5 tw-pe-2.5 tw-py-2 tw-rounded-s-full tw-border-white tw-border-s-2 tw-border-y-2 tw-cursor-pointer ${locale == 'ja' ? 'tw-text-white tw-bg-rose-500 tw-bg-opacity-75' : 'tw-bg-white tw-bg-opacity-75 hover:tw-text-white hover:tw-bg-rose-500 hover:tw-bg-opacity-75'}`" type="button" @click.stop="setLocaleTo('ja')">JP</button>
					<button :class="`tw-px-2.5 tw-py-2 tw-border-y-2 tw-border-white tw-cursor-pointer ${locale == 'en-US' ? 'tw-text-white tw-bg-rose-500 tw-bg-opacity-75' : 'tw-bg-white tw-bg-opacity-75 hover:tw-text-white hover:tw-bg-rose-500 hover:tw-bg-opacity-75'}`" type="button" @click.stop="setLocaleTo('en-US')">US</button>
					<button :class="`tw-ps-2.5 tw-pe-5 tw-py-2 tw-rounded-e-full tw-border-white tw-border-e-2 tw-border-y-2  tw-cursor-pointer ${locale == 'en-GB' ? 'tw-text-white tw-bg-rose-500 tw-bg-opacity-75' : 'tw-bg-white tw-bg-opacity-75 hover:tw-text-white hover:tw-bg-rose-500 hover:tw-bg-opacity-75'}`" type="button" @click.stop="setLocaleTo('en-GB')">UK</button>
				</div>
			</div>
		</nav>
	</header>
</template>
