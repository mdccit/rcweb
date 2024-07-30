<template>
  <div class="container mx-auto flex justify-center items-center h-screen">
    <div class="w-full max-w-md">
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 class="text-2xl font-bold mb-4 text-center">Login</h1>
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script setup>
import LoginForm from '~/components/LoginForm.vue'
</script>

<style scoped>
.container {
  padding: 20px;
}
</style>
