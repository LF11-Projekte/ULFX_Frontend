<script setup lang="ts">
import ProfilePicture from "@/components/ProfilePicture.vue";
import IconXMark from "@/components/icons/IconXMark.vue";
import { useUiBehaviourStore } from "@/stores/UiBehaviourStore";
import router from "@/router";

defineProps<{
  postId: string;
}>();

const uiBehaviour = useUiBehaviourStore();
const sidebarVisible = () => uiBehaviour.reactionSidebarVisible;
const hideSidebar = uiBehaviour.hideReactionSidebar;

</script>

<template>
  <!-- Container to show option sidebar (after click on profile picture) -->
  <div v-show="sidebarVisible()" class="absolute z-10 left-0 right-0 top-0 w-screen h-screen backdrop-blur-[2px] flex">
    <!-- Click region to return to previous page -->
    <div class="w-full h-full" @click="hideSidebar()" />

      <!-- Blued background and actual sidebar -->
      <div
        class="absolute h-screen min-w-[25rem] w-2/5 max-w-[35rem] bg-neutral-700 right-0 rounded-l-2xl border-[1px] border-neutral-600 text-neutral-100 text-xl p-5"
      >
        <div class="h-full flex flex-col">

        </div>
      </div>

  </div>

</template>