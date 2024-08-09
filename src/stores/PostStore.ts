import type { IUser } from "@/stores/UserStore";
import { defineStore } from "pinia";

export interface IComment {
	id: string;
	text: string;
	postDate: Date;
	user: IUser;
	answers: IComment[] | null;
}

export interface IPost {
	id: string;
	title: string;
	previewPicture: string;
	previewText: string;
	lastEditDate: Date;
	creationDate: Date;
	views: number;
	user: IUser;
	content: string;
	comments: IComment[];
}

interface IPostState {
	post: IPost;
	apiReqTimestamp: Date;
}

export const usePostStore = defineStore("postStore", {
	state: () => ({
		posts: new Array<IPostState>()
	}),

	actions: {
		async postExists(id: string): Promise<boolean> {
			if (this.posts.filter((p) => p.post.id === id)) return true;
			// TODO: call API
			return false;
		},

		async getPost(id: string): Promise<IPost> {
			//if(!await usePostStore().postExists() || )
			// TODO: Api call
			return this.posts.find((p) => p.post.id === id)?.post;
		}
	},

	persist: {
		storage: window.caches
	}
});
