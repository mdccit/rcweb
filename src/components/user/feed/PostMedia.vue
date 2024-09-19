<template>
  <div v-if="hasMedia == 1">
    <!-- If there is only one media item, show it full-width, full-height -->
    <div v-if="media.length === 1" class="single-media">
      <img v-if="media[0].media_information.media_type === 'image'" :src="media[0].file_url" alt="Post media" class="w-full h-auto object-cover rounded-lg">
      <video v-if="media[0].media_information.media_type === 'video'" :src="media[0].file_url" controls class="w-full h-auto object-cover rounded-lg"></video>
    </div>

    <!-- If there are multiple media items, show them in a grid -->
    <div v-else :class="{'grid-cols-2': media.length === 2, 'grid-cols-3': media.length > 2}" class="grid gap-4 mt-4">
      <div v-for="(mediaItem, index) in media" :key="mediaItem.id" class="media-item">
        <!-- Click event to open modal -->
        <img v-if="mediaItem.media_information.media_type === 'image'" :src="mediaItem.file_url" alt="Post media" class="w-full h-full object-cover rounded-lg cursor-pointer" @click="openModal(index)">
        <video v-if="mediaItem.media_information.media_type === 'video'" :src="mediaItem.file_url" controls class="w-full h-full object-cover rounded-lg cursor-pointer" @click="openModal(index)">
        </video>
      </div>
    </div>
  </div>

  <!-- Modal Section -->
  <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="relative bg-white p-4 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
      <!-- Close Button (Top Right) -->
      <button @click="closeModal" class="close-button text-white p-2 rounded-lg flex items-center space-x-2">
        <span class="text-sm">Close</span>
        <span class="text-lg">✖</span>
      </button>

      <!-- Display the selected media -->
      <div v-if="media[selectedIndex]" class="media-content">
        <img v-if="media[selectedIndex].media_information.media_type === 'image'" :src="media[selectedIndex].file_url" alt="Magnified media" class="w-full h-auto rounded-lg">
        <video v-if="media[selectedIndex].media_information.media_type === 'video'" :src="media[selectedIndex].file_url" controls class="w-full h-auto rounded-lg"></video>
      </div>

      <!-- Previous Button (Left Side) -->
      <button v-if="selectedIndex > 0" @click="previousMedia" class="nav-button previous-button text-white p-2 rounded-lg flex items-center space-x-2">
        <span class="text-lg">◀</span>
        <span class="text-sm">Previous</span>
      </button>

      <!-- Next Button (Right Side) -->
      <button v-if="selectedIndex < media.length - 1" @click="nextMedia" class="nav-button next-button text-white p-2 rounded-lg flex items-center space-x-2">
        <span class="text-sm">Next</span>
        <span class="text-lg">▶</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Props
const props = defineProps({
  media: Array,
  hasMedia: Number
});

// Modal state
const isModalOpen = ref(false);
const selectedIndex = ref(null); // Track the index of the currently selected media

// Open the modal with the selected media item (by index)
const openModal = (index) => {
  selectedIndex.value = index;
  isModalOpen.value = true;
};

// Close the modal
const closeModal = () => {
  isModalOpen.value = false;
  selectedIndex.value = null;
};

// Navigate to the previous media
const previousMedia = () => {
  if (selectedIndex.value > 0) {
    selectedIndex.value--;
  }
};

// Navigate to the next media
const nextMedia = () => {
  if (selectedIndex.value < props.media.length - 1) {
    selectedIndex.value++;
  }
};
</script>

<style scoped>
/* Single media full fit */
.single-media {
  width: 100%;
  height: auto;
}

/* Grid structure for media items */
.media-item {
  overflow: hidden;
  height: 200px; /* Set a fixed height for all media items */
}
.grid {
  display: grid;
}
/* Set up a gap between grid items */
.gap-4 {
  gap: 1rem; /* Adjust the gap as needed */
}
.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
img, video {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
.cursor-pointer {
  cursor: pointer;
}

/* Transparent Navigation and Close button styling */
.nav-button, .close-button {
  background-color: transparent;
  transition: background-color 0.3s ease;
  border: none;
  opacity: 0.6;
}
.nav-button:hover, .close-button:hover {
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
}

/* Close button positioned top right */
.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
}

/* Previous button positioned left inside the modal */
.previous-button {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}

/* Next button positioned right inside the modal */
.next-button {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}

/* Media content styling */
.media-content {
  text-align: center;
}
</style>
