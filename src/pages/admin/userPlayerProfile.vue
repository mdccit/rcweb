<template>
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div class="flex w-full justify-between gap-8">
            <div class="flex items-center gap-4"><NuxtLink to="/admin/users?role=1"><svg
                        class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M15 6l-6 6l6 6"></path>
                    </svg></NuxtLink>
                <h2 class="font-bold text-lg self-center text-black"> Editing: {{ display_name }}</h2>
            </div>
            <div class=""><NuxtLink :to="`/app/profile/${slug}`"><button
                        type="submit"
                        class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                        View <svg class="w-5 h-5 -mr-1 inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M17 7l-10 10"></path>
                            <path d="M8 7l9 0l0 9"></path>
                        </svg></button></NuxtLink></div>
        </div>
    </div>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <userEditSection :user_id="userId" />

            <!-- <div class="flex gap-x-4"><a
                    href="https://qa1.recruited.qualitapps.com/admin/users/9c9ad039-6106-40d6-92de-b5c7556b05a7"><button
                        class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 opacity-50">
                        Account Details </button></a><a
                    href="https://qa1.recruited.qualitapps.com/admin/users/9c9ad039-6106-40d6-92de-b5c7556b05a7/player/profile"><button
                        class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 bg-gray-200">
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
                        class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 opacity-50">
                        Danger Zone </button></a></div> -->
            <div class="my-8"></div>
            <div class="">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                    <form   @submit.prevent="handleSubmit" data-splade-id="n7XZOpiuJjmb68c9" 
                        action="https://qa1.recruited.qualitapps.com/admin/users/9c9ad039-6106-40d6-92de-b5c7556b05a7/player/profile">
                        <fieldset>
                            <div class="">
                                <h2 class="text-2xl font-bold mb-8">Personal Information</h2>
                                <div class="grid grid-cols-2 gap-8  text-black">
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> Sex </span>
                                            <div class="relative">
                                                <div class="">
                                                    <GenderDropdown :genders="genders" v-model="gender" id="gender" label="Gender *" />

                                                    <!-- <select name="sex" data-validation-key="sex"
                                                        class=" block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 px-5 py-3 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50">
                                                        <option value="male"> Male </option>
                                                        <option value="female"> Female </option>
                                                    </select> -->
                                                </div><!---->
                                            </div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> Height (cm) </span>
                                            <div class="  text-black flex rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="height" type="number" data-validation-key="height" v-model="height"
                                                    step="0.01"></div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> Date of Birth </span>
                                            <div class="flex rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="date_of_birth" type="date" v-model="date_of_birth"
                                                    data-validation-key="date_of_birth"></div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> Weight (kg) </span>
                                            <div class="flex rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="weight" type="number" data-validation-key="weight" v-model="weight"
                                                    step="0.01"></div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> Nationality </span>
                                            <div class="relative">
                                                <div class="">
                                                    <NationalityDropdown :nationalities="nationalities" v-model="nationality" id="nationality"
                                                    label="Nationality *" />
                                                    <!-- <select name="nationality"
                                                        data-validation-key="nationality"
                                                        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 px-5 py-3 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50">
                                                        <option value="ad"> Andorran </option>
                                                        <option value="ae"> Emirian </option>
                                                        <option value="af"> Afghani </option>
                                                        <option value="cf"> Central African </option>
                                                  
                                                    </select> -->
                                                </div><!---->
                                            </div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> Bio </span><textarea
                                                name="bio" data-validation-key="bio"  v-model="bio"
                                                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"></textarea></label><!---->
                                    </div>
                                </div>
                            </div>
                            <div class="">
                                <h2 class="text-2xl font-bold mt-24 mb-8">Academics</h2>
                                <div class="grid grid-cols-2 gap-8">
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> Graduation Month/Year
                                            </span>
                                            <div class="flex rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block  text-gray-700 px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="graduation_month_year" type="month" v-model="graduation_month_year"
                                                    data-validation-key="graduation_month_year"></div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> GPA </span>
                                            <div class="flex  text-gray-700 rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="gpa" v-model="gpa" type="number" data-validation-key="gpa" step="0.01">
                                            </div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> Budget (Min) </span>
                                            <div class="flex  text-gray-700 rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block px-5   text-gray-700 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="budget_min" v-model="budget_min" type="number" data-validation-key="budget_min"
                                                    step="0.01"></div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> Budget (Max) </span>
                                            <div class="flex  text-gray-700 rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block px-5  text-gray-700 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="budget_max" v-model="budget_max" type="number" data-validation-key="budget_max"
                                                    step="0.01"></div>
                                        </label><!----></div>
                                </div>
                            </div>
                            <div class="">
                                <h2 class="text-2xl font-bold mt-24 mb-8">Preferences</h2>
                                <div class="grid grid-cols-2 gap-8">
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> Handedness </span>
                                            <div class="relative">
                                                <div class="">
                                                    <HandednessDropdown :handedness="handednesses" v-model="handedness" id="handedness"
                                                    label="Handness *" />
                                                    <!-- <select name="handedness" data-validation-key="handedness"
                                                        class="block  text-gray-700 w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 px-5 py-3 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50">
                                                        <option value="right"> Right </option>
                                                        <option value="left"> Left </option>
                                                        <option value="both"> Both </option>
                                                    </select> -->
                                                </div><!---->
                                            </div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> Preferred Surface </span>
                                            <div class="relative">
                                                <div class=""><select name="preferred_surface"
                                                        data-validation-key="preferred_surface" v-model="preferred_surface"
                                                        class="block  text-gray-700 w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 px-5 py-3 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50">
                                                        <option value="hard"> Hard </option>
                                                        <option value="clay"> Clay </option>
                                                        <option value="grass"> Grass </option>
                                                        <option value="artificial"> Artificial </option>
                                                    </select></div><!---->
                                            </div>
                                        </label><!----></div>
                                </div>
                            </div>
                            <div class="">
                                <h2 class="text-2xl font-bold mt-24 mb-8">Address</h2>
                                <div class="grid grid-cols-3 gap-8">
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> Address Line 1 </span>
                                            <div class="flex rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block  text-gray-700 px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="address_line_1" type="text" v-model="address_line_1"
                                                    data-validation-key="address_line_1"></div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> Address Line 2 </span>
                                            <div class="flex  text-gray-700 rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="address_line_2" type="text" v-model="address_line_2"
                                                    data-validation-key="address_line_2"></div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> City </span>
                                            <div class="flex  text-gray-700 rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="city" v-model="city" type="text" data-validation-key="city"></div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> State/Province </span>
                                            <div class="flex  text-gray-700 rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="state_province_int" type="text" v-model="state_province_int"
                                                    data-validation-key="state_province_int"></div>
                                        </label><!----></div> <!---->
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> Country </span>
                                            <div class="relative">
                                                <div class="">
                                                    <CountryDropdown :countries="countries" v-model="country" id="country" label="Country *" />
                                                    <!-- <select name="country" data-validation-key="country"
                                                        class="block w-full  text-gray-700 rounded-md border-gray-300 shadow-sm focus:border-primary-300 px-5 py-3 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50">
                                                        <option value="ao"> Angola </option>
                                                        <option value="ai"> Anguilla </option>
                                                        <option value="aq"> Antarctica </option>
                                                        <option value="ag"> Antigua and Barbuda </option>
                                                    </select> -->
                                                </div><!---->
                                            </div>
                                            
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> Postal Code </span>
                                            <div class="flex  text-gray-700 rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="postal_code"  v-model="postal_code" type="text" data-validation-key="postal_code">
                                            </div>
                                        </label><!----></div>
                                </div>
                            </div>
                            <div class="">
                                <h2 class="text-2xl font-bold mt-24 mb-8">Scores and Rankings</h2>
                                <div class="grid grid-cols-2 gap-8">
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> SAT Score </span>
                                            <div class="flex text-gray-700 rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="sat_score"  v-model="sat_score" type="number" data-validation-key="sat_score">
                                            </div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> ACT Score </span>
                                            <div class="flex text-gray-700 rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="act_score" v-model="act_score" type="number" data-validation-key="act_score">
                                            </div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> TOEFL Score </span>
                                            <div class="flex text-gray-700 rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="toefl_score"  v-model="toefl_score" type="number" data-validation-key="toefl_score">
                                            </div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> ATP Ranking </span>
                                            <div class="flex text-gray-700 rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="atp_ranking" v-model="atp_ranking" type="number" data-validation-key="atp_ranking">
                                            </div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> ITF Ranking </span>
                                            <div class="flex text-gray-700 rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="itf_ranking" v-model="itf_ranking" type="number" data-validation-key="itf_ranking">
                                            </div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> National Ranking </span>
                                            <div class="flex text-gray-700 rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="national_ranking"  v-model="national_ranking" type="number"
                                                    data-validation-key="national_ranking"></div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> UTR Score (Manual) </span>
                                            <div class="flex  text-gray-700 rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="utr_score_manual" type="text" v-model="utr_score_manual"
                                                    data-validation-key="utr_score_manual" step="0.01"></div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> WTN Score (Manual) </span>
                                            <div class="flex text-gray-700 rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="wtn_score_manual" type="text" v-model="wtn_score_manual"
                                                    data-validation-key="wtn_score_manual"></div>
                                        </label><!----></div>
                                </div>
                            </div>
                            <div class="my-24 mt-5"></div><button type="submit"
                                class="border bg-blue-500 rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-primary-500 hover:bg-primary-400 active:bg-primary-600 text-white border-transparent focus:border-primary-300 focus:ring-primary-200">
                                <div class="flex flex-row items-center justify-center"><!----><span class=""> Save
                                        changes </span></div>
                            </button>
                        </fieldset>
                    </form>
                </div>
                <div class="my-16"></div>
            </div>
        </div>
        <!-- Notification Component -->
        <Notification v-if="showNotification" :message="notificationMessage" :duration="3000" />
    </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useUserStore } from '~/stores/userStore'
