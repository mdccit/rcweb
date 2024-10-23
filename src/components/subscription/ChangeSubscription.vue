<template>

  <!-- common full screen loader -->
  <ScreenLoader v-if="loading" />
  <!-- / common full screen loader -->


  <div class="w-full mt-6 mx-4 p-12 bg-white rounded-lg overflow-hidden sm:max-w-3xl mx-auto">

    <div class="flex">
      <!-- Iterate through the packages array -->
      <div v-for="(pkg, index) in packages" :key="pkg.value" class="flex-1 flex justify-center">
        <div :key="refreshKey" :class="[
    'border w-[230px] rounded-lg text-center p-3 relative flex flex-col cursor-pointer',
    pkg.name === 'Premium' ? '' : '',
    selectedPackage === pkg.name ? '' : ''
  ]" @click="selectPackage(pkg.value)">
          <h3>{{ pkg.name }}
          </h3>

          <h1 class="text-3xl font-medium text-black mb-2">{{ pkg.price }}</h1>
          <p class="text-xs mb-5">{{ pkg.description }}</p>

          <!-- Features List -->
          <div class="grid justify-center">
            <p v-for="(feature, fIndex) in pkg.features" :key="fIndex"
              class="text-xs flex text-left mb-2">
              <span class="text-limegreen ml-1 me-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
                  <path fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clip-rule="evenodd" />
                </svg>
              </span>
              {{ feature }}
            </p>
          </div>

          <!-- Subscription Button -->
          <div class="mb-4 mt-auto" v-if="!loading">
            <!-- Show this button if activeStatus is 'active' -->
            <button v-if="activeStatus === 'active' && pkg.value === 'standard' && isSetToCancel === false"
              @click="openModal()" :value="pkg.value"
              class="border rounded-full shadow-sm font-normal py-2 px-4 text-xs bg-steelBlue text-white w-full">
              <ButtonSpinner v-if="loading" />
              Change Plan to {{ pkg.name }}
            </button>

            <!-- Show this button if activeStatus is NOT 'active' -->
            <button v-else-if="activeStatus !== 'active' && pkg.value === 'premium'" @click="subscribePremium()"
              :value="pkg.value"
              class="border shadow-sm rounded-full font-normal py-2 px-4 text-xs bg-steelBlue text-white w-full">
              <ButtonSpinner v-if="loading" />
              Subscribe to {{ pkg.name }}
            </button>

            <button v-else-if="activeStatus == 'active' && pkg.value === 'premium' && isSetToCancel === true"
              @click="stopPremiumCancellation()" :value="pkg.value"
              class="border shadow-sm font-normal rounded-full py-2 px-4 text-xs bg-steelBlue text-white w-full">
              <ButtonSpinner v-if="loading" />
              Subscribe to {{ pkg.name }} Again
            </button>
          </div>

        </div>
      </div>
    </div>

  </div>

  <!-- Flowbite Modal -->
  <div v-if="isModalVisible" id="confirmModal" tabindex="-1" aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
    <div class="relative w-full max-w-md p-4 h-auto">
      <!-- Modal content -->
      <div class="bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div class="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
          <h3 class="text-xl font-medium text-gray-900 dark:text-white">
            Confirm Plan Change
          </h3>
          <button @click="closeModal" type="button"
            class="text-white bg-red-600 hover:bg-red-700 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700"
            data-modal-hide="confirmModal">
            <!-- Close (X) icon SVG -->
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>


        </div>

        <!-- Modal body -->
        <div class="p-6 space-y-6">
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Are you sure you want to change your plan to <strong>Standard</strong>?
          </p>
        </div>

        <!-- Modal footer -->
        <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
          <button @click="cancelSubscription" type="button"
            class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Yes, change plan
          </button>
          <button @click="closeModal" type="button"
            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
            No, cancel
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue';
import { useNuxtApp, useRuntimeConfig } from '#app';
import ButtonSpinner from '@/components/common/ButtonSpinner.vue';
import { usePackageStore } from '~/stores/packageStore';
import { usePackages } from '@/composables/usePackages';
import { useFlowbite } from '~/composables/useFlowbite';
import ScreenLoader from '@/layouts/screen_loader.vue';


const nuxtApp = useNuxtApp();
const loading = ref(false);
const autoRenew = ref(false);
const selectedPackage = ref(null); // Track selected package

const $authService = nuxtApp.$authService;
const router = useRouter(); // Initialize router
const packageStore = usePackageStore();
// Packages array with all required details
const { packages } = usePackages()

const $subscriptionService = nuxtApp.$subscriptionService;
const subscription = ref([]);
const activeStatus = ref('');
const isModalVisible = ref(false);
const isSetToCancel = ref(false);
const paymentMethods = ref([]);
const selectedCard = ref(null);
const refreshKey = ref(0);

// Open the confirmation modal
const openModal = () => {
  isModalVisible.value = true;
};

// Close the confirmation modal
const closeModal = () => {
  isModalVisible.value = false;
}

// Handle package selection
const selectPackage = (pkgValue) => {
  selectedPackage.value = pkgValue;
};

const subscribeStandard = () => {
  // Show a confirmation dialog
};

