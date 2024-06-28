<template>
	<section
		class="p-[114px] flex justify-between"
	>
		<div class="max-w-[500px]">
			<h1 class="text-[56px] font-bold">
				{{ $t("hero.title") }}
			</h1>
			<p
				class="text-[18px] mt-[24px] mb-[40px]"
			>
				{{ $t("hero.description") }}
			</p>
			<div class="flex gap-2">
				<button class="btn">
					{{
						$t("navigation.buttonText")
					}}
				</button>
				<button
					class="flex gap-2 items-center border-2 rounded-[88px] px-[18px]"
				>
					<NuxtImg
						src="/google.svg"
						width="28"
						height="28"
					/>
					<p
						class="text-start text-[12px] text-[#868C98]"
					>
						Google Reviews <br /><span
							class="text-md text-black font-bold"
							>4.7 / 152</span
						>
					</p>
				</button>
			</div>
		</div>
		<NuxtImg
			src="/hero.png"
			width="548"
		/>
	</section>
</template>

<script setup></script>

<style scoped>
/* styles */
</style>
