<template>
	<button @click="count++">{{ count }}</button>
</template>

<script lang="ts">
	export default {
		data(){
			return {
				count: 0
			}
		}


	}
</script>