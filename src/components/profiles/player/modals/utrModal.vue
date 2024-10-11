<template>
    <!-- UTR change modal -->
    <div v-if="visible" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div
                    class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Change Your
                                    Info</h3>
                                <div class="mt-2">
                                    <p class="text-sm text-gray-500 mb-3">
                                    </p>

                                    <div>
                                        <div class="">
                                            <div class="grid sm:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-2 mb-2">
                                                <div class="mb-2 sm:col-span-2 col-span-1 lg:col-span-1">
                                                    <label class="block mb-1 text-gray-700 font-sans text-sm">UTR
                                                        <span aria-hidden="true" class="text-red-600"
                                                            title="This field is required">*</span></label>
                                                    <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                        <input id="first_name" v-model="utr" autocomplete="given-name"
                                                            class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                            placeholder="" required>
                                                    </div>
                                                    <InputError :error="errors.utr ? errors.utr.join(', ') : ''" />
                                                </div>
                                                <div class="mb-2 sm:col-span-2 col-span-1 lg:col-span-1">
                                                    <label class="block mb-1 text-gray-700 font-sans text-sm">WTN
                                                        <span aria-hidden="true" class="text-red-600"
                                                            title="This field is required">*</span></label>
                                                    <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                        <input id="first_name" v-model="wtn" autocomplete="given-name" 
                                                            class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                            placeholder="" required>
                                                    </div>
                                                    <InputError :error="errors.wtn_score_manual ? errors.wtn_score_manual.join(', ') : ''" />
                                                </div>
                                            </div>
                                            <div class="grid sm:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-2 mb-2">
                                                <div class="mb-2 sm:col-span-2 col-span-1 lg:col-span-1">
                                                    <label class="block mb-1 text-gray-700 font-sans text-sm">GPA
                                                        <span aria-hidden="true" class="text-red-600"
                                                            title="This field is required">*</span></label>
                                                    <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                        <input id="gpa" v-model="gpa" autocomplete="given-name"
                                                            class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                            placeholder="" required>
                                                    </div>
                                                    <InputError :error="errors.gpa ? errors.gpa.join(', ') : ''" />
                                                </div>
                                                <div class="mb-2 sm:col-span-2 col-span-1 lg:col-span-1">
                                                    <label class="block mb-1 text-gray-700 font-sans text-sm">ACT Score
                                                        <span aria-hidden="true" class="text-red-600"
                                                            title="This field is required">*</span></label>
                                                    <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                        <input id="first_name" v-model="act" autocomplete="given-name"
                                                            class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                            placeholder="" required>
                                                    </div>
                                                    <InputError :error="errors.act_score ? errors.act_score.join(', ') : ''" />
                                                </div>
                                            </div>
                                            <div class="grid sm:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-2 mb-2">
                                                <div class="mb-2 sm:col-span-2 col-span-1 lg:col-span-1">
                                                    <label class="block mb-1 text-gray-700 font-sans text-sm">SAT Score
                                                        <span aria-hidden="true" class="text-red-600"
                                                            title="This field is required">*</span></label>
                                                    <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                        <input id="first_name" v-model="sat" autocomplete="given-name"
                                                            class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                            placeholder="" required>
                                                    </div>
                                                    <InputError :error="errors.sat_score ? errors.sat_score.join(', ') : ''" />
                                                </div>
                                                <div class="mb-2 sm:col-span-2 col-span-1 lg:col-span-1">
                                                    <label class="block mb-1 text-gray-700 font-sans text-sm">TOEFL
                                                        Score
                                                        <span aria-hidden="true" class="text-red-600"
                                                            title="This field is required">*</span></label>
                                                    <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                        <input id="toefl" v-model="toefl" autocomplete="given-name"
                                                            class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                            placeholder="" required>
                                                    </div>
                                                    <InputError :error="errors.toefl_score ? errors.toefl_score.join(', ') : ''" />
                                                </div>
                                            </div>

                                            <div class="grid sm:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-2 mb-2">
                                                <div class="mb-2 sm:col-span-2 col-span-1 lg:col-span-1">
                                                    <label class="block mb-1 text-gray-700 font-sans text-sm">ATP
                                                        Ranking
                                                        <span aria-hidden="true" class="text-red-600"
                                                            title="This field is required">*</span></label>
                                                    <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                        <input id="first_name" v-model="atp" autocomplete="given-name"
                                                            class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                            placeholder="" required>
                                                    </div>
                                                    <InputError :error="errors.atp_ranking ? errors.atp_ranking.join(', ') : ''" />
                                                </div>
                                                <div class="mb-2 sm:col-span-2 col-span-1 lg:col-span-1">
                                                    <label class="block mb-1 text-gray-700 font-sans text-sm">National
                                                        Ranking
                                                        <span aria-hidden="true" class="text-red-600"
                                                            title="This field is required">*</span></label>
                                                    <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                        <input id="first_name" v-model="nationalRanking"
                                                            autocomplete="given-name"
                                                            class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                            placeholder="" required>
                                                    </div>
                                                    <InputError :error="errors.national_ranking ? errors.national_ranking.join(', ') : ''" />
                                                </div>
                                              
                                            </div>

                                            <div class="grid sm:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-2 mb-2">
                                                <div class="mb-2 sm:col-span-2 col-span-1 lg:col-span-1">
                                                    <label class="block mb-1 text-gray-700 font-sans text-sm">ITF
                                                        Ranking
                                                        <span aria-hidden="true" class="text-red-600"
                                                            title="This field is required">*</span></label>
                                                    <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                        <input id="first_name" v-model="itf" autocomplete="given-name"
                                                            class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                            placeholder="" required>
                                                    </div>
                                                    <InputError :error="errors.itf_ranking ? errors.itf_ranking.join(', ') : ''" />
                                                </div>
                                              
                                              
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button type="button" @click="saveCoreValues"  :disabled="loading"
                            class="inline-flex w-full justify-center rounded-md bg-steelBlue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:ml-3 sm:w-auto">Save
                            changes
                            <svg v-if="loading" aria-hidden="true" role="status" class="mt-[3px] ml-[5px] inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                              </svg></button>
                        <button type="button" @click="$emit('close', 'utr')"
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

