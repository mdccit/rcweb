<template>
    <div>
      <!-- Top Navigation Bar -->
      <SocialHubNavbar />
  
      <main class="bg-graySnowDrift">
        <div class="container-compressed">
          <div class="mt-16">
            <slot />
          </div>
        </div>
      </main>
  
      <!-- Footer -->
      <FooterBar />
  
    </div>
  </template>

<script setup>
import SocialHubNavbar from '~/components/user/navbar.vue';
import FooterBar from '~/components/user/user-footer.vue';
</script>