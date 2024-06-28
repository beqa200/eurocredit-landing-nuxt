<template>
	<div class="mb-[100px]">
		<header>
			<OfferBanner />
			<Navigation />
		</header>
		<main class="max-w-[1440px] m-auto">
			<slot />
		</main>
	</div>
</template>

<script>
export default {
	name: "DefaultLayout",
};
</script>

<style scoped>
/* styles */
</style>
