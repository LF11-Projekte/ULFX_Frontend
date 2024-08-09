import { useUserStore, type IUser } from "@/stores/UserStore";
import { usePostStore, type IPost } from "./PostStore";
import { defineStore } from "pinia";


export interface IReaction {
    id: string;
    text: string;
    lastEditDate: Date;
    creationDate: Date;
    parent: IPost | IReaction;
    parentType: "POST" | "REACTION";
    user: IUser;
}

interface IReactionState {
    reaction: IReaction;
    apiReqTimestamp: Date;
}


export const useReactionStore = defineStore("reactionStore", {
    state: () => ({
        reactionStates:
            [
                {
                    reaction: {
                        id: "0",
                        text: "Hallo Welt",
                        lastEditDate: new Date(),
                        creationDate: new Date(),
                        parentType: "POST",
                        parent: usePostStore().posts.find(o=>o.post.id=='0')?.post,
                        user: useUserStore().users.find(o=>o.id==0) as IUser
                    } as IReaction,
                    apiReqTimestamp: new Date()
                } as IReactionState
            ] as Array<IReactionState>
    }),

    actions: {
        async getReactionsByPostId(id: string): Promise<IReaction[]> {
            return this.reactionStates.filter(obj => {
                obj.reaction.parentType == "POST"
                && (obj.reaction.parent as IPost).id == id
            }).map(obj => obj.reaction);
        }
    },

    persist: {
        storage: window.caches
    }
});