const subscribePremium = async () => {
  selectedPackage.value = 'premium';

  if (selectedPackage.value === 'premium') {
    try {
      loading.value = true;

      // Step 1: Get Stripe customer ID
      const customerId = await $authService.getStripeCustomerId();
      packageStore.setStripeCustomerId(customerId);

      // Step 2: Create SetupIntent on the backend
      const setupIntent = await createSetupIntent(customerId);

      // Log setupIntent to verify its structure
      console.log('SetupIntent Response:', setupIntent.client_secret);

      // Check if setupIntent has client_secret and setup_intent_id
      if (setupIntent && setupIntent.client_secret && setupIntent.setup_intent_id) {
        console.log('entered redirection');
        // Store the setup intent data in Pinia store
        packageStore.setSetupIntentData(setupIntent.client_secret, setupIntent.setup_intent_id);

        // Generate a unique reference (e.g., using token or customerId) and store it
        const payment_token = customerId; // For example, you can use customerId or a generated token
        packageStore.setPaymentToken(payment_token);

        // Step 4: Redirect to the /payment page
        router.push(`/payment/${payment_token}?package=premium`);

      } else {
        // Throw error if setupIntent is invalid
        throw new Error('Invalid SetupIntent response from the backend.');
      }
    } catch (error) {
      // nuxtApp.$notification.triggerNotification('Error during subscription process', 'failure');
      console.error('Error during payment method setup:', error);
    } finally {
      await fetchSubscriptionDetails();
      loading.value = false;
      refreshButtons();
    }
  } else {
    console.log('Standard package selected, no payment needed.');
  }

};


const cancelSubscription = async () => {
  try {
    loading.value = true;
    isModalVisible.value = false;
    const response = await $subscriptionService.cancel_subscription();
    if (response && response.status === 200) {
      activeStatus.value = 'cancelled'; 
      // Success case
      nuxtApp.$notification.triggerNotification(response.display_message, 'success');
    } else {
      // Handle non-success status codes
      nuxtApp.$notification.triggerNotification(response.display_message, 'failure');
    }
  } catch (error) {
    console.error('Error canceling subscription:', error);
  } finally {
    await fetchSubscriptionDetails();
    refreshButtons();
    loading.value = false;
  }
};


const reloadPage = () => {
  window.location.reload(); // Reload the full page
};

// Function to refresh buttons
const refreshButtons = () => {
  refreshKey.value++;  // Update the key to trigger reactivity
  // Update activeStatus or isSetToCancel based on the updated subscription state
  if (activeStatus.value === 'active') {
    isSetToCancel.value = false;
  } else {
    isSetToCancel.value = true;
  }
};

const stopPremiumCancellation = async () => {
  try {
    loading.value = true;
    const response = await $subscriptionService.stop_premium_cancellation();
    if (response && response.status === 200) {

      // Success case
      nuxtApp.$notification.triggerNotification(response.display_message, 'success');
    } else {
      // Handle non-success status codes
      nuxtApp.$notification.triggerNotification(response.display_message, 'failure');
    }
  } catch (error) {
    console.error('Error canceling subscription:', error);
  } finally {
    await fetchSubscriptionDetails();
    refreshButtons();
    loading.value = false;
  }
};


const getCustomerActiveCard = async () => {
  try {
    // Fetch the active payment method (active card)
    const activeCardResponse = await $subscriptionService.get_customer_active_payment_method();

    // Assuming the response has the card details, map the relevant data to selectedCard
    if (activeCardResponse && activeCardResponse.status === 200) {
      selectedCard.value = {
        brand: activeCardResponse.data.brand,
        last4: activeCardResponse.data.last4,
        exp_month: activeCardResponse.data.exp_month,
        exp_year: activeCardResponse.data.exp_year,
        billing_details: {
          name: activeCardResponse.data.billing_details.name,
          email: activeCardResponse.data.billing_details.email,
          phone: activeCardResponse.data.billing_details.phone,
          address: activeCardResponse.data.billing_details.address,
        }
      };
    } else {
      console.error('No active card found.');
    }
  } catch (error) {
    console.error('Error fetching active payment method:', error);
  }
};


// Create Setup Intent (called by PaymentComponent)
const createSetupIntent = async (customerId) => {
  try {
    const setupIntent = await $authService.createSetupIntent({ customer_id: customerId });
    return setupIntent; // Return setupIntent to PaymentComponent
  } catch (error) {
    console.error('Error creating setup intent:', error);
  }
};

let hasFetchedData = false; // Non-reactive flag

const fetchSubscriptionDetails = async () => {

  if (!hasFetchedData) {
    try {
      hasFetchedData = true;

      // Fetch user subscription information
      loading.value = true;
      const response = await $subscriptionService.get_subscription();
      subscription.value = response;
      activeStatus.value = response.status;
      isSetToCancel.value = response.cancel_at_period_end;

      if (activeStatus == 'active' && isSetToCancel != false) {
        selectedPackage.value = 'premium';
      } else {
        selectedPackage.value = 'standard';
      }

      const payment_methods = await $subscriptionService.get_customer_payment_methods();

      if (payment_methods && payment_methods.status == 200) {
        paymentMethods.value = payment_methods.data;

        // Fetch the active card and set it in selectedCard
        await getCustomerActiveCard();
      } else {
        console.error('No payment mehods found.');

      }

    } catch (error) {
      console.error('Error fetching subscription data:', error);
    } finally {
      loading.value = false;
    }
  }
};

onMounted(async () => {

  useFlowbite(() => {
    initFlowbite();
  });
  await fetchSubscriptionDetails();

});



</script>

<style scoped>
.register-container {
  max-width: 600px;
  margin: auto;
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.pro-pack {
  background: rgb(235, 219, 133);
}

.highlighted-package {
  box-shadow: 0 0 15px rgba(0, 123, 255, 0.5);
  /* Adds shadow highlight */
  border-color: #007bff;
  /* Blue border for the highlighted package */
}
</style>
