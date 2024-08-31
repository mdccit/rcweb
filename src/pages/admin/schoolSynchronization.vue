<template>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="flex gap-x-4"><a
                    href="https://qa1.recruited.qualitapps.com/admin/schools/9c0a3542-8593-429e-b703-2e6afdf86c63"><button
                        class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 opacity-50">
                        General Details </button></a><a
                    href="https://qa1.recruited.qualitapps.com/admin/schools/9c0a3542-8593-429e-b703-2e6afdf86c63/teams"><button
                        class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 opacity-50"> Staff
                        &amp; Teams </button></a><a
                    href="https://qa1.recruited.qualitapps.com/admin/schools/9c0a3542-8593-429e-b703-2e6afdf86c63/sync"><button
                        class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 bg-gray-200">
                        Synchronization </button></a><a
                    href="https://qa1.recruited.qualitapps.com/admin/schools/9c0a3542-8593-429e-b703-2e6afdf86c63/danger-zone"><button
                        class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 opacity-50">
                        Danger Zone </button></a></div>
            <div class="my-8"></div>

             <ConnectToGovermentSchool  v-if="connectToGovComponent"  @search="search" />

            <div class="my-8"></div>

            <div class="text-black">

               <SearchSchool  v-if="searchComponent" :schoolId="schoolId"  @connectedSchool ="connectedSchool" />

                <div class="my-8"></div>

                <SyncSchool  v-if="sysncSchoolComponent" :schoolId="schoolId"  :govId="govId" @emitMessage="notification"  @disconnect="disconnect"/>

            </div>
        </div>
        <!-- Notification Component -->
        <Notification v-if="showNotification" :message="notificationMessage" :duration="8000"  />
    </div>
</template>

<script setup>
import { useUserStore } from '~/stores/userStore'
import schoolTable from '~/components/tables/schoolTables.vue';
import schoolCreateModal from '~/components/shared/schoolCreateModal.vue';
import ConnectToGovermentSchool from '~/components/admin/school/synchtonization/connectToGovermentSchool.vue';
import SearchSchool from '~/components/admin/school/synchtonization/searchSchool.vue';
import SyncSchool from '~/components/admin/school/synchtonization/syncSchool.vue';
import { useNuxtApp } from '#app';
import { ref, computed, watch, onMounted } from 'vue';
import Notification from '~/components/common/Notification.vue';

// Access authService from the context
const nuxtApp = useNuxtApp();
const $adminService = nuxtApp.$adminService;

const route = useRoute(); // Use useRoute to access query parameters
const userStore = useUserStore()

// const schoolId = ref(route.params.schoolId || '9cdfa29e-22ec-4cec-bd99-040b1d34da0c');
const schoolId = ref(route.params.schoolId || '9cdfa297-fe14-46b5-b09c-4cea71443b78');

const govId = ref('')
const email = userStore.user?.email
const token = userStore.user?.token
const notificationMessage = ref('');
const showNotification = ref(false);
// Reference to the modal component
const modalRef = ref(null);

// Function to open the modal
const openModal = () => {
    modalRef.value.openModal();
    console.log('open')
}
const connectToGovComponent = ref(false)
const searchComponent = ref(false)
const sysncSchoolComponent = ref(false)

onMounted(() => {
   fetchSchoolDetails(schoolId.value);
});

// Fetch school details function
const fetchSchoolDetails = async (schoolId) => {
    try {
        const data = await $adminService.get_school_details(schoolId);
        if (data.gov_id === null) {
            connectToGovComponent.value = true
            school.value = data
        } else {
            connectToGovComponent.value = false
            sysncSchoolComponent.value  =true
            govId.value = data.gov_id
        }
    } catch (error) {
        console.error('Failed to load user details:', error.message);
        errors.value.push('Failed to load user details.');
    }
};

const search = async () => {
    connectToGovComponent.value = false
    searchComponent.value= true
};

const disconnect = async () => {
    connectToGovComponent.value = true
};

const connectedSchool = (message) =>{
    notificationMessage.value = message;
    showNotification.value =true
    searchComponent.value= false
    fetchSchoolDetails(schoolId.value)
}

const notification = (message) =>{
    
    notificationMessage.value = message;
    showNotification.value =true
}
</script>

<style scoped></style>