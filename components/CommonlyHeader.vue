<script setup lang="ts">
const route = useRoute();
</script>

<template>
	<header>
		<a class="tw-transition tw-left-0 tw-bg-primary tw-text-primary-content tw-absolute tw-p-3 tw-m-3 tw--translate-y-16 focus:tw-translate-y-0" href="#main-contents" v-smooth-scroll="{offset: -50}">Skip to main contents</a>
		<nav class="tw-z-30 tw-fixed tw-left-0 tw-top-0 tw-flex tw-justify-between tw-items-start tw-p-4 xl:tw-font-bold tw-pointer-events-none tw-w-[100vw]">
			<div class="tw-flex tw-shrink tw-justify-items-start">
				<a v-if="route.path == '/'" href="#home" v-smooth-scroll="{offset: -50}" class="tw-cursor-pointer tw-pointer-events-auto">
					<img
						src="/images/logo.webp"
						alt="Vgeek Logo"
						width="544"
						height="267"
						class="tw-object-contain tw-w-auto tw-h-auto tw-max-w-[40vw] xl:tw-max-w-full tw-max-h-[30vh] xl:tw-max-h-[15vh]"/>
				</a>
				<a v-else href="/" class="tw-cursor-pointer tw-pointer-events-auto">
					<img
						src="/images/logo.webp"
						alt="Vgeek Logo"
						width="544"
						height="267"
						class="tw-object-contain tw-w-auto tw-h-auto tw-max-w-[40vw] xl:tw-max-w-full tw-max-h-[30vh] xl:tw-max-h-[15vh]"/>
				</a>
			</div>
			<div class="tw-flex tw-glow tw-justify-items-end">
				<div class="tw-text-stone-900 tw-hidden xl:tw-flex tw-text-base tw-pointer-events-auto">
					<div class="tw-ps-10 tw-pe-8 tw-py-4 tw-rounded-s-full tw-border-white tw-border-s-2 tw-border-y-2 tw-bg-white tw-bg-opacity-75 tw-cursor-pointer hover:tw-text-white hover:tw-bg-rose-500 hover:tw-bg-opacity-75">
						<a v-if="route.path == '/'" href="#about" v-smooth-scroll="{offset: -50}">About</a>
						<a v-else href="/#about">About</a>
					</div>
					<div class="tw-px-8 tw-py-4 tw-border-white tw-border-y-2 tw-bg-white tw-bg-opacity-75 tw-cursor-pointer hover:tw-text-white hover:tw-bg-rose-500 hover:tw-bg-opacity-75">
						<a v-if="route.path == '/'" href="#members" v-smooth-scroll="{offset: -50}">Members</a>
						<a v-else href="/#members">Members</a>
					</div>
					<div class="tw-px-8 tw-py-4 tw-border-white tw-border-y-2 tw-bg-white tw-bg-opacity-75 tw-cursor-pointer hover:tw-text-white hover:tw-bg-rose-500 hover:tw-bg-opacity-75">
						<a v-if="route.path == '/'" href="#groups" v-smooth-scroll="{offset: -50}">Groups</a>
						<a v-else href="/#groups">Groups</a>
					</div>
					<div class="tw-px-8 tw-py-4 tw-border-white tw-border-y-2 tw-bg-white tw-bg-opacity-75 tw-cursor-pointer hover:tw-text-white hover:tw-bg-rose-500 hover:tw-bg-opacity-75">
						<a v-if="route.path == '/'" href="#link" v-smooth-scroll="{offset: -50}">Link</a>
						<a v-else href="/#link">Link</a>
					</div>
					<div class="tw-ps-8 tw-pe-10 tw-py-4 tw-rounded-e-full tw-border-white tw-border-e-2 tw-border-y-2 tw-bg-white tw-bg-opacity-75 tw-cursor-pointer hover:tw-text-white hover:tw-bg-rose-500 hover:tw-bg-opacity-75">
						<a v-if="route.path == '/'" href="#guideline" v-smooth-scroll="{offset: -50}">Guideline</a>
						<a v-else href="/#guideline">Guideline</a>
					</div>
				</div>
				<div class="xl:tw-ms-6 tw-flex-auto tw-shrink tw-text-stone-900 tw-text-xs xl:tw-text-base">
					<button @click.stop="" type="button" class="tw-ps-3 tw-pe-2 tw-py-1 xl:tw-ps-5 xl:tw-pe-3 xl:tw-py-4 tw-rounded-s-full tw-border-white tw-border-s-2 tw-border-y-2 tw-cursor-pointer text-white tw-bg-rose-500 tw-bg-opacity-75">JP</button>
					<button @click.stop="" type="button" class="tw-ps-2 tw-pe-3 tw-py-1 xl:tw-ps-3 xl:tw-pe-5 xl:tw-py-4 tw-rounded-e-full tw-border-white tw-border-e-2 tw-border-y-2 tw-bg-white tw-bg-opacity-75 tw-cursor-pointer hover:tw-text-white hover:tw-bg-rose-500 hover:tw-bg-opacity-75">EN</button>
				</div>
			</div>
		</nav>
	</header>
</template>
