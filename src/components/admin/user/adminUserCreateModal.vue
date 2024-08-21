<template>
    <!-- Modal Backdrop -->
    <div v-if="isVisible" id="crud-modal" tabindex="-1" 
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <!-- Modal Content Wrapper -->
      <div class="relative w-full max-w-md p-4 mx-auto">
        <!-- Modal Box -->
        <div class="relative bg-white rounded-lg shadow light:bg-gray-700">
          <!-- Modal Header -->
          <div class="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-200">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray">{{ modalTitle }}</h3>
            <button @click="$emit('close')"
              class="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center light:hover:bg-gray-600 light:hover:text-white">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <!-- Modal Body -->
          <div class="p-6 space-y-6">
            <!-- Display error messages -->
            <div v-if="errors.length" class="error-messages">
              <p class="error-title">Validation Errors:</p>
              <ul class="error-list">
                <li v-for="(error, index) in splitErrors" :key="index" class="error-item">
                  {{ error }}
                </li>
              </ul>
            </div>
  
            <!-- Form Fields -->
              <input type="text" id="first_name" v-model="first_name"
                class="bg-transparent block w-full mt-1 p-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 light:bg-gray-600 light:border-gray-500 dark:text-white light:text-primary"
                placeholder="Enter First Name" />
            </div>
            <div>
              <label for="last_name" class="block text-sm font-normal text-gray-900 light:text-gray">Last Name</label>
              <input type="text" id="last_name" v-model="last_name"
                class="bg-transparent block w-full mt-1 p-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 light:bg-gray-600 light:border-gray-500 dark:text-white"
                placeholder="Enter Last Name" />
            </div>
            <div>
              <label for="email" class="block text-sm font-normal text-gray-900 light:text-gray">Email</label>
              <input type="email" id="email" v-model="email"
                class="bg-transparent block w-full mt-1 p-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 light:bg-gray-600 light:border-gray-500 dark:text-white"
                placeholder="Enter Email" />
              <div class="flex items-end text-right mt-2">
                <input id="checked-checkbox" type="checkbox" v-model="is_set_email_verified"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 light:focus:ring-blue-600 light:ring-offset-gray-800 focus:ring-2 light:bg-gray-700 light:border-gray-600">
                <label for="checked-checkbox"
                  class="ms-2 text-sm font-normal text-gray-600 light:text-gray-300">Set email verified</label>
              </div>
            </div>
            <div>
              <label for="password" class="block text-sm font-normal text-gray-900 light:text-gray">Password</label>
              <input type="password" id="password" v-model="password"
                class="bg-transparent block w-full mt-1 p-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 light:bg-gray-600 light:border-gray-500 dark:text-white"
                placeholder="Enter Password" />
            </div>
            <div>
              <label for="password_confirmation"
                class="block text-sm font-normal text-gray-900 light:text-gray">Confirm Password</label>
              <input type="password" id="password_confirmation" v-model="password_confirmation"
                class="bg-transparent block w-full mt-1 p-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 light:bg-gray-600 light:border-gray-500 dark:text-white"
                placeholder="Confirm Password" />
            </div>
            <div>
              <label for="user_role" class="block mb-2 text-sm font-normal text-gray-900 light:text-white">Role</label>
              <select id="user_role" v-model="user_role"
                class="bg-light-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-600 dark:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500">
                <option value="" disabled>Choose a Role</option>
                <option value="1">Default</option>
                <option value="2">Admin</option>
                <option value="3">Operator</option>
                <option value="4">Player</option>
                <option value="5">Coach</option>
                <option value="6">Business Manager</option>
                <option value="7">Parent</option>
              </select>
            </div>
            <div>
              <label for="phone_code_country"
                class="block mb-2 text-sm font-normal text-gray-900 light:text-gray">Mobile No</label>
              <div class="grid grid-cols-10 gap-3 items-center">
                <input type="text" id="phone_code_country" v-model="phone_code_country"
                  class="col-span-2 border h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-600 dark:placeholder-gray-600 light:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Code" required />
                <input type="text" id="phone_number" v-model="phone_number"
                  class="font-normal col-span-8 border h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-600 dark:placeholder-gray-600 light:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Number" required />
              </div>
            </div>
          </div>
          <!-- Modal Footer -->
          <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-300">
            <button @click="submitRegistration"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              {{ action === 'edit' ? 'Update' : 'Create' }}
            </button>
            <button @click="$emit('close')"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 light:bg-gray-700 light:text-gray-300 light:border-gray-500 light:hover:text-white light:hover:bg-gray-600">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  
    <div v-if="successMessage" class="mt-4">
      <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
        <span class="block sm:inline">{{ successMessage }}</span>
      </div>
    </div>
  </template>
  
