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
// window.addEventListener("contextmenu", async (e) =>{
//   e.preventDefault();
// }
// );
import { listen } from "@tauri-apps/api/event";
function download(uri, filename = uri) {
  return fetch(new Request(uri))
    .then(response => response.blob())
    .then(blob => {
      let objectURL = URL.createObjectURL(blob);
      let link = document.createElement("a");
      link.href = objectURL;
      link.download = filename.substr(filename.lastIndexOf('/') + 1); // no path
      link.click();
      URL.revokeObjectURL(objectURL);
    });
}
import { resolveResource } from "@tauri-apps/api/path";

// Listen to the event emitted when the first menu item is clicked
listen("item1clicked", (event) => {
    console.log("Item 1 clicked with payload:", event.payload);
    const API_BASE_URL = 'https://devtest.doshare.me'; // Adjust this to your backend URL
        const userId = authdata.data.user.id; // Sample user ID
        const file = event.payload;
        const filedata = data.value;
        for (let index = 0; index < filedata.length; index++) {
          const element = filedata[index];
          if(element.filename==file){
            var fileUrl = `${API_BASE_URL}/download/${element.file_id}?user_id=${userId}`;
            console.log(element.file_id);
            download(fileUrl, element.filename);
            document.getElementById('file-toast-bottom-left').classList.remove('hidden');
            setTimeout(function(){document.getElementById('file-toast-bottom-left').classList.add('hidden')},800)

            }
        }
});
listen("item2clicked", (event) => {
    console.log("Item 1 clicked with payload:", event.payload);
    const API_BASE_URL = 'https://devtest.doshare.me'; // Adjust this to your backend URL
        const userId = authdata.data.user.id; // Sample user ID
        const file = event.payload;
        const filedata = data.value;
        for (let index = 0; index < filedata.length; index++) {
          const element = filedata[index];
          if(element.filename==file){
            var fileUrl = `${API_BASE_URL}/download/${element.file_id}?user_id=${userId}`;
            console.log(element.file_id);
            navigator.clipboard.writeText(fileUrl);
            document.getElementById('clip-toast-bottom-left').classList.remove('hidden');
            setTimeout(function(){document.getElementById('clip-toast-bottom-left').classList.add('hidden')},800)

            }
        }
});
listen("item3clicked", (event) => {
    console.log("Item 1 clicked with payload:", event.payload);
    const API_BASE_URL = 'https://devtest.doshare.me'; // Adjust this to your backend URL
        const userId = authdata.data.user.id; // Sample user ID
        const file = event.payload;
        const filedata = data.value;
        for (let index = 0; index < filedata.length; index++) {
          const element = filedata[index];
          if(element.filename==file){
            var fileUrl = `${API_BASE_URL}/delete/${element.file_id}?user_id=${userId}`;
            console.log(element.file_id);
            $fetch(fileUrl, {
              method: 'DELETE'
            }).then(response => {
              console.log(response);
              window.location.reload();
            });

                 // window.location.reload();
            // download(fileUrl, element.filename);


            }
        }
});


window.addEventListener("contextmenu", async (e) =>{
  e.preventDefault();
}
);

listen('tauri://file-drop', event => {
  console.log(event)
})
const supabase = useSupabaseClient()
supabase.auth.getSession().then((session) => {
  if (!session) {
    navigateTo('/auth/login')
  }
})
const authdata = await supabase.auth.getUser()
console.log(authdata)
function sendFeedback() {
  console.log(document.getElementById('feedback').value)
  document.getElementById('my_modal_5').close()
  document.getElementById('feedback-sent').classList.remove('hidden');setTimeout(function(){document.getElementById('feedback-sent').classList.add('hidden')},1000);
  var feedbackForm = new FormData();
  feedbackForm.set("feedback", document.getElementById('feedback').value);
  $fetch(`${API_BASE_URL}/feedback`, {
    method: 'POST',
    body: document.getElementById('feedback').value,
  }).then((response) => {
    console.log(response)
    document.getElementById('feedback').value=""

  })
}
var recentFiles = {}
var recentFileList = ref([])
const API_BASE_URL = 'https://devtest.doshare.me'; // Adjust this to your backend URL
        const userId = authdata.data.user.id; // Sample user ID
