<template>
	<div
		class="bg-dark-blue w-full py-4 flex justify-center items-center gap-4"
		role="banner"
		aria-label="Offer Announcement"
	>
		<h2
			class="text-white text-sm text-center font-semibold"
		>
			{{ $t("offerBanner.message") }}
		</h2>
		<div
			class="bg-white-transparent-30 rounded-full p-2.5"
		>
			<NuxtImg
				src="/arrow-narrow-right.svg"
				alt="Description"
				width="18"
				height="18"
			/>
		</div>
	</div>
</template>

<script setup></script>

<style scoped>
/* styles */
</style>
