// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	$development: {
		routeRules: {
			"/**": { static: true },
		},
	},

	modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "@nuxt/image"],
});