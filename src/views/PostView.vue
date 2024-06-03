<script setup lang="ts">
import { usePostStore } from '@/stores/PostStore'
import router from '@/router'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'


// $route.params.id

const postId = parseInt(useRoute().params.id as string);
const postStore = usePostStore;


</script>


<template>
  <div class="">
    ABC
  </div>
</template>