<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import ProfilePicture from '@/components/ProfilePicture.vue'
import { useUserStore } from '@/stores/UserStore';

const userId = parseInt(useRoute().params.id as string);
const userStore = useUserStore();
const user = userStore.getUser(userId.toString());

const defaultProfilePicture = () : string => {
  return `/defaultProfile-0${(userId % 4) + 1}.jpg`;
}

</script>

<template>

  <div class="flex w-full p-5">
    <div class="size-28">
      <ProfilePicture :src="user?.profilePictureUrl ?? defaultProfilePicture()"  />
    </div>
    <div class="pl-4">
      <div class="my-auto font-semibold text-3xl">{{ user?.displayName ?? user?.email }}</div>
      <hr class="my-2 min-w-60"/>
      <div class="mt-0 overflow-y-hidden text-lg">Profilbeschreibung</div>
    </div>


  </div>

</template>
