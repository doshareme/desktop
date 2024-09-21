<script setup lang="ts">
function nextSlide() {
    console.log('Next Slide')
    navigateTo('/onboard/3')
    
}
function lastSlide() {
    console.log('Next Slide')
    navigateTo('/onboard/1')
    
}
</script>
<template>
    <h1 class="text-center text-4xl m-4">Hi👋, Welcome to Personal Cloud</h1>

<div class="text-center m-4 h-full overflow-hidden self-center items-center">
<img class="cursor-pointer h-80 m-auto items-center self-center margin-auto" src="https://cdn.recorder.betaco.tech/Slide%204_3%20-%202%20(1).png" alt="">
<h1 class=" text-2xl m-4">Find and browse everything in Wizard</h1>
<span class=" text-sm"></span><br/>
<button @click="lastSlide" class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Back
</span>
</button>
<button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span @click="nextSlide" class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Next</span>
</button>
</div>
</template>