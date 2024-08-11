<script setup lang="ts">
import { RouterView } from "vue-router";
import TopNavbar from "@/components/navigation/TopNavbar.vue";
</script>

<template>
	<div id="app-layout" class="absolute top-0 bottom-0 left-0 right-0 flex flex-col">
		<TopNavbar class="sticky top-0" />
		<main class="flex-grow auto-cols-auto overflow-hidden">
			<div class="w-full mt-[3.5rem] h-[calc(100%-3.5rem)] overflow-y-scroll">
				<Suspense>
					<RouterView />
					<template #fallback>
						Unbekannter Fehler (Suspense region in ``App.vue'')
					</template>
				</Suspense>
			</div>
		</main>
	</div>
</template>
