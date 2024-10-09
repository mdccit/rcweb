<template>
  <div
    class="min-h-screen w-full bg-generic bg-cover bg-no-repeat flex flex-col sm:justify-center items-center py-12 px-4">
    <div class="w-full mt-6 mx-4 p-12 bg-white rounded-lg overflow-hidden sm:max-w-3xl">
      <!-- Header Section -->
      <div class="flex items-center space-x-4 my-5">
        <div class="flex self-center items-center">
          <NuxtLink to="/login" class="bg-black/10 p-2 hover:bg-black/15 active:bg-black/20 rounded-full">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 6l-6 6l6 6"></path>
            </svg>
            <span class="sr-only">Go back</span>
          </NuxtLink>
        </div>
        <div class="self-center">
          <h1 class="text-2xl font-bold text-black">Select Package</h1>
        </div>
      </div>

      <!-- Package Selection Section -->
      <form @submit.prevent="handleSubmitStep3">
        <div class="flex justify-center space-x-4">
          <div v-for="pkg in packages" :key="pkg.value"
            class="border w-[230px] rounded-lg text-center p-3 relative cursor-pointer"
            @click="selectedPackage = pkg.value">
            <input class="radio-input absolute h-24 m-0 cursor-pointer z-2 opacity-0 peer" :id="pkg.value" type="radio"
              :value="pkg.value" v-model="selectedPackage" name="pkg" />
            <h3 class="font-medium text-black mb-2">{{ pkg.label }}</h3>
            <h1 class="text-3xl font-medium text-black mb-2">{{ pkg.price }}</h1>
            <p class="text-xs mb-5">{{ pkg.description }}</p>

            <!-- Features List -->
            <div v-for="feature in pkg.features" :key="feature" class="text-xs flex text-center justify-center mb-2">
              <span class="text-limegreen ml-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
                  <path fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clip-rule="evenodd" />
                </svg>
              </span>
              {{ feature }}
            </div>
          </div>
        </div>

        <!-- Error Message -->
        <span v-if="errors.pkg" class="text-red-500 text-sm">{{ errors.pkg }}</span>

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
import { useRoute, useRouter } from 'vue-router';
import PaymentComponent from '~/components/subscription/PaymentComponent.vue';
import { loadStripe } from '@stripe/stripe-js';
import { useNuxtApp } from '#app';
import { usePackageStore } from '~/stores/packageStore';

// Access authService from the context
const nuxtApp = useNuxtApp();

const $authService = nuxtApp.$authService;
const route = useRoute();
const packageStore = usePackageStore();
const stripe = await loadStripe('your-stripe-public-key');

const selectedPackage = ref('');
const errors = ref({});
const loading = ref(false);
const stripeCustomerId = ref(null);
let cardElement;


// Simulating packages - You can fetch this from an API instead
const packages = [
  {
    value: 'standard',
    label: 'Standard',
    price: '$0.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    features: ['Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor'],
  },
  {
    value: 'premium',
    label: 'Premium',
    price: '$100.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    features: ['Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor'],
  },
];



// Fetch Stripe Customer ID on component load
onMounted(async () => {
  const token = route.params.token;
  try {
    // Initialize Stripe Elements for card input
    const elements = stripe.elements();
    cardElement = elements.create('card');
    cardElement.mount('#card-element');
  } catch (error) {
    console.error('Failed to retrieve Stripe customer ID:', error);
  }
});

// Handle submit for Step 3
const handleSubmitStep3 = async () => {
  if (!selectedPackage.value) {
    nuxtApp.$notification.triggerNotification('Please select a package!', 'warning');
  } else {
    errors.value.pkg = '';

    // Check if the user selected the premium package
    if (selectedPackage.value === 'premium') {
      try {
        loading.value = true; // Set loading state

        // Get Stripe customer ID from the backend when the user submits the form
        const stripeCustomerId = await $authService.getStripeCustomerId(); // Fix the variable assignment

        // Set the Stripe customer ID in the Pinia store
        packageStore.setStripeCustomerId(stripeCustomerId); // Use stripeCustomerId here instead of customerId

        // Create the setup intent for the premium package
        const setupIntent = await createSetupIntent(stripeCustomerId); // Pass stripeCustomerId here as well

        if (setupIntent) {
          console.log('Setup Intent created successfully:', setupIntent);

          // Store the client_secret and setup_intent_id in the Pinia store
          packageStore.setSetupIntentData(setupIntent.client_secret, setupIntent.setup_intent_id);

          // You can now proceed with the payment process using the stored values
        } else {
          throw new Error('Failed to create setup intent');
        }

      } catch (error) {
        console.error('Error retrieving Stripe customer ID:', error);
        errors.value.pkg = 'Failed to retrieve Stripe customer ID. Please try again.';
      } finally {
        loading.value = false; // Reset loading state
      }
    } else {
      console.log('Standard package selected, no payment needed.');
      // Proceed with the standard package flow
    }
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
    const subscription = await $authService.createSubscription({
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


.radio-input {
  position: absolute;
  height: 24px;
  margin: 0;
  cursor: pointer;
  z-index: 2;
  opacity: 0;
}

.radio-tile {
  border: 1px solid #ccc;
}

.flex-1 {
  flex: 1;
}

.size-4 {
  height: 16px;
  width: 16px;
}
</style>
