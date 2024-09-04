<script setup>
import checkSession from '~/middleware/checkSession';

// Apply the checkSession middleware globally
defineNuxtRouteMiddleware(checkSession);
</script>


<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
