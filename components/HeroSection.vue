<template>
	<section
		class="p-3 pb-10 tablet:p-[114px] flex flex-col laptop:flex-row gap-6 items-center justify-between"
	>
		<div
			class="max-w-[500px] flex flex-col items-center m-auto laptop:block laptop:m-0"
		>
			<h1
				class="text-[34px] text-center laptop:text-start tablet:text-[56px] font-bold"
			>
				{{ $t("hero.title") }}
			</h1>
			<p
				class="text-[18px] mt-[24px] mb-[40px] text-center laptop:text-start"
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
					class="flex gap-2 items-center border-2 rounded-[88px] px-[18px] hover:bg-[#F6F8FA] hover:border-[#F6F8FA]"
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
