import { defineStore } from "pinia";
import type { IUser } from "@/stores/UserStore";
import { useConfigurationStore } from "@/stores/ConfigurationStore";



export const useVisitorStore = defineStore("visitorStore", {
	state: () => ({
		loggedIn: false,
		user: {} as IUser | null,
		token: null as string | null
	}),

	getters: {},

	actions: {
		async logIn(): Promise<void> {
			await window.open("localhost:8000/auth/login", "window", "popup");
		this.$state.loggedIn = true; // TODO: Handle "right" logIn
		},

		async logOut(): Promise<void> {
			this.$state.loggedIn = false;
			this.$state.user = null;
			this.$state.token = null;

			// "Save" settings
			const confStore = useConfigurationStore();
			const settings = confStore.$state;

			// Clear all local storages
			window.localStorage.clear();
			window.sessionStorage.clear();

			// But keep settings, so...
			confStore.$hydrate();
			confStore.$state = settings;
		}
	},

	persist: [
		{
			storage: window.sessionStorage
		},
		{
			storage: window.localStorage
		}
	]
});
