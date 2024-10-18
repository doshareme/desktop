
<script setup>

</script>
<template>
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
                                                label: 'Share File',
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
                    <img class="w-48 max-h-48 overflow-hidden" :key="'grid-jpg-'+myfiles.indexOf(file)" :id="'grid-image-'+myfiles.indexOf(file)" @mouseenter="previewImage(file,'grid-image-'+myfiles.indexOf(file))" @mouseleave="resetPreviewImage" v-if="file.slice(-4)=='.jpg'" src="https://img.icons8.com/3d-fluency/94/picture--v1.png" alt="product-documents"/>
      <img class="w-48 max-h-48 overflow-hidden" :key="'grid-png-'+myfiles.indexOf(file)" :id="'grid-image-'+myfiles.indexOf(file)" @mouseenter="previewImage(file,'grid-image-'+myfiles.indexOf(file))" @mouseleave="resetPreviewImage" v-else-if="file.slice(-4)=='.png'" src="https://img.icons8.com/3d-fluency/94/picture--v1.png" alt="product-documents"/>
      <img width="96" height="96" v-else-if="file.slice(-4)=='.pdf'" src="https://img.icons8.com/fluency/96/adobe-acrobat.png" alt="product-documents"/>
      <img width="96" height="96" v-else-if="file.slice(-4)=='xlsx'" src="https://img.icons8.com/fluency/96/microsoft-excel-2019.png" alt="product-documents"/>
      <img width="96" height="96" v-else-if="file.slice(-4)=='pptx'" src="https://img.icons8.com/fluency/96/microsoft-powerpoint-2019.png" alt="product-documents"/>
      <img width="96" height="96" v-else-if="file.slice(-4)=='docx'" src="https://img.icons8.com/fluency/96/ms-word.png" alt="product-documents"/>
      <img width="96" height="96" v-else-if="file.slice(-4)=='json'" src="https://img.icons8.com/fluency/96/json.png" alt="product-documents"/>
      <img width="96" height="96" v-else-if="file.slice(-5)=='blend'" src="https://img.icons8.com/fluency/96/blender-3d.png" alt="product-documents"/>
      <img width="96" height="96" v-else-if="file.slice(-5)=='block'" src="https://img.icons8.com/fluency/96/blender-3d.png" alt="product-documents"/>

      <img width="96" height="96" v-else src="https://img.icons8.com/3d-fluency/94/document.png" alt="product-documents"/>


      <span class="inline h-8 text-sm" v-if="file.length<=20">
        {{ file.slice(0, 12)+""+"\n"+file.slice(13,20) }}
        </span>
      <span class="inline h-8 text-sm" v-else>
        {{ file.slice(0, 12)+".."+"\n"+file.slice(13,20)+file.slice(-4) }}
      </span>
                    </span>
                </div>
            </div>
</template>