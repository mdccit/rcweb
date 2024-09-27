<template>
    <div>

        <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-4 mt-3">

            <div class="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto">
  <!-- Security Heading -->
  <h2 class="text-2xl font-bold mb-6">Security</h2>
  
  <!-- Change Password Section -->
  <div class="mb-8">
    <h3 class="font-semibold text-xl mb-4">Change password</h3>
    <p class="text-sm text-gray-500 mb-4">Ensure your account is using a long, random password to stay secure.</p>
    
    <div class="space-y-4">
      <!-- Current Password -->
      <div>
        <label class="block text-sm font-medium text-gray-700">Current Password</label>
        <input type="password" placeholder="Password" class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
      </div>
      
      <!-- New Password -->
      <div>
        <label class="block text-sm font-medium text-gray-700">New Password</label>
        <input type="password" placeholder="Password" class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
      </div>
      
      <!-- Confirm Password -->
      <div>
        <label class="block text-sm font-medium text-gray-700">Confirm Password</label>
        <input type="password" placeholder="Password" class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
      </div>
    </div>
    
    <!-- Save Changes Button -->
    <div class="mt-6">
      <button class="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Save changes</button>
    </div>
  </div>

  <!-- Two Factor Authentication Section -->
  <div class="border-t pt-8">
    <h3 class="font-semibold text-xl mb-4">Two Factor Authentication</h3>
    <p class="text-sm text-gray-500 mb-4">Add additional security to your account using two factor authentication.</p>
    
    <div class="mb-4 bg-red-100 border border-red-400 text-red-600 px-4 py-3 rounded">
      <p>You have not enabled two factor authentication.</p>
    </div>
    
    <p class="text-sm text-gray-500 mb-6">When two-factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application.</p>
    
    <!-- Enable Button -->
    <button class="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Enable</button>
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