import AdminUserCreateModal from '~/components/admin/user/adminUserCreateModal.vue';
import NationalityDropdown from '~/components/common/select/NationalityDropdown.vue';
import { loadCountryList, loadNationalityList, loadGenderList, loadHandnessList } from '~/services/commonService';
import GenderDropdown from '~/components/common/select/GenderDropdown.vue';
import HandednessDropdown from '~/components/common/select/HandednessDropdown.vue';
import CountryDropdown from '~/components/common/select/CountryDropdown.vue';
import { useNuxtApp } from '#app';
import { useRouter } from 'vue-router';
import Notification from '~/components/common/Notification.vue';
import userEditSection from '~/components/admin/user/userEditSections.vue';

const genders = ref([]);
const gender = ref('');
const display_name = ref('')
const height = ref('');
const date_of_birth = ref('');
const weight = ref('');
const nationalities = ref([]);
const bio = ref('');
const graduation_month_year = ref('');
const gpa = ref('');
const budget_min = ref('');
const budget_max = ref('');
const handednesses = ref([]);
const preferred_surface = ref('');
const address_line_1 = ref('');
const address_line_2 = ref('');
const city = ref('');
const state_province_int = ref('');
const country = ref('');
const postal_code = ref('');
const sat_score = ref('');
const act_score = ref('');
const toefl_score = ref('');
const atp_ranking = ref('');
const itf_ranking = ref('');
const national_ranking = ref('');
const utr_score_manual = ref('');
const wtn_score_manual = ref('');
const countries = ref([]);
const handedness = ref('');
const nationality = ref('');
const showNotification = ref(false);
const notificationMessage = ref('');
const showModal = ref(false);
const userStore = useUserStore()
const slug = ref('')
const email = userStore.user?.email;
const token = userStore.user?.token;

