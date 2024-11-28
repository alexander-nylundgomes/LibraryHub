<template>
	<div class="book-wrapper p-4 flex">
		<img class="w-52 border-slate-200" :src="book?.src" alt="">
		<div class="book-information p-4">
			<h2 class="text-4xl font-medium">{{ book?.title }}</h2>
			<p class="text-xl text-secondary mb-4">By {{ book?.author }}</p>

			<p class="w-8/12">{{ book?.description }}</p>
		</div>
	</div>
</template>

<script lang="ts">
import { useBookStore } from '@/store/books';
import { mapStores } from 'pinia';

	export default {
		data(){
			return {
				bookId: null as number | null,
			}
		},

		computed: {
			...mapStores(useBookStore),
			book(){
				return this.bookStore.getBook( Number(this.$route.params.id))
			}
		}
	}
</script>