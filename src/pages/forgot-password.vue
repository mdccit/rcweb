<template>
    <div>
        <div class="min-h-screen w-full bg-cover bg-no-repeat flex flex-col sm:justify-center items-center py-12 px-4"
            style="background-image: url(https://qa1.recruited.qualitapps.com/static/bg-generic.svg);">
            <div>
                <NuxtLink to="/login"><svg viewBox="0 0 206 45" class="w-auto h-10" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M68.6295 35H62.6036L57.762 27.6157H55.3586V35H50.2035V10.6178H58.2497C64.6935 10.6178 68.4205 13.9268 68.4205 19.1167C68.4205 22.8437 66.5048 25.5954 63.0913 26.8494L68.6295 35ZM58.4935 15.3897H55.3586V22.8786H58.4935C61.4542 22.8786 63.1261 21.5201 63.1261 19.1167C63.1261 16.7482 61.4542 15.3897 58.4935 15.3897ZM87.8169 26.0831C87.8169 26.5707 87.7821 27.128 87.7124 27.755H75.5561C75.9393 30.1584 77.4719 31.3427 79.6314 31.3427C81.2337 31.3427 82.4528 30.646 83.045 29.3921L87.5034 30.4022C86.4236 33.5022 83.4281 35.418 79.5618 35.418C74.3022 35.418 70.7842 31.8651 70.7842 26.6752C70.7842 21.3808 74.4415 17.7235 79.5618 17.7235C84.3686 17.7235 87.8169 20.928 87.8169 26.0831ZM79.5618 21.7291C77.6809 21.7291 76.2528 22.7044 75.7303 24.655H82.9753C82.627 22.5999 81.3034 21.7291 79.5618 21.7291ZM99.0493 35.418C93.9987 35.418 90.4111 31.8303 90.4111 26.5707C90.4111 21.3111 93.9987 17.7235 99.119 17.7235C103.403 17.7235 106.677 20.1965 107.27 24.2718L102.358 25.0381C102.08 23.2269 100.721 22.1123 99.0493 22.1123C96.9942 22.1123 95.3572 23.819 95.3572 26.5707C95.3572 29.3224 96.9942 31.0292 99.0842 31.0292C100.721 31.0292 102.184 30.0191 102.498 28.173L107.27 28.9393C106.677 32.8753 103.334 35.418 99.0493 35.418ZM119.837 17.828C120.394 17.828 120.952 17.8976 121.37 18.0718V22.6696C120.847 22.5999 120.36 22.5651 119.907 22.5651C116.842 22.5651 115.344 24.1325 115.344 27.4415V35H110.467V18.1414H114.891L115.135 20.6842H115.274C116.075 18.8729 117.817 17.828 119.837 17.828ZM134.796 27.1629V18.1414H139.672V35H135.249L135.04 32.9449H134.935C133.89 34.4775 131.905 35.418 129.78 35.418C126.436 35.418 124.172 33.0843 124.172 28.6258V18.1414H129.049V27.2674C129.049 29.9494 130.024 30.9247 131.696 30.9247C133.577 30.9247 134.796 29.7056 134.796 27.1629ZM146.513 15.8425C144.806 15.8425 143.448 14.5886 143.448 12.847C143.448 11.1054 144.806 9.85149 146.513 9.85149C148.219 9.85149 149.578 11.1054 149.578 12.847C149.578 14.5886 148.219 15.8425 146.513 15.8425ZM148.951 35H144.075V18.1414H148.951V35ZM161.965 31.0988C162.453 31.0988 163.01 31.064 163.463 30.9944V35.1045C162.766 35.2787 161.895 35.418 160.781 35.418C156.392 35.418 154.267 33.4326 154.267 28.7651V22.4257H151.655V18.1414H154.267V14.1358H159.144V18.1414H163.358V22.4257H159.144V28.382C159.144 30.437 159.875 31.0988 161.965 31.0988ZM182.414 26.0831C182.414 26.5707 182.379 27.128 182.309 27.755H170.153C170.536 30.1584 172.069 31.3427 174.228 31.3427C175.83 31.3427 177.05 30.646 177.642 29.3921L182.1 30.4022C181.02 33.5022 178.025 35.418 174.159 35.418C168.899 35.418 165.381 31.8651 165.381 26.6752C165.381 21.3808 169.038 17.7235 174.159 17.7235C178.965 17.7235 182.414 20.928 182.414 26.0831ZM174.159 21.7291C172.278 21.7291 170.849 22.7044 170.327 24.655H177.572C177.224 22.5999 175.9 21.7291 174.159 21.7291ZM197.512 20.0572V10.6178H202.389V35H197.93L197.721 32.9449H197.617C196.746 34.4427 194.796 35.418 192.566 35.418C188.386 35.418 185.043 31.9348 185.043 26.5707C185.043 21.2066 188.386 17.7235 192.566 17.7235C194.83 17.7235 196.572 18.7336 197.373 20.0572H197.512ZM193.82 31.0292C196.049 31.0292 197.652 29.3921 197.652 26.5707C197.652 23.7493 196.049 22.1123 193.82 22.1123C191.591 22.1123 189.989 23.7493 189.989 26.5707C189.989 29.3921 191.591 31.0292 193.82 31.0292Z"
                            fill="white"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M18.9421 7.91002L18.9419 7.90904L18.9417 7.90821L18.9415 7.90714L18.9415 7.90696L18.9414 7.90666L18.9413 7.9063C18.8752 7.58051 18.7496 7.2774 18.5764 7.00619C23.6181 7.91105 27.8284 11.2119 29.9866 15.6881C29.8141 15.673 29.6383 15.6724 29.4608 15.6871L29.4603 15.6872L29.46 15.6872L29.4592 15.6873L29.4587 15.6873L29.4578 15.6874L29.4568 15.6875L29.4566 15.6875L29.423 15.69C29.3898 15.6924 29.3356 15.6961 29.2627 15.7005C29.1166 15.7092 28.8966 15.7204 28.6203 15.7285C28.064 15.7448 27.2987 15.7481 26.4606 15.698C24.6138 15.5878 23.0602 15.2493 22.2975 14.7453C21.4673 14.1967 20.5804 12.7842 19.8686 10.9566C19.5463 10.1292 19.3107 9.3523 19.1559 8.78063C19.079 8.49674 19.0234 8.26838 18.9879 8.11572C18.9702 8.03951 18.9576 7.98253 18.95 7.94731L18.9424 7.91127L18.9421 7.91002ZM31.4322 20.6451C31.37 20.6878 31.3055 20.7285 31.239 20.7669L31.2386 20.7671L31.2373 20.7679L31.2369 20.7681L31.2366 20.7683L31.2361 20.7686L31.2102 20.7838C31.1846 20.7989 31.1427 20.8239 31.0866 20.858C30.9741 20.9264 30.8054 21.0311 30.5964 21.1669C30.1754 21.4403 29.6051 21.8308 29.0064 22.2979C27.6909 23.3242 26.6899 24.3774 26.3648 25.151C25.9697 26.0912 26.094 27.8171 26.6529 29.8137C26.9058 30.7174 27.2045 31.5292 27.4413 32.1167C27.5589 32.4085 27.6593 32.6399 27.7281 32.7939C27.7303 32.7987 27.7324 32.8035 27.7345 32.8081C30.1086 30.0476 31.5436 26.456 31.5436 22.5294C31.5436 21.8917 31.5058 21.263 31.4322 20.6451ZM23.3612 36.3585L16.0793 32.9255L8.47013 36.5128C10.6533 37.6551 13.1371 38.3011 15.7718 38.3011C18.5229 38.3011 21.1096 37.5967 23.3612 36.3585ZM4.22318 33.2709C4.25491 33.1813 4.29177 33.0926 4.33382 33.0051L4.33402 33.0047L4.33495 33.0028L4.3354 33.0018L4.33628 33L4.35337 32.9635C4.36987 32.9281 4.39621 32.8708 4.43056 32.7939C4.49937 32.6399 4.59973 32.4085 4.71736 32.1167C4.95422 31.5292 5.25285 30.7174 5.5058 29.8137C6.06465 27.8171 6.18899 26.0912 5.79387 25.151C5.4688 24.3774 4.46781 23.3242 3.15232 22.2979C2.55359 21.8308 1.98325 21.4403 1.56232 21.1669C1.35324 21.0311 1.18455 20.9264 1.07208 20.858C1.01593 20.8239 0.974063 20.7989 0.94847 20.7838L0.922629 20.7686L0.919701 20.7669C0.630764 20.6 0.381842 20.3917 0.17769 20.154C0.0606666 20.9288 0 21.722 0 22.5294C0 26.6793 1.60282 30.4549 4.22318 33.2709ZM1.491 15.8267C3.72414 11.077 8.25707 7.62257 13.6548 6.89844C13.4439 7.19627 13.2924 7.53678 13.2173 7.9065L13.2168 7.90904L13.2163 7.91127L13.2086 7.94731C13.201 7.98253 13.1885 8.03951 13.1708 8.11572C13.1353 8.26838 13.0797 8.49674 13.0028 8.78063C12.848 9.3523 12.6124 10.1292 12.2901 10.9566C11.5783 12.7842 10.6914 14.1967 9.86118 14.7453C9.09845 15.2493 7.54491 15.5878 5.69812 15.698C4.85993 15.7481 4.09472 15.7448 3.53839 15.7285C3.26211 15.7204 3.04209 15.7092 2.89599 15.7005C2.82306 15.6961 2.76889 15.6924 2.73572 15.69L2.70211 15.6875L2.70188 15.6875L2.44185 18.424C2.70034 15.7037 2.70137 15.6875 2.70089 15.6874L2.69947 15.6873L2.69839 15.6872L2.69793 15.6871C2.27909 15.6523 1.86944 15.7034 1.491 15.8267ZM13.2058 19.2453C14.3993 18.4568 15.3413 17.3584 16.0793 16.2171C16.8174 17.3584 17.7594 18.4568 18.9528 19.2453C20.0142 19.9466 21.2661 20.396 22.4978 20.6861C21.8732 21.4246 21.3167 22.2461 20.9466 23.1268C20.173 24.9677 20.21 27.0578 20.4954 28.8638L17.3825 27.3963C16.5621 27.0095 15.5965 27.0095 14.7762 27.3963L11.6633 28.8638C11.9487 27.0578 11.9857 24.9677 11.212 23.1268C10.8419 22.2461 10.2855 21.4246 9.66088 20.6861C10.8926 20.396 12.1445 19.9466 13.2058 19.2453Z"
                            fill="white"></path>
                    </svg>
                </NuxtLink>
                </div>
            <div class="w-full mt-6 mx-4 p-12 bg-white rounded-lg soverflow-hidden sm:max-w-lg ">
                <div class="flex items-center space-x-4 mb-8">
                    <div class="flex self-center items-center">
                        <NuxtLink  to="/login"
                            class="bg-black/10 p-2 hover:bg-black/15 active:bg-black/20 rounded-full"><svg
                                class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M15 6l-6 6l6 6"></path>
                            </svg> <span class="sr-only">Go back</span>
                        </NuxtLink>
                    </div>
                    <div class="self-center">
                        <h2 class="text-2xl font-bold">Forgot Password</h2>
                    </div>
                </div>
                <p class="text-gray-800"><strong>See no email?</strong></p>
                <ul class="list-disc ml-8 text-gray-700">
                    <li class="">Check your spam</li>
                    <li>Check your social or promotions tab</li>
                    <li>If you are using your school or work issued email, it is possible your IT department has blocked
                        our email. Sign up with your personal email instead or contact your IT department </li>
                    <li>If you signed up previously with your email, we already have you in our system and you do not
                        need to create a new account. Just enter your email here and you will be able to log back in
                        again.</li>
                    <li>Have another issue? Please send an email to us at <a href="mailto:hello@recruited.pro"
                            class="font-bold text-primary">hello@recruited.pro</a> from the email you signed up with and
                        we will help you.</li>
                </ul>
                <div class="m-12"></div>

                <!-- Notification Component -->
                <Notification v-if="showNotification" :message="notificationMessage" :duration="3000" />


                <form data-splade-id="1z9AwMnuvoZEkEl5" @submit.prevent="sendResetPasswordRequest(email)">
                    <fieldset class="space-y-4">
                        <div class=""><label class="block"><span class="block mb-1 text-gray-700 font-sans"> Email <span
                                        aria-hidden="true" class="text-red-600"
                                        title="This field is required">*</span></span>
                                <div class="flex rounded-lg border border-gray-300 shadow-sm"><input
                                        class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring text-black focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                        name="email" type="email" v-model="email" data-validation-key="email" id="email"
                                        required="" autofocus=""></div>
                            </label><!----></div>
                        <div class="flex items-center justify-end mt-4">
                            <button type="submit"
                                class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-blue-500 hover:bg-blue-700">
                                <div class="flex flex-row items-center justify-center"><span class=""> Email
                                        reset link </span></div>
                            </button>
                        </div>
                    </fieldset>
                </form>
            </div>


        </div><!----><!---->
        <div class="fixed z-40 inset-0 grid grid-cols-3 grid-flow-row-3 pointer-events-none">
            <div class="relative">
                <div class="absolute w-full h-full flex flex-col p-4 space-y-4 items-start justify-start"></div>
            </div>
            <div class="relative">
                <div class="absolute w-full h-full flex flex-col p-4 space-y-4 items-center justify-start"></div>
            </div>
            <div class="relative">
                <div class="absolute w-full h-full flex flex-col p-4 space-y-4 items-end justify-start"></div>
            </div>
            <div class="relative">
                <div class="absolute w-full h-full flex flex-col p-4 space-y-4 items-start justify-center"></div>
            </div>
            <div class="relative">
                <div class="absolute w-full h-full flex flex-col p-4 space-y-4 items-center justify-center"></div>
            </div>
            <div class="relative">
                <div class="absolute w-full h-full flex flex-col p-4 space-y-4 items-end justify-center"></div>
            </div>
            <div class="relative">
                <div class="absolute w-full h-full flex flex-col p-4 space-y-4 items-start justify-end"></div>
            </div>
            <div class="relative">
                <div class="absolute w-full h-full flex flex-col p-4 space-y-4 items-center justify-end"></div>
            </div>
            <div class="relative">
                <div class="absolute w-full h-full flex flex-col p-4 space-y-4 items-end justify-end"></div>
            </div>
        </div><!---->
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useNuxtApp, useRouter } from '#app';
import Notification from '~/components/common/Notification.vue'; // Import the Notification component

const nuxtApp = useNuxtApp();
const router = useRouter();
const email = ref('');
const showNotification = ref(false); // To control the visibility of the notification
const notificationMessage = ref('');

const sendResetPasswordRequest = async () => {
    try {
        const result = await nuxtApp.$authService.resetPasswordRequest(email.value);
        console.log('Reset password request sent:', result);

         // Store the password_reset_id in local storage
         if (result && result.data && result.data.password_reset_id) {
            localStorage.setItem('password_reset_id', result.data.password_reset_id);
        }

        // Extract display_message from the response
        if (result && result.data && result.data.display_message) {
            notificationMessage.value = result.data.display_message;
        } else {
            notificationMessage.value = 'Password reset request was recorded.';
        }

        showNotification.value = true;

        // Redirect to the new password page after a short delay
        setTimeout(() => {
            router.push('/reset-password'); // Change '/new-password' to your actual route
        }, 2000);
    } catch (error) {
        console.error('Error sending reset password request:', error.message);

        // Set the error notification message and show it
        notificationMessage.value = 'There was an error sending the reset password request. Please try again.';
        showNotification.value = true;
    }
};
</script>