const {recentdata,recerror}= useFetch(`${API_BASE_URL}/search?q=&user_id=${userId}`).then((data) => {
  console.log(data.data.value)

  for (let i = 0; i < data.data.value.length; i++) {
    console.log(new Date(data.data.value[i].upload_date)/1000)
    recentFiles[new Date(data.data.value[i].upload_date)/1000] = data.data.value[i].filename

  }
  recentFiles = Object.keys(recentFiles).sort().reverse().splice(0,4).map(key => recentFiles[key])
    console.log(recentFiles)
    for (let i = 0; i < recentFiles.length; i++) {
      recentFileList.value.push(recentFiles[i])
    }
    console.log(recentFileList.value)
  return data
});
if(recentdata!=null){
  console.log(recentdata.value);
}
window.$zoho=window.$zoho || {};$zoho.salesiq=$zoho.salesiq||{ready:function(){}}

</script>

<template>
    <div class="home overflow-clip select-none  ">
        <header>
            <div class="h-auto hidden self-center object-center text-center content-center justify-center align-top">
                <progress class="progress w-56" value="100" max="100"></progress>
            </div>
            <!-- <nav class="flex flex-wrap m-2 p-4 justify-center ">
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
                        v-on:click="navigateTo('/settings')"
                    >
                     Settings
                    </div>
                    <div
                        className="h-18 focus:text-xl select-none hover:cursor-none hover:font-thin hover:text-xl w-1/3 p-2 flex flex-wrap align-middle justify-center rounded-full bg-clip-padding bg-opacity-40"
                        v-on:click="navigateTo('/about')"
                        >
                        About
                    </div>
                </div>
            </nav> -->
        </header>
        <div id="toast-bottom-left" class=" ease-in-out fixed flex items-center w-full z-50 max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow bottom-5 left-5 dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800 hidden" role="alert">
    <div class="text-sm font-normal">Yay! You discovered an Upcoming Feature 🎉</div>
</div>
<div id="file-toast-bottom-left" class=" ease-in-out fixed flex items-center w-full z-50 max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow-2xl bottom-5 left-5 dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800 hidden" role="alert">
    <div class="text-sm font-normal">Multimedia folders roll out in the next update</div>
</div>
<div id="search-toast-bottom-left" class=" ease-in-out fixed flex items-center w-full z-50 max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow-2xl bottom-5 left-5 dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800 hidden" role="alert">
    <div class="text-sm font-normal">Search functionality will roll out in the next update</div>
</div>
<div id="feedback-sent" class=" ease-in-out fixed flex items-center w-full z-50 max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow bottom-5 left-5 dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800 hidden" role="alert">
    <div class="text-sm font-normal">Feedback Sent, we love you  💖</div>
