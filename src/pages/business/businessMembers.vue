<template>
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div class="flex w-full justify-between gap-8">
            <div class="flex items-center gap-4">
                <a href="/admin/businesses">
                    <svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M15 6l-6 6l6 6"></path>
                    </svg>
                </a>
                <h2 class="font-bold text-lg self-center text-black"> Editing: {{ businessName }} </h2>
            </div>
        </div>
    </div>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="flex gap-x-4">
                <NuxtLink to="businessGeneral">
                    <button class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 bg-gray-200">
                        General Details
                    </button>
                </NuxtLink>
                <NuxtLink to="businessMembers">
                    <button class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 bg-gray-200">
                        Members
                    </button>
                </NuxtLink>
                <NuxtLink to="businessDangerZone">
                    <button class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 opacity-50">
                        Danger Zone
                    </button>
                </NuxtLink>
            </div>
            <div class="my-8"></div>
            <div class="">
                <div class="my-8"></div>
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                    <div class="flex justify-between">
                        <div class="flex-1 text-2xl font-bold mb-4 text-black"> All Members </div>
                        <div class="">
                            <NuxtLink to="/business/BusinessAdd">
                                <button @click="addMembers"
                                    class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-blue-500 hover:bg-blue-700 active:bg-primary-600 text-white border-transparent focus:border-primary-300 focus:ring-primary-200">
                                    Add User
                                </button>
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="grid gap-4">
                        <div v-for="member in members" :key="member.id" class="flex flex-col lg:flex-row gap-6 py-2">
                            <img :src="`https://ui-avatars.com/api/?name=${member.name}&color=7F9CF5&background=EBF4FF`"
                                alt="User profile picture" class="h-12 w-12 rounded-full" />
                            <div class="self-center flex-1 text-black">
                                <strong class="capitalize">{{ member.name }}</strong>
                                <p class="opacity-75 line-clamp-1 text-black">Role title: {{ member.user_role }}</p>
                            </div>
                            <div class="self-center flex flex-wrap gap-2">
                                <a :href="`/admin/businesses/${business_id}/users/${member.id}/edit`">
                                    <button type="submit"
                                        class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                                        Manage
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="my-16"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useNuxtApp } from '#app';

const route = useRoute();
const router = useRouter();
const nuxtApp = useNuxtApp();
const $adminService = nuxtApp.$adminService;

const business_id = ref('');
const businessName = ref('');
const members = ref([]);

onMounted(() => {
    business_id.value = route.query.business_id || '';
    fetchBusinessMembers(business_id.value);
});

const fetchBusinessMembers = async (businessId) => {
    try {
        const data = await $adminService.get_business_members(businessId);
        members.value = data || [];
    } catch (error) {
        console.error('Failed to load business members:', error.message);
    }
};

const addMembers = () => {
    router.push({ path: '/business/businessAdd', query: { action: 'add', business_id: business_id.value } });
};
</script>


<style scoped>
.container {
    max-width: 600px;
}
</style>
