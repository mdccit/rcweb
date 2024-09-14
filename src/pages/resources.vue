<template>
  <div class="WordSection1 container text-black p-3 mx-auto">
      <div class="my-12"></div>
      <p class="text-3xl"><b> Resources Page</b></p>   
  </div>
</template>

<script setup>
definePageMeta({
    ssr: false,
    colorMode: 'light',
    layout: 'admin',
    middleware: ['role'],
    requiredRole: ['admin'],
});

</script>

<style scoped>
h1 {
  color: #333;
}

p {
  font-size: 16px;
}
</style>