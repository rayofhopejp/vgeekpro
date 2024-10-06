<template>
	<NuxtLayout>
		<NuxtPage/>
	</NuxtLayout>
	<div class="eye-catch-backdrop tw-hidden md:tw-block" v-if="isShowBackground"></div>
	<div class="eye-catch tw-hidden md:tw-block" v-if="isShowEyeCatch">
		<img @load="imageLoaded" class="object-fit-cover w-100 h-100" src="/images/eyecatch.webp" alt="Vgeek production" fetchpriority="high">
	</div>
	<div class="eye-catch-backdrop tw-hidden md:tw-block" v-if="isShowForeground"></div>
</template>

<script lang="ts" setup>
import "assets/global.less";

const isShowEyeCatch = toRef(true);
const isShowBackground = toRef(true);
const isShowForeground = toRef(true);

const imageLoaded = () => {
	isShowForeground.value = false;
	setTimeout(() => {
		isShowBackground.value = false;
	}, 500);
	setTimeout(() => {
		isShowEyeCatch.value = false;
	}, 3750)
}
</script>

<style lang="less" scoped>
.eye-catch, .eye-catch-backdrop {
	width: 100vw !important;
	height: 100vh !important;
	margin: 0 !important;
	padding: 0 !important;
	position: fixed !important;
	top: 0 !important;
	left: 0 !important;
	z-index: 65535 !important;
}

.eye-catch-backdrop {
	background-color: #808080 !important;
}
</style>
