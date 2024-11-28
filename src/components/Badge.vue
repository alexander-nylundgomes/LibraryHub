<template>
	<!-- <div></div> -->
	<p 
		class="text-xs rounded-full px-2 py-1"
		:class="{
			'text-danger bg-danger/25': status == PillStatus.DANGER,
			'text-warning bg-warning/25': status == PillStatus.WARNING
		}"
	>{{ text }}</p>
</template>

<script lang="ts">
import { PillStatus } from '@/enums/pill-status';


	export default {

		data(){
			return {
				PillStatus
			}
		},

		props: ["text", "status"]
	}
</script>