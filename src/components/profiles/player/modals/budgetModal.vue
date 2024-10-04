<template>
    <!-- Budget change modal -->
    <div v-if="visible" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div
                    class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div class="sm:items-start">
                            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Change
                                    budget</h3>
                                <div class="mt-2">
                                    <p class="text-sm text-gray-500 mb-3">Select your new budget here</p>
                                    <div class="">
                                        <!-- <label class="block mb-1 text-gray-700 font-sans">Budget
                                            <span aria-hidden="true" class="text-red-600"
                                                title="This field is required">*</span>
                                        </label> -->

                                        <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                            <BudgetDropdown :budgets="budgets" v-model="selectedBudget" id="budgets"
                                                label="Budgets *" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button type="button" @click="saveBudget"
                            class="inline-flex w-full justify-center rounded-md bg-steelBlue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:ml-3 sm:w-auto">Save
                            changes</button>
                        <button type="button" @click="$emit('close', 'budget')"
                            class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

import { ref, watch } from 'vue';
import { useNuxtApp } from '#app';
import { handleError } from '@/utils/handleError';
import InputError from '@/components/common/input/InputError.vue';
import { loadBudgetList } from '~/services/commonService';
import BudgetDropdown from '~/components/common/select/profile/BudgetDropdown.vue';


const nuxtApp = useNuxtApp();
const $userService = nuxtApp.$userService;
const $publicService = nuxtApp.$publicService;


const user_slug = ref('');
const budgets = ref([]);
const selectedBudget = ref(null);

const props = defineProps({
    visible: Boolean,
    slug: String
});


// Define emits to handle custom events like close
const emit = defineEmits(['close']);

onMounted(() => {
    loadBudgets();
    if (props.slug) {
        user_slug.value = props.slug;
        fetchPlayerBudget(props.slug);
    }
});

watch(() => props.visible, (newVal) => {
    if (newVal && props.slug) {
        fetchPlayerBudget(props.slug);
    }
});

const fetchPlayerBudget = async (slug) => {

    try {
        // Log before making the API call to ensure that it's being called properly
        const dataSets = await $publicService.get_user_profile(slug);

        // Check if the data exists and is structured correctly
        if (dataSets && dataSets.profile_info && dataSets.profile_info.other_data) {
            const { budget_min, budget_max } = dataSets.profile_info.other_data;


            // Ensure budgets are loaded before matching
            if (budgets.value.length > 0) {
                const matchingBudget = budgets.value.find(
                    (budget) => budget.budget_min === budget_min && budget.budget_max === budget_max
                );

                if (matchingBudget) {
                    selectedBudget.value = matchingBudget;  // Set the selected budget
                } else {
                    console.log('No matching budget found for budget_min:', budget_min, 'budget_max:', budget_max);
                    selectedBudget.value = null;  // If no match, set to null
                }
            }
        } else {
            console.log('No profile_info or other_data found in API response');
        }
    } catch (error) {
        console.error('Error fetching player budget:', error);  // Catch any error and log it
        nuxtApp.$notification.triggerNotification(error.display_message, 'failure');
    }
};





// Function to update player bio
const updatePlayerBudget = async () => {
    try {
        const { budget_min, budget_max } = selectedBudget.value;
        const request_body = { user_slug: props.slug, budget_min: budget_min, budget_max: budget_max };
        const response = await $userService.update_player_budget(request_body);  // Pass slug and request body
        if (response.status == '200') {
            clearUserBudget();
            // Trigger success notification
            nuxtApp.$notification.triggerNotification(response.display_message, 'success');
            // Emit close event to parent to close the modal
            emit('close', 'budget');  // Close the modal after successfully updating the bio
        } else {
            nuxtApp.$notification.triggerNotification(response.display_message, 'warning');
        }

    } catch (error) {
        // Handle error
        nuxtApp.$notification.triggerNotification(error.display_message, 'failure');
    }
};

const loadBudgets = async () => {
    try {
        // Load budgets into the `budgets` ref
        const budgetData = await loadBudgetList();
        budgets.value = budgetData;  // Ensure the budgets are loaded

        // Log budgets as a plain array
        console.log('Budgets loaded:', JSON.parse(JSON.stringify(budgets.value)));
    } catch (error) {
        console.error('Error loading budgets:', error);
    }
};

// Save budget when the user clicks "Save changes"
const saveBudget = () => {
    updatePlayerBudget();
}

const clearUserBudget = () => {
    selectedBudget.value = '';
};

</script>