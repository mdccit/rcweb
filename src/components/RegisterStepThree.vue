<template>
  <div
    class="min-h-screen w-full bg-generic bg-cover bg-no-repeat flex flex-col sm:justify-center items-center py-12 px-4">
    <div class="w-full mt-6 mx-4 p-12 bg-white rounded-lg overflow-hidden sm:max-w-3xl">
      <form @submit.prevent="handleSubmitStep3">
        <div class="flex items-center space-x-4">
          <div class="self-center">
            <h1 class="text-2xl font-bold text-black mb-4">Choose Your Package</h1>
          </div>
        </div>
        <div class="w-full"></div>

        <!-- Package Selection -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <div v-for="package in packages" :key="package.value" class="radio relative cursor-pointer"
            @click="selectedPackage = package.value">
            <input class="radio-input absolute h-24 m-0 cursor-pointer z-2 opacity-0 peer" :id="package.value"
              type="radio" :value="package.value" v-model="selectedPackage" name="package">
            <div
              :class="['radio-tile rounded-2xl relative group flex flex-col items-center justify-center border border-gray-300 h-28 transition-all duration-150 ease-in hover:bg-steelBlue hover:border-steelBlue peer-checked:border-steelBlue peer-checked:bg-steelBlue', selectedPackage === package.value ? 'group is-checked' : '']">
              <img :src="package.icon"
                class="cursor-pointer absolute bottom-11 group-hover:opacity-0 group-[.is-checked]:opacity-0 transition">
              <img :src="package.whiteIcon"
                class="cursor-pointer absolute bottom-11 opacity-0 group-hover:opacity-100 group-[.is-checked]:opacity-100 transition">
              <label :for="package.value"
                class="text-sm text-black absolute bottom-6 group-hover:text-white group-[.is-checked]:text-white transition">
                {{ package.label }}
              </label>
            </div>
          </div>
        </div>

        <!-- Error Message -->
        <span v-if="errors.package" class="text-red-500 text-sm">{{ errors.package }}</span>

        <!-- Submit Button -->
        <div class="flex items-center justify-end mt-6">
          <button type="submit"
            class="border rounded-full shadow-sm py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-steelBlue hover:bg-darkAzureBlue text-white border-transparent focus:border-lightAzure focus:ring-lightPastalBlue ml-4 !px-8 !py-2.5 transition">
            <svg v-if="loading" aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin"
              viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB" />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor" />
            </svg>
            Continue to Payment
          </button>
        </div>
      </form>
    </div>

    <!-- Render Payment Component if Premium is selected -->
    <PaymentComponent v-if="selectedPackage === 'premium'" :stripeCustomerId="stripeCustomerId"
      :handleSubscription="createSetupIntent" :confirmSetupIntent="confirmSetupIntent"
      :finalizeSubscription="finalizeSubscription" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import PaymentComponent from '@/components/subscription/PaymentComponent.vue';
import { loadStripe } from '@stripe/stripe-js';
import createAuthService from '@/services/authService';
import apiService from '@/services/apiService'; // Ensure this is imported

const authService = createAuthService(apiService);
const stripe = await loadStripe('your-stripe-public-key');

// Set default package to 'standard'
const selectedPackage = ref('standard');

// Simulating package data - You can fetch this from an API instead
const packages = [
  { value: 'standard', label: 'Standard Package', icon: '@/assets/images/standard.png', whiteIcon: '@/assets/images/standard-white.png' },
  { value: 'premium', label: 'Premium Package', icon: '@/assets/images/premium.png', whiteIcon: '@/assets/images/premium-white.png' }
];

const errors = ref({});
const loading = ref(false);
const stripeCustomerId = ref(null);
let cardElement;

// Fetch Stripe Customer ID on component load
onMounted(async () => {
  try {
    stripeCustomerId.value = await authService.getStripeCustomerId();
    console.log('Stripe Customer ID:', stripeCustomerId.value);

    // Initialize Stripe Elements for card input
    const elements = stripe.elements();
    cardElement = elements.create('card');
    cardElement.mount('#card-element');
  } catch (error) {
    console.error('Failed to retrieve Stripe customer ID:', error);
  }
});

// Create Setup Intent (called by PaymentComponent)
const createSetupIntent = async (customerId) => {
  try {
    const setupIntent = await authService.createSetupIntent({ customer_id: customerId });
    return setupIntent; // Return setupIntent to PaymentComponent
  } catch (error) {
    console.error('Error creating setup intent:', error);
  }
};

// Confirm Setup Intent with Stripe
const confirmSetupIntent = async (clientSecret) => {
  try {
    const { setupIntent, error } = await stripe.confirmCardSetup(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: 'Customer Name', // Replace with actual customer details
        },
      },
    });

    if (error) {
      console.error('Error confirming setup intent:', error);
      throw error;
    }
    return setupIntent;
  } catch (error) {
    console.error('Error confirming setup intent:', error);
    throw error;
  }
};

// Finalize the subscription creation (called by PaymentComponent)
const finalizeSubscription = async (paymentMethodId) => {
  try {
    const subscription = await authService.createSubscription({
      subscription_type: 'monthly',
      is_auto_renewal: true,
      payment_method_id: paymentMethodId,
    });

    console.log('Subscription created successfully', subscription);
  } catch (error) {
    console.error('Error during subscription creation:', error);
  }
};
</script>

<style scoped>
h1 {
  font-size: 24px;
  margin-bottom: 16px;
}
label {
  display: block;
  margin-bottom: 8px;
}
</style>
