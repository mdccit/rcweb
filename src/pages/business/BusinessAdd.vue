<template>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="">
                <h1 class="font-bold text-2xl mb-3 text-black">Search for a user to add</h1>
                <form data-splade-id="2EEp92U5CYi9Kdme" method="GET"
                    action="https://qa1.recruited.qualitapps.com/admin/businesses/9c7d0c22-c388-4383-8da0-4d83319cf4ba/users/create">
                    <fieldset>
                        <div class="flex items-center">
                            <div class="w-full"><label class="block">
                                    <div class="flex rounded-lg border border-gray-300 shadow-sm"><input
                                            class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                            name="q" type="text" data-validation-key="q"></div>
                                </label><!----></div>
                            <div class="mx-4"></div>
                            <div class=""><button type="submit"
                                    class="border rounded-full shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                                    <div class="flex flex-row items-center justify-center"><!----><span class=""> Search
                                        </span></div>
                                </button></div>
                        </div>
                    </fieldset>
                </form>
                <div class="flex flex-row gap-6 py-6"><a
                        href="https://qa1.recruited.qualitapps.com/app/u/9c52657c-14a7-439d-a36d-fa1a29e28071"
                        class="flex flex-row gap-4 flex-1"><img
                            src="https://ui-avatars.com/api/?name=D+B+U&amp;color=7F9CF5&amp;background=EBF4FF"
                            alt="User profile picture" class="h-12 w-12 rounded-full">
                        <div class="self-center flex-1"><strong class="capitalize text-black">DEF Business User</strong>
                            <p class="opacity-75 line-clamp-1"></p>
                        </div>
                    </a>
                    <div class="self-center">
                        <form data-splade-id="S8mdu1lr6aOQYL1D" method="POST"
                            action="https://qa1.recruited.qualitapps.com/admin/businesses/9c7d0c22-c388-4383-8da0-4d83319cf4ba/users/store">
                            <fieldset class="opacity-50">
                                <div class=""><button type="submit"
                                        class="border rounded-full  text-black shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                                        Add to business </button></div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
            <div class="p-20"></div>
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