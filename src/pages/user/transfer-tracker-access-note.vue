<template>
    <div class="bg-transferTrackerBlur h-full w-full bg-cover bg-center">
        <div class="h-screen flex items-center justify-center">
            <div class="bg-white p-8 rounded-xl shadow-lg text-center max-w-md">
                <div class="mb-4">
                    <div class="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6 text-black">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>

                    </div>
                </div>

                <!-- Heading -->
                <h2 class="text-lg font-semibold mb-4 text-black">Buy premium package to access this page</h2>

                <!-- Text -->
                <p class="text-darkSlateBlue mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod
                    tempor
                    incididunt ut labore et dolore magna aliqua.</p>

                <!-- Button -->
                <button class="bg-steelBlue text-white py-2 px-4 rounded-md w-full">View
                    plans</button>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'socialhub-one-column',
    middleware: ['role'],
    requiredRole: ['admin', 'coach', 'business_manager', 'player', 'parent', 'default'],
});
</script>