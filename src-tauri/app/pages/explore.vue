<style>
@import url("https://fonts.googleapis.com/css2?family=SUSE:wght@100..800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=SUSE:wght@100..800&display=swap");
.suse-400 {
    font-family: "SUSE", sans-serif;
    font-weight: 400;
    font-family: "SUSE", sans-serif;
    font-weight: 400;
}
</style>
<script setup>
import { invoke } from "@tauri-apps/api";
import { listen } from "@tauri-apps/api/event";
import { resolveResource } from "@tauri-apps/api/path";

console.log(authdata);
const supabase = useSupabaseClient();
var authdata = await supabase.auth.getUser();
// MacOS,Linux only Code
if ((authdata.error.name = "AuthSessionMissingError")) {
    authdata = await supabase.auth.signInWithPassword({
        email: localStorage.getItem("app-email"),
        password: localStorage.getItem("app-password"),
    });
}
console.log(authdata);
function download(uri, filename = uri) {
    return fetch(new Request(uri))
        .then((response) => response.blob())
        .then((blob) => {
            let objectURL = URL.createObjectURL(blob);
            let link = document.createElement("a");
            link.href = objectURL;
            link.download = filename.substr(filename.lastIndexOf("/") + 1); // no path
            link.click();
            URL.revokeObjectURL(objectURL);
        });
}

// Listen to the event emitted when the first menu item is clicked
listen("item1clicked", (event) => {
    console.log("Item 1 clicked with payload:", event.payload);
    const API_BASE_URL = "https://mycloud.doshare.me"; // Adjust this to your backend URL
    const userId = authdata.data.user.id; // Sample user ID
    const file = event.payload;
    const filedata = data.value;
    for (let index = 0; index < filedata.length; index++) {
        const element = filedata[index];
        if (element.filename == file) {
            const API_BASE_URL = "https://mycloud.doshare.me"; // Adjust this to your backend URL
            const userId = authdata.data.user.id; // Sample user ID
            const file = event.payload;
            const filedata = data.value;
            for (let index = 0; index < filedata.length; index++) {
                const element = filedata[index];
                if (element.filename == file) {
                    var fileUrl = `${API_BASE_URL}/download/${element.file_id}?user_id=${userId}`;
                    console.log(element.file_id);
                    download(fileUrl, element.filename);
                    document
                        .getElementById("file-toast-bottom-right")
                        .classList.remove("hidden");
                    setTimeout(function () {
                        document
                            .getElementById("file-toast-bottom-right")
                            .classList.add("hidden");
                    }, 800);
                }
            }
            document
                .getElementById("file-toast-bottom-left")
                .classList.remove("hidden");
            setTimeout(function () {
                document
                    .getElementById("file-toast-bottom-right")
                    .classList.add("hidden");
            }, 800);
        }
    }
});
listen("item2clicked", (event) => {
    console.log("Item 1 clicked with payload:", event.payload);
    const API_BASE_URL = "https://mycloud.doshare.me"; // Adjust this to your backend URL
    const userId = authdata.data.user.id; // Sample user ID
    const file = event.payload;
    const filedata = data.value;

    for (let index = 0; index < filedata.length; index++) {
        const element = filedata[index];
        if (element.filename == file) {
            var fileUrl = `${API_BASE_URL}/download/${element.file_id}?user_id=${userId}`;
            console.log(element.file_id);
            navigator.clipboard.writeText(fileUrl);
            document
                .getElementById("clip-toast-bottom-left")
                .classList.remove("hidden");
            setTimeout(function () {
                document
                    .getElementById("clip-toast-bottom-left")
                    .classList.add("hidden");
            }, 800);
        }
    }
});
listen("item3clicked", (event) => {
    console.log("Item 1 clicked with payload:", event.payload);
    const API_BASE_URL = "https://mycloud.doshare.me"; // Adjust this to your backend URL
    const userId = authdata.data.user.id; // Sample user ID
    const file = event.payload;
    const filedata = data.value;
    for (let index = 0; index < filedata.length; index++) {
        const element = filedata[index];
        if (element.filename == file) {
            const API_BASE_URL = "https://mycloud.doshare.me"; // Adjust this to your backend URL
            const userId = authdata.data.user.id; // Sample user ID
            const file = event.payload;
            const filedata = data.value;
            for (let index = 0; index < filedata.length; index++) {
                const element = filedata[index];
                if (element.filename == file) {
                    var fileUrl = `${API_BASE_URL}/delete/${element.file_id}?user_id=${userId}`;
                    console.log(element.file_id);
                    $fetch(fileUrl, {
                        method: "DELETE",
                    }).then((response) => {
                        console.log(response);
                        window.location.reload();
                    });

                    // window.location.reload();
                    // window.location.reload();
                    // download(fileUrl, element.filename);
                }
            }
        }
    }
});

