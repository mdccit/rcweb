<template>
    <!-- Modal Backdrop -->
    <div v-if="isVisible" id="crud-modal" tabindex="-1" aria-hidden="true"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <!-- Modal Content Wrapper -->
        <div class="relative w-full max-w-md p-4 mx-auto">
            <!-- Modal Box -->
            <div class="relative bg-white rounded-lg shadow light:bg-gray-700">
                <!-- Modal Header -->
                <div class="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-200">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-gray">Create School</h3>
                    <button @click="$emit('close')"
                        class="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center light:hover:bg-gray-600 light:hover:text-white">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <!-- Modal Body -->
                <div class="p-6 space-y-6">
                    <!-- Form Fields -->
                    <div class="bg-white p-8 md:p-12 rounded-xl relative">
                        <div class="absolute top-0 right-0 pt-8 pr-8 md:pt-12 md:pr-12"><button
                                dusk="close-modal-button" type="button" class="text-gray-400 hover:text-gray-500"><span
                                    class="sr-only">Close</span><svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M18 6l-12 12"></path>
                                    <path d="M6 6l12 12"></path>
                                </svg></button></div>
                        <h1 class="font-bold text-2xl mb-3">Updating PlayerAdm1</h1>
                        <form data-splade-id="5QgWuQmbrDfs4wL9" method="PUT"
                            action="https://qa1.recruited.qualitapps.com/admin/schools/9c2845cc-7676-45e1-b498-13f930b22e9b/users/9c28453b-5cc0-4c0a-b9bf-9c6b95b44a70">
                            <fieldset>
                                <div class=""><label class="block"><span class="block mb-1 text-gray-700 font-sans">
                                            Role name </span>
                                        <div class="flex rounded-lg border border-gray-300 shadow-sm"><input
                                                class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                name="role" type="text" data-validation-key="role"></div>
                                    </label><!----></div>
                                <div class="my-8"></div>
                                <h2 class="font-bold text-xl mb-3">Assigned teams</h2>
                                <div class="flex flex-col gap-2">
                                    <div><label class="flex items-center"><input name="teams[]" type="checkbox"
                                                data-validation-key="teams[]"
                                                class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                                                checked="" true-value="2026" false-value="false" value="2026"><span
                                                class="ml-4">Test team</span></label><!----></div>
                                </div>
                                <div class="my-8"></div>
                                <div class="w-full"><label class="block"><span
                                            class="block mb-1 text-gray-700 font-sans"> Account type </span>
                                        <div class="relative">
                                            <div class=""><select name="is_admin" data-validation-key="is_admin"
                                                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 px-5 py-3 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50">
                                                    <option value="1"> Admin (can manage users and posts) </option>
                                                    <option value="0"> Member (can post) </option>
                                                </select></div><!---->
                                        </div>
                                    </label><!----></div>
                                <div class="my-8"></div>
                                <div class="self-center"><button type="submit"
                                        class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-primary-500 hover:bg-primary-400 active:bg-primary-600 text-white border-transparent focus:border-primary-300 focus:ring-primary-200">
                                        <div class="flex flex-row items-center justify-center"><!----><span class="">
                                                Save </span></div>
                                    </button></div>
                            </fieldset>
                        </form>
                        <form data-splade-id="REiki1WJGCKnHmOp" method="DELETE"
                            action="https://qa1.recruited.qualitapps.com/admin/schools/9c2845cc-7676-45e1-b498-13f930b22e9b/users/189">
                            <fieldset>
                                <div class="my-8"></div>
                                <div class="self-center"><button type="submit"
                                        class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-red-500 hover:bg-red-400 active:bg-red-600 text-white border-transparent focus:border-red-700 focus:ring-red-200">
                                        <div class="flex flex-row items-center justify-center"><!----><span class="">
                                                Remove from school </span></div>
                                    </button></div>
                            </fieldset>
                        </form>
                    </div>

                </div>
                <!-- Modal Footer -->
                <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-300">
                    <button @click="handleSubmit"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Create
                    </button>
                    <button @click="$emit('close')"
                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 light:bg-gray-700 light:text-gray-300 light:border-gray-500 light:hover:text-white light:hover:bg-gray-600">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    isVisible: {
        type: Boolean,
        required: true,
    },
});

const emit = defineEmits(['close']);

function handleSubmit() {
    // Handle form submission logic here
    emit('close');
}
</script>