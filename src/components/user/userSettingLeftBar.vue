<template>
    <div class=" card rounded-2xl overflow-hidden border border-lightSteelBlue p-3 mt-3 bg-white">
        <h2 class="font-bold text-lg mb-4">Settings</h2>
        <p class="text-gray-500 text-sm mb-4">Manage all your account settings here</p>

        <!-- Security Option -->
        <button class="w-full text-left p-2 mb-2 bg-blue-100 text-blue-600 rounded-md">
            Security
        </button>

        <!-- Subscription & Billing Option -->
        <button class="w-full text-left p-2 text-gray-600 bg-gray-100 rounded-md">
            Subscription & Billing
        </button>
    </div>
</template>

<script>
export default {
    name: 'user-setting-left'
}
</script>