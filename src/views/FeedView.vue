<script setup lang="ts">
import PostTile from "@/components/PostTile.vue";
</script>

<template>
	<div class="h-32" />
	<div class="sticky-nav-group w-full bg-neutral-600 flex">
    <RouterLink class="h-full px-5 py-3 hover:bg-neutral-500" to="/">Neuste Beiträge</RouterLink>
    <RouterLink class="h-full px-5 py-3 hover:bg-neutral-500" to="/">Beiträge von gefolgten Nutzern</RouterLink>
    <RouterLink class="h-full px-5 py-3 hover:bg-neutral-500" to="/">Frequente Beiträge</RouterLink>
  </div>
	<div class="mt-0 mb-10 h-fit p-4 w-full min-h-fit bg-neutral-600 shadow-md bg-opacity-80">
		<div class="feed-grid gap-7">
			<PostTile
				v-for="n in 10"
				:post="{
					id: '0',
					title: 'Hallo Welt',
					content: 'Hier steht der Posttext drin',
					previewPicture: 'https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg',
					previewText:
						'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
					user: {
						id: 0,
						displayName: 'Testnutzer',
						email: 'test@testnutzer.com',
						profilePictureUrl: '/defaultProfile-01.jpg'
					}
				}"
			/>
			<PostTile
				:post="{
					id: '0',
					title: 'Hallo Welt',
					content: 'Hier steht der Posttext drin',
					previewPicture:
						'https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg.webp',
					previewText:
						'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
					user: {
						id: 0,
						displayName: 'Testnutzer',
						email: 'test@testnutzer.com',
						profilePictureUrl: '/defaultProfile-01.jpg'
					}
				}"
			/>
			<PostTile
				:post="{
					id: '0',
					title: 'Hallo Welt',
					content: 'Hier steht der Posttext drin',
					previewPicture: 'https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg',
					previewText:
						'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
					user: {
						id: 0,
						displayName: 'Testnutzer',
						email: 'test@testnutzer.com',
						profilePictureUrl: '/defaultProfile-01.jpg'
					}
				}"
			/>
			<PostTile
				:post="{
					id: '0',
					title: 'Hallo Welt',
					content: 'Hier steht der Posttext drin',
					previewPicture: 'https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg',
					previewText:
						'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
					user: {
						id: 0,
						displayName: 'Testnutzer',
						email: 'test@testnutzer.com',
						profilePictureUrl: '/defaultProfile-01.jpg'
					}
				}"
			/>
		</div>
	</div>
	<div class="h-10 -mb-10" />
</template>

<style lang="scss" scoped>
.feed-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(min(26rem, 100%), 1fr));
}

.sticky-nav-group {
	position: -webkit-sticky;
	position: sticky;
	top: 0;
}
</style>
