<template>
      <RegisterForm />
      <!-- <RegisterStepThree/> -->
</template>

<script setup>
import RegisterForm from '~/components/RegisterForm.vue';
import RegisterStepThree from '~/components/RegisterStepThree.vue';
definePageMeta({ colorMode: 'light', layout: 'outer' });
useHead({
  title: 'Recruited Register',
})
</script>
