<template>
  <div class="border-t pt-8 mb-8">
    <h3 class="font-semibold text-xl mb-4 text-black">Two Factor Authentication</h3>
    <p class="text-sm text-darkSlateBlue mb-4">Add additional security to your account using two factor
      authentication.
    </p>

    <div class="space-y-4">
      <div class="mb-4 bg-veryPaleRed text-red px-4 py-3 rounded w-fit">
        <p>You have not enabled two factor authentication.</p>
      </div>

      <p class="text-sm text-black mb-6">When two-factor authentication is enabled, you will be prompted for a
        secure, random token during authentication. You may retrieve this token from your phone's Google
        Authenticator application.</p>
    </div>
    <div class="mt-6">
      <button
        class="w-60 py-3 px-4 bg-steelBlue text-white text-sm font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Enable</button>
    </div>
  </div>
</template>

<script setup>

</script>