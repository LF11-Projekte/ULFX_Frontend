<script setup lang="ts">
import IconMagnifyingGlass from "@/components/icons/IconMagnifyingGlass.vue";
import router from "@/router";
import ProfilePicture from "@/components/ProfilePicture.vue";

import CookieBanner from "@/components/CookieBanner.vue";
import UserSidebar from "@/components/navigation/UserSidebar.vue";
import { useUiBehaviourStore } from "@/stores/UiBehaviourStore";

const store = useUiBehaviourStore();
const isLoggedIn = () => store.userLoggedIn;
const showSidebar = store.showNavUserSidebar;

const searchFormSubmit = () => {
	router.push({ path: "/search/:q", params: { q: "" } });
};
</script>

<template>
	<header class="top-0 left-0 right-0 absolute bg-neutral-700 h-14">
		<nav class="h-full flex">
			<!-- Logo -->
			<div class="container h-full ml-5 p-0.5 mr-auto">
				<div class="w-fit h-full">
					<RouterLink to="/" class="max-w-fit w-fit">
						<img class="h-full" src="/logo.png" alt="ulfx logo" />
					</RouterLink>
				</div>
			</div>

			<!-- Searchbar -->
			<div v-show="isLoggedIn()" class="relative container h-full mx-auto">
				<form @submit.prevent="searchFormSubmit">
					<div class="relative my-0 min-w-52 w-3/4 mx-auto">
						<span class="absolute inset-y-0 left-0 flex items-center pl-2">
							<button type="submit" class="p-1 mt-1.5 size-6 focus:outline-none focus:shadow-outline">
								<IconMagnifyingGlass class="size-full fill-neutral-400" />
							</button>
						</span>
						<input
							type="search"
							class="py-2.5 mt-1.5 min-w-48 w-full text-sm text-neutral-100 bg-neutral-800 rounded-md pl-10 focus:outline-none focus:outline-1 focus:outline-neutral-500 focus:shadow-2xl"
							placeholder="Durchstöbere ULFX ..."
							autocomplete="off"
						/>
					</div>
				</form>
			</div>

			<!-- User's profile picture -->
			<div v-show="isLoggedIn()" class="container mr-5">
				<div class="relative mx-auto h-full">
					<div class="absolute inset-y-0 right-0 ml-auto mr-0 p-1.5 h-[3.75em] w-[3.75em] rounded-full">
						<ProfilePicture
							src="/defaultProfile-03.jpg"
							class="max-h-full max-w-full rounded-full cursor-pointer hover:opacity-80"
							@click="showSidebar()"
						/>
					</div>
				</div>
			</div>
		</nav>
	</header>

	<UserSidebar class="top-0 bottom-0 left-0 right-0 absolute" />
	<CookieBanner class="top-0 bottom-0 left-0 right-0 absolute" />
</template>
