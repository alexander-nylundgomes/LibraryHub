<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ArrowDownLeft from './icons/ArrowDownLeft.vue';
</script>

<template>
  <div class="content-wrapper h-screen w-screen">

    <header class="full-size border-b-2">
      <!-- <ArrowDownLeft></ArrowDownLeft> -->
    </header>

    <main class="">
      <RouterView />
    </main>

    
    <aside class="bg-primary">

    </aside>
    
  </div>
  <!-- <footer><h1>Footer</h1></footer> -->
</template>

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

