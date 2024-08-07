// src/services/commonService.js
import { useNuxtApp } from '#app';

export const loadCountryList = async () => {
  try {
    const { $apiService } = useNuxtApp();
    const response = await $apiService.getRequest('/common/load-combo-list');
    if (response.status === 200) {
      return response.data.countries;
    } else {
      throw new Error(response.display_message);
    }
  } catch (error) {
    console.error('Error loading country list:', error);
    throw error;
  }
};
