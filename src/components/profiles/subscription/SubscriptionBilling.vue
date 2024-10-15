<template>

  <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-8 mt-3">
    <h2 class="text-2xl font-bold mb-6 text-black">Subscription & Billing</h2>
    <hr class="mt-5 mb-3 text-pigeonBlue">
    <div>

      <!-- Subscription Section -->
      <div class="mt-6">
        <h3 class="font-semibold text-xl mb-4 text-black">Subscription</h3>
        <p class="text-sm text-darkSlateBlue mb-4"> Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a document or a typeface without relying on meaningful content.</p>

        <div class="flex gap-4 bg-white p-6">
          <div class="border border-gainsboroGray rounded-lg p-6 flex-1 text-center">
            <p class="text-black mb-2 text-md font-semibold">Current Subscription plan</p>
            <p class="text-4xl font-bold text-steelBlue mb-4 mt-2">$100</p>
            <p class="text-xl font-semibold text-black">PREMIUM</p>
            <p class="text-darkSlateBlue mt-4 text-sm">
              Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a
              typeface
              without relying on meaningful content.
            </p>
            <p v-if="activeStatus === 'active'"
              class="bg-green-100 text-green-600 font-semibold mt-4 text-xl px-4 py-2 rounded-full">
              Activated
            </p>
            <p v-else class="bg-red-100 text-red-600 font-semibold mt-4 text-xl px-4 py-2 rounded-full">
              Inactive
            </p>
          </div>


          <div class="flex-1">
            <div class="border border-gainsboroGray rounded-lg p-4 flex justify-between mb-10">
              <div>
                <p class="text-darkSlateBlue text-sm font-semibold mb-2">Last subscribed date</p>
                <p class="font-semibold text-lg text-black">{{ startDate }}</p>
              </div>
              <div class="border-l border-gainsboroGray px-4">
                <p class="text-darkSlateBlue text-sm font-semibold mb-2">Next renewal date</p>
                <p class="font-semibold text-lg text-black">{{ endDate }}</p>
              </div>
            </div>

            <div class="border border-gainsboroGray rounded-lg p-4">
              <p class="font-semibold text-black mb-2">Change plan</p>
              <p class="text-darkSlateBlue mb-4 text-sm">
                Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.
              </p>
              <button class="bg-steelBlue text-white px-4 py-2 rounded-lg text-sm">change plan</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Card Details Section -->
    <div class="mt-6">
      <hr class="mt-5 mb-3 text-pigeonBlue">
      <h3 class="font-semibold text-xl mb-4 text-black">Card details</h3>
      <p class="text-sm text-darkSlateBlue mb-4"> Lorem ipsum is a placeholder text commonly used to demonstrate the
        visual form of a document or a typeface without relying on meaningful content.</p>

      <div class="flex space-x-4">

        <div class="flex-1">
          <div
            class="bg-gradient-to-r from-blue-900 to-gray-800 text-white p-6 rounded-lg w-85 shadow-lg h-60 flex flex-col justify-end">
            <!-- <div class="text-right">
              <button class="text-gray-400 hover:text-red-500" @click="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
              </button>
            </div> -->
            <div class="mt-auto flex justify-between items-center">
              <div class="mt-4">
                <span class="font-semibold">Selected card</span>
                <!-- Display dynamic card details -->
                <span class="text-lg font-semibold tracking-widest block">
                  XXXX XXXX XXXX {{ selectedCard?.last4 }}
                </span>
                <!-- Display expiration date -->
                <p class="text-sm mt-2">Expires {{ selectedCard?.exp_month }}/{{ selectedCard?.exp_year }}</p>
              </div>
              <div class="right-4">
                <img :src="getCardBrandLogo(selectedCard?.brand)" alt="" class="rounded-lg w-8 h-8 mr-4">
              </div>
            </div>
          </div>
        </div>


        <div class="flex-1">
          <div class="space-y-4 w-full">
            <!-- Loop through the payment methods and display each one -->
            <div v-for="(method, index) in paymentMethods" :key="method.id"
              class="relative flex items-center justify-between p-4 bg-white rounded-lg shadow border">
              <div>
                <span class="text-xs text-darkSlateBlue block">Card Brand: {{ method.card.brand }} </span>
                <span class="font-semibold text-black">XXXX XXXX XXXX {{ method.card.last4 }}</span>
                <p class="text-xs text-gray-500">Expires {{ method.card.exp_month }}/{{ method.card.exp_year }}</p>
              </div>
              <button @click="deletePaymentMethod(method.id)" class="text-red hover:text-red-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>


    <!-- Cancel subscription -->
    <div class="mt-6" v-if="activeStatus === 'active'">
      <hr class="mt-5 mb-3 text-pigeonBlue">
      <h3 class="font-semibold text-xl mb-4 text-black">Cancel subscription</h3>
      <p class="text-sm text-darkSlateBlue mb-4">Lorem ipsum is a placeholder text commonly used to demonstrate the
        visual form of a document or a typeface without relying on meaningful content.
      </p>

      <div class="space-y-4">
        <div class="card rounded-2xl overflow-hidden border border-gainsboroGray bg-white w-full p-3 mt-3">
          <p class="text-sm text-darkSlateBlue mb-6">Lorem ipsum is a placeholder text commonly used to demonstrate
            the
            visual form of a documentLorem ipsum is a placeholder text commonly used to demonstrate the visual form
            of a document or a typeface without relying on meaningful content.</p>

          <div class="mt-6">
            <button @click="cancelSubscription"
              class="w-50 py-3 px-2 bg-redOrange text-white  text-xs font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Cancel
              Subscription</button>
          </div>
        </div>
      </div>
    </div>


  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { usePackageStore } from '@/stores/packageStore';
