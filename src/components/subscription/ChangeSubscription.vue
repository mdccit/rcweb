<template>
  <div class="w-full mt-6 mx-4 p-12 bg-white rounded-lg overflow-hidden sm:max-w-3xl mx-auto">
    <form @submit.prevent="handleSubmit">
      <div class="flex">
        <!-- Iterate through the packages array -->
        <div v-for="(pkg, index) in packages" :key="index" class="flex-1 flex justify-center">
          <div :class="[
      'border w-[230px] rounded-lg text-center p-3 relative flex flex-col cursor-pointer',
      pkg.name === 'Premium' ? 'pro-pack' : '',
      selectedPackage === pkg.name ? 'highlighted-package' : ''
    ]" @click="selectPackage(pkg.name)">
            <h3 :class="pkg.name === 'Premium' ? 'premium-text' : ''" class="font-medium text-black mb-2">{{ pkg.name }}
            </h3>

            <h1 class="text-3xl font-medium text-black mb-2">{{ pkg.price }}</h1>
            <p class="text-xs mb-5">{{ pkg.description }}</p>

            <!-- Features List -->
            <div class="flex-grow">
              <p v-for="(feature, fIndex) in pkg.features" :key="fIndex"
                class="text-xs flex text-center justify-center mb-2">
                <span class="text-limegreen ml-1">
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
            <div class="mb-4 mt-auto">
              <button @click.prevent="handleSubmit(pkg.value)" :value="pkg.value"
                class="border rounded-lg shadow-sm font-normal py-2 px-4 text-xs bg-steelBlue text-white w-full">
                <ButtonSpinner v-if="loading" />
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
import ButtonSpinner from '@/components/common/ButtonSpinner.vue';
import { usePackages } from '@/composables/usePackages'

const loading = ref(false);
const autoRenew = ref(false);
const selectedPackage = ref(null); // Track selected package

// Packages array with all required details
const { packages } = usePackages()

// Handle form submission logic
const handleSubmit = async (pkgName) => {
  event.preventDefault();
  const selectedPackageValue = pkgName;
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
    alert(`Successfully subscribed to the ${selectedPackageValue} package!`);
  }, 1000);
};

// Handle package selection
const selectPackage = (pkgName) => {
  selectedPackage.value = pkgName;
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
  background: rgb(235, 219, 133);
}

.highlighted-package {
  box-shadow: 0 0 15px rgba(0, 123, 255, 0.5);
  /* Adds shadow highlight */
  border-color: #007bff;
  /* Blue border for the highlighted package */
}

/* Highlight "Premium" word with blue-themed styling */
.premium-text {
  color: #1e40af;
  /* Bold blue color */
  font-size: 1.75rem;
  /* Larger font size */
  font-weight: bold;
  text-transform: uppercase;
  /* Make text uppercase */
  letter-spacing: 1px;
  text-shadow: 2px 2px 8px rgba(30, 64, 175, 0.5);
  /* Subtle blue shadow */
  position: relative;
}

/* Optional: Add a gradient underline for more emphasis */
.premium-text::before {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #1e40af, #60a5fa);
  /* Blue gradient */
  border-radius: 2px;
}
</style>
