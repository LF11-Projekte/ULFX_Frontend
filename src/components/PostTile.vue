<script setup lang="ts">
import type { IPost } from "@/stores/PostStore";
import ProfilePicture from "@/components/ProfilePicture.vue";

defineProps<{
	post: IPost;
}>();
</script>

<template>
	<div class="h-fit w-full mx-auto my-3 bg-neutral-700 rounded-2xl">
		<div
			class="bg-center rounded-t-2xl bg-cover pt-[40%] w-full"
			:style="`background-image: url(${post.previewPicture});`"
		/>
		<div class="w-full py-4 px-6">
			<h1 class="font-medium text-[2.1em]">{{ post.title }}</h1>
			<hr class="my-1 py-0.5" />
			<div class="text-justify aspect-[10/3] overflow-y-scroll">{{ post.previewText }}</div>
			<hr class="my-1 py-0.5" />

			<!-- User profile -->
			<RouterLink
				:to="`/profile/${post.user.id}`"
				class="w-full mt-4 flex items-center cursor-pointer hover:opacity-80"
			>
				<ProfilePicture :src="post.user.profilePictureUrl" class="w-10 h-10" />
				<div class="pl-3 text-lg">{{ post.user.displayName }}</div>
			</RouterLink>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
