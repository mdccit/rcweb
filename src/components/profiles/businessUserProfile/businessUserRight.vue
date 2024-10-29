<template>
  <div class="p-2">
                    <div
                        class="h-[80px] card rounded-2xl overflow-hidden border border-lightSteelBlue  border-opacity-40 bg-white p-3 mt-4 h-auto">
                        <div class="">

                <div class="">

                    <p class="text-xs text-darkSlateBlue leading-relaxed mx-auto text-center mb-3">{{
                        position }} with </p>
                    <div class="... text-center">
                        <!-- <img class="mx-auto w-[85px] h-[85px] rounded-[20px] mb-3"
                            src="@/assets/user/images/whitter collage.png" alt=""> -->
                        <img v-if="props.data.businessProfilePicture == null" src="@/assets/images/user.png" alt=""
                            class="mx-auto w-[60px] h-[60px] rounded-full ">
                        <img v-if="props.data.businessProfilePicture != null" :src="props.data.businessProfilePicture.url" alt=""
                            class="mx-auto w-[60px] h-[60px] rounded-full ">
                        <p class="text-black text-sm text-center font-normal mb-3 w-[200px] mx-auto">
                            <b>{{ props.data.business }}</b>
                        </p>
                        <button @click="redirectToBusiness"
                            class="text-steelBlue text-sm text-center  mb-3">Business</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';


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

const redirectToBusiness = () => {

    router.push(`/app/profile/business/${props.data.businessSlug}`);

};
</script>

<style scoped>
main {
    padding: 20px;
}

/* Adjust padding or other styles as needed */
</style>