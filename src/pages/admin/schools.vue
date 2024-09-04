<template>
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div class="flex w-full justify-between gap-8 mb-3">
            <h2 class="font-bold text-lg self-center"> All School </h2>
            <div class="">
                <button @click="openCreateSchoolModal"
                class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring 
                        focus:ring-opacity-50 bg-blue-500 hover:bg-primary-400 active:bg-primary-600 text-white 
                        border-transparent focus:border-primary-300 focus:ring-primary-200">
                    Create new
                    <svg class="w-5 h-5 -mr-1 inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M12 5l0 14"></path>
                        <path d="M5 12l14 0"></path>
                    </svg>
                </button>
            </div>
        </div>
     
        <schoolTable ></schoolTable>


        <!-- Admin School Create Modal Component -->
        <schoolCreateModal :isVisible="showModal" @close="showModal = false"     
          ref="schoolModal" />

    </div>


</template>

<script setup>
import { ref } from 'vue';
import schoolTable from '~/components/tables/AdminSchoolTable.vue';
import schoolCreateModal from '~/components/shared/schoolCreateModal.vue';
import { useUserStore } from '~/stores/userStore';
const userStore = useUserStore();

const showModal = ref(false);

// Method to open the modal
const openCreateSchoolModal = () => {
  showModal.value = true;
};

// Method to close the modal
const closeModal = () => {
  showModal.value = false;
};

definePageMeta({
  middleware: [
    'auth', 
    'nuxt-permissions'
  ],
  roles: ['admin'],
})

</script>

<style scoped>
.container {
    max-width: 600px;
}
</style>