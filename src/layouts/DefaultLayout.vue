<template>
  <div>
    <Navbar />
    <LoadingSpinner v-if="loading" />
    <main v-else>
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Navbar from "~/components/NavBar.vue";
import LoadingSpinner from "~/components/LoadingSpinner.vue";

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
