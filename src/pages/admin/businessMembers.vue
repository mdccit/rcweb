<template>
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div class="flex w-full justify-between gap-8">
            <div class="flex items-center gap-4"><a href="https://qa1.recruited.qualitapps.com/admin/businesses"><svg
                        class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M15 6l-6 6l6 6"></path>
                    </svg></a>
                <h2 class="font-bold text-lg self-center text-black"> Editing: DEF Business </h2>
            </div>
            <div class="">
                <NuxtLink to="/business/9c7d0c22-c388-4383-8da0-4d83319cf4ba"><button type="submit"
                        class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                        View <svg class="w-5 h-5 -mr-1 inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M17 7l-10 10"></path>
                            <path d="M8 7l9 0l0 9"></path>
                        </svg></button></NuxtLink>
            </div>
        </div>
    </div>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="flex gap-x-4">
                <NuxtLink to="/admin/businesses/9c7d0c22-c388-4383-8da0-4d83319cf4ba"><button
                        class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 opacity-50">
                        General Details </button></NuxtLink>
                <NuxtLink to="/admin/businesses/9c7d0c22-c388-4383-8da0-4d83319cf4ba/teams"><button
                        class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 bg-gray-200">
                        Members </button></NuxtLink>
                <NuxtLink to="/admin/businesses/9c7d0c22-c388-4383-8da0-4d83319cf4ba/danger-zone"><button
                        class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 opacity-50">
                        Danger Zone </button></NuxtLink>
            </div>
            <div class="my-8"></div>
            <div class="">
                <div class="my-8"></div>
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                    <div class="flex justify-between">
                        <div class="flex-1 text-2xl font-bold mb-4 text-black"> All Members </div>
                        <div class="">
                            <NuxtLink to="//admin/businesses/9c7d0c22-c388-4383-8da0-4d83319cf4ba/users/create"><button
                                    type="submit"
                                    class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-blue-500 hover:bg-blue-700 active:bg-primary-600 text-white border-transparent focus:border-primary-300 focus:ring-primary-200">
                                    Add User </button>
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="grid gap-4">
                        <div class="flex flex-col lg:flex-row gap-6 py-2">
                            <img src="https://qa1.recruited.qualitapps.com/storage/profile-photos/JuWLtk75Qtv2Wj9i3CMfbZYxZ9kgH8JJJhPivyZn.png"
                                alt="User profile picture" class="h-12 w-12 rounded-full">
                            <div class="self-center flex-1"><strong
                                    class="capitalize text-black">QATest_Player01</strong>
                                <p class="opacity-75 line-clamp-1 text-black">Role title: Business</p>
                            </div>

                            <div class="self-center flex flex-wrap gap-2">
                                <NuxtLink to="/admin/businesses/9c7d0c22-c388-4383-8da0-4d83319cf4ba/users/13/edit">
                                    <button type="submit"
                                        class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                                        Manage </button>
                                </NuxtLink>
                            </div>
                        </div>

                        <div class="flex flex-col lg:flex-row gap-6 py-2">
                            <img src="https://qa1.recruited.qualitapps.com/storage/profile-photos/JuWLtk75Qtv2Wj9i3CMfbZYxZ9kgH8JJJhPivyZn.png"
                                alt="User profile picture" class="h-12 w-12 rounded-full">
                            <div class="self-center flex-1"><strong
                                    class="capitalize text-black">QATest_Player01</strong>
                                <p class="opacity-75 line-clamp-1 text-black">Role title: Business</p>
                            </div>

                            <div class="self-center flex flex-wrap gap-2">
                                <NuxtLink to="/admin/businesses/9c7d0c22-c388-4383-8da0-4d83319cf4ba/users/13/edit">
                                    <button type="submit"
                                        class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                                        Manage </button>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="my-16"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '~/stores/userStore'
import schoolTable from '~/components/tables/AdminSchoolTable.vue';
import schoolCreateModal from '~/components/shared/schoolCreateModal.vue';

const userStore = useUserStore()

const email = userStore.user?.email
const token = userStore.user?.token

// Reference to the modal component
const modalRef = ref(null);

// Function to open the modal
const openModal = () => {
    modalRef.value.openModal();
    console.log('open')
}

</script>

<style scoped>
.container {
    max-width: 600px;
}
</style>