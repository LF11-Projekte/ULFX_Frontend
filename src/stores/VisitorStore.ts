import { defineStore } from "pinia";
import { apiRoute} from '@/backend-api'
import type { IUser } from "@/stores/UserStore";
import { useConfigurationStore } from "@/stores/ConfigurationStore";
import axios from 'axios'

const setLoggedInTrue = () => useVisitorStore().loggedIn = true;

export const useVisitorStore = defineStore("visitorStore", {
	state: () => ({
		loggedIn: false,
		user: {} as IUser | null,
		token: null as string | null
	}),

	getters: {},

	actions: {
		async logIn(): Promise<void> {
			if(this.loggedIn) return;
			location.href = apiRoute("auth/login");
		},

		async logInSucceed(token: string): Promise<boolean> {
			axios.get(apiRoute("user/me")).then((response) => {
				this.user = {
					id: response.data.user_id,
					displayName: response.data.displayName,
					email: response.data.adname,
					profilePictureUrl: response.data.profilePicture,
					description: response.data.description,
				}
				this.loggedIn = true;
				console.log(response.data);

			}).catch(
				() => console.error("API not reachable")
			);
			this.token = token;

			return this.loggedIn;
		},

		async logOut(): Promise<void> {
			this.$state.loggedIn = false;
			this.$state.user = null;

			// "Save" settings
			const confStore = useConfigurationStore();
			const settings = confStore.$state;

			// Clear all local storages
			window.localStorage.clear();
			window.sessionStorage.clear();

			// But keep settings, so...
			confStore.$hydrate();
			confStore.$state = settings;

			await fetch(apiRoute("auth/logout"), { credentials: "include" });
		},

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
