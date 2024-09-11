<template>
    <div class="home overflow-clip select-none">
        <header>
            <div class="h-auto hidden self-center object-center text-center content-center justify-center align-top">
                <progress class="progress w-56" value="100" max="100"></progress>
            </div>
            <nav class="flex flex-wrap m-2 p-4 justify-center">
                <div
                    className="h-19 hover:cursor-none select-none p-0.5 w-96 rounded-full flex bg-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-700"
                >
                    <div
                    className="h-18 focus:text-xl select-none hover:cursor-none hover:font-thin hover:text-xl w-1/3 p-2 flex flex-wrap align-middle justify-center rounded-full bg-clip-padding bg-opacity-40"

                        v-on:click="navigateTo('/')"
                        >
                        Home
                    </div>
                    <div
                        className="h-18 focus:text-xl select-none hover:cursor-none hover:font-thin  hover:text-xl  w-1/3 p-2 flex flex-wrap align-middle justify-center rounded-full bg-clip-padding bg-opacity-40"
                        
                        v-on:click="navigateTo('/settings')"
                    >
                     Settings
                    </div>
                    <div
                        className="h-18 hover:cursor-none  hover:text-gray-300 hover:font-thin  w-1/3 p-2 flex flex-wrap align-middle justify-center shadow-lg rounded-full bg-clip-padding bg-opacity-40 bg-black  border border-gray-600"

                        v-on:click="navigateTo('/about')"
                        >
                        About
                    </div>
                </div>
            </nav>
        </header>
        </div>
</template>