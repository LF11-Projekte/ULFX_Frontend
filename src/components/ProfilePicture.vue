<script setup lang="ts">
defineProps<{
	src: string;
}>();
</script>

<template>
	<div class="profile-picture rounded-full size-full" :style="`background-image: url(${src})`" />
</template>

<style lang="scss" scoped>
.profile-picture {
	background-position: center;
	background-size: cover;
}
</style>
