<template>
  <div>
    <!-- Upload Media Section -->
    <!-- Upload Media Section with Icon and Highlighted Style -->
    <div class="upload-section mb-4 border-2 border-dashed border-blue-500 rounded-lg p-4 bg-blue-50 hover:bg-blue-100">
      <label for="media-upload" class="cursor-pointer flex flex-col items-center justify-center">
        <!-- Icon for upload -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mb-2 text-blue-700" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M3 16l4-4m0 0l4 4m-4-4v12M21 12v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m4-6h12M5 10h14" />
        </svg>
        <span class="text-blue-700 font-semibold text-lg mb-2">Click to Upload Image or Video</span>
        <span class="text-gray-500 text-sm">or drag and drop files here</span>
      </label>
      <input id="media-upload" type="file" accept="image/*,video/mp4" multiple @change="handleMediaUpload"
        class="hidden" />
    </div>


    <!-- Cropping Section for Images -->
    <vue-cropper v-if="isImageCropping" ref="cropper" :src="cropperImage" @crop="onCrop" />

    <!-- Upload Button -->
    <div class="upload-btn-wrapper mt-4">
      <button @click="uploadMedia" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full text-center"
        :disabled="files.length === 0">
        Upload Media
      </button>
    </div>

    <!-- Media List Temporarily Before Upload with Remove Button -->
    <ul class="mt-4">
      <li v-for="(file, index) in files" :key="index" class="mb-2 flex justify-between items-center">
        <span>{{ file.name }} ({{ file.type }})</span>
        <button @click="removeFile(index)" class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700">
          Remove
        </button>
      </li>
    </ul>

    <!-- Media Gallery -->
    <div class="media-gallery grid">
      <a v-for="(item, index) in galleryItems" :key="index" data-fancybox="gallery" :href="item.href"
        class="media-item">
        <img v-if="item.type === 'image'" class="rounded w-full" :src="item.src" />
        <video v-if="item.type === 'video'" class="rounded w-full" controls>
          <source :src="item.src" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button @click="removeMediaItem(index)" class="bg-red-500 text-white px-2 py-1 mt-2 rounded hover:bg-red-700">
          Remove
        </button>
      </a>
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

const isImageCropping = ref(false); // Toggle for image cropping
const cropperImage = ref(null); // Image to be cropped
const files = ref([]); // To hold the uploaded files


const props = defineProps({
  galleryItems: {
    type: Array,
    required: true,
  },
});
// Handle file input for image/video
const handleMediaUpload = (event) => {
  const selectedFiles = Array.from(event.target.files);

  selectedFiles.forEach((file) => {
    const fileType = file.type.startsWith('image/') ? 'image' : 'video';

    const reader = new FileReader();
    reader.onload = () => {
      if (fileType === 'image') {
        // Add image directly to files array and galleryItems for display
        files.value.push(file);
        galleryItems.value.push({ type: 'image', src: reader.result, href: reader.result });
      } else {
        // Add video to files array and galleryItems for display
        files.value.push(file);
        galleryItems.value.push({ type: 'video', src: reader.result, href: reader.result });
      }
    };
    reader.readAsDataURL(file);
  });
};

// Handle image cropping
const onCrop = () => {
  const croppedCanvas = $refs.cropper.getCroppedCanvas();
  croppedCanvas.toBlob((blob) => {
    const croppedFile = new File([blob], 'cropped-image.jpg', { type: 'image/jpeg' });

    // Push the cropped image to files array
    files.value.push(croppedFile);

    // Convert the cropped image to a data URL for display
    const croppedDataUrl = croppedCanvas.toDataURL('image/jpeg');
    galleryItems.value.push({ type: 'image', src: croppedDataUrl, href: croppedDataUrl });

    isImageCropping.value = false;
  });
};

// Function to remove file from the files array
const removeFile = (index) => {
  files.value.splice(index, 1); // Remove the file at the given index
};

// Function to remove media item from the localGalleryItems array
const removeMediaItem = (index) => {
  localGalleryItems.value.splice(index, 1); // Remove the media item at the given index
};


// Upload media files to the server
const uploadMedia = async () => {
  const formData = new FormData();

  // Append all files to formData
  files.value.forEach((file) => {
    formData.append('files[]', file);
  });

  // Send the formData to the API (replace with actual API call)
  console.log('Uploading media:', formData);
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
</style>