import { useNuxtApp, useRuntimeConfig } from '#app';
// Access authService from the context
const nuxtApp = useNuxtApp();
const RuntimeConfig = useRuntimeConfig().public;

const $subscriptionService = nuxtApp.$subscriptionService;
const subscription = ref([]);
const startDate = ref('');
const endDate = ref('');
const activeStatus = ref('');
const subscriptionType = ref('');
const paymentMethods = ref([]);
const selectedCard = ref(null);

onMounted(async () => {
  try {
    // Fetch user subscription information
    const response = await $subscriptionService.get_subscription();
    subscription.value = response;

    const payment_methods = await $subscriptionService.get_customer_payment_methods();

    if (payment_methods && payment_methods.status == 200) {
      paymentMethods.value = payment_methods.data;

      // Fetch the active card and set it in selectedCard
      await getCustomerActiveCard();


      startDate.value = formatDate(response.start_date);
      endDate.value = formatDate(response.end_date);
      activeStatus.value = response.status;
    }else{
      console.error('No payment mehods found.');
    }

  } catch (error) {
    console.error('Error fetching subscription data:', error);
  }
});


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

const cancelSubscription = async () => {
  try {
    const response = await $subscriptionService.cancel_subscription();
    if (response && response.status === 200) {
      // Success case
      nuxtApp.$notification.triggerNotification(response.display_message, 'success');
    } else {
      // Handle non-success status codes
      nuxtApp.$notification.triggerNotification(response.display_message, 'failure');
    }
  } catch (error) {
    console.error('Error canceling subscription:', error);
  }
};

const deletePaymentMethod = async (paymentMethodId) => {
  try {
    const response = await $subscriptionService.delete_stripe_payment_method(paymentMethodId);
    
    // Check for a successful response
    if (response && response.status === 200) {
      // Success case
      nuxtApp.$notification.triggerNotification(response.display_message || 'Payment method removed successfully.', 'success');
    } else {
      // Handle non-success status codes, show display_message if available
      nuxtApp.$notification.triggerNotification(response.display_message || 'Failed to remove payment method.', 'failure');
    }
  } catch (error) {
    // Check if the error object contains a structured message from the API
    if (error.response && error.response.data) {
      // Show the display_message from the API error response if available
      nuxtApp.$notification.triggerNotification(error.response.data.display_message || 'Failed to remove payment method.', 'failure');
    } else {
      // Generic error handling fallback
      nuxtApp.$notification.triggerNotification(error.message || 'An unexpected error occurred.', 'failure');
    }
    console.error('Error removing card:', error);
  }
};


// Helper function to format date from "YYYY-MM-DD HH:mm:ss" to "Y-M-d"
function formatDate(dateString) {
  const date = new Date(dateString);  // Create a Date object
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so add 1
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Get the logo for the card brand
 */
const getCardBrandLogo = (brand) => {
  switch (brand) {
    case 'visa':
      return 'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png';
    case 'mastercard':
      return 'https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.png';
    case 'amex':
      return 'https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg';
    default:
      return 'https://via.placeholder.com/100x50.png?text=Card';
  }
};

</script>