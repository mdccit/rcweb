<template>
    <div>

        <!-- Resources -->

        <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-4 mt-3">
            <!-- Section Header -->
            <div class="mb-6">
                <h2 class="text-2xl text-black font-bold">Resources</h2>
                <p class="text-darkSlateBlue mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </p>
            </div>

        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'socialhub-three-column',
    middleware: ['role'],
    requiredRole: ['admin', 'coach', 'business_manager', 'player', 'parent', 'default'],
});
</script>