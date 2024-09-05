<template>
      <RegisterForm />
</template>

<script setup>
import RegisterForm from '~/components/RegisterForm.vue';
definePageMeta({ colorMode: 'light', })
</script>

<style scoped>
.register-container {
  max-width: 600px;
  margin: auto;
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>