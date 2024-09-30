import { focusableStack } from "element-plus/es/components/focus-trap/index.mjs";
import { defineStore } from "pinia";

export const useModerationStore = defineStore("moderation", {
  state: () => ({
    moderation_id: '',
    moderation_close:false
  }),
  getters: {
    moderationId: (state) => state.moderation_id || '',  // Default moderation if not set
    moderationClose:(state) => state.moderation_close || focusableStack,
  },
  actions: {
    setModeration(moderation) {
        this.moderation_id = moderation.id;
        
      },
    setModerationClose(value){
      this.moderation_close = value;
    }
  },
});
