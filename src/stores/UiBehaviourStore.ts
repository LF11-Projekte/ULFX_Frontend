import { useConfigurationStore } from "@/stores/ConfigurationStore";
import { useVisitorStore } from "@/stores/VisitorStore";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

const configureStore = () => useConfigurationStore();
const visitorStore = () => useVisitorStore();

const navUserSidebarVisibleRef = ref<boolean>(false);

export const useUiBehaviourStore = defineStore("uiBehaviourStore", {
	state: () => ({
		confirmCookiesVisible: computed(() => !configureStore().cookiesConfirmed),
		navUserSidebarVisible: computed(() => navUserSidebarVisibleRef.value),
		userProfilePicture: computed(() => visitorStore().profilePicture),
		userLoggedIn: computed(() => visitorStore().loggedIn)
	}),

	actions: {
		confirmCookies() {
			configureStore().cookiesConfirmed = true;
		},

		showNavUserSidebar() {
			navUserSidebarVisibleRef.value = true;
		},

		hideNavUserSidebar() {
			navUserSidebarVisibleRef.value = false;
		}
	}
});
