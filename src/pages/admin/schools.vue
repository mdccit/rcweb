<template>
    <header class="bg-gray-200">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div class="flex w-full justify-between gap-8">
                <div class="flex items-center gap-4"><a to="/admin/users">
                        <!-- <svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M15 6l-6 6l6 6"></path>
                        </svg> -->
                    </a>
                    <h2 class="font-bold text-lg self-center"> School</h2>
                </div>
                <div class="">
                    <button @click="openCreateSchoolModal" class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring 
                        focus:ring-opacity-50 bg-steelBlue hover:bg-blue-700 text-white">
                        Create new
                        <svg class="w-5 h-5 -mr-1 inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 5l0 14"></path>
                            <path d="M5 12l14 0"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </header>


    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">

        <schoolTable @reload="refreshTable"></schoolTable>


        <!-- Admin School Create Modal Component -->
        <schoolCreateModal :isVisible="showModal" @close="triggerTableReload" ref="schoolModal" />

    </div>


</template>

<script setup>
import { ref } from 'vue';
import schoolTable from '~/components/tables/AdminSchoolTable.vue';
import schoolCreateModal from '~/components/shared/schoolCreateModal.vue';
import { useUserStore } from '~/stores/userStore';

definePageMeta({
    ssr: true,
    layout: 'admin',
    middleware: ['role'],
    requiredRole: ['admin'],
});


const showModal = ref(false);

// Method to open the modal
const openCreateSchoolModal = () => {
    console.log('opening');
    showModal.value = true;
};

// Method to close the modal
const closeModal = () => {
    showModal.value = false;
};

const triggerTableReload = () => {
    showModal.value = false;
    // Emit the custom event to AdminBusinessTable to reload the data
    const event = new Event('reload');
    document.dispatchEvent(event);
};

</script>

<style scoped>
.container {
    max-width: 600px;
}
</style>