<template>
<div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="bg-white rounded-lg shadow-md text-center w-[390px] h-[450px]">
            <div class="w-full h-[150px] bg-red-600 rounded-t-lg flex items-center justify-center">
                <img src="@/assets/images/closePayment.png" class="m-auto" alt="">
            </div>
            <div class="mb-4 p-3">
                <h1 class="text-2xl font-light text-red-600 mb-3 mt-4">Payment Faild!</h1>
                <p class="text-gray-400 mb-4">Unfortunately, your payment could not be processed. Please try again or
                    contact support.</p>
             

            </div>
           
            <div class="mt-4">
                <Button class="m-2 bg-gray-100 px-7 py-2 rounded-md mt-8 m-2">
                    <NuxtLink to="/retry-payment">
                        Retry
                    </NuxtLink>
                </Button>
                <Button class="bg-red-600 text-white px-7 py-2 rounded-md mt-8 m-2">
                    <NuxtLink to="/">
                        Exit
                    </NuxtLink>
                </Button>
            </div>
        </div>
    </div>
</template>

<script setup>
// No specific logic needed for now
</script>

<style scoped>
/* Optional: add some styles */
</style>
