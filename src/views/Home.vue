<template>
	<div class="home-wrapper p-4">
		<h4 class="text-2xl mb-4">Available books to loan</h4>
		<LoanList :loans="loansStore.loans"/>
	</div>
</template>

<script lang="ts">
import BookList from '@/components/BookList.vue';
import LoanList from '@/components/LoanList.vue';
import type { Loan } from '@/interfaces/loan';
import { useLoanStore } from '@/store/loans';
import { mapStores } from 'pinia';

export default {
		data(){
			return {}
		},

		computed: {
			...mapStores(useLoanStore)
		},

		components: {
			BookList,
			LoanList
		}
	}
</script>