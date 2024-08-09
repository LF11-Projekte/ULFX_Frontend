<script lang="ts" setup>
import ProfilePicture from './ProfilePicture.vue';
import type { IComment } from "@/stores/PostStore";

defineProps<{
    comment: IComment
}>();

</script>

<template>
    <div class="h-fit w-full">
        <hr class="mt-1 mb-1" />
        <div class="w-full h-5 flex">
            <ProfilePicture class="h-5" :src="`${comment.user.profilePictureUrl}`" />
            <div class="flex-col">
                <div class="font-semibold text-lg">{{ comment.user.displayName }}</div>
                <div>{{ comment.postDate.toISOString() }}</div>
            </div>
        </div>
        <div class="flex">
            <a class="ml-0 pl-1">{{ comment.answers?.length() ?? 0 }} Antworten</a>
            <a class="mr-0 pr-1">Antwort schreiben</a>
        </div>
        
    </div>
</template>

