<template>
    <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white border-opacity-40 w-full p-6">
        <div class="grid grid-cols-4 mb-4">
            <div class=" col-span-3">
                <h1 class="text-lg font-semibold mb-1 text-black">Child</h1>
                <!-- <p class="text-gray-500 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing
                                     elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> -->
            </div>
            <div class="col-span-1 text-right">
                <button class="inline-flex w-full justify-center rounded-md bg-steelBlue px-3 py-2 text-sm font-normal text-white shadow-sm hover:bg-blue-700 sm:ml-3 sm:w-auto" @click="memberAdd">

                    Add Child +
                </button>
            </div>
        </div>
        <div class="grid grid-cols-6">
            <div v-for="member in props.getChild" class="col-span-3 p-1">
                <!-- member card start-->
                <div class="bg-white p-4 border rounded-2xl group">
                    <div class=" grid grid-cols-12 gap-4">
                        <div class="col-span-3">
                            <img class="rounded-2xl w-[85px] h-[85px]" src="@assets/user/images/avtar.png"
                                alt="Neil image">
                        </div>
                        <div class="col-span-6">
                            <h4 class="text-black font-normal">{{ member.first_name }} {{ member.last_name }}</h4>
                            <div class="flex items-center space-x-2 mb-2">
                                <div class="bg-blue-200 p-1 rounded">
                                    <img src="@assets/user/images/playerIcon.png" alt="" class="w-4 h-4">
                                </div>
                                <div class="text-sm ml-2 text-blue-500">Tennis {{ member.user_role }}</div>
                            </div>
                            <div class="flex items-center space-x-2">
                                <div class="rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-5 text-black mr-1">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                </div>
                                <div class="text-sm ml-2 text-black">New Pura, Belgium</div>
                            </div>
                        </div>
                        <div class="col-span-3">
                            <h4 class="text-black">UTR <span class="text-blue-500">{{ member.other_data.utr }}</span>
                            </h4>
                        </div>
                    </div>

                    <div class="flex mt-2">
                        <div class="flex-1">
                            <div class="flex items-center space-x-2 mb-2">
                                <div class="bg-blue-100 p-1 rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-4 text-blue-700">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                    </svg>
                                </div>
                                <div class="text-xs ml-2 text-black"><span class="text-blue-700">Ralph, Cameron</span> 3
                                    more mutual connections</div>
                            </div>
                        </div>
                        <div class="flex-1 text-right">
                            <button 
                                class="inline-flex w-[40px] h-[40px] justify-center rounded-full bg-blue-100 px-3 py-2 text-sm text-white shadow-sm hover:bg-blue-300 sm:ml-3 sm:w-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                @click="update(member)">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="size-4 text-steelBlue mx-auto my-auto">
                                    <path
                                        d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                                    <path
                                        d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    </div>
    <AddChildTab :isVisible="showModal" @close="showModal = false" :parentSlug="route.params.slug"
        @updatePage="updatePage" />
    <UpdateChild :isVisible="showUpdateModal" @close="showUpdateModal = false" :parentSlug="route.params.slug"
        :data="updateData" @updatePage="updatePage" />

</template>

<script setup>
import { defineProps, defineEmits, defineExpose, ref, onMounted } from 'vue';
import { useUserStore } from '~/stores/userStore'
import AddChildTab from '~/components/profiles/parentProfile/modals/addChild.vue';
import UpdateChild from '~/components/profiles/parentProfile/modals/updateChild.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const emit = defineEmits(['updateData']);

const userStore = useUserStore()
const showModal = ref(false)
const showDeleteModal = ref(false)
const showUpdateModal = ref(false)
const updateData = ref({})
const props = defineProps({
    getChild: Array,
    userSlug: String
});

const memberAdd = () => {
    console.log(4588)
    showModal.value = true;
    console.log(showModal.value)
}

onMounted(() => {
    console.log("child")
    console.log(route.params.slug)

})

const getMember = () => {
    schooUserId.value = ''
    emit('getMember')
}

const update = async (data) => {
    updateData.value = data
    showUpdateModal.value = true
}

const updatePage = () => {
    emit('updateData')
}
</script>