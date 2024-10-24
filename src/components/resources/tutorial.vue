<template>
   
       <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div v-for="data in tutorial"  class=" p-4" data-fancybox="gallery" :src="data.videoLink">
                    <video class="bg-culturedBlue h-[270px] rounded-lg" controls>
                        <source :src="data.videoLink" type="video/mp4" />
                        Your browser does not support the video tag.
                     </video>
                    <button  class="text-black mt-1">{{ data.name }}</button>
                </div>
            </div>
</template>

<script setup>
import { ref, defineEmits, onMounted } from 'vue';

import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import search from '@/assets/tutorial/search-filters.mp4';
import media from '@/assets/tutorial/media.mp4';
import editProfile from '@/assets/tutorial/edit-profile.mp4';
import connect from '@/assets/tutorial/connect.mp4';

const showModal = ref(false)
const videoNumber = ref(0)
const viewTutorial = (id) =>{
    console.log(4555)
    console.log(id)
    videoNumber.value = id
    showModal.value= true
    console.log(showModal.value)

}

const videoLink = ref('')
const tutorial = ref([])
onMounted(()=>{
    Fancybox.bind('[data-fancybox="gallery"]', {
    dragToClose: false,
    Toolbar: {
      display: {
        left: ['close'],
        middle: [],
        right: [],
      },
    },
    Images: {
      zoom: false,
    },
    Thumbs: {
      type: 'classic',
    },
    Carousel: {
      transition: false,
      friction: 0,
    },
    on: {
      'Carousel.ready Carousel.change': (fancybox) => {
        fancybox.container.style.setProperty('--bg-image', `url("${fancybox.getSlide().thumbSrc}")`);
      },
    },
  });
  
  videoLink.value =search

  tutorial.value =[
    { name:"How to use the search filters", videoLink:search},
    { name:"Connect to other users on the platform", videoLink:connect},
    { name:"How to edit your profile", videoLink:editProfile},
    { name:"How to add media", videoLink:media},

  ]

  console.log(tutorial.value)
})


const setGalleryItems = (mediaInfo) => {
  // Clear the gallery items before updating to prevent duplicates
  galleryItems.value = [];

  // Cache busting: Append timestamp to media URLs to prevent caching issues
  galleryItems.value = mediaInfo.media_urls.map(media => {
    const urlWithCacheBust = `${media.url}?t=${new Date().getTime()}`;  // Cache-busting timestamp

    if (media.media_type === 'image') {
      return {
        type: 'image',
        href: urlWithCacheBust,
        src: urlWithCacheBust,
        media_id: media.media_id,
      };
    } else if (media.media_type === 'video') {
      return {
        type: 'video',
        href: urlWithCacheBust,
        src: urlWithCacheBust || 'https://via.placeholder.com/200x150.png?text=Video',
        media_id: media.media_id,
      };
    }
  });

};

</script>