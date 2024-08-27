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
                            <form data-splade-id="lG7kPED3SwnY6Kgk" method="DELETE"
                                action="https://qa1.recruited.qualitapps.com/admin/users/9c9ad039-6106-40d6-92de-b5c7556b05a7/danger-zone">
                                <fieldset> Delete user <div class=""><button type="submit"
                                            class="border rounded-full shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-red-500 hover:bg-red-700 text-white border-transparent focus:border-red-700 focus:ring-red-200">
                                            <div class="flex flex-row items-center justify-center"><!----><span
                                                    class=""> Delete account </span></div>
                                        </button></div>
                                </fieldset>
                            </form>
                        </div>
                        <div class="border-2 p-4 rounded">
                            <form data-splade-id="Hpo3ObWiUibl9vmk" method="POST"
                                action="https://qa1.recruited.qualitapps.com/admin/users/9c9ad039-6106-40d6-92de-b5c7556b05a7/danger-zone/disable-2fa">
                                <fieldset> Disable 2FA <div class=""><button type="submit"
                                            class="border rounded-full shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                                            <div class="flex flex-row items-center justify-center"><!----><span
                                                    class=""> Disable 2FA </span></div>
                                        </button></div>
                                </fieldset>
                            </form>
                        </div>
                        <div class="border-2 p-4 rounded">
                            <form data-splade-id="0wHwJIPukhfUwTOg" method="POST"
                                action="https://qa1.recruited.qualitapps.com/admin/users/9c9ad039-6106-40d6-92de-b5c7556b05a7/danger-zone/logout-sessions">
                                <fieldset> Log out sessions <div class=""><button type="submit"
                                            class="border rounded-full shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                                            <div class="flex flex-row items-center justify-center"><!----><span
                                                    class=""> Log out sessions </span></div>
                                        </button></div>
                                </fieldset>
                            </form>
                        </div>
                        <div class="border-2 p-4 rounded">
                            <div class=""> Send notification to user manually </div><a
                                href="https://qa1.recruited.qualitapps.com/admin/users/9c9ad039-6106-40d6-92de-b5c7556b05a7/danger-zone/create-notification"><button
                                    type="submit"
                                    class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                                    <div class="flex flex-row items-center justify-center"><!----><span class=""> Send
                                            notification </span></div>
                                </button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import UserTable from '~/components/tables/UserTable.vue';
import { useUserStore } from '~/stores/userStore'
import AdminUserCreateModal from '~/components/admin/user/adminUserCreateModal.vue';


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
