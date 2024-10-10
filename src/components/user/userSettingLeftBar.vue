<template>
    <div class=" card rounded-2xl overflow-hidden border border-lightSteelBlue px-3 pt-3 pb-8 mt-3 bg-white">
        <h2 class="font-bold text-lg mb-4 text-black">Settings</h2>
        <p class="text-darkSlateBlue text-sm mb-4">Manage all your account settings here</p>

        <!-- Security Option -->
        <button class="bg-steelBlue text-white px-4 py-2 rounded-lg text-sm w-full text-left mb-3">Security</button>

        <!-- Subscription & Billing Option -->
        <button class="bg-lightGray text-darkSlateBlue px-4 py-2 rounded-lg text-sm w-full text-left"> Subscription & Billing</button>

        <button class="bg-lightGray text-darkSlateBlue px-4 py-2 rounded-lg text-sm w-full text-left"> Transcript</button>
    </div>
</template>

<script>
export default {
    name: 'user-setting-left'
}
</script>