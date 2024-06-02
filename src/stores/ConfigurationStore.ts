import { defineStore } from 'pinia'

export const useConfigurationStore = defineStore("configurationStore", {

  state: () => ({
    cookiesConfirmed: false,
  }),

  persist: {
    storage: window.localStorage
  },

});