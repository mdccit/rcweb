import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLoadingStore = defineStore('loading', () => {
  const isLoading = ref(false);

  const startLoading = () => {
    // Only start loading if it's not already in a loading state
    if (!isLoading.value) {
      isLoading.value = true;
    }
  };

  const stopLoading = () => {
    // Only stop loading if it is currently in a loading state
    if (isLoading.value) {
      isLoading.value = false;
    }
  };

  return { isLoading, startLoading, stopLoading };
});
