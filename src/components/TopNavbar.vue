<script setup lang="ts">
import IconMagnifyingGlass from '@/components/icons/IconMagnifyingGlass.vue';
import router from '@/router'
import ProfilePicture from '@/components/ProfilePicture.vue'
import { ref } from 'vue'
import { useVisitorStore } from '@/stores/VisitorStore'

withDefaults(
  defineProps<{
    userView?: boolean
  }>(),
  {
    userView: true
  }
)

const showSidebar = ref(false);

const searchFormSubmit = () => {
  router.push({ path: '/search/:q', params: { q: "" } });
}

const logOut = async () => {
  await useVisitorStore().logOut();
  await router.push({ name: 'login' });
}

</script>


<template>
  <header class="top-0 left-0 right-0 absolute bg-neutral-700 h-14">
    <nav class="h-full flex">

      <!-- Logo -->
      <div class="container h-full ml-5 p-0.5 mr-auto">
        <div class="w-fit h-full">
          <RouterLink to="/" class="max-w-fit w-fit">
            <img class="h-full" src="/logo.png" alt="ulfx logo" />
          </RouterLink>
        </div>
      </div>


      <!-- Searchbar -->
      <div v-show="userView" class="relative container h-full mx-auto">
        <form @submit.prevent="searchFormSubmit">
          <div class="relative my-0 min-w-52 w-3/4 mx-auto">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <button type="submit" class="p-1 mt-1.5 size-6 focus:outline-none focus:shadow-outline">
                <IconMagnifyingGlass class="size-full fill-neutral-400" />
              </button>
            </span>
            <input type="search" class="py-2.5 mt-1.5 min-w-48 w-full text-sm text-neutral-100 bg-neutral-800 rounded-md pl-10 focus:outline-none focus:outline-1 focus:outline-neutral-500 focus:shadow-2xl" placeholder="Durchstöbere ULFX ..." autocomplete="off">
          </div>
        </form>
      </div>

      <!-- User's profile picture -->
      <div v-show="userView" class="container mr-5">
        <div class="relative mx-auto h-full">
          <div class="absolute inset-y-0 right-0 ml-auto mr-0 p-1.5 h-[3.75em] w-[3.75em] rounded-full">
            <ProfilePicture src="/defaultProfile-02.jpg" class="max-h-full max-w-full rounded-full cursor-pointer hover:opacity-80" @click="showSidebar = true;" />
          </div>
        </div>
      </div>

    </nav>
  </header>

  <!-- Container to show option sidebar (after click on profile picture) -->
  <div v-show="showSidebar" class="absolute left-0 right-0 w-screen h-screen backdrop-blur-[2px] flex">
    <div class="w-full h-full" @click="showSidebar = false;"/>
    <div class="absolute h-screen min-w-[25rem] w-2/5 max-w-[35rem] bg-neutral-700 right-0 rounded-l-2xl border-[1px] border-neutral-600 text-neutral-100 text-xl p-5">
      <div class="h-full flex flex-col">
          <RouterLink class="block pl-3 p-2 h-12 w-full justify-center hover:bg-neutral-600 rounded-lg" to="profile">Profilansicht</RouterLink>
          <RouterLink class="block pl-3 p-2 h-12 w-full justify-center hover:bg-neutral-600 rounded-lg" to="my-posts">Meine Beiträge</RouterLink>
          <RouterLink class="block pl-3 p-2 h-12 w-full justify-center hover:bg-neutral-600 rounded-lg" to="create-post">Beitrag erstellen</RouterLink>
          <RouterLink class="block pl-3 p-2 h-12 w-full justify-center hover:bg-neutral-600 rounded-lg" to="group-management">Gruppen verwalten</RouterLink>
        <div class="grow h-auto" />
        <a @click="logOut()" class="cursor-pointer block flex-none bottom-0 pl-3 p-2 h-12 w-full justify-center hover:bg-neutral-600 rounded-lg" to="logout">Abmelden</a>
        <div class="h-4" />
      </div>
    </div>
  </div>

</template>