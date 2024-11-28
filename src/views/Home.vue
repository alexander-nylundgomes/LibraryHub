<template>
	<div class="home-wrapper p-4">
		<h4 class="text-4xl mb-4">Your loans</h4>
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
			return {
				loans: [] as Loan[]
			}
		},

		computed: {
			...mapStores(useLoanStore)
		},

		beforeMount(){
			this.loansStore.fetchLoans();
		},

		components: {
			BookList,
			LoanList
		}
	}
</script>