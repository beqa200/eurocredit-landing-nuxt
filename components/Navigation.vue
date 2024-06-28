<template>
	<div>
		<div
			class="px-4 tablet:px-[112px] py-6 grid grid-cols-headerTablet tablet:grid-cols-header items-center"
		>
			<NuxtImg
				src="/eurocredit-logo.svg"
				width="165"
				class="box-content border-r-2 border-border-color-gray pr-8 hidden tablet:block"
			/>
			<div
				class="flex items-center tablet:pl-8 gap-1.5"
			>
				<NuxtImg
					src="/phone.svg"
					width="18"
				/>
				<span
					class="font-semibold text-font-color-black"
					>+995 555 62 44 21</span
				>
			</div>

			<div
				class="flex items-center justify-self-end mr-6 gap-1.5 cursor-pointer"
				@click="toggleLocale"
			>
				<span
					class="font-semibold text-font-color-black"
					>{{
						$t("navigation.lang")
					}}</span
				>
				<NuxtImg
					:src="
						$t('navigation.langImg')
					"
					width="20"
				/>
			</div>
			<NuxtImg
				src="/user-icon.png"
				width="20"
				class="justify-self-end mr-2 border-2 border-border-color-gray rounded-full p-2 box-content cursor-pointer"
			/>
			<button
				class="btn hidden tablet:block"
			>
				{{
					$t("navigation.buttonText")
				}}
			</button>
		</div>

		<nav
			class="bg-[#F6F8FA] text-white text-center py-6"
		>
			<div
				class="flex px-2 flex-wrap gap-9 text-font-color-black text-sm font-semibold justify-center"
			>
				<a
					href="#"
					class="hover:scale-animation"
					>{{
						$t("navigation.navs[0]")
					}}</a
				>
				<a
					href="#"
					class="hover:scale-animation"
					>{{
						$t("navigation.navs[1]")
					}}</a
				>
				<a
					href="#"
					class="hover:scale-animation"
					>{{
						$t("navigation.navs[2]")
					}}</a
				>
				<a
					href="#"
					class="hover:scale-animation"
					>{{
						$t("navigation.navs[3]")
					}}</a
				>
				<a
					href="#"
					class="hover:scale-animation"
					>{{
						$t("navigation.navs[4]")
					}}</a
				>
				<a
					href="#"
					class="hover:scale-animation"
					>{{
						$t("navigation.navs[5]")
					}}</a
				>
			</div>
		</nav>
	</div>
</template>

<script setup>
const { locale, setLocale } = useI18n();
const toggleLocale = () => {
	setLocale(
		locale.value === "en" ? "ka" : "en"
	);

	localStorage.setItem(
		"locale",
		locale.value === "en" ? "ka" : "en"
	);
};
</script>

<style scoped>
/* styles */
</style>
