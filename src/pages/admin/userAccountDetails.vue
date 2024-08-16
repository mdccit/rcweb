<template>
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="flex gap-x-4"><a
                href="https://qa1.recruited.qualitapps.com/admin/users/9caacfe4-214f-40eb-9289-038c8819bcc7"><button
                    class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 bg-gray-200"> Account
                    Details </button></a><a
                href="https://qa1.recruited.qualitapps.com/admin/users/9caacfe4-214f-40eb-9289-038c8819bcc7/connections"><button
                    class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 opacity-50">
                    Connections </button></a><a
                href="https://qa1.recruited.qualitapps.com/admin/users/9caacfe4-214f-40eb-9289-038c8819bcc7/lists"><button
                    class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 opacity-50"> Lists
                </button></a><a
                href="https://qa1.recruited.qualitapps.com/admin/users/9caacfe4-214f-40eb-9289-038c8819bcc7/danger-zone"><button
                    class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 opacity-50"> Danger
                    Zone </button></a></div>
        <div class="my-8"></div>
        <div class="">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                <form data-splade-id="Qz7drVUokJqH6uZN" method="PUT"
                    action="https://qa1.recruited.qualitapps.com/admin/users/9caacfe4-214f-40eb-9289-038c8819bcc7">
                    <fieldset>
                        <div class="col-span-6 sm:col-span-4"><span
                                class="block mb-1 text-gray-700 font-sans">Photo</span>
                            <div class="mt-2"><img
                                    src="https://ui-avatars.com/api/?name=e+e&amp;color=7F9CF5&amp;background=EBF4FF"
                                    alt="ee et" class="rounded-full h-20 w-20 object-cover"></div>
                            <div class="mt-2" style="display: none;"><span
                                    class="block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center"
                                    style="background-image: url(&quot;&quot;);"></span></div>
                            <div class="flex mt-2 space-x-2">
                                <div><label class="block"><a
                                            class="font-semibold border border-border rounded py-4 px-4 w-full block relative cursor-pointer text-gray-700 focus:outline-none focus:ring focus:ring-opacity-50 focus:border-primary-300 focus:ring-primary-200 text-center"><svg
                                                class="w-6 h-6 inline mr-1" xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                                                stroke="currentColor" fill="none" stroke-linecap="round"
                                                stroke-linejoin="round">
                                                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                                                <path d="M7 9l5 -5l5 5"></path>
                                                <path d="M12 4l0 12"></path>
                                            </svg> Select A New Photo <input name="photo" type="file"
                                                data-validation-key="photo"
                                                class="invisible absolute inset-0 w-full h-full disabled:opacity-50"></a></label><!---->
                                </div><a href="https://qa1.recruited.qualitapps.com/user/profile-photo"
                                    class="font-semibold border border-border rounded py-4 px-4 inline-block relative cursor-pointer text-gray-700 focus:outline-none focus:ring focus:ring-opacity-50 focus:border-primary-300 focus:ring-primary-200 text-center"><svg
                                        class="w-6 h-6 inline mr-1" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M4 7l16 0"></path>
                                        <path d="M10 11l0 6"></path>
                                        <path d="M14 11l0 6"></path>
                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                                    </svg> Remove Photo </a>
                            </div>
                        </div>
                        <div class="my-8"></div>
                        <div class="w-full"><label class="block"><span class="block mb-1 text-gray-700 font-sans"> Name
                                </span>
                                <div class="flex rounded-lg border border-gray-300 shadow-sm"><input
                                        class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                        name="name" type="text" data-validation-key="name"></div>
                            </label><!----></div>
                        <div class="my-8"></div>
                        <div class="">
                            <div class="w-full"><label class="block"><span class="block mb-1 text-gray-700 font-sans">
                                        Email address </span>
                                    <div class="flex rounded-lg border border-gray-300 shadow-sm"><input
                                            class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                            name="email" type="text" data-validation-key="email"></div>
                                </label><!----></div>
                            <div class="flex justify-end">
                                <div class="">
                                    <div class="flex justify-end mt-4">
                                        <div><label class="flex items-center"><input name="set_email_verified"
                                                    type="checkbox" data-validation-key="set_email_verified"
                                                    class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                                                    true-value="1" false-value="false" value="1"><span class="ml-4">Set
                                                    email verified</span></label><!----></div>
                                    </div>
                                    <div class="mt-4 flex justify-end gap-2"> Or <a
                                            href="https://qa1.recruited.qualitapps.com/admin/users/9caacfe4-214f-40eb-9289-038c8819bcc7/send-verification-email"
                                            class="bg-gray-200 opacity-60 hover:opacity-100 p-2 rounded"> send again
                                        </a></div>
                                </div>
                            </div>
                        </div>
                        <div class="my-8"></div>
                        <div class="w-full"><label class="block"><span class="block mb-1 text-gray-700 font-sans">
                                    Password </span>
                                <div class="flex rounded-lg border border-gray-300 shadow-sm"><input
                                        class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                        name="password" type="text" data-validation-key="password"></div>
                            </label><!----></div>
                        <div class="my-8"></div>
                        <div class="w-full"><label class="block"><span class="block mb-1 text-gray-700 font-sans">
                                    Approved </span>
                                <div class="relative">
                                    <div class=""><select name="is_approved" data-validation-key="is_approved"
                                            class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 px-5 py-3 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50">
                                            <option value="1"> Yes </option>
                                            <option value="0"> No </option>
                                        </select></div><!---->
                                </div>
                            </label><!----></div>
                        <div class="my-8"></div>
                        <div class="relative">
                            <div class="absolute right-0 top-0"><svg id="phoneInputButton"
                                    onclick="showPhoneEditTooltip(event,'phoneInputtooltip')" class="w-4 h-4 inline"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                    stroke-linejoin="round" style="cursor: pointer;">
                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                    <path d="M12 9h.01"></path>
                                    <path d="M11 12h1v4h1"></path>
                                </svg><span id="phoneInputtooltip"
                                    class="fixed hidden z-10 w-72 px-2 py-4 bg-black rounded-lg text-center text-white text-sm before:content-[''] before:absolute before:top-10 before:right-[-16px] before:-translate-y-1/2 before:border-8 before:border-r-transparent before:border-l-gray-700"
                                    hidden="true" style="display: none;"> If you are a player or a parent, your phone
                                    number will be visible to coaches. </span></div>
                            <div class="grid grid-cols-10 gap-4 items-center mt-4 mb-3">
                                <div class="col-span-4">
                                    <div class="phone-code-pl-5 phone-code-pr-6"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"> Phone <span
                                                    aria-hidden="true" class="text-red-600"
                                                    title="This field is required">*</span></span>
                                            <div class="relative">
                                                <div class=""><select name="phone_code" data-validation-key="phone_code"
                                                        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 px-5 py-3 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                                                        id="country" required=""
                                                        onchange="handleCountryCodeChange(this)">
                                                        <option disabled="" selected="" value="null">Country code
                                                        </option>
                                                        <option value="+244">Angola (+244)</option>
                                                        <option value="+1-264">Anguilla (+1-264)</option>
                                                        <option value="+672">Norfolk Island (+672)</option>
                                                        <option value="+1-268">Antigua and Barbuda (+1-268)</option>
                                                        <option value="+54">Argentina (+54)</option>
                                                        <option value="+374">Armenia (+374)</option>
                                                        <option value="+297">Aruba (+297)</option>
                                                    </select></div><!---->
                                            </div>
                                        </label><!----></div>
                                </div>
                                <div class="col-span-6">
                                    <div class="w-full no-asterisk"><label class="block"><span
                                                class="block mb-1 text-gray-700 font-sans"><span aria-hidden="true"
                                                    class="text-red-600" title="This field is required">*</span></span>
                                            <div class="flex rounded-lg border border-gray-300 shadow-sm"><input
                                                    class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    name="phone_number" type="number" data-validation-key="phone_number"
                                                    id="phone_number" step="0.01" required="" placeholder="123456789">
                                            </div>
                                        </label><!----></div>
                                </div>
                            </div>
                        </div>
                        <div class="my-8"></div>
                        <div class="w-full"><label class="block"><span class="block mb-1 text-gray-700 font-sans"> Role
                                </span>
                                <div class="relative">
                                    <div class=""><select name="role" data-validation-key="role"
                                            class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 px-5 py-3 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50">
                                            <option value="admin"> Admin </option>
                                            <option value="coach"> Coach </option>
                                            <option value="player"> Player </option>
                                            <option value="business"> Business User </option>
                                        </select></div><!---->
                                </div>
                            </label><!----></div>
                        <div class="my-8"></div><button type="submit"
                            class="border bg-blue-500 rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-primary-500 hover:bg-primary-400 active:bg-primary-600 text-white border-transparent focus:border-primary-300 focus:ring-primary-200">
                            <div class="flex flex-row items-center justify-center"><!----><span class=""> Save changes
                                </span></div>
                        </button>
                    </fieldset>
                </form>
            </div>
            <div class="my-16"></div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import UserTable from '~/components/tables/UserTable.vue';
import { useUserStore } from '~/stores/userStore'
import AdminUserCreateModal from '~/components/shared/adminUserCreateModal.vue';


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
