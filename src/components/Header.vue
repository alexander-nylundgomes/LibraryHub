<template>
	<header class="p-4">
		<input type="text" id="first_name" v-on:keyup.enter="search" v-model="searchString" class="w-6/12 bg-gray-100 border border-gray-300 text-gray-900 text-sm transition rounded-lg hover:border-blue-500  p-2.5" placeholder="Search for books..." required />
	</header>
</template>

<script lang="ts">
import router from '@/router';
import { useUserStore } from '@/store/users';
import { mapStores } from 'pinia';

	export default {
		data(){
			return {
				searchString: ""
			}
		},

		methods: {
			search(){
				router.push({ name: 'search', params: { query: this.searchString } });
			}
		},

		computed: {
			...mapStores(useUserStore)
		}
	}
</script>