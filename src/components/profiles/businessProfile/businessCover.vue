<template>
    <section class="w-full mb-5 p-3">
        <div class="relative">
            <img v-if="props.data.cover ==null" class="w-full h-[400px] rounded-xl" src="@/assets/images/covrss.jpg" alt="">
            <img v-if="props.data.cover !=null" class="w-full h-[400px] rounded-xl" :src="props.data.cover.url" alt="">

            <!-- Wrapper for the SVG to position it absolutely -->
            <div v-if="props.data.editor==true" @click="toggleModal('cover')" class="absolute top-0 right-0 mt-[8px] mr-[8px] cursor-pointer bg-white p-1 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                    stroke="currentColor" class="size-3">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
            </div>
        </div>

        <span>
            <div class="-mt-[144px]">
                <div class="grid grid-cols-5 gap-4 flex">
                    <div class="col-span-1">
                        <div class="text-center flex relative">
                            <div class="relative ml-5">
                                <img v-if="props.data.profile ==null" class="mx-auto w-[180px] h-[180px] rounded-xl mt-[45px]"
                                    src="@/assets/images/user.png" alt="">
                                <img v-if="props.data.profile !=null" class="mx-auto w-[180px] h-[180px] rounded-xl mt-[45px]"
                                    :src="props.data.profile.url" alt="">

                                <!-- SVG Wrapper positioned at the bottom right of the image -->
                                <div v-if="props.data.editor==true"  @click="toggleModal('profile')"
                                    class="absolute bottom-0 right-0 mb-[10px] mr-[10px] cursor-pointer bg-white p-1 rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                </div>
                            </div>


                            <!-- Wrapper for the SVG to position it absolutely at the bottom right corner -->


                            <div class="text-left mt-[80px] ml-5">
                                <div v-if="props.data.editor==true"  @click="toggleModal('name')"
                                    class="absolute bottom-0 right-0 mb-[10px] mr-[10px] cursor-pointer bg-white p-1 rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                </div>
                                <h2 class="text-lg font-semibold text-white text-3xl">{{  props.data.name }}
                                    
                                </h2>
                               
                            </div>
                        </div>
                    </div>

                    <div class="col-span-3">
                        <div class="col-span-3">
                            <div
                                class="mt-[140px] text-sm font-medium text-center text-gray-500 border-b border-gray-200 text-gray-400 border-gray-400">
                                <BusinessTabNavigation :tabs="tabs" :initialTab="tab" @tabChanged="handleTab" :businessSlug="props.businessSlug" />

                            </div>
                        </div>
                    </div>

                    <div class="col-span-1 mt-[70px] z-10 text-right mr-[20px]">
                        <div class="w-full flex justify-end">
                            <div class="flex space-x-2">
                                <!-- <div class="text-white">
                                    <button @click="connectAcceptOrConnect"
                                        class="bg-blue-500 rounded-full p-2 m-1 text-xs h-[35px] w-[85px]">
                                        {{ connectionButtonName }} Follow
                                    </button>
                                </div> -->
                                <div class="">
                                    <button class="bg-lighterGray rounded-full w-[35px] h-[35px] p-0 m-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            class="size-5 text-blue-500 m-auto">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </span>
    </section>
    <CoverModal :visible="modals.cover" @close="handleModalClose" :slug="props.businessSlug" :data="props.data" />
    <ProfileModal :visible="modals.profile" @close="handleModalClose" :slug="props.businessSlug" :data="props.data" />
    <NameModal :visible="modals.name" @close="handleModalClose" :slug="props.businessSlug" :data="props.data" />

</template>

<script setup>
import { ref, defineEmits, onMounted } from 'vue';
import BusinessTabNavigation from '~/components/profiles/navigation/BusinessTabNavigation.vue';
import CoverModal from '~/components/profiles/businessProfile/modals/coverModal.vue';
import ProfileModal from '~/components/profiles/businessProfile/modals/profileModal.vue';
import NameModal from '~/components/profiles/businessProfile/modals/nameModal.vue';

const emit = defineEmits(['changeTab','updateData']);

const props = defineProps({

data: {
    type: Object,
    required: true,
},

businessSlug: {
    type: String,
    required: true,
}
});

const tab = ref('feed');


const handleTab = (selectedTab) => {
    tab.value = selectedTab;
    emit('changeTab', selectedTab)
};

const tabs = ref([
  { name: 'feed', label: 'Post' },
  { name: 'member', label: 'Member' },
  { name: 'media', label: 'Media' }
]);

const modals = reactive({
    name: false,
    cover: false,
    profile: false,
});

// Generic toggle function
const toggleModal = (modalName) => {
    if (modals.hasOwnProperty(modalName)) {
        modals[modalName] = !modals[modalName];
    } else {
        console.warn(`Modal "${modalName}" does not exist.`);
    }
};
const handleModalClose = (modalName) => {
    // Defensive check to make sure modalName exists
    if (modals[modalName] !== undefined) {
        modals[modalName] = false;  // Close the modal
        emit('updateData')
        //fetchUserDetails();
                 // Fetch updated user details after closing
    } else {
        console.error(`Invalid modal name: ${modalName}`);
    }
};
</script>

<style scoped>
main {
    padding: 20px;
}

/* Adjust padding or other styles as needed */
</style>