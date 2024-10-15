<template>
  <div class="flex gap-x-4">
    <!-- General Details Link -->
    <NuxtLink :to="{ path: '/business/businessGeneral', query: { action: 'edit', business_id: businessId } }">
      <button
        :class="{
          'bg-gray-300': isActive('/business/businessGeneral'),
          'opacity-50': !isActive('/business/businessGeneral'),
          'text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200': true
        }"
      >
        General Details
      </button>
    </NuxtLink>

    <!-- Staff & Teams Link -->
    <NuxtLink :to="{ path: '/business/businessMembers', query: { business_id: businessId } }">
      <button
        :class="{
          'bg-gray-300': isActive('/business/businessMembers'),
          'opacity-50': !isActive('/business/businessMembers'),
          'text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200': true
        }"
      >
        Members
      </button>
    </NuxtLink>

    <!-- Media Link -->
    <NuxtLink :to="{ path: '/business/businessMedia', query: { business_id: businessId } }">
      <button
        :class="{
          'bg-gray-300': isActive('/business/businessMedia'),
          'opacity-50': !isActive('/business/businessMedia'),
          'text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200': true
        }"
      >
        Media
      </button>
    </NuxtLink>

    <!-- Synchronization Link -->
    <!-- <NuxtLink :to="{ path: '/admin/businesses/sync', query: { business_id: businessId } }">
      <button
        :class="{
          'bg-gray-300': isActive('/admin/businesses/sync'),
          'opacity-50': !isActive('/admin/businesses/sync'),
          'text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200': true
        }"
      >
        Synchronization
      </button>
    </NuxtLink> -->

    <!-- Danger Zone Link -->
    <NuxtLink :to="{ path: '/business/businessDangerZone', query: { business_id: businessId } }">
      <button
        :class="{
          'bg-gray-300': isActive('/business/businessDangerZone'),
          'opacity-50': !isActive('/business/businessDangerZone'),
          'text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200': true
        }"
      >
        Danger Zone
      </button>
    </NuxtLink>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

// Accept businessId as a prop
const props = defineProps({
  businessId: {
    type: String,
    required: true
  }
});

const route = useRoute();

const isActive = (path) => {
  return route.path === path && route.query.business_id === props.businessId;
};
</script>
