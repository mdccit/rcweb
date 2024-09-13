<template>
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div class="flex w-full justify-between gap-8">
            <div class="flex items-center gap-4"><a href="https://qa1.recruited.qualitapps.com/admin/users"><svg
                        class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M15 6l-6 6l6 6"></path>
                    </svg></a>
                <h2 class="font-bold text-lg self-center text-black"> Editing: f d </h2>
            </div>
            <div class=""><a
                    href="https://qa1.recruited.qualitapps.com/app/u/9c9ad039-6106-40d6-92de-b5c7556b05a7"><button
                        type="submit"
                        class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                        View <svg class="w-5 h-5 -mr-1 inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M17 7l-10 10"></path>
                            <path d="M8 7l9 0l0 9"></path>
                        </svg></button></a></div>
        </div>
    </div>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="flex gap-x-4"><a
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
                        Danger Zone </button></a></div>
            <div class="my-8"></div>
            <div class="">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                    <form data-splade-id="n7XZOpiuJjmb68c9" method="PUT"
                        action="https://qa1.recruited.qualitapps.com/admin/users/9c9ad039-6106-40d6-92de-b5c7556b05a7/player/profile">
                        <fieldset>
                            <div class="">
                                <h2 class="text-2xl font-bold mb-8">Personal Information</h2>
                                <div class="grid grid-cols-2 gap-8  text-black">
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> Sex </span>
                                            <div class="relative">
                                                <div class=""><select name="sex" data-validation-key="sex"
                                                        class=" block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 px-5 py-3 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50">
                                                        <option value="male"> Male </option>
                                                        <option value="female"> Female </option>
                                                    </select></div><!---->
                                            </div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> Height (cm) </span>
                                            <div class="  text-black flex rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="height" type="number" data-validation-key="height"
                                                    step="0.01"></div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> Date of Birth </span>
                                            <div class="flex rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="date_of_birth" type="date"
                                                    data-validation-key="date_of_birth"></div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> Weight (kg) </span>
                                            <div class="flex rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="weight" type="number" data-validation-key="weight"
                                                    step="0.01"></div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> Nationality </span>
                                            <div class="relative">
                                                <div class=""><select name="nationality"
                                                        data-validation-key="nationality"
                                                        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 px-5 py-3 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50">
                                                        <option value="ad"> Andorran </option>
                                                        <option value="ae"> Emirian </option>
                                                        <option value="af"> Afghani </option>
                                                        <option value="cf"> Central African </option>
                                                  
                                                    </select></div><!---->
                                            </div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> Bio </span><textarea
                                                name="bio" data-validation-key="bio"
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
                                                    name="graduation_month_year" type="month"
                                                    data-validation-key="graduation_month_year"></div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> GPA </span>
                                            <div class="flex  text-gray-700 rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="gpa" type="number" data-validation-key="gpa" step="0.01">
                                            </div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> Budget (Min) </span>
                                            <div class="flex  text-gray-700 rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block px-5   text-gray-700 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="budget_min" type="number" data-validation-key="budget_min"
                                                    step="0.01"></div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> Budget (Max) </span>
                                            <div class="flex  text-gray-700 rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block px-5  text-gray-700 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="budget_max" type="number" data-validation-key="budget_max"
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
                                                <div class=""><select name="handedness" data-validation-key="handedness"
                                                        class="block  text-gray-700 w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 px-5 py-3 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50">
                                                        <option value="right"> Right </option>
                                                        <option value="left"> Left </option>
                                                        <option value="both"> Both </option>
                                                    </select></div><!---->
                                            </div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> Preferred Surface </span>
                                            <div class="relative">
                                                <div class=""><select name="preferred_surface"
                                                        data-validation-key="preferred_surface"
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
                                                    name="address_line_1" type="text"
                                                    data-validation-key="address_line_1"></div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> Address Line 2 </span>
                                            <div class="flex  text-gray-700 rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="address_line_2" type="text"
                                                    data-validation-key="address_line_2"></div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> City </span>
                                            <div class="flex  text-gray-700 rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="city" type="text" data-validation-key="city"></div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> State/Province </span>
                                            <div class="flex  text-gray-700 rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="state_province_int" type="text"
                                                    data-validation-key="state_province_int"></div>
                                        </label><!----></div> <!---->
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> Country </span>
                                            <div class="relative">
                                                <div class=""><select name="country" data-validation-key="country"
                                                        class="block w-full  text-gray-700 rounded-md border-gray-300 shadow-sm focus:border-primary-300 px-5 py-3 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50">
                                                        <option value="ao"> Angola </option>
                                                        <option value="ai"> Anguilla </option>
                                                        <option value="aq"> Antarctica </option>
                                                        <option value="ag"> Antigua and Barbuda </option>
                                                    </select></div><!---->
                                            </div>
                                            
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> Postal Code </span>
                                            <div class="flex  text-gray-700 rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="postal_code" type="text" data-validation-key="postal_code">
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
                                                    name="sat_score" type="number" data-validation-key="sat_score">
                                            </div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> ACT Score </span>
                                            <div class="flex text-gray-700 rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="act_score" type="number" data-validation-key="act_score">
                                            </div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> TOEFL Score </span>
                                            <div class="flex text-gray-700 rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="toefl_score" type="number" data-validation-key="toefl_score">
                                            </div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> ATP Ranking </span>
                                            <div class="flex text-gray-700 rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="atp_ranking" type="number" data-validation-key="atp_ranking">
                                            </div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> ITF Ranking </span>
                                            <div class="flex text-gray-700 rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="itf_ranking" type="number" data-validation-key="itf_ranking">
                                            </div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> National Ranking </span>
                                            <div class="flex text-gray-700 rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="national_ranking" type="number"
                                                    data-validation-key="national_ranking"></div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> UTR Score (Manual) </span>
                                            <div class="flex  text-gray-700 rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="utr_score_manual" type="text"
                                                    data-validation-key="utr_score_manual" step="0.01"></div>
                                        </label><!----></div>
                                    <div class="w-full"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> WTN Score (Manual) </span>
                                            <div class="flex text-gray-700 rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="wtn_score_manual" type="text"
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
    </div>
</template>

<script setup>
import { ref } from 'vue';
import UserTable from '~/components/tables/UserTable.vue';
import { useUserStore } from '~/stores/userStore'
import AdminUserCreateModal from '~/components/admin/user/adminUserCreateModal.vue';


const showModal = ref(false);
const userStore = useUserStore()

const email = userStore.user?.email;
const token = userStore.user?.token;

// Reference to the modal component
const modalRef = ref(null);

// Function to open the modal
const openModal = () => {
    modalRef.value.openModal();
};

</script>

<style scoped>
.container {
    max-width: 600px;
}
</style>
