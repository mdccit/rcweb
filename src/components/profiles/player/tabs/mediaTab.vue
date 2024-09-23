<template>
  <div>
    <!-- Upload Media Section -->
    <div class="upload-section mb-4">
      <label for="media-upload" class="cursor-pointer inline-block mb-2">Upload Image or Video</label>
      <input
        id="media-upload"
        type="file"
        accept="image/*,video/mp4"
        multiple
        @change="handleMediaUpload"
        class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
    </div>

    <!-- Cropping Section for Images -->
    <vue-cropper v-if="isImageCropping" ref="cropper" :src="cropperImage" @crop="onCrop" />

    <!-- Upload Button -->
    <button
      @click="uploadMedia"
      class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      :disabled="files.length === 0"
    >
      Upload Media
    </button>

    <!-- Media Gallery -->
    <div class="media-gallery grid">
      <a v-for="(item, index) in galleryItems" :key="index" data-fancybox="gallery" :href="item.href" class="media-item">
        <img v-if="item.type === 'image'" class="rounded w-full" :src="item.src" />
        <video v-if="item.type === 'video'" class="rounded w-full" controls>
          <source :src="item.src" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';

const props = defineProps({
  galleryItems: {
    type: Array,
    required: true,
  },
});

const galleryItems = ref([...props.galleryItems]); // Initialize the gallery with passed items
const isImageCropping = ref(false); // Toggle for cropping modal
const cropperImage = ref(null); // Source image for cropping
const files = ref([]); // To hold the uploaded files
const apiUrl = `{{url}}/{{version}}/public/players/upload-media/{{user_slug}}`; // Placeholder for your API URL

// Handle file input for image/video
const handleMediaUpload = (event) => {
  const selectedFiles = Array.from(event.target.files);
  
  selectedFiles.forEach((file) => {
    const fileType = file.type.startsWith('image/') ? 'image' : 'video';

    const reader = new FileReader();
    reader.onload = () => {
      if (fileType === 'image') {
        // Set the image for cropping
        cropperImage.value = reader.result; 
        isImageCropping.value = true; // Enable cropping
      } else {
        // Push video to files array and galleryItems
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
    // Create a new File from the cropped blob
    const croppedFile = new File([blob], "cropped-image.jpg", { type: "image/jpeg" });
    
    // Push the cropped image to files array
    files.value.push(croppedFile);
    
    // Convert the cropped image to a data URL for display in the gallery
    const croppedDataUrl = croppedCanvas.toDataURL("image/jpeg");
    galleryItems.value.push({ type: 'image', src: croppedDataUrl, href: croppedDataUrl });

    isImageCropping.value = false; // Hide the cropper
  }, "image/jpeg");
};

// Upload media files to API endpoint
const uploadMedia = async () => {
  const formData = new FormData();

  // Append all files to formData array
  files.value.forEach((file) => {
    formData.append('files[]', file); // The key should match the API expectation: 'files[]'
  });


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
</style>
