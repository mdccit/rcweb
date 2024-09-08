<template>
    <div>
        <!-- Top Navigation Bar -->
        <SocialHubNavbar /> 

        <main class="bg-graySnowDrift">
            <div class="container-compressed">
                <div class="grid grid-cols-6 gap-4 mt-16">
                    <!-- Left pane -->
                    <div>
                      <Filter />
                    </div>

                    <!-- Middle pane -->
                    <div class="col-span-4">
                        <LoadingSpinner v-if="loading" />
                        <NuxtPage v-else />
                    </div>

                    <!-- Right pane -->
                    <div>
                      <!-- <Filter /> -->
                    </div>
                </div>
            </div>
        </main>
      
        <!-- Footer -->
        <FooterBar />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import SocialHubNavbar from '~/components/user/navbar.vue';
  import Filter from '~/components/user/feed/filter.vue';
  import FooterBar from '~/components/user/user-footer.vue';
  import LoadingSpinner from '~/components/LoadingSpinner.vue';
  import checkSession from '~/middleware/checkSession';
  
  defineNuxtRouteMiddleware(checkSession);
  
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
  
  /* Adjust padding or other styles as needed */
  </style>
  