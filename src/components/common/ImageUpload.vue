<template>
  <div class="image-upload">
    <input type="file" @change="onFileChange" accept="image/*" />
    <div v-if="image">
      <vue-cropper
        ref="cropper"
        :src="image"
        style="height: 400px; width: 100%;"
      />
      <button @click="cropImage">Crop and Resize</button>
    </div>
    <div v-if="croppedImage">
      <h3>Cropped and Resized Image:</h3>
      <img :src="croppedImage" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import 'cropperjs/dist/cropper.css'
import VueCropper from 'vue-cropperjs'

const image = ref(null)
const croppedImage = ref(null)
const cropper = ref(null)

const onFileChange = (e) => {
  const files = e.target.files
  if (files.length > 0) {
    const reader = new FileReader()
    reader.onload = (event) => {
      image.value = event.target.result
    }
    reader.readAsDataURL(files[0])
  }
}

const cropImage = () => {
  if (cropper.value) {
    const canvas = cropper.value.cropper.getCroppedCanvas({
      width: 200,
      height: 200,
    })
    croppedImage.value = canvas.toDataURL('image/jpeg')
  }
}
</script>

<style scoped>
.image-upload {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-upload input {
  margin-bottom: 10px;
}

.image-upload img {
  max-width: 100%;
  margin-top: 10px;
}
</style>
