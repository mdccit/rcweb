<template>
    <nav class="bg-white text-black">
        <div class="container py-10 md:p-8 flex flex-row gap-4"><a href="https://qa1.recruited.qualitapps.com"
                class="self-center flex-1 lg:flex-none ml-20 lg:ml-0 lg:mr-4">
                <img src="@/assets/images/logo.svg" alt="Logo" class="h-8">
            </a>
            <div class="hidden lg:flex flex-row flex-1 self-center gap-8">
                <NuxtLink to="/pricing" class="font-bold self-center"> Pricing </NuxtLink>
                <NuxtLink to="/about" class="font-bold self-center"> About </NuxtLink>
                <NuxtLink to="/resources" class="font-bold self-center"> Resources </NuxtLink>
                <NuxtLink to="/calls" class="font-bold self-center"> Calls </NuxtLink>
                <NuxtLink to="/events" class="font-bold self-center"> Events </NuxtLink>
                <NuxtLink to="/blog" class="font-bold self-center"> Blog </NuxtLink>

                <div class="inline-flex self-center items-center" style="position: relative;">
                    <div>
                        <button type="button" aria-haspopup="true" class="inline-flex self-center items-center">
                            <button class="font-bold flex items-center -mt-[20px]"> More
                                <svg class="fill-current h-4 w-4 ml-1" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </button>
                    </div>
                    <div>
                        <div data-splade-dropdown-id="OsLsg8zS0ckX7J68" class="absolute z-40"
                            data-popper-placement="bottom-start"
                            style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 24px);">
                            <!---->
                        </div>
                    </div>
                </div>
            </div>
            <div class="self-center">
                <NuxtLink to="/login"
                    class="inline-block bg-black bg-opacity-10 text-center hover:opacity-80 active:opacity-60 text-black font-bold py-2.5 px-8 rounded-full">
                    Login </NuxtLink>
            </div>
        </div>
        <div class="flex flex-row gap-4 lg:hidden absolute top-9 left-7"><button
                class="flex w-10 h-10 bg-black/5 hover:bg-black/10 active:bg-black/15 transition flex-row text-center rounded-full flex items-center justify-center"><span><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 6l16 0"></path>
                        <path d="M4 12l16 0"></path>
                        <path d="M4 18l16 0"></path>
                    </svg></span><span style="display: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 6l-12 12"></path>
                        <path d="M6 6l12 12"></path>
                    </svg></span></button></div>
        <div class="lg:hidden px-8" style="display: none;">
            <div class="flex flex-col gap-4 text-xl"><a href="https://qa1.recruited.qualitapps.com/about"
                    class="font-bold self-center w-full"> About </a><a
                    href="https://qa1.recruited.qualitapps.com/pricing" class="font-bold self-center w-full"> Pricing
                </a><a href="https://qa1.recruited.qualitapps.com/events" class="font-bold self-center w-full"> Events
                </a><a href="https://qa1.recruited.qualitapps.com/app/resources" class="font-bold self-center w-full">
                    Resources </a><a href="https://qa1.recruited.qualitapps.com/app/resources/bookings"
                    class="font-bold self-center w-full"> Calls </a><a href="https://qa1.recruited.qualitapps.com/blog"
                    class="font-bold self-center w-full"> Blog </a>
                <div class="p-2"></div>
                <NuxtLink to="/login"
                    class="bg-opacity-10 text-center hover:opacity-80 active:opacity-60 text-black font-bold py-2.5 px-8 rounded-full">
                    Login </NuxtLink>
            </div>
            <div class="pb-8"></div>
        </div>
    </nav>
</template>

<script setup>
import { useUserStore } from '~/stores/userStore'

const userStore = useUserStore()

const email = userStore.user?.email
const token = userStore.user?.token
</script>

<style scoped></style>