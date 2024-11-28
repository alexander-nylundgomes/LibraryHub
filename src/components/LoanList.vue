<template>
	<div class="loan-list-wrapper p-4 flex gap-4">
		<BookCard 
			v-for="(loan, index) in loans" 
			:key="index"
			:book="loan.book"
			:loan-expiration="loan.expirationDate"
		/>
	</div>
</template>

<script lang="ts">
import BookCard from './BookCard.vue';
export default {
		props: ["loans"],

		data(){
			return {}
		},

		components: {
			BookCard
		}
	}
</script>