window.addEventListener("contextmenu", async (e) => {
    e.preventDefault();
});

// window.addEventListener("contextmenu", async (e) => {
//     e.preventDefault();
//     const iconUrl = await resolveResource('assets/16x16.png');

//     // Show the context menu
//     invoke("plugin:context_menu|show_context_menu", {
//         items: [
//             {
//                 label: "Download File",
//                 disabled: false,
//                 event: "item1clicked",
//                 payload: "Hello World!",

//                 // subitems: [
//                 //     {
//                 //         label: "Subitem 1",
//                 //         disabled: true,
//                 //         event: "subitem1clicked",
//                 //     },
//                 //     {
//                 //         is_separator: true,
//                 //     },
//                 //     {
//                 //         label: "Subitem 2",
//                 //         disabled: false,
//                 //         checked: true,
//                 //         event: "subitem2clicked",
//                 //     }
//                 // ]
//             },
//             {
//                 label: "Share File",
//                 disabled: false,
//                 event: "item2clicked",
//             },
//             {
//                 is_separator: true,
//             },
//             {
//                 label: "Delete File",
//                 disabled: true,
//                 event: "item3clicked",
//             },
//         ],
//     });
// });
let img = new Image();
img.src = "https://go.doshare.me/6cbd/squid.jpg";
function clickHandler() {
    console.log("Clicked");
    document.addEventListener("keydown", function (event) {
        console.log("Key pressed:", event.key);
    });
}

function dragstartHandler(ev) {
    // Add the target element's id to the data transfer object
    // ev.dataTransfer.setData("text/plain", ev.target.id);
    ev.dataTransfer.setDragImage(img, 10, 10);
    ev.dataTransfer.setData("jpeg/image", img.src);
}

function dragoverHandler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
}

function dropHandler(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    const data = ev.dataTransfer.getData("text/plain");
    ev.target.appendChild(document.getElementById(data));
}

window.addEventListener("DOMContentLoaded", () => {
    // Get the element by id
    const element = document.getElementById("p1");
    // Add the ondragstart event listener
    element.addEventListener("dragstart", dragstartHandler);
    document.getElementById("d").addEventListener("click", clickHandler);
});

const API_BASE_URL = "https://mycloud.doshare.me"; // Adjust this to your backend URL
const userId = authdata.data.user.id; // Sample user ID
var myfiles = null;
const { data, error } = await useFetch(
    `${API_BASE_URL}/search?q=&user_id=${userId}`,
);
if (data.value != null) {
    myfiles = [];
    console.log(data.value);
    for (let i = 0; i < data.value.length; i++) {
        myfiles.push(data.value[i].filename);
        console.log(myfiles);
    }
}

