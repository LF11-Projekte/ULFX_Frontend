<script setup lang="ts">
import ProfilePicture from "@/components/ProfilePicture.vue";
import IconXMark from "@/components/icons/IconXMark.vue";
import { useUiBehaviourStore } from "@/stores/UiBehaviourStore";
import { useVisitorStore } from "@/stores/VisitorStore";
import router from "@/router";

const uiBehaviour = useUiBehaviourStore();
const sidebarVisible = () => uiBehaviour.navUserSidebarVisible;
const hideSidebar = uiBehaviour.hideNavUserSidebar;

const logVisitorOut = () => {
	hideSidebar();
	useVisitorStore().logOut();
	router.push({ path: "/login" });
};
</script>

<template>
	<!-- Container to show option sidebar (after click on profile picture) -->
	<div v-show="sidebarVisible()" class="absolute z-10 left-0 right-0 w-screen h-screen backdrop-blur-[2px] flex">
		<!-- Click region to return to previous page -->
		<div class="sm:w-full sm:h-full" @click="hideSidebar()" />

		<!-- Blued background and actual sidebar -->
		<div
			class="absolute h-screen sm:min-w-[24rem] sm:w-2/5 sm:max-w-[35rem] w-full bg-neutral-700 right-0 sm:rounded-l-2xl border-[1px] border-neutral-600 text-neutral-100 text-xl p-5"
		>
			<div class="h-full flex flex-col">
				<!-- User and close button -->
				<div class="flex pl-3 mb-5">
					<RouterLink class="flex items-center cursor-pointer hover:opacity-80" to="my-profile">
						<div class="size-14 p-0.5 rounded-full cursor-pointer">
							<ProfilePicture src="/defaultProfile-03.jpg" class="max-h-full max-w-full" />
						</div>
						<div class="pl-3 my-auto">Benutzername</div>
					</RouterLink>

					<div class="grow" />

					<div
						@click="hideSidebar()"
						class="h-9 w-9 rounded-md p-1.5 bg-neutral-800 cursor-pointer hover:opacity-90"
					>
						<IconXMark class="size-full fill-neutral-100" />
					</div>
				</div>

				<hr />

				<RouterLink
					class="mt-3 block pl-3 p-2 h-12 w-full justify-center hover:bg-neutral-600 rounded-lg"
					to="my-stats"
					@click="hideSidebar()"
					>Profilstatistik
				</RouterLink>

				<RouterLink
					class="block pl-3 p-2 h-12 w-full justify-center hover:bg-neutral-600 rounded-lg"
					to="my-posts"
					@click="hideSidebar()"
					>Meine Beiträge
				</RouterLink>

				<RouterLink
					class="block pl-3 p-2 h-12 w-full justify-center hover:bg-neutral-600 rounded-lg"
					to="create-post"
					@click="hideSidebar()"
					>Beitrag erstellen
				</RouterLink>

				<RouterLink
					class="block pl-3 p-2 h-12 w-full justify-center hover:bg-neutral-600 rounded-lg"
					to="group-management"
					@click="hideSidebar()"
					>Gruppen verwalten
				</RouterLink>

				<div class="grow h-auto" />

				<a
					@click="logVisitorOut()"
					class="cursor-pointer block flex-none bottom-0 pl-3 p-2 h-12 w-full justify-center hover:bg-neutral-600 rounded-lg"
					>Abmelden
				</a>

				<div class="h-4" />
			</div>
		</div>
	</div>
</template>
