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
        <userModal></userModal>
        <button data-modal-target="crud-modal" data-modal-toggle="crud-modal"
            class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button">
            Toggle modal
        </button>
    </div>



</template>

<script setup>
import UserTable from '~/components/tables/UserTable.vue';
import { useUserStore } from '~/stores/userStore'
import { userModal} from '~/components/shared/adminUserCreateModal.vue'

const userStore = useUserStore()

const email = userStore.user?.email
const token = userStore.user?.token
</script>

<style scoped>
.container {
    max-width: 600px;
}
</style>

<script>
export default {
components: {
    userModal,
    },
}
</script>