const nuxtApp = useNuxtApp();
const $userService = nuxtApp.$userService;
const $publicService = nuxtApp.$publicService;

const props = defineProps({
    visible: Boolean,
    slug: String
});

const error = ref('');
const errors = ref('');
const loading = ref(false);
const showNotification = ref(false);
const notificationMessage = ref('');
const notification_type = ref(0);


const user_slug = ref('');
const utr = ref(0)
const gpa = ref(null);
const sat = ref(null);
const toefl = ref(null);
const atp = ref(null);
const itf = ref(null);
const wtn = ref(null);
const act = ref(null);
const nationalRanking = ref(null);



// Define emits to handle custom events like close
const emit = defineEmits(['close', 'utr']);

onMounted(() => {
    if (props.slug) {
        user_slug.value = props.slug;
        fetchPlayerCoreValues();
    }
});

watch(() => props.visible, (newVal) => {
    if (newVal && props.slug) {
        fetchPlayerCoreValues();
    }
});

const fetchPlayerCoreValues = async () => {
    try {
        console.log('dafaf', props.slug);
        const dataSets = await $publicService.get_player(props.slug);

        if (dataSets.player_info) {
            utr.value = dataSets.player_info.other_data.utr ?? 0
            gpa.value = dataSets.player_info.gpa ?? null

            if (dataSets.player_info.other_data) {
                sat.value = dataSets.player_info ? dataSets.player_info.other_data.sat_score : null;
                toefl.value = dataSets.player_info ? dataSets.player_info.other_data.toefl_score : null;
                atp.value = dataSets.player_info.other_data?.atp_ranking ?? null;
                itf.value = dataSets.player_info.other_data?.itf_ranking ?? null;
                act.value = dataSets.player_info.other_data?.act_score ?? null;
                wtn.value = dataSets.player_info.other_data?.wtn_score_manual ?? null;
                nationalRanking.value = dataSets.player_info.other_data?.national_ranking ?? null;

            }
        }
    } catch (error) {      
        nuxtApp.$notification.triggerNotification(error.display_message, 'failure');
    }
}

// Function to update player bio
const updatePlayerCoreValues = async () => {
    try {
        error.value = '';
        errors.value = {};
        loading.value = true;
        notification_type.value = '';
        notificationMessage.value = '';
        showNotification.value = false;

        const request_body = {
            user_slug: props.slug,
            utr: utr.value ?? null,
            gpa: gpa.value ?? null,
            sat_score: sat.value ?? null,
            toefl_score: toefl.value ?? null,
            atp_ranking: atp.value ?? null,
            itf_ranking: itf.value ?? null,
            act_score: act.value ?? null,
            wtn_score_manual: wtn.value ?? null,
            national_ranking: nationalRanking.value ?? null
        };
        const response = await $userService.update_player_core_values(request_body);  // Pass slug and request body
        console.log("response")
        console.log(response)

        if (response.status == '200') {
            loading.value = false;
            clearCoreValues();
            // Trigger success notification
            nuxtApp.$notification.triggerNotification(response.display_message, 'success');
            // Emit close event to parent to close the modal
            // emit('close', 'utr');  // Close the modal after successfully updating the bio
            // emit('utr');
            emit('close','utr')
        } else {
            loading.value = false;
            handleError(response, errors, notificationMessage, notification_type, showNotification, loading);
        }

    } catch (error) {
        loading.value = false;
        nuxtApp.$notification.triggerNotification(error, 'failure');
    }
};

// Save bio when the user clicks "Save changes"
const saveCoreValues = () => {
    updatePlayerCoreValues();
}

const clearCoreValues = () => {
    utr.value = null;
    gpa.value = null;
    sat.value = null;
    toefl.value = null;
    atp.value = null;
    itf.value = null;
    act.value = null;
    wtn.value = null;
    nationalRanking.value = null;
};


</script>