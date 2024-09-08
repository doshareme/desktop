<template>
    <div class="home overflow-clip select-none" >
        <header>
            <div class="h-auto hidden self-center object-center text-center content-center justify-center align-top">
                <progress class="progress w-56" value="100" max="100"></progress>
            </div>
            <nav class="flex flex-wrap m-2 p-4 justify-center">
                <div
                    className="h-19 hover:cursor-none select-none p-0.5 w-96 rounded-full flex bg-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-700"
                >
                    <div
                        className="h-18 hover:cursor-none  hover:text-gray-300 hover:font-thin  w-1/3 p-2 flex flex-wrap align-middle justify-center shadow-lg rounded-full bg-clip-padding bg-opacity-40 bg-black  border border-gray-600"
                        v-on:click="invoke('my_custom_command')"
                    >
                        Home
                    </div>
                    <div
                        className="h-18 focus:text-xl select-none hover:cursor-none hover:font-thin  hover:text-xl  w-1/3 p-2 flex flex-wrap align-middle justify-center rounded-full bg-clip-padding bg-opacity-40"
                        v-on:click="console.log(data)"
                    >
                     Settings
                    </div>
                    <div
                        className="h-18 focus:text-xl select-none hover:cursor-none hover:font-thin hover:text-xl w-1/3 p-2 flex flex-wrap align-middle justify-center rounded-full bg-clip-padding bg-opacity-40"
                    >
                        About
                    </div>
                </div>
            </nav>
        </header>

        <div>
         <div class=" m-3 p-2 justify-center">
            <div class="text-2xl font-bold text-center w-full m-5 py-2" > Welcome Back,<span class="bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-transparent cursor-pointer" onmouseenter="document.getElementById('accountswitch').classList.remove('hidden')" onmouseleave="document.getElementById('accountswitch').classList.add('hidden')" > Anna <button ref="accountswitch" id="accountswitch" onclick="document.getElementById('my_modal_2').showModal()" class="btn btn-circle btn-sm btn-outline hover:bg-gradient-to-t hover:from-white hover:from-35% hover:via-red-200 hover:to-indigo-100 hidden"><img src="https://img.icons8.com/?size=96&id=NEy7G0LIrhsc&format=png" class="w-4 h-4" alt="switch profile"></button></span>👋</div>
            <div class="w-full self-center object-center text-center content-center justify-center align-middle">
            <label class="input input-bordered inline-flex items-center w-full content-center max-w-xs">
            <input type="text" class="grow" placeholder="Search" />
            <kbd class="kbd kbd-sm text-gray-400">⌘/Ctrl</kbd>
            <kbd class="kbd kbd-sm text-gray-400">K</kbd>
            </label>
            <br/>
            <sub><a href="#" class="text-blue-500">I remember vaguely →_→</a></sub>
            </div>
            <div class="heading text-bold text-2xl py-4">Quick Actions</div>

            <div class="grid grid-cols-4 gap-4">
                <button class="max-w-48 button bg-gradient-to-tl from-sky-100 from-35% via-pink-200 to-purple-700 cursor-pointer text-gray-800 font-mono font-bold p-2 rounded-md  border-gray-700 border-1 border-solid animate-gradient-xy" ><span class="inline-flex items-center py-0.5"><img class="w-4 m-1 text-white" width="24" height="24" src="https://img.icons8.com/material-rounded/96/multiple-devices.png" alt="multiple-devices"/><span class="text-sm m-0.5">Sync Files</span></span></button>
                <button onload="document.getElementById('postcard').classList.remove('bg-gradient-to-tl')" id="postcard" class="hover:animate-gradient-x max-w-48 button bg-gradient-to-tl text-white from-sky-800 from-35% via-gray-500 to-yellow-800 cursor-pointer font-mono font-bold p-2 rounded-md  border-gray-700 border-1 border-solid"><span class="inline-flex items-center py-0.5"><img class="w-4 m-1 text-white" width="24" height="24" src="https://img.icons8.com/?size=100&id=22861&format=png&color=ffffff" alt="postcard"/><span class="text-sm m-0.5">Postcard</span></span></button>
                <button class="max-w-48 button bg-gradient-to-l from-neutral-600 from-35% via-orange-300 to-neutral-300 cursor-pointer font-mono font-bold p-2 rounded-md  border-gray-700 border-1 border-solid animate-gradient-x hover:animate-gradient-y"><span class="inline-flex items-center py-0.5"><img class="w-4 m-1 text-white" width="24" height="24" src="https://img.icons8.com/?size=100&id=6705&format=png&color=" alt="postcard"/><span class="text-sm m-0.5">Generate Space</span></span></button>
                <button class="max-w-48 button bg-gradient-to-tl text-black from-blue-300 from-35% via-rose-200 to-rose-100 cursor-pointer font-mono font-bold p-2 rounded-md  border-gray-700 border-1 border-solid animate-gradient-xy"><span class="inline-flex items-center py-0.5"><img class="w-4 m-1 text-white" width="24" height="24" src="https://img.icons8.com/?size=50&id=MFzs48bdCZzQ&format=png&color=" alt="postcard"/><span class="text-sm m-0.5">Send Feedback</span></span></button>
            </div>
            <div class="heading text-bold text-2xl py-4">Liked Files and Pages</div>
            <div class="grid grid-cols-4 gap-4">
                <div class="skeleton h-32 w-32"></div>
                <div class="skeleton h-32 w-32"></div>
                <div class="skeleton h-32 w-32"></div>
                <div class="skeleton h-32 w-32"></div>
            </div>
            <div class="heading text-bold text-2xl py-4">Previous Files</div>
            <div class="grid grid-cols-4 gap-4">
                <div class="skeleton h-32 w-32"></div>
                <div class="skeleton h-32 w-32"></div>
                <div class="skeleton h-32 w-32"></div>
                <div class="skeleton h-32 w-32"></div>
            </div>


         </div>
            
         </div>
         <!-- Modals -->
<dialog id="my_modal_2" class="modal modal-bottom sm:modal-middle select-none">
  <div class="modal-box">
    <h3 class="text-lg font-bold">My Account</h3>
    <p class="py-4">

<div class="flex items-center gap-4">
    <img class="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="">
    <div class="font-medium dark:text-white">
        <div>Jese Leos</div>
        <div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
    </div>
</div>

    </p>
    <h3 class="text-lg font-bold">Switch Accounts</h3>
    <span class="text-sm text-gray-500 dark:text-gray-400">Previously logged in to </span>
<div class="grid grid-flow-col grid-cols-3 space-x-2 m-2">

    <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 hover:cursor-pointer " src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Bordered avatar">
    <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 hover:cursor-pointer" src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" alt="Bordered avatar">
    <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 hover:cursor-pointer" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bordered avatar">
    <button class="text-black active:text-pretty select-none">New Account</button>
</div>

    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn btn-ghost ">Back</button>
      </form>
    </div>
  </div>
</dialog>


    </div>
</template>
<script setup>
// When using the Tauri API npm package:
import { invoke } from "@tauri-apps/api/tauri";
import { useFetch } from "nuxt/app";
const { data } = await useFetch("/api/index");
//---For Future Reference---
// When using the Tauri global script (if not using the npm package)
// Be sure to set `build.withGlobalTauri` in `tauri.conf.json` to true
// const invoke = window.__TAURI__.invoke;
// ------------------------

import { listen } from "@tauri-apps/api/event";

listen('tauri://file-drop', event => {
  console.log(event)
})

</script>
