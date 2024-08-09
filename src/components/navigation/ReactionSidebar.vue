<script setup lang="ts">
import ProfilePicture from "@/components/ProfilePicture.vue";
import IconXMark from "@/components/icons/IconXMark.vue";
import { useUiBehaviourStore } from "@/stores/UiBehaviourStore";
import router from "@/router";
import { usePostStore } from "@/stores/PostStore";

defineProps<{
  postId: string;
}>();

const uiBehaviour = useUiBehaviourStore();
const sidebarVisible = () => uiBehaviour.reactionSidebarVisible;
const hideSidebar = uiBehaviour.hideReactionSidebar;

const postStore = usePostStore();

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
        <div class="h-full flex flex-col ml-1.5">
          
          <!-- Close button and title "Reactions" -->
          <div class="flex pl-3 mb-5">
            <h1 class="text-2xl font-semibold">Reaktionen</h1>
            <div class="grow" />
            <div 
              @click="hideSidebar()"
						  class="h-9 w-9 rounded-md p-1.5 bg-neutral-800 cursor-pointer hover:opacity-90"
					  >
						  <IconXMark class="size-full fill-neutral-100" />
					  </div>
          </div>   

          <div
            class="w-full mt-5 mb-4 cursor-pointer bg-neutral-600 rounded-md text-center py-2 text-lg font-semibold text-neutral-300 hover:opacity-80"
          >
            Kommentar verfassen
          </div>

          <hr />

          <div
            
            class=""
          >

          </div>

        </div>
      </div>

  </div>

</template>