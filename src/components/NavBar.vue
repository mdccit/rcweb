<template>
  <nav class="bg-white shadow-md">
    <div class="container mx-auto px-4 py-2 flex justify-between items-center">
      <div class="text-xl font-bold">MyApp</div>
      <div>
        <a href="/" class="px-4 py-2">Home</a>
      </div>
      <div>
        <button v-if="!isLoggedIn" @click="login" class="px-4 py-2 bg-blue-500 text-white rounded">Login</button>
        <button v-if="!isLoggedIn" @click="register" class="px-4 py-2 bg-green-500 text-white rounded">Register</button>
        <button v-if="isLoggedIn" @click="logout" class="px-4 py-2 bg-red-500 text-white rounded">Logout</button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();
const router = useRouter();

const isLoggedIn = computed(() => !!userStore.user?.token);

onMounted(() => {
  userStore.initializeUser();
});

const login = () => {
  router.push('/login');
};

const register = () => {
  router.push('/register');
};

const logout = () => {
  userStore.clearUser();
};
</script>

<style scoped>
nav a {
  margin: 0 1rem;
  text-decoration: none;
  color: #333;
}
nav a:hover {
  color: #007bff;
}
</style>
