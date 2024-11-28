<template>
	<div class="search-wrapper p-4">
		<h1 class="text-2xl mb-4">Search result</h1>
		<BookList :books="books" v-if="books.length > 0"/>
		<p v-else>No books matched that query</p>
	</div>
</template>

<script lang="ts">
import BookList from '@/components/BookList.vue';
import type { Book } from '@/interfaces/book';
import router from '@/router';
import { useBookStore } from '@/store/books';
import { mapStores } from 'pinia';

	export default {
		data(){
			return {
			}
		},

		computed: {
			...mapStores(useBookStore),
			books(){
				return this.bookStore.searchBooks(this.$route.params.query as string)
			}
		},

		components: {
			BookList
		}
	}
</script>