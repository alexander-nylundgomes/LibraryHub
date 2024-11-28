<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ArrowDownLeft from './icons/ArrowDownLeft.vue';
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';
</script>

<template>
  <div class="content-wrapper h-screen w-screen">


    <Header class="full-size border-b-2" style="grid-area: header;" />

    <main class="">
      <RouterView />
    </main>

    <Menu style="grid-area: aside;" />

    
  </div>
  <!-- <footer><h1>Footer</h1></footer> -->
</template>

<script lang="ts">
  export default {
		data(){
			return {
				
			}
		},

		components: {
			Header,
      Menu
		}
	}
</script>

<style lang="scss" scoped>
  .content-wrapper{
    display: grid;
    grid-template-columns: 20% minmax(0,1fr);
    grid-template-rows: 75px minmax(0,1fr);
    grid-template-areas: 
    "aside header"
    "aside content"
    ;

    header{grid-area: header;}
    aside{grid-area: aside;}
    main{grid-area: content;}
  }
</style>

