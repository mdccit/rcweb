<template>
    <div class="p-3 pt-6" >
        <div class="col-span-5 sm:col-span-1 md:col-span-5 lg:col-span-1 xl:col-span-1">
            <div class="h-[80px] card rounded-2xl overflow-hidden border border-lightSteelBlue border-opacity-40 bg-white p-3 h-auto">
                <div class="grid grid-cols-3 gap-4">
                    <div class="... text-center">
                        <!-- <img class="mx-auto w-[60px] h-[60px] rounded-full " src="@/assets/user/images/whittier.png"
                            alt=""> -->
                        <img v-if="props.data.schoolProfilePicture == null" src="@/assets/images/user.png" alt=""
                            class="mx-auto w-[60px] h-[60px] rounded-full ">
                        <img v-if="props.data.schoolProfilePicture != null" :src="props.data.schoolProfilePicture.url" alt=""
                            class="mx-auto w-[60px] h-[60px] rounded-full ">
                    </div>
                    <div class="col-span-2">
                        <p class="text-black text-sm cursor-pointer" @click="redirectToManage(props.data.school_slug)">
                            {{ props.data.colleage }}
                        </p>
                        <p class="text-xs text-darkSlateBlue leading-relaxed mx-auto">
                            Location
                        </p>
                        <button type="button" v-if="loggedUserSlug == props.userSlug" @click="redirectToManage(props.data.school_slug)"
                            class="mt-3 btn-sm py-2.5 px-5 me-2 mb-2 text-xs text-blue-500 focus:outline-none bg-white rounded-full border border-blue-500 hover:bg-blue-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-blue-700 light:focus:ring-gray-700 light:bg-gray-800 light:text-gray-400 dark:border-blue-600 light:hover:text-white light:hover:bg-gray-700">
                            Manage
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '~/stores/userStore';
const userStore = useUserStore();
const loggedUserSlug = ref('');

// Use the router for programmatic navigation
const router = useRouter();
const props = defineProps({

    data: {
        type: Object,
        required: true,
    },
    userSlug: {
        type: String,
        required: true,
    },
});


// Function to handle redirect on button click
const redirectToManage = (schoolSlug) => {
    if (schoolSlug) {
        router.push(`/app/profile/school/${schoolSlug}`);
    } else {
        // Handle the case when slug is not available
        console.warn('School slug not available');
    }
};


onMounted(() => {
if (process.client) {
    loggedUserSlug.value = localStorage.getItem('user_slug');
  }
});
</script>

<style scoped>
main {
    padding: 20px;
}

/* Adjust padding or other styles as needed */
</style>