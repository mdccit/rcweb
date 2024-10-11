<template>
  <div class="flex flex-col min-h-screen">
    <Navbar @search="search"/> <!-- Top Navigation Bar -->
    
    <div class="flex flex-grow">
      <!-- Sidebar for Filters -->
      <aside class="w-1/5 p-4 bg-white shadow-md filters-leftBar"> <!-- Adjust the width to 1/4 or any fraction -->
        <FilterCard />
      </aside>

      <!-- Main Content Area -->
      <main   class="w-4/5 flex-grow bg-gray-100 p-4"> <!-- Set the main content to take the remaining space -->
        <LoadingSpinner v-if="loading" />
        <NuxtPage v-else />
      </main>
    </div>
    
    <!-- Footer at the Bottom -->
    <FooterBar />
  </div>
</template>

<script setup>
import { ref ,provide  } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from '~/components/user/navbar.vue';
import FilterCard from '~/components/user/filter-card.vue';
import FooterBar from '~/components/user/user-footer.vue';
import LoadingSpinner from '~/components/LoadingSpinner.vue';
import Search from '~/pages/user/search/search.vue';
// import checkSession from '~/middleware/checkSession';

// defineNuxtRouteMiddleware(checkSession);

const loading = ref(false);
const router = useRouter();

router.beforeEach((to, from, next) => {
  loading.value = true;
  next();
});

router.afterEach(() => {
  loading.value = false;
});

const search = ()  =>{
 console.log(2)
}
</script>

<style scoped>
main {
  /* padding: 20px; */
}

/* Adjust padding or other styles as needed */
</style>
