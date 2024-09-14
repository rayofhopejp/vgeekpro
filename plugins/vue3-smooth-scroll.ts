import {defineNuxtPlugin} from "#app";
import Vue3SmoothScroll from "vue3-smooth-scroll";

export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.vueApp.use(Vue3SmoothScroll)
})
