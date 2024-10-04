<template>
      <section class="w-full mb-5 p-3">
        <div class="relative">
            <img class="w-full h-[400px] rounded-xl" src="@/assets/images/covrss.jpg" alt="">
            <!-- Wrapper for the SVG to position it absolutely -->
            <div class="absolute top-0 right-0 mt-[8px] mr-[8px] cursor-pointer bg-white p-1 rounded-md">
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
                                <img class="mx-auto w-[180px] h-[180px] rounded-xl mt-[45px]"
                                    src="@/assets/images/avtar.png" alt="">

                                <!-- SVG Wrapper positioned at the bottom right of the image -->
                                <div
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
                                <h2 class="text-lg font-semibold text-white text-3xl"> Parent </h2>
                                <h5 class="text-md text-white font-normal text-black text-primaryblue">role
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-3">
                        <div class="col-span-3">
                            <div
                                class="mt-[140px] text-sm font-medium text-center text-gray-500 border-b border-gray-200 text-gray-400 border-gray-400">
                                <ul class="flex flex-wrap -mb-px">
                                    <li class="me-2">
                                        <button @click="handleTab('feed')"
                                            class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:text-blue-500 dark:border-blue-500">Post</button>
                                    </li>
                                    <li class="me-2">
                                        <button @click="handleTab('connection')"
                                            class="inline-block p-4 border-b-2 border-transparent rounded-t-lg active  hover:border-gray-300 dark:hover:text-gray-300"
                                            aria-current="page">Connections</button>
                                    </li>
                                    <li class="me-2">
                                        <button @click="handleTab('media')"
                                            class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Media</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-1 mt-[70px] z-10">
                        <div>
                            <div class="flex">
                                <div class="">
                                    <button class="bg-lighterGray rounded-full w-[35px] h-[35px] p-0 m-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            class="size-5 text-blue-500 m-auto">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                    </button>
                                </div>
                                <div v-if="buttonHide == true" class="">
                                    <button class="bg-lighterGray rounded-full w-[35px] h-[35px] p-0 m-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            class="size-5 text-blue-500 m-auto">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                                        </svg>

                                    </button>
                                </div>

                                <div>
                                    <button @click="connectAcceptOrConnect"
                                        class="bg-blue-500 rounded-full text-white p-2 m-1 text-xs h-[35px] w-[85px]">
                                        Connect
                                    </button>
                                    <div v-if="connectionButtonName =='Accept'" class="text-white">
                                        <button @click="connectReject" class="bg-red-500 rounded-full  p-2 m-1 text-xs h-[35px] w-[85px]">
                                            Reject
                                        </button>
                                    </div> 
                                </div>
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
</template>

<script setup>

</script>

<style scoped>
main {
    padding: 20px;
}

/* Adjust padding or other styles as needed */
</style>