<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useNuxtApp } from '#app';
import { defineProps, defineEmits } from 'vue';
  

const props = defineProps({
  isVisible: Boolean,
  action: String,
  userId: String,
});

const emit = defineEmits(['close']);

const first_name = ref('');
const last_name = ref('');
const email = ref('');
const user_role = ref('');
const is_set_email_verified = ref(false);
const password = ref('');
const password_confirmation = ref('');
const phone_code_country = ref('');
const phone_number = ref('');
const errors = ref([]);
const successMessage = ref('');

const nuxtApp = useNuxtApp();
const $adminService = nuxtApp.$adminService;

  // Computed property to split error messages by comma
  const splitErrors = computed(() => errors.value.flatMap((error) => error.split(',')));

const modalTitle = computed(() => {
  if (props.action === 'edit') return 'Edit User';
  if (props.action === 'view') return 'View User';
  return 'Create New User';
});

const submitRegistration = async () => {
    errors.value = [];
    if (password.value !== password_confirmation.value) {
      errors.value.push('Passwords do not match');
      return;
    }
  
    try {
      const response = await $adminService.new_user_register({
        first_name: first_name.value,
        last_name: last_name.value,
        email: email.value,
        user_role: user_role.value,
        is_set_email_verified: is_set_email_verified.value,
        password: password.value,
        password_confirmation: password_confirmation.value,
        phone_code_country: phone_code_country.value,
        phone_number: phone_number.value,
      });
  
      if (response.status === 200) {
        successMessage.value = response.display_message;
      } else {
        errors.value.push(response.data.display_message);
      }
    } catch (err) {
      errors.value = [err.response?.data?.message || err.message];
    }
  };
  
  // Fetch user details function
const fetchUserDetails = async () => {
  if (props.userId) {
    try {
      const data = await $adminService.get_user_details(props.userId);
      first_name.value = data.first_name || 'dd';
      last_name.value = data.last_name || '';
      email.value = data.email || '';
      user_role.value = data.user_role || '';
      phone_code_country.value = data.phone_code_country || '';
      phone_number.value = data.phone_number || '';
      is_set_email_verified.value = data.is_set_email_verified || false;
    } catch (error) {
      console.error('Failed to load user details:', error.message);
      errors.value.push('Failed to load user details.');
    }
  }
};

watch([() => props.action, () => props.userId], () => {
  if (props.action === 'view' || props.action === 'edit') {
    fetchUserDetails();
  }
});

watch(first_name, (newValue, oldValue) => {
  console.log('First name changed from', oldValue, 'to', newValue);
});


// onMounted(() => {
//   if (props.action === 'view' || props.action === 'edit') {
//     fetchUserDetails();
//   }
// });
</script>

  <style scoped>
  .error-messages {
    margin-top: 20px;
    color: red;
  }
  
  .error-title {
    font-weight: bold;
  }
  
  .error-list {
    list-style-type: disc;
    margin-left: 20px;
  }
  
  .error-item {
    margin-bottom: 5px;
  }
  </style>
  