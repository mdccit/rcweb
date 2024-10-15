<template>
     <div class="">
        <div class="bg-yellow-200 border-l-8 border-yellow-400 w-full text-black px-4 py-4"> This school is not
            yet connected to a government school. Please connect it to a government school id to enable
            synchronization. 
            <div class="mt-4">
               <button  type="submit"  @click="$emit('search')"
                    class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                    Connect to a government school </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch , onMounted } from 'vue';
import { useNuxtApp } from '#app';

const emit = defineEmits(['search']);


</script>

<style scoped>
.error-messages {
    margin-top: 20px;
    color: red;
}

.error-title {
    font-weight: bold;
}

.error-list {
    list-style-type: disc;
    /* Ensure bullet points are shown */
    margin-left: 20px;
    /* Indent the list */
}

.error-item {
    margin-bottom: 5px;
}
</style>