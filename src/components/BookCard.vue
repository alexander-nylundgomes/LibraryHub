<template>
	<div class="card w-72 rounded p-3 shadow-md border hover:shadow-sm hover:border-blue-500 transition cursor-pointer" @click="goToBook()">
		
		<div class="cover w-full aspect-square flex align-center justify-center p-2 bg-slate-100">
			<img class="w-100 h-100 border border-slate-200 shadow-md" :src="book.src" alt="">
		</div>
		
		<div class="lower-section flex justify-between items-center mt-3">
			<div class="author">
				<h1 class="text-xl">{{ book.title }}</h1>
				<p class="text-sm text-secondary">By {{ book.author }}</p>
			</div>

			<!-- Improve loan functionality, then add this badge -->
			<!-- <Badge :text="loanStatusInformation.text" :status="loanStatusInformation.status"/> -->
		</div>
	</div>
</template>

<script lang="ts">
import { PillStatus } from '@/enums/pill-status';
import Badge from './Badge.vue';
import router from '@/router';

	export default {
		props: ["book", "loanExpiration"],

		data(){
			return {
				loanStatusInformation: {text: "", status: null} as {text: string, status: PillStatus | null}
			}
		},

		methods: {
			goToBook(){
				router.push({ name: 'book', params: { id: this.book.id } })
			}
		},

		mounted(){
			if(this.loanExpiration < new Date().getTime()){
				this.loanStatusInformation = {
					text: "Expired",
					status: PillStatus.DANGER
				}
			}else{
				this.loanStatusInformation = {
					text: "Pending",
					status: PillStatus.WARNING
				}
			}
		},

		components: {
			Badge
		}
	}
</script>