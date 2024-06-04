import { defineStore } from "pinia";

export interface IUser {
	id: number;
	displayName?: string;
	email: string;
	profilePictureUrl?: string;
	followers?: number;
	visitorIsFollower: boolean | undefined;
}

export const useUserStore = defineStore("userStore", {
	state: () => ({
		users: new Array<IUser>()
	})
});
