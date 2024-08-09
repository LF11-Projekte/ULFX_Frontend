<script setup lang="ts">
import PostTile from "@/components/PostTile.vue";
</script>

<template>
	<div class="h-32" />
	<div class="sticky-nav-group w-full bg-neutral-600 flex">
    <RouterLink class="h-full px-5 py-3 hover:bg-neutral-500" to="/">Neuste Beiträge</RouterLink>
    <RouterLink class="h-full px-5 py-3 hover:bg-neutral-500" to="/">Beiträge von gefolgten Nutzern</RouterLink>
    <RouterLink class="h-full px-5 py-3 hover:bg-neutral-500" to="/">Frequente Beiträge</RouterLink>
  </div>

  <!-- Here is the actual feed -->
	<div class="mt-0 mb-10 h-fit p-4 w-full min-h-fit bg-neutral-600 shadow-md bg-opacity-80">
		<div class="feed-grid gap-7">

    </div>
	</div>
	<div class="h-10 -mb-10" />
</template>

<style lang="scss" scoped>
.feed-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(min(26rem, 100%), 1fr));
}

.sticky-nav-group {
	position: -webkit-sticky;
	position: sticky;
	top: 0;
}
</style>
