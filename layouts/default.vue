<template>
	<div>
		<header>
			<OfferBanner />
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
