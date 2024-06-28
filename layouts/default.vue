<template>
	<div>
		<header>
			<OfferBanner />
			<Navigation />
		</header>
		<main>
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
