import type { IUser } from '@/stores/UserStore'
import { defineStore } from "pinia";


export interface IPost {
  id: string;
  title: string;
  previewPicture: string;
  previewText: string;
  user: IUser;
  content: string;
}

export const usePostStore = defineStore("postStore", {

  state: () => ({
    posts: new Array<IPost>()
  }),

  actions: {

  },

  persist: {
    storage: document.cookie,
    key: id => `postStore-${id}`,
  },

});
