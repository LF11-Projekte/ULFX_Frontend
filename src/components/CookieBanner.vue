<script setup lang="ts">
import { useUiBehaviourStore } from "@/stores/UiBehaviourStore";

const store = useUiBehaviourStore();
const renderBanner = () => store.confirmCookiesVisible;
const confirm = store.confirmCookies;
</script>

<template>
	<div v-if="renderBanner()" class="absolute left-0 right-0 w-screen h-screen backdrop-blur-[2px] flex">
		<div class="w-[40rem] h-fit] mx-auto my-auto bg-neutral-600 rounded-2xl p-5">
			<div class="p-2 text-2xl">Cookies und Datenschutzerklärung &#x1F36A;</div>
			<p class="p-2 text-justify">
				Um die Funktionalität unserer Website sicher stellen zu können, nutzen wir Cookies. Es werden keine
				Daten außerhalb gesetzlicher Rahmen Drittanbieter weitergegeben. Genaueres lässt sich aus unserer
				<a>Datenschutzerklärung</a> entnehmen Bitte bestätige, dass du damit einverstanden bist und du unser
				<a>Datenschutzerklärung</a>
				in ihrer aktueller Fassung gelesen hast und dieser zustimmst, indem du auf "Akzeptieren und Fortfahren"
				klickst.
			</p>

			<button
				@click="confirm"
				class="flex bg-neutral-100 text-neutral-600 py-2.5 px-4 rounded-md cursor-pointer ml-auto mr-0 font-semibold hover:bg-white"
			>
				Akzeptieren und Fortfahren
			</button>
		</div>
	</div>
</template>
