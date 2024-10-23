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


export const loadNationalityList = async () => {
  try {
    const { $apiService } = useNuxtApp();
    const response = await $apiService.getRequest('/common/load-combo-list');
    if (response.status === 200) {
      return response.data.nationalities;
    } else {
      throw new Error(response.display_message);
    }
  } catch (error) {
    console.error('Error loading nationality list:', error);
    throw error;
  }
};

export const loadBudgetList = async () => {
  try {
    const { $apiService } = useNuxtApp();
    const response = await $apiService.getRequest('/common/load-combo-list');
    if (response.status === 200) {
      return response.data.player_budgets;
    } else {
      throw new Error(response.display_message);
    }
  } catch (error) {
    console.error('Error loading budget list:', error);
    throw error;
  }
};


export const loadGenderList = async () => {
  try {
    const { $apiService } = useNuxtApp();
    const response = await $apiService.getRequest('/common/load-combo-list');
    if (response.status === 200) {
      return response.data.genders;
    } else {
      throw new Error(response.display_message);
    }
  } catch (error) {
    console.error('Error loading gender list:', error);
    throw error;
  }
};

export const loadHandnessList = async () => {
  try {
    const { $apiService } = useNuxtApp();
    const response = await $apiService.getRequest('/common/load-combo-list');
    if (response.status === 200) {
      return response.data.handedness;
    } else {
      throw new Error(response.display_message);
    }
  } catch (error) {
    console.error('Error loading gender list:', error);
    throw error;
  }
};

export const loadLanguagesList = async () => {
  try {
    const { $apiService } = useNuxtApp();
    const response = await $apiService.getRequest('/common/load-combo-list');
    if (response.status === 200) {
      return response.data.languages;
    } else {
      throw new Error(response.display_message);
    }
  } catch (error) {
    console.error('Error loading gender list:', error);
    throw error;
  }
};


export const loadDivisionList = async () => {
  try {
    const { $apiService } = useNuxtApp();
    const response = await $apiService.getRequest('/common/load-combo-list');
    if (response.status === 200) {
      return response.data.divisions;
    } else {
      throw new Error(response.display_message);
    }
  } catch (error) {
    console.error('Error loading country list:', error);
    throw error;
  }
};


export const loadConferenceList = async () => {
  try {
    const { $apiService } = useNuxtApp();
    const response = await $apiService.getRequest('/common/load-combo-list');
    if (response.status === 200) {
      return response.data.conferences;
    } else {
      throw new Error(response.display_message);
    }
  } catch (error) {
    console.error('Error loading country list:', error);
    throw error;
  }
};
