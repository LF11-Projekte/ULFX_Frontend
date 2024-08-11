import { defineStore } from "pinia";

export interface IUser {
	id: number;
	displayName?: string;
	email: string;
	profilePictureUrl?: string;
	followers?: number;
	visitorIsFollower?: boolean;
}

const defaultProfilePicture = (userId: number) : string => {
	return `/defaultProfile-0${(userId % 4) + 1}.jpg`;
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
				visitorIsFollower: true,
			} as IUser,
			{
				id: 1,
				displayName: "Davidi",
				email: "davidi@email.com",
				profilePictureUrl: "https://avatars.githubusercontent.com/u/61469501",
				followers: 5.0 * 10^20,
				visitorIsFollower: true,
			} as IUser,
			{
				id: 2,
				email: "schenkel@bszetdd.lernsax.de",
				profilePictureUrl: defaultProfilePicture(2),
				followers: 8,
				visitorIsFollower: false,
			} as IUser,
			{
				id: 3,
				displayName: "Visitor",
				email: "visitor@email.com",
				profilePictureUrl: "https://avatars.githubusercontent.com/u/61466501",
				followers: 10,
				visitorIsFollower: false,
			} as IUser
		] as Array<IUser>
	}),

	actions: {
		getUserById(id: string) : IUser | undefined {
			const user = this.users.find(user => user.id.toString() == id);
			if(user) {
				user.displayName = user.displayName ?? user.email;
				user.profilePictureUrl = user.profilePictureUrl ?? defaultProfilePicture(user.id);
			}

			return user;
		}
	}

});
