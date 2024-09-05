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
                <h1 class="font-bold text-2xl mb-3 text-black">Updating QATest_Team1</h1><strong
                    class="px-4 py-2 my-6 bg-border rounded-lg block text-black">Remember, all teams should end in
                    "Team", eg.
                    "Mens Team", "Junior Team"</strong>
                <form data-splade-id="Y0ormlgM5XlwuQAb" method="PUT"
                    action="https://qa1.recruited.qualitapps.com/admin/schools/9c0a3542-8593-429e-b703-2e6afdf86c63/teams/2023">
                    <fieldset>
                        <div class=""><label class="block"><span class="block mb-1 text-gray-700 font-sans"> Team name
                                </span>
                                <div class="flex rounded-lg border border-gray-300 shadow-sm"><input
                                        class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                        name="name" type="text" data-validation-key="name"></div>
                            </label><!----></div>
                        <div class="my-8"></div>
                        <h2 class="font-bold text-xl mb-3 text-black">Assigned members</h2>
                        <h4 class="text-black mb-2 text-normal">Coaches</h4>
                        <div><label class="flex items-center text-black"><input name="users[]" type="checkbox"
                                    data-validation-key="users[]"
                                    class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                                    checked="" true-value="9c084ab0-e166-44e8-b10a-28d5c664cc98" false-value="false"
                                    value="9c084ab0-e166-44e8-b10a-28d5c664cc98"><span
                                    class="ml-4">QATest_Coach01</span></label><!----></div>
                        <div><label class="flex items-center text-black"><input name="users[]" type="checkbox"
                                    data-validation-key="users[]"
                                    class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                                    checked="" true-value="9c0a2c8b-80a2-482a-8206-4fdc51e6df35" false-value="false"
                                    value="9c0a2c8b-80a2-482a-8206-4fdc51e6df35"><span class="ml-4">QATestPlayer_03
                                    QA</span></label><!----></div>
                        <div><label class="flex items-center text-black"><input name="users[]" type="checkbox"
                                    data-validation-key="users[]"
                                    class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                                    checked="" true-value="9c162147-f342-42e4-86e1-5fa5391842ef" false-value="false"
                                    value="9c162147-f342-42e4-86e1-5fa5391842ef"><span class="ml-4">Minosha de
                                    Silva</span></label><!----></div>
                        <div><label class="flex items-center text-black"><input name="users[]" type="checkbox"
                                    data-validation-key="users[]"
                                    class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                                    checked="" true-value="9c265602-d6ae-4e45-a8ce-1b1599f49e6a" false-value="false"
                                    value="9c265602-d6ae-4e45-a8ce-1b1599f49e6a"><span
                                    class="ml-4">CoachTeste1</span></label><!----></div>
                        <div><label class="flex items-center text-black"><input name="users[]" type="checkbox"
                                    data-validation-key="users[]"
                                    class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                                    checked="" true-value="9c3a3a55-6781-4d6a-856c-e6ade56d11c8" false-value="false"
                                    value="9c3a3a55-6781-4d6a-856c-e6ade56d11c8"><span class="ml-4">Mckenna
                                    Short</span></label><!----></div>
                        <div>
                            
                            <h4 class="text-black mb-2 text-normal mt-2">Players</h4>
                            
                            <label class="flex items-center text-black"><input name="users[]" type="checkbox"
                                    data-validation-key="users[]"
                                    class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                                    checked="" true-value="9c442715-86b0-49eb-9a0a-01d6d23a9cc0" false-value="false"
                                    value="9c442715-86b0-49eb-9a0a-01d6d23a9cc0"><span class="ml-4">test coache
                                    007</span></label><!----></div>
                        <div><label class="flex items-center text-black"><input name="users[]" type="checkbox"
                                    data-validation-key="users[]"
                                    class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                                    checked="" true-value="9c443aab-bf66-4eb0-b876-7f2390b5a56f" false-value="false"
                                    value="9c443aab-bf66-4eb0-b876-7f2390b5a56f"><span class="ml-4">LakshanC
                                    Jayatilake</span></label><!----></div>
                        <div><label class="flex items-center text-black"><input name="users[]" type="checkbox"
                                    data-validation-key="users[]"
                                    class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                                    checked="" true-value="9c445724-ff52-4d1f-a946-84e6a8f93a66" false-value="false"
                                    value="9c445724-ff52-4d1f-a946-84e6a8f93a66"><span class="ml-4">LakshanC1
                                    Jayatilake1</span></label><!----></div>
                        <div><label class="flex items-center text-black"><input name="users[]" type="checkbox"
                                    data-validation-key="users[]"
                                    class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                                    checked="" true-value="9c4460fd-4c11-4367-b083-72b6973fa93d" false-value="false"
                                    value="9c4460fd-4c11-4367-b083-72b6973fa93d"><span
                                    class="ml-4">lakshanC5</span></label><!----></div>
                        <div><label class="flex items-center text-black"><input name="users[]" type="checkbox"
                                    data-validation-key="users[]"
                                    class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                                    checked="" true-value="9c44a1fb-1f1f-4944-a757-10ee9163b6da" false-value="false"
                                    value="9c44a1fb-1f1f-4944-a757-10ee9163b6da"><span
                                    class="ml-4">lakshanC9</span></label><!----></div>
                        <div><label class="flex items-center text-black"><input name="users[]" type="checkbox"
                                    data-validation-key="users[]"
                                    class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                                    checked="" true-value="9c44a409-b89c-4d9a-8479-765b99ece586" false-value="false"
                                    value="9c44a409-b89c-4d9a-8479-765b99ece586"><span
                                    class="ml-4">lakshanC10</span></label><!----></div>
                        <div><label class="flex items-center text-black"><input name="users[]" type="checkbox"
                                    data-validation-key="users[]"
                                    class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                                    checked="" true-value="9c44f0b6-5aaf-4ae2-89f4-24b1243362ae" false-value="false"
                                    value="9c44f0b6-5aaf-4ae2-89f4-24b1243362ae"><span class="ml-4">LakshanP11
                                    Jayatilake</span></label><!----></div>
                        <div><label class="flex items-center text-black"><input name="users[]" type="checkbox"
                                    data-validation-key="users[]"
                                    class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                                    checked="" true-value="9c44f34e-fa34-4c58-8909-dab16c7d159c" false-value="false"
                                    value="9c44f34e-fa34-4c58-8909-dab16c7d159c"><span
                                    class="ml-4">lakshanC12</span></label><!----></div>
                        <div><label class="flex items-center text-black"><input name="users[]" type="checkbox"
                                    data-validation-key="users[]"
                                    class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                                    checked="" true-value="9c45e23c-4199-4e09-8d18-e6721dd2008b" false-value="false"
                                    value="9c45e23c-4199-4e09-8d18-e6721dd2008b"><span
                                    class="ml-4">lakshanC13</span></label><!----></div>
                        <div><label class="flex items-center text-black"><input name="users[]" type="checkbox"
                                    data-validation-key="users[]"
                                    class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                                    checked="" true-value="9c45e67d-4541-4071-9866-5bb2c362bb71" false-value="false"
                                    value="9c45e67d-4541-4071-9866-5bb2c362bb71"><span class="ml-4">LakshanC15
                                    Jayatilake</span></label><!----></div>
                        <div><label class="flex items-center text-black"><input name="users[]" type="checkbox"
                                    data-validation-key="users[]"
                                    class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                                    checked="" true-value="9c45e90b-993f-4f15-a5ad-1756260183d8" false-value="false"
                                    value="9c45e90b-993f-4f15-a5ad-1756260183d8"><span class="ml-4">LakshanC16
                                    Jayatilake</span></label><!----></div>
                        <div><label class="flex items-center text-black"><input name="users[]" type="checkbox"
                                    data-validation-key="users[]"
                                    class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                                    checked="" true-value="9c5cd44e-6adf-4a88-ac8b-570f9d673fc0" false-value="false"
                                    value="9c5cd44e-6adf-4a88-ac8b-570f9d673fc0"><span class="ml-4">Pedro
                                    Marin</span></label><!----></div>
                        <div class="my-8"></div>
                        <div class="self-center"><button type="submit"
                                class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-blue-500 hover:bg-blue-700 active:bg-primary-600 text-white border-transparent focus:border-primary-300 focus:ring-primary-200">
                                <div class="flex flex-row items-center justify-center"><!----><span class=""> Save
                                    </span></div>
                            </button></div>
                    </fieldset>
                </form>
                <form data-splade-id="oLWOv6YQw7MDwoHK" method="DELETE"
                    action="https://qa1.recruited.qualitapps.com/admin/schools/9c0a3542-8593-429e-b703-2e6afdf86c63/teams/2023">
                    <fieldset>
                        <div class="my-8"></div>
                        <div class="self-center"><button type="submit"
                                class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-red-500 hover:bg-red-400 active:bg-red-600 text-white border-transparent focus:border-red-700 focus:ring-red-200">
                                <div class="flex flex-row items-center justify-center"><!----><span class=""> Delete
                                        team </span></div>
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