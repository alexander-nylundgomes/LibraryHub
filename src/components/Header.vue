<template>
	<header class="p-4">
		<input type="text" id="first_name" class="w-6/12 bg-gray-100 border border-gray-300 text-gray-900 text-sm transition rounded-lg hover:border-blue-500  p-2.5" placeholder="Search for books..." required />
	</header>
</template>

<script lang="ts">
import { useUserStore } from '@/store/users';
import { mapStores } from 'pinia';

	export default {
		data(){
			return {

			}
		},

		computed: {
			...mapStores(useUserStore)
		}
	}
</script>