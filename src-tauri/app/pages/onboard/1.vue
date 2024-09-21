<script setup lang="ts">
function nextSlide() {
    console.log('Next Slide')
    navigateTo('/onboard/2')
    
}
</script>
<template>
    <h1 class="text-center text-4xl m-4">Hi👋, Welcome to Personal Cloud</h1>

<div class="text-center m-4 h-full overflow-hidden self-center items-center">
<img class="cursor-pointer h-80 m-auto items-center self-center margin-auto" src="https://cdn.recorder.betaco.tech/Slide%204_3%20-%201%20(1).png" alt="">
<h1 class=" text-2xl m-4">✏️Write to us,'cause we listen 🦻</h1>
<!-- <span class=" text-xl p-2">Send us whatever you think could improve, and we will try to get it here.</span><br/> -->

<!-- <span class=" text-sm m-4">Unlike big tech like Google, Microsoft and Apple</span><br/> -->
<button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span @click="nextSlide" class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Next</span>
</button>
</div>
</template>