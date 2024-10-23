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
      <div class="flex justify-center space-x-4">
        <div v-for="pkg in packages" :key="pkg.value" :class="[
          'flex-1 flex flex-col justify-between border w-[300px] rounded-lg text-center p-3 relative cursor-pointer',
          selectedPackage === pkg.value
            ? pkg.value === 'premium'
              ? 'border-blue-500 bg-blue-100'  // Gold color for premium package
              : 'border-blue-500 bg-blue-100'  // Default blue for other packages
            : ''  // Not selected
        ]" @click="selectPackage(pkg.value)">
          <input class="radio-input absolute h-24 m-0 cursor-pointer z-2 opacity-0 peer" :id="pkg.value" type="radio"
            :value="pkg.value" v-model="selectedPackage" name="pkg" />

          <div>
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

          <!-- Standard Package -->
          <div v-if="pkg.value === 'standard'" class="mt-auto">
            <!-- Subscribe Button (more promineddddddddddddddddddddddddddddddddnt) -->
            <button @click.stop="subscribeStandard"
              class="bg-blue-600 text-white font-light px-4 py-2 rounded-full mt-4 w-full">
              Subscribe
            </button>
          </div>

          <!-- Premium Package -->
          <div v-else-if="pkg.value === 'premium'" class="mt-auto">
           <!-- Auto-Renew Toggle -->
             <!-- 
            <div class="flex items-center justify-center mb-4">
              <input type="checkbox" id="autoRenew" v-model="autoRenew" class="hidden" />
              <label for="autoRenew" class="flex items-center cursor-pointer space-x-3">
                <div class="relative">
                  <div class="block w-14 h-8 rounded-full" :class="autoRenew ? 'bg-blue-600' : 'bg-gray-300'"></div>
                  <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition transform"
                    :class="autoRenew ? 'translate-x-full' : ''"></div>
                </div>
                <span class="text-sm font-medium text-gray-900 dark:text-gray-300">Auto renew</span>
              </label>
            </div> -->

            <!-- Try Trial Button (less prominent) -->
            <button @click.stop="subscribeTrial" class="mt-3 text-blue-700">
              Try Trial
            </button>

            <!-- Subscribe Button (more prominent) -->
            <button @click.stop="subscribePremium"
              class="bg-blue-600 text-white font-light px-4 py-2 rounded-full mt-4 w-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>


      <!-- // Package Selection Section -->
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useNuxtApp } from '#app';
import { usePackageStore } from '~/stores/packageStore';
import { usePackages } from '@/composables/usePackages';
import { useFlowbite } from '~/composables/useFlowbite';

// Access authService from the context
const nuxtApp = useNuxtApp();

const $authService = nuxtApp.$authService;
const router = useRouter(); // Initialize router
const packageStore = usePackageStore();
// Packages array with all required details
const { packages } = usePackages();
const errors = ref({});
const loading = ref(false);
const autoRenew = ref(false);
const selectedPackage = ref('premium');

const selectPackage = (pkgName) => {
  selectedPackage.value = pkgName;
};

// Fetch Stripe Customer ID on component load
onMounted(async () => {

  selectedPackage.value = 'premium';
  autoRenew.value = true;
  useFlowbite(() => {
    initFlowbite();
  })
});

const subscribeStandard = () => {
  const userRole = localStorage.getItem('user_role');
  if(userRole == 'coach'){
    router.push(`/user/approval-pending`);
  }else{
    router.push(`/app`);
  }

};


const subscribeTrial = async () => {
  if (!selectedPackage.value) {
    nuxtApp.$notification.triggerNotification('Please select a package!', 'warning');
  } else {
    errors.value.pkg = '';

    if (selectedPackage.value === 'premium') {
      try {
        loading.value = true;
        // Step 1: Get Stripe customer ID
        const customerId = await $authService.getStripeCustomerId();
        packageStore.setStripeCustomerId(customerId);
        // Step 2: Create SetupIntent on the backend
        const setupIntent = await createSetupIntent(customerId);

        // Check if setupIntent has client_secret and setup_intent_id
        if (setupIntent && setupIntent.client_secret && setupIntent.setup_intent_id) {
          // Store the setup intent data in Pinia store
          packageStore.setSetupIntentData(setupIntent.client_secret, setupIntent.setup_intent_id);

          // Generate a unique reference (e.g., using token or customerId) and store it
          const payment_token = customerId; // For example, you can use customerId or a generated token
          packageStore.setPaymentToken(payment_token);

          // Step 4: Redirect to the /payment page
          router.push(`/payment/${payment_token}?package=trial`);

        } else {
          // Throw error if setupIntent is invalid
          throw new Error('Invalid SetupIntent response from the backend.');
        }
      } catch (error) {
        // nuxtApp.$notification.triggerNotification('Error during subscription process', 'failure');
        console.error('Error during payment method setup:', error);
      } finally {
        loading.value = false;
      }
    } else {
      console.log('Standard package selected, no payment needed.');
    }
  }
};


const subscribePremium = async () => {
  if (!selectedPackage.value) {
    nuxtApp.$notification.triggerNotification('Please select a package!', 'warning');
  } else {
    errors.value.pkg = '';

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
        loading.value = false;
      }
    } else {
      console.log('Standard package selected, no payment needed.');
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

.bg-gold-100 {
  background-color: #ffd700;
  /* Gold color */
}
</style>
