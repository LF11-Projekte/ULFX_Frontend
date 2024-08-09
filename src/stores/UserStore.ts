import { defineStore } from "pinia";
import axios from 'axios'
import { apiRoute } from '@/backend-api'

export interface IUser {
	id: number;
	displayName?: string;
	email: string;
	profilePictureUrl?: string;
	followers?: number;
	description: string;
	visitorIsFollower: boolean | undefined;
}

export const useUserStore = defineStore("userStore", {
	state: () => ({
		users: [
			{
				id: 0,
				displayName: "Adrian",
				email: "adrian@email.com",
				profilePictureUrl: "https://avatars.githubusercontent.com/u/149674553",
				followers: 3,
			},
			{
				id: 1,
				displayName: "Davidi",
				email: "davidi@email.com",
				profilePictureUrl: "https://avatars.githubusercontent.com/u/61469501",
				followers: 5.0 * 10^20,
			},
			{
				id: 2,
				email: "schenkel@bszetdd.lernsax.de",
				profilePictureUrl: "https://avatars.githubusercontent.com/u/61469501",
				followers: 8,
			},
			{
				id: 3,
				displayName: "Visitor",
				email: "visitor@email.com",
				profilePictureUrl: "https://avatars.githubusercontent.com/u/61466501",
				followers: 10,
			}
		]
	}),

	actions: {
		getLocalUser(id: string) : IUser | undefined {
			return this.users.find((user) => user.id.toString() == id);
		},

		async getUser(id: string) : IUser | undefined {
			const user = this.getLocalUser(id);
			if (user) return user;

			await new Promise((resolve, reject) => {
				fetch(apiRoute("user/byId/" +id))
					.then((response) => response.json())
					.then((response) => {
						resolve({
							id: response.id,
							email: "",
							profilePictureUrl: response.profilePicture,
							
						})
					})
					.catch(() => reject())
			}).catch(() => console.error("API not reachable"))

			return undefined;
		}
	}

});
