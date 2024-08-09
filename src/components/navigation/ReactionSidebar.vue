<script setup lang="ts">
import { ref } from "vue";
import ProfilePicture from "@/components/ProfilePicture.vue";
import IconXMark from "@/components/icons/IconXMark.vue";
import { useUiBehaviourStore } from "@/stores/UiBehaviourStore";
import { type IPost } from "@/stores/PostStore";
import { useReactionStore } from "@/stores/ReactionStore";

defineProps<{
  post: IPost;
}>();

const uiBehaviour = useUiBehaviourStore();
const sidebarVisible = () => uiBehaviour.reactionSidebarVisible;
const hideSidebar = uiBehaviour.hideReactionSidebar;


const reactionStore = useReactionStore();

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
            @click="() => {}"
          >
            Kommentar verfassen
          </div>

          <hr />

          <!-- Our reactions -->
          <div
            v-for="{ reaction } in reactionStore.reactionStates" :key="reaction.id"
            class=""
          >

            <!-- Show the profile of the reactor and the date -->
            <div class="h-14 flex w-full pt-4">
              <ProfilePicture :src="reaction.user.profilePictureUrl" class="h-[3.2rem] w-[3.2rem] p-0.5" />
              <div class="block pl-3 my-auto">

                <!-- Username -->
                <RouterLink
                  :to="`/profile/${reaction.user.id}`"
                  class="mb-0 font-semibold text-xl">
                  {{ reaction.user.displayName }}
                </RouterLink>
                
                <!-- Follower count and (un-)follow button-->
                <div class="mt-0 flex w-fit font-normal text-lg">
                  {{
                    (() : string => {
                      switch(Math.floor((reaction.creationDate.getTime() - new Date().getTime()) / 1000 / 60 / 60 / 24)) {
                        case 0: return "heute";
                        case 1: return "gestern";
                        case 2: return "vorgestern";
                        case 3: return "vor 3 Tagen";
                        case 4: return "vor 4 Tagen";
                        case 5: return "vor 5 Tagen";
                        case 6: return "vor 6 Tagen";
                        default:
                          return `${reaction.creationDate.getDate()}.&thinsp;${reaction.creationDate.getMonth()}.&thinsp;${reaction.creationDate.getFullYear()}`;
                      }
                    }).call(null)
                  }}
                </div>

              </div>

				    </div>

            <div class="p-2 my-3 font-normal text-base hyphens-auto">
              {{ reaction.text }}
            </div>
          
          <hr />

          </div>

        </div>
      </div>

  </div>

</template>