</div>
        <div>
         <div class=" m-3 p-2 justify-center">
            <div class="text-2xl font-bold text-center w-full m-5 py-2" > How's it going, <span class="bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-transparent cursor-pointer" onmouseenter="document.getElementById('accountswitch').classList.remove('hidden')" onmouseleave="document.getElementById('accountswitch').classList.add('hidden')" > {{authdata.data.user.email.split("@",1)[0]}} <button ref="accountswitch" id="accountswitch" onclick="document.getElementById('my_modal_2').showModal()" class="btn btn-circle bg-gradient-to-b from-gray-600 to-transparent btn-sm btn-outline hover:bg-gradient-to-t hover:from-transparent hover:from-35% hover:via-red-200 hover:to-indigo-100 hidden"><img src="https://img.icons8.com/?size=96&id=NEy7G0LIrhsc&format=png&color=000000" class="w-4 h-4" alt="switch profile"></button></span>?👋</div>
            <div class="w-full self-center object-center text-center content-center justify-center align-middle">
            <label class="input input-bordered inline-flex items-center w-full content-center max-w-xs" onclick="document.getElementById('search-toast-bottom-left').classList.remove('hidden');setTimeout(function(){document.getElementById('search-toast-bottom-left').classList.add('hidden')},800)">
            <input type="text" class="grow" placeholder="Search" />
            <kbd class="kbd kbd-sm text-gray-400">⌘/Ctrl</kbd>
            <kbd class="kbd kbd-sm text-gray-400">K</kbd>
            </label>
            <br/>
            <!-- <sub><a href="#" class="text-blue-500">I remember vaguely →_→</a></sub> -->
            </div>
            <div class="heading text-bold text-2xl py-4 flex flex-row"> Quick Actions <img class="ml-2 h-6" src="https://img.icons8.com/led/32/aquarius.png" alt="popular-topic"/></div>

            <div class="grid grid-cols-4 gap-4">
                <button onclick="document.getElementById('toast-bottom-left').classList.remove('hidden');setTimeout(function(){document.getElementById('toast-bottom-left').classList.add('hidden')},800)"  onload="document.getElementById('postcard').classList.remove('bg-gradient-to-tl')" id="postcard" class="hover:animate-gradient-x max-w-48 button bg-gradient-to-tl text-white from-sky-800 from-35% via-gray-500 to-yellow-800 cursor-pointer font-mono font-bold p-2 rounded-md  border-gray-700 border-1 border-solid"><span class="inline-flex items-center py-0.5"><img class="w-4 m-1 text-white" width="24" height="24" src="https://img.icons8.com/?size=100&id=22861&format=png&color=ffffff" alt="postcard"/><span class="text-sm m-0.5">Postcard</span></span></button>
                <button onclick="document.getElementById('toast-bottom-left').classList.remove('hidden');setTimeout(function(){document.getElementById('toast-bottom-left').classList.add('hidden')},800)" class="max-w-48 button bg-gradient-to-tl from-sky-100 from-35% via-pink-200 to-purple-700 cursor-pointer text-gray-800 font-mono font-bold p-2 rounded-md  border-gray-700 border-1 border-solid animate-gradient-xy" ><span class="inline-flex items-center py-0.5"><img class="w-4 m-1 text-white" width="24" height="24" src="https://img.icons8.com/material-rounded/96/multiple-devices.png" alt="multiple-devices"/><span class="text-sm m-0.5">Sync Files</span></span></button>
                <button onclick="document.getElementById('toast-bottom-left').classList.remove('hidden');setTimeout(function(){document.getElementById('toast-bottom-left').classList.add('hidden')},800)"  class="max-w-48 button bg-gradient-to-l from-neutral-600 from-35% via-orange-400 to-neutral-300 cursor-pointer font-mono font-bold p-2 rounded-md  border-gray-700 border-1 border-solid animate-gradient-x hover:animate-gradient-y text-black"><span class="inline-flex items-center py-0.5"><img class="w-4 m-1 text-white" width="24" height="24" src="https://img.icons8.com/?size=100&id=6705&format=png&color=" alt="postcard"/><span class="text-sm m-0.5">Generate Space</span></span></button>
                <button onclick="my_modal_5.showModal()"  class="max-w-48 button bg-gradient-to-tl text-black from-blue-300 from-35% via-rose-200 to-rose-100 cursor-pointer font-mono font-bold p-2 rounded-md  border-gray-700 border-1 border-solid animate-gradient-xy"><span class="inline-flex items-center py-0.5"><img class="w-4 m-1 text-white" width="24" height="24" src="https://img.icons8.com/?size=50&id=MFzs48bdCZzQ&format=png&color=" alt="postcard"/><span class="text-sm m-0.5">Send Feedback</span></span></button>
            </div>
            <div class="heading text-bold text-2xl py-4 flex flex-row"> Wizard Actions <img class="ml-2 h-6" src="https://img.icons8.com/led/32/aquarius.png" alt="popular-topic"/></div>

