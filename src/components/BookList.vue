<template>
	<div class="book-list-wrapper flex gap-4">
		<BookCard :book="books[0]" />
		<BookCard :book="books[1]"/>
	</div>
</template>

<script lang="ts">
import { LoanStatus } from '@/enums/loan-status';
import BookCard from './BookCard.vue';
import type { Loan } from '@/interfaces/loan';

	export default {
		props: ["books"],

		data(){
			return {

			}
		},

		components: {
			BookCard
		}
	}
</script>