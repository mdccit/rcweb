<template>
    <section class="w-full mb-5">
        <img class="w-full h-[400px] rounded-xl" src="../../assets/user/images/coach-cover.jpg " alt="">
        <span>
            <div class="-mt-[144px]">
                <div class="grid grid-cols-5 gap-4 flex">

                    <div class="col-span-1">
                        <div class="text-center flex">
                            <img class="mx-auto w-[150px] h-[150px] rounded-xl mt-[45px]"
                                src="../../assets/user/images/coachProPic.png" alt="">

                            <div class="text-left mt-[80px] ">
                                <h2 class="text-lg font-semibold  text-white text-3xl">{{ name }}</h2>
                                <h5 class=" text-md  text-white font-normal text-black text-primaryblue">Tennis
                                    {{ role }}
                                </h5>
                            </div>
                        </div>

                    </div>

                    <div class="col-span-3">


                    </div>
                    <div class="col-span-1 mt-[70px]">
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
                                <div class="">
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
                                        class="bg-blue-500 rounded-full  p-2 m-1 text-xs h-[35px] w-[85px]">
                                        {{ connectionButtonName }}
                                    </button>
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