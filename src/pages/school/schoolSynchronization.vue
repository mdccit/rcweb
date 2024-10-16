<template>

    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-black">
        <div class="flex w-full justify-between gap-8">
            <div class="flex items-center gap-4">
                <NuxtLink to="/admin/schools"><svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M15 6l-6 6l6 6"></path>
                    </svg></NuxtLink>
                <h2 class="font-bold text-lg self-center"> Editing:{{  name }} </h2>
            </div>
            <div class="">
                <NuxtLink :to="`/app/profile/school/${slug}`"><button type="submit"
                        class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                        View <svg class="w-5 h-5 -mr-1 inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M17 7l-10 10"></path>
                            <path d="M8 7l9 0l0 9"></path>
                        </svg></button></NuxtLink>
            </div>
        </div>
    </div>

    <div class="py-12 text-black">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <SchoolNavigation :schoolId="schoolId" />

            <div class="my-8"></div>
               <ConnectToGovermentSchool  v-if="connectToGovComponent"  @search="search" />

            <div class="my-8"></div>
            <div class="text-black">
                <SearchSchool  v-if="searchComponent" :schoolId="schoolId" :schoolName="name" @connectedSchool="connectedSchool" />
                <div class="my-8"></div>
                <div  v-if="sysncSchoolComponent">
                    <SyncSchool :sysncSchoolComponent="sysncSchoolComponent"  :schoolId="schoolId"  :govId="govId" @emitMessage="notification"  @disconnect="disconnect"/>
                </div>
              
            </div>
        </div>

      

        <!-- Notification Component -->
        <Notification  :message="notificationMessage" :duration="8000" />
    </div>
</template>

<script setup>
import { useUserStore } from '~/stores/userStore'
import AdminSchoolDeleteModal from '~/components/admin/user/adminSchoolDeleteModal.vue';
import Notification from '~/components/common/Notification.vue';
import SchoolNavigation from '~/components/admin/school/SchoolNavigation.vue';
import { useRoute, useRouter } from 'vue-router';
import { useNuxtApp } from '#app';
import ConnectToGovermentSchool from '~/components/admin/school/synchtonization/connectToGovermentSchool.vue';
import SearchSchool from '~/components/admin/school/synchtonization/searchSchool.vue';
import SyncSchool from '~/components/admin/school/synchtonization/syncSchool.vue';

const userStore = useUserStore()
const route = useRoute();
const router = useRouter();
const schoolId = ref(route.query.school_id || '');
const nuxtApp = useNuxtApp();
const $adminService = nuxtApp.$adminService
const notificationMessage = ref('');
const showNotification = ref(false);
const showModal = ref(false);
const email = userStore.user?.email
const token = userStore.user?.token
const loading = ref(false)
const connectToGovComponent = ref(false)
const searchComponent = ref(false)
const sysncSchoolComponent = ref(false)
const slug = ref('')

// Reference to the modal component
const modalRef = ref(null);
const govId = ref('')

// Function to open the modal
const openModal = () => {
    modalRef.value.openModal();
    console.log('open')
}

const notification = (message) => {
    nuxtApp.$notification.triggerNotification(message, 'success');
//    console.log("message")
//    console.log(message)

//     notificationMessage.value = message;
//     showNotification.value = true
//     console.log(notificationMessage.value)
//     console.log(showNotification.value)

}

onMounted(()=>{
    schoolId.value =route.query.school_id
    fetchSchoolDetails()
})

const name = ref('')
const fetchSchoolDetails = async () => {
    try {
        console.log(4587)
        const data = await $adminService.get_school_details(schoolId.value);
        name.value = data.school_info.name || '';
        slug.value = data.school_info.slug || '';

        connectToGovComponent.value = data.school_info.gov_id == null? true:false
        if(data.school_info.gov_id != null){
            sysncSchoolComponent.value =true
            govId.value = data.school_info.gov_id
            console.log(41)
            console.log(sysncSchoolComponent.value)

        }
       
        console.log(11222)
     
    } catch (error) {
        nuxtApp.$notification.triggerNotification(error.display_message, 'failure');
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
    fetchSchoolDetails()
}



definePageMeta({
  ssr: false,
  layout: 'admin',
  middleware: ['role'],
  requiredRole: ['admin'],
});

const goBack = () =>{
    router.back();
}
</script>

<style scoped></style>