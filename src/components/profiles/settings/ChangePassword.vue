<template>
  <div class="mb-8">
    <h3 class="font-semibold text-xl mb-4  text-black">Change password</h3>
    <p class="text-sm text-darkSlateBlue mb-4">Ensure your account is using a long, random password to stay
      secure.</p>

    <div class="space-y-4">
      <div>
        <label class="block text-sm font-medium  text-black">Current Password</label>
        <input type="password" placeholder="Password"
          class="w-full mt-1 p-3 border border-secondary rounded-lg focus:ring-blue-500 focus:border-blue-500" />
      </div>
      <div>
        <label class="block text-sm font-medium  text-black">New Password</label>
        <input type="password" placeholder="Password"
          class="w-full h-12 mt-1 p-3 border border-secondary rounded-lg focus:ring-blue-500 focus:border-blue-500" />
      </div>
      <div>
        <label class="block text-sm font-medium  text-black">Confirm Password</label>
        <input type="password" placeholder="Password"
          class="w-full h-12 mt-1 p-3 border border-secondary rounded-lg focus:ring-blue-500 focus:border-blue-500" />
      </div>
    </div>
    <div class="mt-6">
      <button
        class="w-60 py-3 px-4 bg-steelBlue text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Save
        changes</button>
    </div>
  </div>
</template>

<script setup>
</script>