<div class="grid grid-cols-4 gap-4">
    <a href="/explore"><button  class="card card-body hover:bg-[#dfe3e7]"><img class="h-8" src="https://img.icons8.com/fluency-systems-filled/50/user-folder.png" alt="user-folder"/><span class="inline-flex items-center py-0.5"><span class="text-sm m-0.5">Go to Wizard</span></span></button></a>
    <button onclick="document.getElementById('file-toast-bottom-left').classList.remove('hidden');setTimeout(function(){document.getElementById('file-toast-bottom-left').classList.add('hidden')},800)" class="card card-body hover:bg-[#dfe3e7]"><img class="h-8" src="https://img.icons8.com/fluency-systems-filled/50/user-folder.png" alt="user-folder"/><span class="inline-flex items-center py-0.5"><span class="text-sm m-0.5">Documents</span></span></button>
    <button onclick="document.getElementById('file-toast-bottom-left').classList.remove('hidden');setTimeout(function(){document.getElementById('file-toast-bottom-left').classList.add('hidden')},800)" class="card card-body hover:bg-[#dfe3e7]"><img class="h-8" src="https://img.icons8.com/fluency-systems-filled/50/user-folder.png" alt="user-folder"/><span class="inline-flex items-center py-0.5"><span class="text-sm m-0.5">Pictures</span></span></button>
    <button onclick="document.getElementById('file-toast-bottom-left').classList.remove('hidden');setTimeout(function(){document.getElementById('file-toast-bottom-left').classList.add('hidden')},800)" class="card card-body hover:bg-[#dfe3e7]"><img class="h-8" src="https://img.icons8.com/fluency-systems-filled/50/user-folder.png" alt="user-folder"/><span class="inline-flex items-center py-0.5"><span class="text-sm m-0.5">Videos</span></span></button>

</div>
            <div class="collapse collapse-arrow">
  <input type="radio" name="my-accordion-2" />
  
  <div  class="collapse-title heading text-bold text-2xl py-4 flex flex-row"><img class="mr-2 h-8" src="https://img.icons8.com/led/32/galaxy.png" alt="add-to-favorites"/>Liked Files and Pages</div>
  <div class="collapse-content">
    <div class="sm:flex sm:flex-col md:grid md:grid-cols-4 md:gap-4 ">
                <!-- <div class="skeleton h-32 w-full md:w-32 m-2"></div>
                <div class="skeleton h-32 w-full md:w-32 m-2"></div>
                <div class="skeleton h-32 w-full md:w-32 m-2"></div>
                <div class="skeleton h-32 w-full md:w-32 m-2"></div> -->
            </div>
      </div>
<div class="collapse collapse-arrow ">
  <input type="radio" name="my-accordion-2" />
  <div class="collapse-title heading text-bold text-2xl py-4 flex flex-row"><img class="mr-2 h-8 bg-base-500"  src="https://img.icons8.com/led/32/replay.png" alt="replay"/>Recent Files</div>
  <div class="collapse-content">
    <div class="sm:flex sm:flex-col md:grid md:grid-cols-4 md:gap-4 " >
               <div v-for="file in recentFileList" class="card h-32 w-full md:w-32 m-2 hover:bg-blue-200 active:bg-blue-200 after:bg-blue-200 tooltip tooltip-right cursor-pointer rounded-md" :data-tip="file">
                <span v-on:contextmenu="async (e) => {
    e.preventDefault();
    const iconUrl = await resolveResource('assets/16x16.png');

    // Show the context menu
    invoke('plugin:context_menu|show_context_menu', {
        items: [
            {
                label: 'Download File',
                event: 'item1clicked',
                payload:file
            },
            {
                label: 'Share File',
                event: 'item2clicked',
                payload:file

            },
            {
                is_separator: true,
            },
            {
                label: 'Delete File',
                event: 'item3clicked',
                payload:file

            },
        ],
    });
}">
                                  <img class="w-32 h-32" src="https://img.icons8.com/3d-fluency/94/document.png" alt="user-folder"/>
                                  <div class="text-sm font-medium overflow-y-hidden"> {{file}} </div>
                                  </span>
                               
               </div>
            </div>
          </div>
</div>
            </div>
<!-- <div class="collapse collapse-arrow ">
  <input type="radio" name="my-accordion-2" />
  <div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
  <div class="collapse-content">
    <p>hello</p>
  </div>