const route = useRoute(); // Use useRoute to access query parameters

// Access authService from the context
const nuxtApp = useNuxtApp();
const $adminService = nuxtApp.$adminService;

 const userId = ref(route.query.user_id || '');
console.log(userId.value)
// Reference to the modal component
const modalRef = ref(null);

// Function to open the modal
const openModal = () => {
    modalRef.value.openModal();
};

onMounted(() => {
   loadCountries();
   loadNationalities();
   loadGenders();
   loadHandness();
   fetchPlayerDetails(userId.value);
   fetchUserDetails();
    
});

const loadNationalities = async () => {
  try {
    nationalities.value = await loadNationalityList();
  } catch (err) {
    console.error('Error loading nationalities:', err);
  }
};

const loadGenders = async () => {
  try {
    genders.value = await loadGenderList();
  } catch (err) {
    console.error('Error loading genders:', err);
  }
};

const loadHandness = async () => {
  try {
    handednesses.value = await loadHandnessList();
  } catch (err) {
    console.error('Error loading handess:', err);
  }
};

const loadCountries = async () => {
  try {
    countries.value = await loadCountryList();
  } catch (err) {
    console.error('Error loading countries:', err);
  }
};

const handleSubmit = async () => {
  try {

    const response = await $adminService.player_update(userId.value,{
      nationality_id: nationality.value,
      weight: weight.value,
      date_of_birth: date_of_birth.value,
      height_cm: height.value,
      gender: gender.value,
      bio: bio.value,
      gpa: gpa.value,
      graduation_month_year: graduation_month_year.value,
      budget_min: budget_min.value,
      budget_max: budget_max.value,
      handedness: handedness.value,
      preferred_surface: preferred_surface.value,
      address_line_1: address_line_1.value,
      address_line_2: address_line_2.value,
      city: city.value,
      state_province: state_province_int.value,
      country: country.value,
      postal_code: postal_code.value,
      act_score: act_score.value,
      sat_score: sat_score.value,
      toefl_score: toefl_score.value,
      atp_ranking: atp_ranking.value,
      itf_ranking: itf_ranking.value,
      national_ranking: national_ranking.value,
      utr: utr_score_manual.value,
      wtn_score_manual: wtn_score_manual.value,
    });

    if (response.status === 200) {
        notificationMessage.value = response.display_message;
        showNotification.value = true;

    } else {
        errors.value.push(response.display_message);
        notificationMessage.value = response.display_message;
        showNotification.value = true;
    }
    
    
  } catch (err) {
    console.log(err)
    error.value = err.response?.data?.message || err.message;
  }
};

