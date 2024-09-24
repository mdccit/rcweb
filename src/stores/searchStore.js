import { defineStore } from "pinia";

export const useSearctore = defineStore("search", {
  state: () => ({
    search_key: '',
  }),
  getters: {
    searchKey: (state) => state.search_key || '',  // Default moderation if not set
  },
  actions: {
    setSearchKey(key) {
        this.search_key = key;
        
      },
  },
});
