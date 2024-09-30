<template>
  <div>

    <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-4 mt-3">

      <div class="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto">
        <!-- Security Heading -->
        <h2 class="text-2xl font-bold mb-6 text-black">Security</h2>
        <hr class="mt-5 mb-3 text-pigeonBlue">
        <!-- Change Password Section -->
        <div class="mb-8">
          <h3 class="font-semibold text-xl mb-4  text-black">Change password</h3>
          <p class="text-sm text-darkSlateBlue mb-4">Ensure your account is using a long, random password to stay secure.</p>

          <div class="space-y-4">
            <!-- Current Password -->
            <div>
              <label class="block text-sm font-medium  text-black">Current Password</label>
              <input type="password" placeholder="Password"
                class="w-full mt-1 p-3 border border-secondary rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <!-- New Password -->
            <div>
              <label class="block text-sm font-medium  text-black">New Password</label>
              <input type="password" placeholder="Password"
                class="w-full h-12 mt-1 p-3 border border-secondary rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <!-- Confirm Password -->
            <div>
              <label class="block text-sm font-medium  text-black">Confirm Password</label>
              <input type="password" placeholder="Password"
                class="w-full h-12 mt-1 p-3 border border-secondary rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            </div>
          </div>

          <!-- Save Changes Button -->
          <div class="mt-6">
            <button
              class="w-60 py-3 px-4 bg-steelBlue text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Save
              changes</button>
          </div>
        </div>

        <!-- Two Factor Authentication Section -->
        <div class="border-t pt-8">
          <h3 class="font-semibold text-xl mb-4 text-black">Two Factor Authentication</h3>
          <p class="text-sm text-darkSlateBlue mb-4">Add additional security to your account using two factor authentication.
          </p>

          <div class="mb-4 bg-red-100 border border-red-400 text-red-600 px-4 py-3 rounded">
            <p>You have not enabled two factor authentication.</p>
          </div>

          <p class="text-sm text-black mb-6">When two-factor authentication is enabled, you will be prompted for a
            secure, random token during authentication. You may retrieve this token from your phone's Google
            Authenticator application.</p>

          <!-- Enable Button -->
          <button
            class="w-full w-60 py-3 px-4 bg-steelBlue text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Enable</button>
        </div>
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