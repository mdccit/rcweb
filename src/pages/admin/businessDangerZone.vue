<template>
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div class="flex w-full justify-between gap-8">
            <div class="flex items-center gap-4"><a href="https://qa1.recruited.qualitapps.com/admin/users"><svg
                        class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M15 6l-6 6l6 6"></path>
                    </svg></a>
                <h2 class="font-bold text-lg self-center text-black"> Editing: f d </h2>
            </div>
            <div class=""><a
                    href="https://qa1.recruited.qualitapps.com/app/u/9c9ad039-6106-40d6-92de-b5c7556b05a7"><button
                        type="submit"
                        class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                        View <svg class="w-5 h-5 -mr-1 inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M17 7l-10 10"></path>
                            <path d="M8 7l9 0l0 9"></path>
                        </svg></button></a></div>
        </div>
    </div>


    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 text-black">
            <div class="flex gap-x-4"><a
                    href="https://qa1.recruited.qualitapps.com/admin/users/9c9ad039-6106-40d6-92de-b5c7556b05a7"><button
                        class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 opacity-50">
                        Account Details </button></a><a
                    href="https://qa1.recruited.qualitapps.com/admin/users/9c9ad039-6106-40d6-92de-b5c7556b05a7/player/profile"><button
                        class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 opacity-50">
                        Profile </button></a><a
                    href="https://qa1.recruited.qualitapps.com/admin/users/9c9ad039-6106-40d6-92de-b5c7556b05a7/player/media"><button
                        class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 opacity-50"> Media
                    </button></a><a
                    href="https://qa1.recruited.qualitapps.com/admin/users/9c9ad039-6106-40d6-92de-b5c7556b05a7/connections"><button
                        class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 opacity-50">
                        Connections </button></a><a
                    href="https://qa1.recruited.qualitapps.com/admin/users/9c9ad039-6106-40d6-92de-b5c7556b05a7/lists"><button
                        class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 opacity-50"> Lists
                    </button></a><a
                    href="https://qa1.recruited.qualitapps.com/admin/users/9c9ad039-6106-40d6-92de-b5c7556b05a7/danger-zone"><button
                        class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 bg-gray-200">
                        Danger Zone </button></a></div>
            <div class="my-8"></div>
            <div class="">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="border-2 p-4 rounded">
                            
                                <fieldset> Delete Business <div class=""><button type="submit" @click="showModal = true"
                                            class="border rounded-full shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-red-500 hover:bg-red-700 text-white border-transparent focus:border-red-700 focus:ring-red-200">
                                            <div class="flex flex-row items-center justify-center"><!----><span
                                                    class=""> Delete account </span></div>
                                        </button></div>
                                </fieldset>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Admin Business delete Modal Component -->
       <AdminBusinessDeleteModal :isVisible="showModal" @close="showModal = false" :businesslId="businesslId" @emitMessage="notification" />

       <!-- Notification Component -->
       <Notification v-if="showNotification" :message="notificationMessage" :duration="8000" />
    </div>

</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '~/stores/userStore'
import AdminBusinessDeleteModal from '~/components/admin/user/adminBusinessDeleteModal.vue';
import Notification from '~/components/common/Notification.vue';
import { useRouter } from 'vue-router';

const route = useRoute()

const businesslId = ref(route.params.businesslId || '9cdfb2fd-161e-4738-b0c6-479a553eeda3');

const notificationMessage = ref('');
const showNotification = ref(false);
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

const notification = (message) =>{
    
    notificationMessage.value = message;
    showNotification.value =true
}
</script>

<style scoped>
.container {
    max-width: 600px;
}
</style>
