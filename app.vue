<template>
	<NuxtLayout>
		<NuxtPage/>
	</NuxtLayout>
	<div v-if="isShowBackground" class="eye-catch-backdrop tw-hidden md:tw-block"></div>
	<div v-if="isShowEyeCatch" class="eye-catch tw-hidden md:tw-block">
		<video autoplay muted class="object-fit-cover w-100 h-100" @canplay="imageLoaded" @abort="notShow" @error="notShow" src="/videos/eyecatch.webm" type='video/webm' />
	</div>
	<div v-if="isShowForeground" class="eye-catch-backdrop tw-hidden md:tw-block"></div>
</template>

<script lang="ts" setup>
import "assets/global.less";

const isShowEyeCatch = toRef(true);
const isShowBackground = toRef(true);
const isShowForeground = toRef(true);

const notShow = () => {
	console.log("Error Loading EyeCatch")
	isShowForeground.value = false
	isShowBackground.value = false
	isShowEyeCatch.value = false
}

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
