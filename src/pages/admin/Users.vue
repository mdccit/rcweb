<template>
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div class="flex w-full justify-between gap-8 mb-3">
            <h2 class="font-bold text-lg self-center text-black"> All Users </h2>

            <div class="">

                <button type="submit" class=" border rounded-full shadow-sm font-bold py-2.5 px-8 
                        focus:outline-none
                        bg-blue-500 hover:bg-blue-700 
                        active:bg-blue-600 text-white 
                        border-transparent focus:border-primary-300 
                        focus:ring-blue-700" @click="showModal = true">
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

        <AdminUserTable></AdminUserTable>

        <!-- Admin User Create Modal Component -->
        <AdminUserCreateModal :isVisible="showModal" @close="showModal = false" />
    </div>



</template>

<style scoped>
.container {
    max-width: 600px;
}
</style>


<script setup>
import { ref } from 'vue';
import AdminUserTable from '~/components/tables/AdminUserTable.vue';
import AdminUserCreateModal from '~/components/admin/user/adminUserCreateModal.vue';
import { useUserStore } from '~/stores/userStore';
const userStore = useUserStore();

const showModal = ref(false);

// Reference to the modal component
const modalRef = ref(null);

// Function to open the modal
const openModal = () => {
    modalRef.value.openModal();
};

definePageMeta({
    ssr: false,
    layout: 'admin',
    // middleware: ['permissions'],
    roles: ['admin'],
});

</script>