function uploadFile() {
    const fileInput = document.getElementById("fileInput");
    const folderId = ""; //document.getElementById('folderId').value;
    const file = fileInput.files[0];

    if (!file) {
        alert("Please select a file to upload.");
        return;
    }
    if (!file) {
        alert("Please select a file to upload.");
        return;
    }

    const formData = new FormData();
    formData.set("file", file);
    // if (folderId) {
    //     formData.append('folder_id', folderId);
    // }
    formData.set("user_id", userId);

    // axios.post(`${API_BASE_URL}/upload`, formData, {
    //     headers: {
    //         'Content-Type': 'multipart/form-data',
    //     },
    //     params: {
    //         user_id: userId
    //     }
    // })
    // .then(response => {
    //     // document.getElementById('uploadResult').innerHTML = JSON.stringify(response.data);
    // axios.post(`${API_BASE_URL}/upload`, formData, {
    //     headers: {
    //         'Content-Type': 'multipart/form-data',
    //     },
    //     params: {
    //         user_id: userId
    //     }
    // })
    // .then(response => {
    //     // document.getElementById('uploadResult').innerHTML = JSON.stringify(response.data);

    // })
    // .catch(error => {
    //     console.error('Error:', error);
    // });
    console.log(formData.getAll("file"));
    // const xhr = new XMLHttpRequest();

    // xhr.open("POST", `${API_BASE_URL}/upload?user_id=` + userId, true);
    // xhr.onload = function () {
    //     if (xhr.status === 200) {
    //         console.log("File uploaded successfully:", xhr.responseText);
    //         document.getElementById("fileInput").value = "";
    //         document.getElementById("file-uploaded").classList.remove("hidden");
    //         setTimeout(() => {
    //             document
    //                 .getElementById("file-uploaded")
    //                 .classList.add("hidden");
    //         }, 3000);
    //         window.location.reload();
    //     } else {
    //         console.error("Error:", xhr.responseText);
    //     }
    // };
    // xhr.send(formData);
    fetch(`${API_BASE_URL}/upload?user_id=${userId}`, {
        method: "POST",
        body: formData,
        mode: "no-cors",
    })
        .then((response) => response.json())
        .then((result) => {
            console.log("Success:", result);
            document.getElementById("fileInput").value = "";
            document.getElementById("file-uploaded").classList.remove("hidden");
            setTimeout(() => {
                document
                    .getElementById("file-uploaded")
                    .classList.add("hidden");
            }, 3000);
            window.location.reload();
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}
function searchFiles() {
    const query = document.getElementById("searchQuery").value;
    axios
        .get(`${API_BASE_URL}/search?q=${query}&user_id=${userId}`)
        .then((response) => {
            // document.getElementById('searchResults').innerHTML = JSON.stringify(response.data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}
function listFiles() {
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    // });
    console.log(formData.getAll("file"));
    const xhr = new XMLHttpRequest();

    xhr.open("POST", `${API_BASE_URL}/upload?user_id=` + userId, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log("File uploaded successfully:", xhr.responseText);
            document.getElementById("fileInput").value = "";
            document.getElementById("file-uploaded").classList.remove("hidden");
            setTimeout(() => {
                document
                    .getElementById("file-uploaded")
                    .classList.add("hidden");
            }, 3000);
            window.location.reload();
        } else {
            console.error("Error:", xhr.responseText);
        }
    };
    xhr.send(formData);
}
function uploadpopuphover(params) {
    document.getElementById("fileInput").classList.remove("hidden");
    document.getElementById("upload-btn").classList.remove("hidden");
    document.getElementById("hover-btn").classList.add("hidden");
    document.getElementById("cancel-btn").classList.remove("hidden");
    // document.getElementById('fileInput').classList.remove('hidden');document.getElementById('upload-btn').classList.remove('hidden');document.getElementById('hover-btn').classList.add('hidden');document.getElementById('cancel-btn').classList.remove('hidden');
}

function uploadpopupcancel(params) {
    document.getElementById("fileInput").classList.add("hidden");
    document.getElementById("upload-btn").classList.add("hidden");
    document.getElementById("hover-btn").classList.remove("hidden");
    document.getElementById("cancel-btn").classList.add("hidden");
}
function onMyDocumentsClick() {
    // window.location.href = '/my-documents';
    document.getElementById("fileInput").classList.add("hidden");
    document.getElementById("upload-btn").classList.add("hidden");
    document.getElementById("hover-btn").classList.remove("hidden");
    document.getElementById("cancel-btn").classList.add("hidden");
}
function previewImage(file, id) {
    const img = document.getElementById(id);
    img.src = `https://mycloud.doshare.me/download/${data.value[myfiles.indexOf(file)].file_id}?user_id=${userId}`;
}
function resetPreviewImage(event) {
    const img = event.target;
    img.src = "https://img.icons8.com/3d-fluency/94/picture--v1.png";
    document.getElementById("fileInput").classList.add("hidden");
    document.getElementById("upload-btn").classList.add("hidden");
    document.getElementById("hover-btn").classList.remove("hidden");
    document.getElementById("cancel-btn").classList.add("hidden");
}
</script>

<template>
    <div class="select-none">
        <div class="breadcrumbs text-sm m-4">
            <ul>
                <li>
                    <a href="/">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            class="h-4 w-4 stroke-current m-2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                            ></path>
                        </svg>
                        Home
                    </a>
                </li>
                <li>
                    <span class="inline-flex items-center gap-2">
                        <!-- <svg
    <div class="select-none">
        <div class="breadcrumbs text-sm m-4">
            <ul>
                <li>
                    <a href="/">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            class="h-4 w-4 stroke-current m-2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                            ></path>
                        </svg>
                        Home
                    </a>
                </li>
                <li>
                    <span class="inline-flex items-center gap-2">
                        <!-- <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="h-4 w-4 stroke-current">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg> -->
                        My Documents
                    </span>
                </li>
            </ul>
        </div>
        <div v-if="myfiles[0] == null">
            <div
                class="suse-400 text-center content-center justify-items-center"
            >
                <!-- If Empty -->
                My Documents
            </div>
            <div v-if="myfiles[0] == null">
                <div
                    class="suse-400 text-center content-center justify-items-center"
                >
                    <!-- If Empty -->

                    <h2 class="text-2xl m-2">Let's fill up this folder</h2>
                    <div class="flex flex-grow flex-col">
                        <img
                            class="content-center self-center justify-center items-center object-center"
                            src="https://pub-a1d8320a13a348a8abae7ee559fd2c49.r2.dev/ruby-box-filled-with-stuff.png"
                            alt=""
                        />
                    </div>
                    <div
                        id="upload-file"
                        class="ease-in-out fixed flex items-center w-full z-50 max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow bottom-5 left-5 dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800"
                        role="alert"
                    >
                        <div
                            id="upload-file"
                            class="ease-in-out fixed flex items-center z-50 max-w-2xl p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow bottom-5 left-5 dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800"
                            role="alert"
                        >
                            <button
                                id="hover-btn"
                                class="btn btn-primary text-sm"
                                @mouseenter="uploadpopuphover"
                            >
                                Add Document
                            </button>
                            <input
                                type="file"
                                id="fileInput"
                                class="file-input file-input-bordered rounded-md hidden"
                            />
                            <button
                                @click="uploadFile"
                                class="btn text-sm hidden"
                                id="upload-btn"
                            >
                                Upload
                            </button>
                            <button
                                id="cancel-btn"
                                class="btn text-sm hidden"
                                @click="uploadpopupcancel"
                            >
                                Cancel
                            </button>
                        </div>
                        <div
                            id="file-uploaded"
                            class="ease-in-out fixed flex items-center w-full z-50 max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow bottom-5 left-5 dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800 hidden"
                            role="alert"
                        >
                            File Uploaded
                        </div>
                    </div>
                </div>
                <!-- If Existing Files -->
                <!-- <h2 class="text-2xl m-2">Let's fill up this folder</h2>
                <div class="flex flex-grow flex-col">
                    <img
                        class="content-center self-center justify-center items-center object-center"
                        src="https://pub-a1d8320a13a348a8abae7ee559fd2c49.r2.dev/ruby-box-filled-with-stuff.png"
                        alt=""
                    />
                </div> -->
            </div>
            <!-- If Existing Files -->

            <!-- <h2 class="text-2xl">Drag and Drop a folder anywhere</h2>
            <!-- <h2 class="text-2xl">Drag and Drop a folder anywhere</h2>
    <div class="flex flex-grow flex-col">
    <img class="content-center self-center justify-center items-center object-center" src="https://go.doshare.me/7e6f/company-black-and-white-woman-walking-with-shopping-bags.png" alt="">
    We'll hold on it for you
    </div> -->
        </div>
        <div v-else @click="onMyDocumentsClick">
            <h2 class="text-xl m-4">Your Documents</h2>
            <div
                id="clip-toast-bottom-right"
                class="ease-in-out fixed flex items-center w-full z-50 max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow bottom-5 left-5 dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800 hidden"
                role="alert"
            >
                <div class="text-sm font-normal">
                    Link Copied To Clipboard 📋
                </div>
            </div>
            <div
                id="file-toast-bottom-right"
                class="ease-in-out fixed flex items-center w-full -z-50 max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow bottom-5 left-5 dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800 hidden"
                role="alert"
            >
                <div class="text-sm font-normal">Download Started 📗</div>
            </div>
            <div class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
                <div
                    v-for="file in myfiles"
                    class="w-24 h-36 m-2 ml-4 hover:bg-blue-200 active:bg-blue-200 after:bg-blue-200 tooltip cursor-pointer rounded-md"
                    :data-tip="file"
                >
                    <span
                        v-on:contextmenu="
                            async (e) => {
                                e.preventDefault();
                                const iconUrl =
                                    await resolveResource('assets/16x16.png');

                                // Show the context menu
                                invoke(
                                    'plugin:context_menu|show_context_menu',
                                    {
                                        items: [
                                            {
                                                label: 'Download File',
                                                event: 'item1clicked',
                                                payload: file,
                                            },
                                            {
                                                label: 'Copy File URL',
                                                event: 'item2clicked',
                                                payload: file,
                                            },
                                            {
                                                is_separator: true,
                                            },
                                            {
                                                label: 'Delete File',
                                                event: 'item3clicked',
                                                payload: file,
                                            },
                                        ],
                                    },
                                );
                            }
                        "
                    >
                        <img
                            class="w-48 max-h-48 overflow-hidden"
                            :key="'grid-jpg-' + myfiles.indexOf(file)"
                            :id="'grid-image-' + myfiles.indexOf(file)"
                            @mouseenter="
                                previewImage(
                                    file,
                                    'grid-image-' + myfiles.indexOf(file),
                                )
                            "
                            @mouseleave="resetPreviewImage"
                            v-if="file.slice(-4) == '.jpg'"
                            src="https://img.icons8.com/3d-fluency/94/picture--v1.png"
                            alt="product-documents"
                        />
                        <img
                            class="w-48 max-h-48 overflow-hidden"
                            :key="'grid-png-' + myfiles.indexOf(file)"
                            :id="'grid-image-' + myfiles.indexOf(file)"
                            @mouseenter="
                                previewImage(
                                    file,
                                    'grid-image-' + myfiles.indexOf(file),
                                )
                            "
                            @mouseleave="resetPreviewImage"
                            v-else-if="file.slice(-4) == '.png'"
                            src="https://img.icons8.com/3d-fluency/94/picture--v1.png"
                            alt="product-documents"
                        />
                        <img
                            width="96"
                            height="96"
                            v-else-if="file.slice(-4) == '.pdf'"
                            src="https://img.icons8.com/fluency/96/adobe-acrobat.png"
                            alt="product-documents"
                        />
                        <img
                            width="96"
                            height="96"
                            v-else-if="file.slice(-4) == 'xlsx'"
                            src="https://img.icons8.com/fluency/96/microsoft-excel-2019.png"
                            alt="product-documents"
                        />
                        <img
                            width="96"
                            height="96"
                            v-else-if="file.slice(-4) == 'pptx'"
                            src="https://img.icons8.com/fluency/96/microsoft-powerpoint-2019.png"
                            alt="product-documents"
                        />
                        <img
                            width="96"
                            height="96"
                            v-else-if="file.slice(-4) == 'docx'"
                            src="https://img.icons8.com/fluency/96/ms-word.png"
                            alt="product-documents"
                        />
                        <img
                            width="96"
                            height="96"
                            v-else-if="file.slice(-4) == 'json'"
                            src="https://img.icons8.com/fluency/96/json.png"
                            alt="product-documents"
                        />
                        <img
                            width="96"
                            height="96"
                            v-else-if="file.slice(-5) == 'blend'"
                            src="https://img.icons8.com/fluency/96/blender-3d.png"
                            alt="product-documents"
                        />
                        <img
                            width="96"
                            height="96"
                            v-else-if="file.slice(-5) == 'block'"
                            src="https://img.icons8.com/fluency/96/blender-3d.png"
                            alt="product-documents"
                        />

                        <img
                            width="96"
                            height="96"
                            v-else
                            src="https://img.icons8.com/3d-fluency/94/document.png"
                            alt="product-documents"
                        />

                        <span
                            class="inline h-8 text-sm"
                            v-if="file.length <= 20"
                        >
                            {{ file.slice(0, 12) + "" + file.slice(12, 20) }}
                        </span>
                        <span class="inline h-8 text-sm" v-else>
                            {{
                                file.slice(0, 12) +
                                "\n" +
                                file.slice(12, 20) +
                                ".." +
                                file.slice(-4)
                            }}
                        </span>
                    </span>
                </div>
            </div>
            <div
                id="upload-file"
                class="ease-in-out fixed flex items-center z-50 max-w-2xl p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow bottom-5 left-5 dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800"
                role="alert"
            >
                <button
                    id="hover-btn"
                    class="btn btn-primary text-sm"
                    @mouseenter="uploadpopuphover"
                >
                    Add Document
                </button>
                <input
                    type="file"
                    id="fileInput"
                    class="file-input file-input-bordered rounded-md hidden"
                />
                <button
                    @click="uploadFile"
                    class="btn text-sm hidden"
                    id="upload-btn"
                >
                    Upload
                </button>
                <button
                    id="cancel-btn"
                    class="btn text-sm hidden"
                    onclick="document.getElementById('fileInput').classList.add('hidden');document.getElementById('upload-btn').classList.add('hidden');document.getElementById('hover-btn').classList.remove('hidden');document.getElementById('cancel-btn').classList.add('hidden');"
                >
                    Cancel
                </button>
            </div>
            <div
                id="file-uploaded"
                class="ease-in-out fixed flex items-center w-full z-50 max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow bottom-5 left-5 dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800 hidden"
                role="alert"
            >
                File Uploaded
            </div>
        </div>
        <!-- <div class="breadcrumbs text-sm m-4 select-none">
  <ul>
    <li>
      <a href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="h-4 w-4 stroke-current m-2">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
        </svg>
        Home
      </a>
    </li>
    <li>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="h-4 w-4 stroke-current m-2">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
        </svg>
       My Documents
      </a>
    </li>


  </ul>
</div>
<div class="flex flex-row">
    <div onclick=""  id="d" class="w-24 h-36 m-2 ml-4 hover:bg-blue-200 active:bg-blue-200 after:bg-blue-200 tooltip cursor-pointer rounded-md" data-tip="Sample Document">
<img width="96" height="96" src="https://img.icons8.com/glassmorphism/96/product-documents.png" alt="product-documents"/>
<span class="inline h-8 text-sm">
    Sample Folder
</span>
</div>
<div class="w-24 h-36 m-2 hover:bg-blue-200 active:bg-blue-200 after:bg-blue-200 tooltip cursor-pointer rounded-md" data-tip="Sample File">
<img width="96" height="96" src="https://img.icons8.com/3d-fluency/94/document.png" alt="product-documents"/>
<span class="inline h-8 text-sm">
    Sample File
</span>
</div>
<div onclick=""  id="d" class="w-24 h-36 m-2 hover:bg-blue-200 active:bg-blue-200 after:bg-blue-200 tooltip cursor-pointer rounded-md" data-tip="Sample Folder with Folder">
<img width="96" height="96" src="https://img.icons8.com/glassmorphism/96/folder-invoices.png" alt="product-documents"/>
<span class="inline h-8 text-sm">
    Sample Folder with Folder
</span>
</div>
<div onclick="" onmouseleave="document.removeE" id="d" class="w-24 h-36 m-2 hover:bg-blue-200 active:bg-blue-200 after:bg-blue-200 tooltip cursor-pointer rounded-md" data-tip="Sample Emply File">
<img width="96" height="96" src="https://img.icons8.com/fluency/96/file.png" alt="product-documents"/>
<span class="inline h-8 text-sm">
    Sample Empty File
</span>
</div>
<div onclick="" onmouseleave="document.removeE" id="d" class="w-24 h-36 m-4 hover:bg-blue-200 active:bg-blue-200 after:bg-blue-200 tooltip cursor-pointer rounded-md" data-tip="Sample Empty Folder">
<img width="96" height="96" src="https://img.icons8.com/fluency/96/box.png" alt="product-documents"/>
<span class="inline h-8 text-sm">
    Sample Empty Folder
</span>
</div>
</div>
<p id="p1" draggable="true">This element is draggable.</p>


<p id="target" ondrop="dropHandler(event)" ondragover="dragoverHandler(event)">
  Drop Zone
</p> -->
    </div>
</template>
