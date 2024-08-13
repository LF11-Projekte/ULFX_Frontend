<script setup lang="ts">
import type { IPost } from "@/stores/PostStore";
import ProfilePicture from "@/components/ProfilePicture.vue";

defineProps<{
	posts: IPost[];
}>();

</script>

<template>
	<div
		v-for="post in posts" :key="post.id"
		class="h-fit w-full mx-auto my-3 bg-neutral-700 rounded-2xl"
	>

		<!-- Preview image of post -->
		<div class="relative h-fit">
			<div
				class="bg-center bg-transparent rounded-t-2xl bg-cover pt-[40%] w-full animate-none z-[5] relative"
				:style="`background-image: url(${post.previewPicture});`"
			/>
			<!-- Loading animation of image -->
			<div
				class="bg-center bg-no-repeat rounded-t-2xl bg-contain pt-[40%] -mt-[40%] w-full bg-[url('/logo.png')] z-0 absolute animate-pulse"
			/>
		</div>
		

		<div class="w-full py-4 px-6">
			<RouterLink
				:to="`/post/${post.id}`"
				class="font-medium text-[2.1em]">
				{{ post.title }}
			</RouterLink>

			<hr class="my-1 py-0.5" />
			<div class="text-justify aspect-[10/3] overflow-y-scroll">{{ post.previewText }}</div>
			<hr class="my-1 py-0.5" />

			<!-- User profile -->
			<RouterLink
				:to="`/profile/${post.user.id}`"
				class="w-fit mt-4 flex items-center cursor-pointer hover:opacity-80"
			>
				<ProfilePicture :src="post.user.profilePictureUrl ?? ''" class="w-10 h-10" />
				<div class="pl-3 text-lg">{{ post.user.displayName ?? post.user.email }}</div>
			</RouterLink>

		</div>
	</div>
</template>

