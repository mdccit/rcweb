<template>
  <div class="flex gap-x-4">
    <!-- General Details Link -->
    <NuxtLink :to="{ path: '/school/schoolGeneralDetails', query: { action: 'edit', school_id: schoolId } }">
      <button
        :class="{
          'bg-gray-300': isActive('/school/schoolGeneralDetails'),
          'opacity-50': !isActive('/school/schoolGeneralDetails'),
          'text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200': true
        }"
      >
        General Details
      </button>
    </NuxtLink>

    <!-- Staff & Teams Link -->
    <NuxtLink :to="{ path: '/school/schoolStaff', query: { school_id: schoolId } }">
      <button
        :class="{
          'bg-gray-300': isActive('/school/schoolStaff'),
          'opacity-50': !isActive('/school/schoolStaff'),
          'text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200': true
        }"
      >
        Staff & Teams
      </button>
    </NuxtLink>

    <!-- Synchronization Link -->
    <NuxtLink :to="{ path: '/admin/schools/sync', query: { school_id: schoolId } }">
      <button
        :class="{
          'bg-gray-300': isActive('/admin/schools/sync'),
          'opacity-50': !isActive('/admin/schools/sync'),
          'text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200': true
        }"
      >
        Synchronization
      </button>
    </NuxtLink>

    <!-- Danger Zone Link -->
    <NuxtLink :to="{ path: '/admin/schools/danger-zone', query: { school_id: schoolId } }">
      <button
        :class="{
          'bg-gray-300': isActive('/admin/schools/danger-zone'),
          'opacity-50': !isActive('/admin/schools/danger-zone'),
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

// Accept schoolId as a prop
const props = defineProps({
  schoolId: {
    type: String,
    required: true
  }
});

const route = useRoute();

const isActive = (path) => {
  return route.path === path && route.query.school_id === props.schoolId;
};
</script>
