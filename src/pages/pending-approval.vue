<template>
    <div class="min-h-screen w-full bg-cover bg-no-repeat flex flex-col sm:justify-center items-center py-12 px-4"
        style="background-image: url(https://qa1.recruited.qualitapps.com/static/bg-generic.svg);">
        <div class="w-full max-w-md">
            <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
                <div class="w-full text-center mt-4">
                    <img class="text-center mx-auto w-8 h-8" img src="@/assets/images/hourglass.gif" alt="">
                </div>
                <h1 class="text-2xl font-bold mb-4 text-center mt-4">Hi User</h1>
                <p class="text-center text-gray-600">We are thrilled to welcome you to Recruited! Your account has been submitted for
                    approval. We'll
                    notify you as soon as it's approved.
                
                </p>
                <div class="w-full text-center mt-4">
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 
                    focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2
                     mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2">
                    Go back to Home
                </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '~/stores/userStore'

const userStore = useUserStore()

const email = userStore.user?.email
const token = userStore.user?.token
</script>

<style scoped>
h1 {
    color: #333;
}

p {
    font-size: 16px;
}
</style>