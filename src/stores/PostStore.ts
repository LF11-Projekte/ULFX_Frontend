import { useUserStore, type IUser } from "@/stores/UserStore";
import { defineStore } from "pinia";


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
}

interface IPostState {
	post: IPost;
	apiReqTimestamp: Date;
}


function generateTestPosts(count: number) : Array<IPostState> {
	const posts = new Array<IPostState>();
	const userStore = useUserStore();

	for(let i = 0; i < count; i++) {
		const userId = Number.parseInt((Math.round(Math.random() * 3)).toString());
		posts.push({
			post: {
				id: i.toString(),
				title: 'Hallo Welt #' + i.toString(),
				content: "# Hier steht der Posttext drin\nHallo Welt\n* ein stichpunkt\n\n![Bild](https://www.americanexpress.com/de-de/amexcited/media/cache/default/cms/2022/01/Schwarz-Weiss-Fotografie-Titelbild-scaled.jpg)\nc++\n```#include <iostream>\nint main(int argc, char* argv[]) {\n    std::cout << \"Hallo Welt\" << std::endl;    return 0;\n}\n```\n",
				previewPicture: 'https://random-image-pepebigotes.vercel.app/api/random-image?i=' + i.toString(),
				previewText: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
				creationDate: new Date(2020, 10, 15),
				lastEditDate: new Date(2024, 5, 3),
				views:  Math.random() * 100 | 0,
				user: userStore.users.find(o=>o.id==userId) as IUser
			} as IPost,
			apiReqTimestamp: new Date()
		} as IPostState);
	}

	return posts;
};

export const usePostStore = defineStore("postStore", {
	state: () => ({
		posts: generateTestPosts(100)
	}),

	actions: {
		async postExists(id: string): Promise<boolean> {
			if (this.posts.find((p) => p.post.id == id) !== undefined) return true;
			// TODO: call API
			return false;
		},
		async getPostById(id: string): Promise<IPost> {
			//if(!await usePostStore().postExists() || )
			// TODO: Api call
			return this.posts.find(p=>p.post.id==id)?.post as IPost;
		}
	},

	getters: {
		
		
	},

	persist: {
		storage: window.caches
	}
} );
