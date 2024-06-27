<template>
	<div>
		<header>header</header>
		<img src="/hero.png" />
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
