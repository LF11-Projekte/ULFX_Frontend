import { defineStore } from 'pinia'
import type { User } from '@/stores/UserStore'
import { computed, ref } from 'vue'

const loggedIn = ref(false);

export const useVisitorStore = defineStore("visitorStore", {
  state: () => ({
    isLoggedIn: computed(() => !!loggedIn.value),
    user: {} as User
  }),

  getters: {

  },

  actions:{
    logIn: async (): Promise<void> => {
      loggedIn.value = true;
    },

    logOut: async (): Promise<void> => {
      loggedIn.value = false;
    }
  }

});