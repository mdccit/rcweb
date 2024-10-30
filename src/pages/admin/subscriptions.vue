<template>
    <header class="bg-gray-200">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div class="flex w-full justify-between gap-8">
                <h2 class="font-bold text-lg self-center text-black"> Subscriptions </h2>
                <div class="">
                    <!-- <button @click="openSubscriptionModal"
                        class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-blue-500 hover:bg-blue-500 active:bg-blue-600 text-white border-transparent focus:border-blue-300 focus:ring-blue-200">
                        Create new <svg class="w-5 h-5 -mr-1 inline" xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 5l0 14"></path>
                            <path d="M5 12l14 0"></path>
                        </svg>
                    </button> -->
                </div>
            </div>
        </div>
    </header>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <AdminSubscriptionTable :ref="subscriptionTableRef"></AdminSubscriptionTable>
        </div>

    </div>
</template>

<script setup>
import AdminSubscriptionTable from '@/components/tables/AdminSubscriptionTable.vue';

const showModal = ref(false);

// Reference to AdminBusinessTable component
const subscriptionTableRef = ref(null);

// Method to open the modal
const openSubscriptionModal = () => {
    showModal.value = true;
};


definePageMeta({
    ssr: false,
    layout: 'admin',
    middleware: ['role'],
    requiredRole: ['admin'],
});
</script>

<style scoped>
.container {
    max-width: 600px;
}
</style>