</div> -->
            <!-- <div class="">Liked Files and Pages<span><a href="/explore" class="link text-sm m-3">View all files</a></span></div>
            
            <div class="heading text-bold text-2xl py-4">Previous Files</div>
            <div class="grid grid-cols-4 gap-4">
                <div class="skeleton h-32 w-32"></div>
                <div class="skeleton h-32 w-32"></div>
                <div class="skeleton h-32 w-32"></div>
                <div class="skeleton h-32 w-32"></div>
            </div> -->


         </div>
            
         </div>
         
         <!-- Modals -->
<dialog id="my_modal_2" class="modal modal-bottom sm:modal-middle select-none">
  <div class="modal-box">
    <h3 class="text-lg font-bold">My Account</h3>
    <p class="py-4">

<div class="flex items-center gap-4 w-full cursor-pointer rounded-md hover:bg-gray-200 p-4" onmouseenter="document.getElementById('accemail').classList.remove('hidden')" onmouseleave="document.getElementById('accemail').classList+=' hidden'">
    <img class="w-10 h-10 rounded-full" src="https://img.icons8.com/3d-fluency/94/person-male--v5.png" alt="">
    <div class="font-medium dark:text-white" >
        <div > {{authdata.data.user.email.split("@",1)[0]}} </div>
        <div id="accemail" class="text-sm text-gray-400 hidden"> {{authdata.data.user.email}} </div>
        <div class="text-sm text-gray-500 dark:text-gray-400">Joined in {{ new Date(authdata.data.user.created_at).getFullYear() }}</div>
    </div>
</div>
<dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Send Feedback 📪</h3>
    <p class="py-4">Found an Error or a Want to Suggest a Feature?<br/> We're listening 🦻</p>
    
<textarea id="feedback"
  placeholder="So, what's happening?"
  class="textarea textarea-bordered textarea-lg w-full max-w-xs"></textarea>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button @click="sendFeedback" class="btn" >Send</button>
      </form>
    </div>
  </div>
</dialog>

    </p>
    <!-- <h3 class="text-lg font-bold">Switch Accounts</h3> -->
    <!-- <span class="text-sm text-gray-500 dark:text-gray-400">Previously logged in to </span> -->
<div class="grid grid-flow-col grid-cols-3 space-x-2 m-2">
    <!-- <div class="tooltip tooltip-bottom p-4 m-1  " data-tip="Test User" >
    <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 hover:cursor-pointer" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Bordered avatar"> 
</div>
<div class="tooltip tooltip-bottom " data-tip="Test User" >
    <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 hover:cursor-pointer tooltip" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Bordered avatar">
</div>
<div class="tooltip tooltip-bottom p-4 m-2" data-tip="Test User" >
    <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 hover:cursor-pointer tooltip" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bordered avatar">
    
</div>
<div class="tooltip tooltip-bottom fixed pt-16 mt-8" data-tip="Test User" >
    <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 hover:cursor-pointer tooltip" src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" alt="Bordered avatar">
</div>
<div class="tooltip tooltip-bottom pt-16 mt-8 mr-30 float-right right-12 " data-tip="Test User 2" >
    <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 hover:cursor-pointer tooltip" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Bordered avatar">
</div>
<div class="tooltip tooltip-bottom pt-32 mr-4 mt-6 float-right right-44" data-tip="Test User 2" >
    <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 hover:cursor-pointer tooltip" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Bordered avatar">
</div> -->
    <a href="/auth/signup"><button class="text-black active:text-pretty select-none"> Switch Account</button></a>
</div>

    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn btn-ghost ">Back</button>
      </form>
    </div>
  </div>
</dialog>

<button title="Contact Sale"
        class="fixed z-90 bottom-10 right-8 bg-white text-blue-600 w-8 h-8 rounded-full drop-shadow-lg flex justify-center items-center  text-4xl hover:bg-blue-700 hover:text-white hover:drop-shadow-2xl tooltip" data-tip="Help Me!" @click="useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content: 'Home Page'
    }
  ],
  script: [
    {
      src: 'https://salesiq.zohopublic.in/widget?wc=siq58e90d154015249a051f5b9038655b80c04c4cb53f21e36475e34f62c68ebe5b',
      id:'zsiqscript'
    }
  ]
});" >i</button>
    
    </div>
</template>
