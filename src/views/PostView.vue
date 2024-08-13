<script setup lang="ts">
import { computed, ref } from "vue";
import { usePostStore, type IPost } from "@/stores/PostStore";
import { useRoute } from "vue-router";
import ProfilePicture from "@/components/ProfilePicture.vue";
import ReactionSidebar from "@/components/navigation/ReactionSidebar.vue";
import { useUiBehaviourStore } from "@/stores/UiBehaviourStore";
import { marked } from "marked";


// $route.params.id
const postId = parseInt(useRoute().params.id as string);
const postStore = usePostStore();

// Get post from poststore
const post = ref(await postStore.getPostById(postId.toString()) as IPost);
//const markdown = computed(() => marked(post.value));

// Date output calculation
const months = [ "Jan.", "Feb.", "Mrz.", "Apr.", "Mai", "Jun.", "Jul.", "Aug.", "Sep.", "Okt.", "Nov.", "Dez." ];

const postDateStr = () => `${post.value.creationDate.getDay() + 1}. ${months[post.value.creationDate.getMonth()]} ${post.value.creationDate.getFullYear()}`;
const showPostEditDateStr = () => post.value.creationDate.getTime() != post.value.lastEditDate.getTime();
const postEditDateStr = () => !showPostEditDateStr() ? `` : `${post.value.lastEditDate.getDay() + 1}. ${months[post.value.lastEditDate.getMonth()]} ${post.value.lastEditDate.getFullYear()}`;
const postViewsStr = () => post.value.views.toString();


//
const uiBehaviour = useUiBehaviourStore();
const showSidebar = uiBehaviour.showReactionSidebar;
const username = ref(post.value.user.displayName ?? post.value.user.email);

</script>

<template>

	<div class="min-w-full lg:rounded-b-2xl lg:min-w-[1024px] w-2/3 mx-auto h-fit bg-neutral-600 mb-40">
		
		<!-- Post image -->
		<div
			class="bg-center bg-cover pt-[40%] w-full"
			:style="`background-image: url(${post.previewPicture});`"
		/>

		<!-- Top row with publisher and Title -->
		<div class="pt-3 px-6 pb-4">
			<div class="sm:flex min-h-14 block ">
				<h1 class="flex-grow font-bold text-4xl my-auto w-fit">{{ post.title }}</h1>

				<!-- Publisher -->
				<div class="w-60 flex min-w-fit sm:py-0 py-5">
					<ProfilePicture :src="post.user.profilePictureUrl ?? ''" class="h-16 w-16 min-w-16 p-0.5" />
					<div class="block pl-3 my-auto">

						<!-- Username -->
						<RouterLink
							:to="`/profile/${post.user.id}`"
							class="mb-1 font-semibold"
							:class="
								username.length < 14
								? 'text-2xl'
								: username.length < 24
								? 'text-xl'
								: 'text-lg'"
							>{{ username }}
						</RouterLink>
						
						<!-- Follower count and (un-)follow button-->
						<div class="mt-0.5 flex sm:w-fit hover:opacity-80 cursor-pointer">
							<div class="bg-neutral-200 font-semibold text-neutral-600 py-0.5 pr-1 pl-1.5 rounded-l-lg">
								{{ post.user.visitorIsFollower === true ? "Entfolgen" : "Folgen" }}
							</div>
							<div class="ml-0.5 bg-neutral-200 font-semibold text-neutral-600 py-0.5 pl-1 pr-1.5 rounded-r-lg">
								{{ post.user.followers }}
							</div>
						</div>

					</div>

				</div>

			</div>

			<hr class="mt-4" />

			<!-- Metadata -->
			<div class="mt-1 px-2">
				<span class="italic text-neutral-200">Gepostet am:&nbsp;&nbsp;</span>
				<span class="text-neutral-200">{{ postDateStr() }}</span>

				<span v-show="showPostEditDateStr()">
					<span class="text-neutral-200">&nbsp;|&nbsp;</span>
					<span class="italic text-neutral-200">Zuletzt bearbeitet am:&nbsp;&nbsp;</span>
					<span class="text-neutral-200">{{ postEditDateStr() }}</span>
				</span>
				
				<span class="text-neutral-200">&nbsp;|&nbsp;</span>
				<span class="italic text-neutral-200">Aufrufe:&nbsp;&nbsp;</span>
				<span class="text-neutral-200">{{ postViewsStr() }}</span>
			</div>

			<!-- Post text -->
			<div class="mt-5">
				<div
          			class="markdown-body"
          			v-html="marked(post.content)"
        		/>
			</div>

			<hr class="mt-5" />

			<!-- Reaction button TODO: implement reactions -->
			<div @click="showSidebar" class="w-full mt-5 mb-2 cursor-pointer bg-neutral-700 rounded-lg text-center py-2 text-lg font-semibold text-neutral-300 hover:opacity-80">
				Zeige Reaktionen
			</div>

		</div>
	</div>

	<!-- Handle reactions to post -->
	<ReactionSidebar :post="post" />

</template>
