import { defineStore } from 'pinia'

export interface User {
  id: number,
  displayName: string,
  email: string,
  profilePictureUrl: string,
}


export const useUserStore = defineStore("userStore", {
  state: () => ({
    users: new Array<User>()
  })
});