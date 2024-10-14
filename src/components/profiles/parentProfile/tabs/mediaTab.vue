<template>
    <div class="mb-3">
      <!-- Upload Media Section -->
      <form @submit.prevent="uploadMediaFiles" class="upload-form">
        <div
          class="upload-section mb-4 border-2 border-dashed border-blue-500 rounded-lg p-4 bg-blue-50 hover:bg-blue-100">
          <label for="media-upload" class="cursor-pointer flex flex-col items-center justify-center">
            <!-- Icon for upload -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mb-2 text-blue-700" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 16l4-4m0 0l4 4m-4-4v12M21 12v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m4-6h12M5 10h14" />
            </svg>
            <span class="text-blue-700 font-semibold text-lg mb-2">Click to Upload Image or Video</span>
          </label>
          <!-- Input for file selection -->
          <input id="media-upload" type="file" accept="image/*,video/mp4" multiple @change="handleFileUpload"
            class="hidden" />
        </div>
  
        <!-- Cropping Section for Images -->
        <vue-cropper v-if="isImageCropping" ref="cropper" :src="cropperImage" @crop="onCrop" />
  
        <!-- File List -->
        <ul class="mt-4">
          <li v-for="(file, index) in files" :key="index" class="mb-2 flex justify-between items-center">
            <span>{{ file.name }} ({{ file.type }})</span>
            <button @click.prevent="removeFile(index)" class="remove-btn text-white px-2 py-1 rounded text-sm">
              Remove
            </button>
          </li>
        </ul>
  
        <!-- Submit Button -->
        <div class="upload-btn-wrapper mt-4">
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full text-center"
            :disabled="(files.length === 0) || (loading)">
            Upload Media
            <svg v-if="loading" aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin"
              viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB" />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor" />
            </svg>
          </button>
  
        </div>
      </form>
  
      <!-- Media Gallery -->
      <div class="media-gallery grid">
        <div v-for="(item, index) in galleryItems" :key="item.media_id" data-fancybox="gallery" class="media-item"
          :src="item.src">
          <img v-if="item.type === 'image'" class="rounded media-item-content" :src="item.src" />
          <video v-if="item.type === 'video'" class="rounded media-item-content" controls>
            <source :src="item.src" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button @click="removeMediaItem(item.media_id, $event)"
            class="remove-btn text-white px-2 py-1 mt-2 rounded text-sm " v-if="loggedUserSlug == props.userSlug"
            :disabled="loadingStates[item.media_id]">
            Remove
            <svg v-if="loadingStates[item.media_id]" aria-hidden="true" role="status"
              class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB" />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
  
    </div>
  </template>
  
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import VueCropper from 'vue-cropperjs';
  import 'cropperjs/dist/cropper.css';
  
  // Import Fancybox from the @fancyapps/ui package
  import { Fancybox } from '@fancyapps/ui';
  import '@fancyapps/ui/dist/fancybox/fancybox.css';
  
  const nuxtApp = useNuxtApp();
  const $publicService = nuxtApp.$publicService;
  const $userService = nuxtApp.$userService;
  const files = ref([]); // To hold the uploaded files
  
  const emit = defineEmits(['uploadCompleted']); // Define the event

  const loading = ref(false);
  const loggedUserSlug = ref('');
  const loadingStates = ref({});
  
  // Props
  const props = defineProps({
    userSlug: {
      type: String,
      required: true,
    },
  });
  
  
  const galleryItems = ref([]);
  // Reactive key to force re-render
  const galleryKey = ref(0);
  
  // Reactive data
  const isImageCropping = ref(false); // Toggle for image cropping
  const cropperImage = ref(null); // Image to be cropped
  
  
  
  // Handle file selection
  const handleFileUpload = (event) => {
    const selected = Array.from(event.target.files);
    selected.forEach((file) => {
      files.value.push(file);
    });
  };
  
  // Function to remove file from the files array
  const removeFile = (index) => {
    files.value.splice(index, 1); // Remove the file at the given index
  };
  
  // Function to remove media item from remote storage
  const removeMediaItem = async (media_id, event) => {
    event.stopPropagation();
    loadingStates.value[media_id] = true;
    try {
      const response = await $publicService.delete_media_parent(media_id);
      if (response.status === 200) {
        loading.value = false;
        nuxtApp.$notification.triggerNotification(response.display_message, 'success');
        fetchGalleryBySlug(); // Refresh gallery after deletion
      } else {
        loading.value = false;
        nuxtApp.$notification.triggerNotification(response.display_message, 'warning');
      }
    } catch (error) {
      loading.value = false;
      nuxtApp.$notification.triggerNotification(error.display_message || 'Failed to remove media', 'failure');
    } finally {
      loadingStates.value[media_id] = false;
    }
  };
  
  const uploadMediaFiles = async () => {
    const formData = new FormData();
    loading.value = true;
  
    // Append user_slug and files to FormData
    formData.append('user_slug', props.userSlug);
    files.value.forEach((file) => {
      formData.append('files[]', file);
    });
  
    try {
      const response = await $publicService.upload_parent_media(formData);
  
      if (response.status === 200) {
        // Clear the files array
        files.value = [];
        loading.value = false;
  
        // Trigger success notification
        nuxtApp.$notification.triggerNotification(response.display_message, 'success');
        // Directly refresh the gallery after successful upload
        setTimeout(() => {
          fetchGalleryBySlug();
        }, 1000);  // 1-second delay
  
      } else {
        loading.value = false;
        nuxtApp.$notification.triggerNotification(response.display_message, 'warning');
      }
    } catch (error) {
      loading.value = false;
      nuxtApp.$notification.triggerNotification(error.display_message || 'An error occurred', 'failure');
    }
  };
  
  const fetchGalleryBySlug = async () => {
    try {
      const response = await $publicService.get_user_profile(props.userSlug);
  
      if (response.media_info) {
        setGalleryItems(response.media_info);
        // Re-bind Fancybox after setting the new gallery items
        Fancybox.bind('[data-fancybox="gallery"]', {
          dragToClose: false,
          Toolbar: {
            display: {
              left: ['close'],
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
        });
      } else {
        console.log('No media info available');
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };
  
  
  const setGalleryItems = (mediaInfo) => {
    if (!mediaInfo || !Array.isArray(mediaInfo.media_urls)) {
      console.error('mediaInfo or media_urls is invalid:', mediaInfo);
      return;
    }
  
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
  
    console.log('Updated galleryItems with cache busting:', galleryItems.value);
  };
  
  
  onMounted(() => {
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
  
    if (process.client) {
      loggedUserSlug.value = localStorage.getItem('user_slug');
      fetchGalleryBySlug();
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
  .remove-btn{
    background-color: rgb(240, 22, 22) !important;
  }
  .remove-btn :hover{
    background-color: rgb(199, 18, 18) !important;
  }
  </style>
  