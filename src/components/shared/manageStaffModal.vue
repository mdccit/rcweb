<template>
    <div class="bg-white p-8 md:p-12 rounded-xl relative">
                <div class="absolute top-0 right-0 pt-8 pr-8 md:pt-12 md:pr-12"><button dusk="close-modal-button"
                        type="button" class="text-gray-400 hover:text-gray-500"><span class="sr-only">Close</span><svg
                            class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 6l-12 12"></path>
                            <path d="M6 6l12 12"></path>
                        </svg></button></div>
                <h1 class="font-bold text-2xl mb-3 text-black">Updating Coach 3276</h1>
                <h3 class="text-black">Role: Coach</h3>
                <form data-splade-id="A0D7EkrDRCZY8Xs6" method="PUT"
                    action="https://qa1.recruited.qualitapps.com/admin/schools/9c0a3542-8593-429e-b703-2e6afdf86c63/users/9bd0c874-d523-4444-806c-5999cf19533d">
                    <fieldset>

                        <div class="my-8"></div>
                        <h2 class="font-bold text-xl mb-3 text-black">Assigned teams</h2>
                        <div class="flex flex-col gap-2">
                            <div><label class="flex items-center"><input name="teams[]" type="checkbox"
                                        data-validation-key="teams[]"
                                        class="rounded-full p-3 border-border-alt text-blue-500 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                                        checked="" true-value="2023" false-value="false" value="2023"><span
                                        class="ml-4 text-black">QATest_Team1</span></label><!----></div>
                            <div><label class="flex items-center"><input name="teams[]" type="checkbox"
                                        data-validation-key="teams[]"
                                        class="rounded-full p-3 border-border-alt text-blue-500 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                                        checked="" true-value="2024" false-value="false" value="2024"><span
                                        class="ml-4 text-black">QATest_Team2</span></label><!----></div>
                            <div><label class="flex items-center"><input name="teams[]" type="checkbox"
                                        data-validation-key="teams[]"
                                        class="rounded-full p-3 border-border-alt text-blue-500 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                                        checked="" true-value="2027" false-value="false" value="2027"><span
                                        class="ml-4 text-black">teamnew</span></label><!----></div>
                            <div><label class="flex items-center"><input name="teams[]" type="checkbox"
                                        data-validation-key="teams[]"
                                        class="rounded-full p-3 border-border-alt text-blue-500 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                                        checked="" true-value="2028" false-value="false" value="2028"><span
                                        class="ml-4 text-black">wwww</span></label><!----></div>
                        </div>
                        <div class="my-8"></div>
                        <div class="w-full"><label class="block"><span class="block mb-1 text-gray-700 font-sans">
                                    Account type </span>
                                <div class="relative">
                                    <div class="">
                                        <label for="countries"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
                                            an option</label>
                                        <select id="countries"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 dark:placeholder-gray-400 light:text-gray light:focus:ring-blue-500 light:focus:border-blue-500">
                                            <option selected>Choose a Role</option>
                                            <option value="US">Admin</option>
                                            <option value="US">Member</option>
                                          
                                        </select>
                                    </div><!---->
                                </div>
                            </label><!----></div>
                        <div class="my-8"></div>
                        <div class="self-center"><button type="submit"
                                class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-blue-500 hover:bg-blue-800 active:bg-blue-600 text-white border-transparent focus:border-primary-300 focus:ring-primary-200">
                                <div class="flex flex-row items-center justify-center"><!----><span class=""> Save
                                    </span></div>
                            </button></div>
                    </fieldset>
                </form>
                <form data-splade-id="ptYyBdSS1bxnLoAp" method="DELETE"
                    action="https://qa1.recruited.qualitapps.com/admin/schools/9c0a3542-8593-429e-b703-2e6afdf86c63/users/215">
                    <fieldset>
                        <div class="my-8"></div>
                        <div class="self-center"><button type="submit"
                                class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-red-500 hover:bg-red-400 active:bg-red-600 text-white border-transparent focus:border-red-700 focus:ring-red-200">
                                <div class="flex flex-row items-center justify-center"><!----><span class=""> Remove
                                        from school </span></div>
                            </button></div>
                    </fieldset>
                </form>
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