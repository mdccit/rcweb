<template>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="flex gap-x-4"><a
                    href="https://qa1.recruited.qualitapps.com/admin/businesses/9c7d0c22-c388-4383-8da0-4d83319cf4ba"><button
                        class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 opacity-50">
                        General Details </button></a><a
                    href="https://qa1.recruited.qualitapps.com/admin/businesses/9c7d0c22-c388-4383-8da0-4d83319cf4ba/teams"><button
                        class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 bg-gray-200">
                        Members </button></a><a
                    href="https://qa1.recruited.qualitapps.com/admin/businesses/9c7d0c22-c388-4383-8da0-4d83319cf4ba/danger-zone"><button
                        class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 opacity-50">
                        Danger Zone </button></a></div>
            <div class="my-8"></div>
            <div class="">
                <div class="my-8"></div>
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                    <div class="flex justify-between">
                        <div class="flex-1 text-2xl font-bold mb-4"> All Members </div>
                        <div class=""><a
                                href="https://qa1.recruited.qualitapps.com/admin/businesses/9c7d0c22-c388-4383-8da0-4d83319cf4ba/users/create"><button
                                    type="submit"
                                    class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-primary-500 hover:bg-primary-400 active:bg-primary-600 text-white border-transparent focus:border-primary-300 focus:ring-primary-200">
                                    Add User </button></a></div>
                    </div>
                    <div class="grid gap-4">
                        <div class="flex flex-col lg:flex-row gap-6 py-2"><a
                                href="https://qa1.recruited.qualitapps.com/admin/users/9c08427b-b28b-41ed-8f60-ce7bc26f201c"
                                class="flex flex-row flex-1 gap-6"><a
                                    href="https://qa1.recruited.qualitapps.com/app/u/9c08427b-b28b-41ed-8f60-ce7bc26f201c"
                                    class="flex flex-row gap-4 flex-1"><img
                                        src="https://qa1.recruited.qualitapps.com/storage/profile-photos/JuWLtk75Qtv2Wj9i3CMfbZYxZ9kgH8JJJhPivyZn.png"
                                        alt="User profile picture" class="h-12 w-12 rounded-full">
                                    <div class="self-center flex-1"><strong class="capitalize">QATest_Player01</strong>
                                        <p class="opacity-75 line-clamp-1">Role title: Business</p>
                                    </div>
                                </a></a>
                            <div class="self-center flex flex-wrap gap-2"><a
                                    href="https://qa1.recruited.qualitapps.com/admin/businesses/9c7d0c22-c388-4383-8da0-4d83319cf4ba/users/13/edit"><button
                                        type="submit"
                                        class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                                        Manage </button></a></div>
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
import BusinessTable from '~/components/tables/BusinessTable.vue';

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