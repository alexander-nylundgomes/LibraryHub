<template>
	<aside class="bg-primary size-full p-4 flex flex-col">

		<h2 class="text-3xl font-medium text-white cursor-pointer" @click="goHome">LibraryHub</h2>

		<div class="avatar flex items-center gap-3 border-t pt-4 mt-auto w-full">
			<img class="rounded-full size-10 border" :src="'/images/users/' + usersStore.activeUser?.id + '/avatar.jpg'" alt="">
			<p class="text-white text-xl">{{ usersStore.activeUser?.firstName }} {{ usersStore.activeUser?.lastName }}</p>
		</div>
	</aside>
</template>

<script lang="ts">
import router from '@/router';
import { useUserStore } from '@/store/users';
import { mapStores } from 'pinia';

	export default {
		data(){
			return {

			}
		},

		methods: {
			goHome(){
				router.push({name: "home"})
			}
		},

		computed: {
			...mapStores(useUserStore)
		}
	}
</script>