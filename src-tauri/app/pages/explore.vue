<style>
@import url('https://fonts.googleapis.com/css2?family=SUSE:wght@100..800&display=swap');
.suse-400 {
  font-family: "SUSE", sans-serif;
  font-weight: 400;
}

</style>

<template>
    <!-- <div class="breadcrumbs text-sm m-4">
  <ul>
    <li>
      <a href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="h-4 w-4 stroke-current">
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
      <span class="inline-flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="h-4 w-4 stroke-current">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
        Add Document
      </span>
    </li>
  </ul>
</div>
<div class="suse-400 text-center content-center justify-items-center">
    
    <h2 class="text-2xl">Drag and Drop a folder anywhere</h2>
    <div class="flex flex-grow flex-col">
    <img class="content-center self-center justify-center items-center object-center" src="https://go.doshare.me/7e6f/company-black-and-white-woman-walking-with-shopping-bags.png" alt="">
    We'll hold on it for you
    </div>
</div> -->
<div class="breadcrumbs text-sm m-4">
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
<div class="flex flex-col w-24 h-36 m-4 bg-blue-200 tooltip cursor-pointer rounded-md" data-tip="Sample Document">
<img width="96" height="96" src="https://img.icons8.com/glassmorphism/96/product-documents.png" alt="product-documents"/>
<span class="inline h-8 text-sm">
    Sample Document
</span>


</div>
<p id="p1" draggable="true">This element is draggable.</p>


<p id="target" ondrop="dropHandler(event)" ondragover="dragoverHandler(event)">
  Drop Zone
</p>

</template>
<script>
let img = new Image();
img.src = "https://go.doshare.me/6cbd/squid.jpg";

  function dragstartHandler(ev) {
    // Add the target element's id to the data transfer object
    // ev.dataTransfer.setData("text/plain", ev.target.id);
    ev.dataTransfer.setDragImage(img, 10, 10);

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
  });
</script>
