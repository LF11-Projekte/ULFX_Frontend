import { defineStore } from 'pinia'
import type { User } from '@/stores/UserStore'
import { computed, ref } from 'vue'

const loggedIn = ref<boolean>(false);
const cookiesConfirmed = ref<boolean>(false);

export const useVisitorStore = defineStore("visitorStore", {
  state: () => ({
    isLoggedIn: computed(() => !!loggedIn.value),
    user: {} as User
  }),

  getters: {

  },

  actions: {
    async logIn(): Promise<void> {
      loggedIn.value = true;            // TODO: Handle "right" logIN
    },

    async logOut(): Promise<void> {
      loggedIn.value = false;
    }
  },

  persist: {
    storage: sessionStorage
  }

});