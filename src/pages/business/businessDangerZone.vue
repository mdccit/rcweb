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
                <NuxtLink to="businessGeneral">
                    <button type="submit"
                        class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                        View <svg class="w-5 h-5 -mr-1 inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M17 7l-10 10"></path>
                            <path d="M8 7l9 0l0 9"></path>
                        </svg>
                    </button>
                    </NuxtLink>
            </div>
        </div>
    </div>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="flex gap-x-4">
                <NuxtLink to="businessGeneral"><button
                        class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 bg-gray-200">
                        General Details </button></NuxtLink>
                <NuxtLink to="businessMembers"><button
                        class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 bg-gray-200">
                        Members </button></NuxtLink>
                <NuxtLink to="businessDangerZone"><button
                        class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 opacity-50">
                        Danger Zone </button></NuxtLink>
            </div>
            <div class="my-8"></div>
            <div class="">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="border-2 p-4 rounded">
                            <form data-splade-id="w3ozNtwS98E5MR7v" method="DELETE"
                                action="https://qa1.recruited.qualitapps.com/admin/businesses/9c7d0c22-c388-4383-8da0-4d83319cf4ba/danger-zone">
                                <fieldset class="text-black"> Delete business <div class=""><button type="submit"
                                            class="border rounded-full shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-red-500 hover:bg-red-700 text-white border-transparent focus:border-red-700 focus:ring-red-200">
                                            <div class="flex flex-row items-center justify-center"><!----><span
                                                    class=""> Proceed + delete? </span></div>
                                        </button></div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
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


definePageMeta({
    ssr: true,
    layout: 'admin',
    middleware: ['permissions'],
    roles: ['admin'],
});

</script>

<style scoped>
.container {
    max-width: 600px;
}
</style>