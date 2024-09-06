<template>
    <footer class="py-20 text-center container mx-auto"><img src="@/assets/images/glyph.svg"
            alt="Recruited logo imprint" class="h-12 opacity-25 mb-8 mx-auto block text-gray-500">
        <p class="max-w-3xl text-sm mx-auto opacity-80 text-gray-500">
            <strong>© 2024 Recruited Sports, Inc. All rights
                reserved.
            </strong>
        </p>
        <p class="max-w-xl mt-2 text-xs mx-auto opacity-50 text-gray-500"> Vamos! Recruited is currently in open beta.
            Please report
            any issues you may encounter and send suggestions to hello (at) recruited (dot) pro. </p>
        <div class="max-w-[300px] mt-4 mx-auto text-gray-500">
            <div class="opacity-75 mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2">
                <NuxtLink to="/about">About</NuxtLink>
                <NuxtLink to="/about#contacts">Contact</NuxtLink>
                <NuxtLink to="/blog">Blog</NuxtLink>
                <NuxtLink to="/events">Events</NuxtLink>
                <NuxtLink to="/pricing">Pricing</NuxtLink>
                <NuxtLink to="/privacy">Privacy</NuxtLink>
                <NuxtLink to="/terms">Terms</NuxtLink>

            </div>
        </div>
    </footer>
</template>

<script setup>
import { useUserStore } from '~/stores/userStore'
definePageMeta({ colorMode: 'light', })
const userStore = useUserStore()
</script>

<style scoped></style>