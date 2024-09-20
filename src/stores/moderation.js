import { defineStore } from "pinia";

export const useModerationStore = defineStore("moderation", {
  state: () => ({
    moderation_id: '',
  }),
  getters: {
    moderationId: (state) => state.moderation_id || '',  // Default moderation if not set
  },
  actions: {
    setModeration(moderation) {
        this.moderation_id = moderation.id;
        
      },
  },
});
