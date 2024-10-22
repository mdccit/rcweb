<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="bg-white rounded-lg shadow-md text-center w-[390px] h-[500px]">
            <div class="w-full h-[150px] bg-limegreen rounded-t-lg flex items-center justify-center">
                <img src="@/assets/images/icons8-correct-60.png" class="m-auto" alt="">
            </div>
            <div class="mb-4 p-2">
                <h1 class="text-2xl font-light text-green-600 mb-1 mt-4">Payment Successful!</h1>
                <p class="text-gray-400 mb-4">Your subscription has been activated.</p>
                <p class="text-gray-700 mb-2">Price: </p>
                <p class="text-gray-700 mb-2">Start Date: </p>
                <p class="text-gray-700 mb-2">End Date: </p>
                <p class="text-gray-700 mb-2">Status: </p>

            </div>
            <div class="mt-4">
                
                <Button class="bg-limegreen text-white px-7 py-2 rounded-md mt-8">
                    <NuxtLink to="/app">
                        Continue
                    </NuxtLink>
                </Button>
            </div>
        </div>
    </div>
</template>


<script setup>

</script>