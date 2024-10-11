<template>
    <div>
   
  
      <!-- Media Gallery -->
      <div class="media-gallery grid">
        <div v-for="(item, index) in props.galleryItems" :key="index" data-fancybox="gallery" class="media-item"
          :src="item.src">
          <img v-if="item.type === 'image'" class="rounded media-item-content" :src="item.src" />
          <video v-if="item.type === 'video'" class="rounded media-item-content" controls>
            <source :src="item.src" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button @click="removeMediaItem(item.media_id, $event)"
            class="bg-red-500 text-white px-2 py-1 mt-2 rounded hover:bg-red-700" v-if="loggedUserSlug == props.userSlug"  :disabled="loadingStates[item.media_id]">
            Remove
            <svg  v-if="loadingStates[item.media_id]" aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
  
    </div>
  </template>
  
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useNuxtApp } from '#app';
  import 'cropperjs/dist/cropper.css';
  import { useUserStore } from '~/stores/userStore';
  import { useRouter } from 'vue-router';
  
  // Import Fancybox from the @fancyapps/ui package
  import { Fancybox } from '@fancyapps/ui';
  import '@fancyapps/ui/dist/fancybox/fancybox.css';
  
  const nuxtApp = useNuxtApp();
  const router = useRouter();
  const $publicService = nuxtApp.$publicService;
  const $userService = nuxtApp.$userService;
  const userStore = useUserStore();
  const files = ref([]); // To hold the uploaded files
  const loggedUserSlug = ref('');
  const loadingStates = ref({});
  
  
  const loading = ref(false);
  
  // Props
  const props = defineProps({
    userSlug: {
      type: String,
      required: true,
    },
    galleryItems:{
        type:Array,
        required: true,
    }
  });
  
  
  </script>
  
  <style scoped>
  .fancybox__backdrop::after {
    content: '';
    position: absolute;
    width: 10%;
    height: 10%;
    filter: blur(2px);
    left: 50%;
    top: 50%;
    transform: scale(11);
    opacity: 0.3;
    background-image: var(--bg-image);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  
  .media-gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-top: 24px;
  }
  
  .media-item img,
  .media-item video {
    width: 100%;
    height: auto;
    display: block;
    height: 200px;
    /* Fixed height for uniformity */
    object-fit: cover;
    /* Maintain aspect ratio while filling the height */
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .upload-btn-wrapper {
    display: flex;
    justify-content: center;
  }
  
  button[disabled] {
    background-color: #999;
    cursor: not-allowed;
  }
  
  .upload-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .upload-btn-wrapper button[disabled] {
    background-color: #999;
    cursor: not-allowed;
  }
  </style>
  