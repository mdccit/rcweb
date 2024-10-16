<template>
  <div class="w-full mt-6 mx-4 p-12 bg-white rounded-lg overflow-hidden sm:max-w-3xl mx-auto">
    <form @submit.prevent="handleSubmit">
      <div class="flex">
        <!-- Iterate through the packages array -->
        <div v-for="(pkg, index) in packages" :key="index" class="flex-1 flex justify-center">
          <div :class="[ 'border w-[230px] rounded-lg text-center p-3 relative flex flex-col', pkg.name === 'Premium' ? 'pro-pack' : '' ]">
            <h3 class="font-medium text-black mb-2">{{ pkg.name }}</h3>
            <h1 class="text-3xl font-medium text-black mb-2">{{ pkg.price }}</h1>
            <p class="text-xs mb-5">{{ pkg.description }}</p>

            <!-- Features List -->
            <div class="flex-grow">
              <p v-for="(feature, fIndex) in pkg.features" :key="fIndex" class="text-xs flex text-center justify-center mb-2">
                <span class="text-limegreen ml-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
                    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                  </svg>
                </span>
                {{ feature }}
              </p>
            </div>

            <!-- Subscription Button -->
            <div class="mb-4 mt-auto">
              <button type="submit" :value="pkg.name" class="border rounded-lg shadow-sm font-normal py-2 px-4 text-xs bg-steelBlue text-white w-full">
                <svg v-if="loading" aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                </svg>
                Subscribe to {{ pkg.name }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>


<script setup>
import { ref } from 'vue';

const loading = ref(false);
const autoRenew = ref(false);

// Packages array with all required details
const packages = ref([
  {
    name: 'Standard',
    price: '$0.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  {
    name: 'Premium',
    price: '$100.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
  },
]);

// Handle form submission logic
const handleSubmit = async (event) => {
  event.preventDefault();
  const selectedPackage = event.submitter.value;
  loading.value = true;

  // Simulate an API call or form processing logic
  console.log('Submitting subscription for:', selectedPackage);
  console.log('Auto-renew is:', autoRenew.value);
  setTimeout(() => {
    loading.value = false;
    alert(`Successfully subscribed to the ${selectedPackage} package!`);
  }, 1000);
};
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
  background: #f9fbff;
  border: solid 1px #4090dd;
}
</style>
