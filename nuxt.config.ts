// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	modules: [
		"@nuxtjs/tailwindcss",
		"nuxt-aos",
		"@nuxt/image",
		'@bootstrap-vue-next/nuxt',
		"@nuxtjs/i18n",
	],
	ssr: false,
	tailwindcss: {
		config: {
			prefix: "tw-"
		}
	},
	css: [
		"bootstrap/dist/css/bootstrap.css",
		"bootstrap-icons/font/bootstrap-icons.css",
	],
})
