<script setup lang="ts">
import { usePostStore, type IPost } from "@/stores/PostStore";
import router from "@/router";
import { useRoute } from "vue-router";
import ProfilePicture from "@/components/ProfilePicture.vue";
import Markdown from "vue3-markdown-it";


// $route.params.id
const postId = parseInt(useRoute().params.id as string);
const postStore = usePostStore;
// TODO: Get post from poststore
const post = {
			id: '0',
			title: 'Hallo Welt',
			content: '# Hier steht der Posttext drin\nHallo Welt\n - ein stichpunkt',
			previewPicture:
				'https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg.webp',
			previewText:
				'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
			creationDate: new Date(2020, 10, 15),
			lastEditDate: new Date(2024, 5, 3),
			views: 200,
				user: {
				id: 0,
				displayName: 'Testnutzer',
				email: 'test@testnutzer.com',
				profilePictureUrl: '/defaultProfile-01.jpg',
				followers: 200,
				visitorIsFollower: true
			}
		} as IPost;

const months = [ "Jan.", "Feb.", "Mrz.", "Apr.", "Mai", "Jun.", "Jul.", "Aug.", "Sep.", "Okt.", "Nov.", "Dez." ];

const postDateStr = () => `${post.creationDate.getDay() + 1}. ${months[post.creationDate.getMonth()]} ${post.creationDate.getFullYear()}`;

const showPostEditDateStr = () => post.creationDate.getTime() != post.lastEditDate.getTime();

const postEditDateStr = () => !showPostEditDateStr() ? `` : `${post.lastEditDate.getDay() + 1}. ${months[post.lastEditDate.getMonth()]} ${post.lastEditDate.getFullYear()}`;

const postViewsStr = () => post.views.toString();

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
			<div class="flex min-h-14">
				<h1 class="flex-grow font-bold text-4xl my-auto">{{ post.title }}</h1>

				<!-- Publisher -->
				<div class="w-60 flex">
					<ProfilePicture :src="post.user.profilePictureUrl" class="h-16 w-16 p-0.5" />
					<div class="block pl-3 my-auto">

						<!-- Username -->
						<div class="mb-1 font-semibold text-2xl">{{ post.user.displayName ?? post.user.email }}</div>
						
						<!-- Follower count and (un-)follow button-->
						<div class="mt-0.5 flex w-fit hover:opacity-80 cursor-pointer">
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
				<Markdown
          class="markdown-body"
          :source="post.content"
        />
			</div>

			<hr class="mt-5" />

			<!-- Reaction button TODO: implement reactions -->
			<div class="w-full mt-5 mb-2 cursor-pointer bg-neutral-700 rounded-lg text-center py-2 text-lg font-semibold text-neutral-300 hover:opacity-80">
				Zeige Reaktionen
			</div>

		</div>
	</div>
</template>
