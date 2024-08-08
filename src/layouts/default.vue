<template>
  <div>
    <Navbar />
    <LoadingSpinner v-if="loading" />
    <main class="min-h-screen bg-gray-100" v-else>
      <NuxtPage />
    </main>
  </div>
</template>
<!-- user layout -->
<!-- <template>
  <div>
    <UserNavbar />
    <main class="min-h-screen bg-gray-100">
       <userDashboard />
    </main>
    <UserFooter />
  </div>
</template> -->

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from '~/components/NavBar.vue';
import LoadingSpinner from '~/components/LoadingSpinner.vue';
// import UserNavbar from '~/components/user/UserNavbar.vue';
// import UserFooter from '~/components/user/UserFooter.vue';
// import userDashboard from '~/pages/user/userDashboard.vue';

const loading = ref(false);
const router = useRouter();

router.beforeEach((to, from, next) => {
  loading.value = true;
  next();
});

router.afterEach(() => {
  loading.value = false;
});
</script>

<style scoped>
main {
  padding: 20px;
}
</style>