watch([() => route.query.action, () => route.query.user_id], ([newAction, newUserId]) => {
    action.value = newAction || 'view';
    user_id.value = newUserId || '';
  
     if (action.value === 'edit' || action.value === 'view') {
        fetchUserDetails();  // Fetch user details for "edit" & "view"
    }
});

// Fetch player details function
const fetchPlayerDetails = async (userId) => {
    try {
        const data = await $adminService.get_player_details(userId);
        const other_data = JSON.parse(data.user_profile_info.other_data)
        nationality.value =data.user_profile_info.nationality_id || ''
        weight.value=data.user_profile_info.weight || ''
        date_of_birth.value= data.user_profile_info.date_of_birth ||''
        height.value = data.user_profile_info.height ||''
        gender.value = data.user_profile_info.gender || ''
        bio.value = other_data.bio
        gpa.value = data.user_profile_info.gpa || ''
        graduation_month_year.value = data.user_profile_info.graduation_month_year || ''
        budget_min.value  = other_data.budget_min
        budget_max.value = other_data.budget_max
        handedness.value = other_data.handedness
        preferred_surface.value  = other_data.preferred_surface
        address_line_1.value = data.user_address_info.address_line_1 || ''
        address_line_2.value  = data.user_address_info.address_line_2 || ''
        city.value  = data.user_address_info.city || ''
        state_province_int.value = data.user_address_info.state_province || ''
        country.value = data.user_address_info.country_id || ''
        postal_code.value = data.user_address_info.postal_code || ''

       act_score.value = other_data.act_score
       sat_score.value = other_data.sat_score
       toefl_score.value = other_data.toefl_score
       atp_ranking.value = other_data.atp_ranking
       itf_ranking.value = other_data.itf_ranking
       national_ranking.value = other_data.national_ranking
       utr_score_manual.value = other_data.utr
       wtn_score_manual.value = other_data.wtn_score_manual
        
    } catch (error) {
        console.log(error)
        console.error('Failed to load user details:', error.message);
       // errors.value.push('Failed to load user details.');
    }
};

const fetchUserDetails = async () => {
    try {
        console.log(11)
        const response = await $adminService.get_user_details(userId.value);
        const user = response.user_basic_info;
        console.log(response)
        display_name.value = response.user_basic_info.display_name
        slug.value = response.user_basic_info.slug
        // if( response.media_info){
        //     setGalleryItems(response.media_info)
        // }

    } catch (error) {
        console.log(error)
        nuxtApp.$notification.triggerNotification(error.message, 'failure');
    }
};

definePageMeta({
    ssr: false,
    layout: 'admin',
    middleware: ['role'],
    requiredRole: ['admin'],
});

</script>

<style scoped>
.container {
    max-width: 600px;
}
</style>
