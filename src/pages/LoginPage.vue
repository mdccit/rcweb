<!-- pages/login.vue -->
<template>
  <div>
    <h1>Login</h1>
    <LoginForm />
  </div>
</template>

<script setup>
import LoginForm from "~/components/LoginForm.vue";
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

h1 {
  margin-bottom: 20px;
}
</style>
