<template>
  <div class="media-gallery grid">
    <a v-for="(item, index) in galleryItems" :key="index" data-fancybox="gallery" :href="item.href" class="media-item">
      <img v-if="item.type === 'image'" class="rounded w-full" :src="item.src" />
      <video v-if="item.type === 'video'" class="rounded w-full" controls>
        <source :src="item.src" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </a>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

// Media items array passed as prop
const props = defineProps({
  galleryItems: {
    type: Array,
    required: true,
  }
});

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
