<script setup lang="ts">
import ProfilePicture from '@/components/ProfilePicture.vue'
</script>

<template>

  <div class="flex w-full p-5">
    <div class="size-28">
      <ProfilePicture src="/defaultProfile-03.jpg"  />
    </div>
    <div class="pl-4">
      <div class="my-auto font-semibold text-3xl">Benutzername</div>
      <hr class="my-2"/>
      <div class="mt-0 overflow-y-hidden text-lg">Nutzerbeschreibung</div>
    </div>


  </div>

</template>
