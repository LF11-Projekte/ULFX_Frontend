<script setup lang="ts">
import TopNavbar from '@/components/TopNavbar.vue'
</script>

<template>
  <main>
    <TopNavbar :user-view="false" />
    <div class="size-full flex justify-center">
      <div class="container m-auto h-4/5 min-h-fit p-10 rounded-3xl bg-neutral-700 text-xl text-center">
        <div class="size-full">
          <p class="text-3xl font-semibold p-8"> Herzlich Willkommen bei ULFX! &#128075; </p>
          <p class="p-3"> Deine Anmeldung erfolgt über das SKA (Schulkontoauthentifizierungsmodul) mit deinem Schulzugangsdaten. </p>
          <p class="p-3">
            Mit deiner Anmeldung bestätigst du, die <a>Datenschutzerklärung</a> gelesen zu haben und <b>stimmst dieser in ihrer aktueller Fassung zu.</b>
          </p>
          <p class="p-3 mb-10">
            Bitte klicke auf "LogIn" und melde dich an.
          </p>
          <div class="flex items-center justify-center text-neutral-700 font-medium">
            <div id="LogInView-SKA" class="text-neutral-700 bg-cyan-500 hover:bg-cyan-600 cursor-pointer rounded-l-md mr-0.5 mb-2 py-1 px-2">
              SKA
            </div>
            <div id="LogInView-LogIn" class="text-neutral-700 bg-cyan-500 hover:bg-cyan-600 cursor-pointer rounded-r-md mb-2 py-1 px-12">
              LogIn
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>