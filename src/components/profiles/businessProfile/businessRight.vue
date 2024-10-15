<template>
  

</template>

<script setup>
import { ref, defineEmits, onMounted } from 'vue';

const props = defineProps({

data: {
    type: Object,
    required: true,
},

businessSlug: {
    type: String,
    required: true,
}
});
</script>

<style scoped>
main {
    padding: 20px;
}

/* Adjust padding or other styles as needed */
</style>