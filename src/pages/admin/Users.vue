<template>
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div class="flex w-full justify-between gap-8 mb-3">
            <h2 class="font-bold text-lg self-center"> All Users </h2>

            <div class="">
                <a href="https://qa1.recruited.qualitapps.com/admin/users/create">
                    <button type="submit" class=" border rounded-full shadow-sm font-bold py-2.5 px-8 
                        focus:outline-none focus:ring focus:ring-opacity-50 
                        bg-blue-500 hover:bg-primary-400 
                        active:bg-primary-600 text-white 
                        border-transparent focus:border-primary-300 
                        focus:ring-primary-200">
                        Create new
                        <svg class="w-5 h-5 -mr-1 inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 5l0 14"></path>
                            <path d="M5 12l14 0"></path>
                        </svg>
                    </button>
                </a>
            </div>
        </div>
        <UserTable></UserTable>

        <!-- Admin User Create Modal Component -->
        <!-- Header with "Create New" Button -->
        <div class="flex justify-between mb-3">
            <h2 class="font-bold text-lg">All Users</h2>
            <button @click="showModal = true"
                class="bg-blue-700 text-white font-medium rounded-lg px-4 py-2 hover:bg-blue-800">
                Show Modal 
               
            </button>
        </div>
        <!-- Admin User Create Modal Component -->
        <AdminUserCreateModal :isVisible="showModal" @close="showModal = false" />
    </div>



</template>

<script setup>
import { ref } from 'vue';
import UserTable from '~/components/tables/UserTable.vue';
import { useUserStore } from '~/stores/userStore'
import AdminUserCreateModal from '~/components/shared/adminUserCreateModal.vue';


const showModal = ref(false);
const userStore = useUserStore()

const email = userStore.user?.email;
const token = userStore.user?.token;

// Reference to the modal component
const modalRef = ref(null);

// Function to open the modal
const openModal = () => {
    modalRef.value.openModal();
};

</script>

<style scoped>
.container {
    max-width: 600px;
}

</style>
