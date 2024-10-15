<template>
  <div>
    <!-- Security Card -->
    <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-8 mt-3">
      <h2 class="text-2xl font-bold mb-6 text-black">Security</h2>
      <hr class="mt-5 mb-3 text-pigeonBlue">
      <!-- Change Password Section -->
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

      <!-- Two Factor Authentication Section -->
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

      <!-- Browser sessions -->
      <div class="border-t pt-8 mb-8">
        <h3 class="font-semibold text-xl mb-4 text-black">Browser Sessions</h3>
        <p class="text-sm text-darkSlateBlue mb-4">Manage and log out your active sessions on other browsers and
          devices.
        </p>

        <div class="space-y-4">
          <p class="text-sm text-black mb-6">When two-factor authentication is enabled, you will be prompted for a
            secure, random token during authentication. You may retrieve this token from your phone's Google
            Authenticator application.</p>
        </div>
        <div class="mt-6">
          <button
            class="w-60 py-3 px-4 bg-steelBlue text-white text-sm  font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Log
            Out Other Browser</button>
        </div>
      </div>

      <!-- Delete sessions -->
      <div class="border-t pt-8 mb-8">
        <h3 class="font-semibold text-xl mb-4 text-black">Delete Account</h3>
        <p class="text-sm text-darkSlateBlue mb-4">Permanently delete your account.
        </p>

        <div class="space-y-4">
          <p class="text-sm text-black mb-6">Once your account is deleted, all of its resources and data will be
            permanently deleted. Before deleting your account, please download any data or information that you wish
            to retain.</p>
        </div>
        <div class="mt-6">
          <button
            class="w-60 py-3 px-4 bg-red text-white text-sm font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Delet
            Account</button>
        </div>
      </div>
    </div>
    <!-- / Security Card -->

    <!-- Subscription & Billing Card -->
    <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-8 mt-3">
      <h2 class="text-2xl font-bold mb-6 text-black">Subscription & Billing</h2>
      <hr class="mt-5 mb-3 text-pigeonBlue">
      <div>

        <!-- Subscription Section -->
        <div class="mt-6">
          <h3 class="font-semibold text-xl mb-4 text-black">Subscription</h3>
          <p class="text-sm text-darkSlateBlue mb-4"> Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document or a typeface without relying on meaningful content.</p>

          <div class="flex gap-4 bg-white p-6">
            <div class="border border-gainsboroGray rounded-lg p-6 flex-1 text-center">
              <p class="text-black mb-2 text-md font-semibold">Current Subscription plan</p>
              <p class="text-4xl font-bold text-steelBlue mb-4 mt-2">$100</p>
              <p class="text-xl font-semibold text-black">PREMIUM</p>
              <p class="text-darkSlateBlue mt-4 text-sm">
                Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a
                typeface
                without relying on meaningful content.
              </p>
              <p class="text-steelBlue font-semibold mt-4 text-xl">Activated</p>
            </div>


            <div class="flex-1">
              <div class="border border-gainsboroGray rounded-lg p-4 flex justify-between mb-10">
                <div>
                  <p class="text-darkSlateBlue text-sm font-semibold mb-2">Last subscribed date</p>
                  <p class="font-semibold text-lg text-black">2024 08 01</p>
                </div>
                <div class="border-l border-gainsboroGray px-4">
                  <p class="text-darkSlateBlue text-sm font-semibold mb-2">Next renewal date</p>
                  <p class="font-semibold text-lg text-black">2024 09 01</p>
                </div>
              </div>

              <div class="border border-gainsboroGray rounded-lg p-4">
                <p class="font-semibold text-black mb-2">Change plan</p>
                <p class="text-darkSlateBlue mb-4 text-sm">
                  Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.
                </p>
                <button class="bg-steelBlue text-white px-4 py-2 rounded-lg text-sm">change plan</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Card Details Section -->
      <div class="mt-6">
        <hr class="mt-5 mb-3 text-pigeonBlue">
        <h3 class="font-semibold text-xl mb-4 text-black">Card details</h3>
        <p class="text-sm text-darkSlateBlue mb-4"> Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a document or a typeface without relying on meaningful content.</p>

        <div class="flex space-x-4">
          <div class="flex-1">
            <div
              class="bg-gradient-to-r from-blue-900 to-gray-800 text-white p-6 rounded-lg w-85 shadow-lg h-60 flex flex-col justify-end">
              <div class="text-right">
                <button class="text-gray-400 hover:text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>

                </button>
              </div>
              <div class="mt-auto flex justify-between items-center">
                <div class="mt-4">
                  <span class="font-semibold">Selected card</span>
                  <span class="text-lg font-semibold tracking-widest block">XXXX XXXX XXXX 4353</span>
                </div>
                <div class="right-4">
                  <img src="@/assets/user/images/visa-img.png" alt="" class="rounded-lg w-8 h-8 mr-4">
                </div>
              </div>
            </div>

          </div>

          <div class="flex-1">
            <div class="space-y-4 w-full">
              <div class="relative flex items-center justify-between p-4 bg-white rounded-lg shadow border">
                <div>
                  <span class="text-xs text-darkSlateBlue block">Select card</span>
                  <span class="font-semibold text-black">XXXX XXXX XXXX 4353</span>
                </div>
                <button class="text-red hover:text-red-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>

                </button>
              </div>

              <div class="relative flex items-center justify-between p-4 bg-white rounded-lg shadow border">
                <div>
                  <span class="text-xs text-darkSlateBlue block">Select card</span>
                  <span class="font-semibold text-black">XXXX XXXX XXXX 4353</span>
                </div>
                <button class="text-red hover:text-red-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>

                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Payment history -->
      <div class="mt-6">
        <hr class="mt-5 mb-3 text-pigeonBlue">
        <h3 class="font-semibold text-xl mb-4 text-black">Payment history</h3>
        <p class="text-sm text-darkSlateBlue mb-4"> Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a document or a typeface without relying on meaningful content.</p>

        <div class="px-3 divide-x text-right">
          <a class="text-steelBlue text-sm hover:underline">See all</a>
        </div>
        <div class="card rounded-2xl overflow-hidden border border-gainsboroGray bg-white w-full p-2 mt-3">
          <table class="min-w-full border-collapse">
            <thead>
              <tr>
                <th class="p-1 text-left text-darkSlateBlue text-xs">Date</th>
                <th class="p-1 text-left text-darkSlateBlue text-xs">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-black p-1 font-semibold text-sm">2024 05 01</td>
                <td class="text-black p-1 font-semibold text-sm">$100.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card rounded-2xl overflow-hidden border border-gainsboroGray bg-white w-full p-2 mt-3">
          <table class="min-w-full border-collapse">
            <thead>
              <tr>
                <th class="p-1 text-left text-darkSlateBlue text-xs">Date</th>
                <th class="p-1 text-left text-darkSlateBlue text-xs">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-black p-1 font-semibold text-sm">2024 05 01</td>
                <td class="text-black p-1 font-semibold text-sm">$100.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card rounded-2xl overflow-hidden border border-gainsboroGray bg-white w-full p-2 mt-3">
          <table class="min-w-full border-collapse">
            <thead>
              <tr>
                <th class="p-1 text-left text-darkSlateBlue text-xs">Date</th>
                <th class="p-1 text-left text-darkSlateBlue text-xs">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-black p-1 font-semibold text-sm">2024 05 01</td>
                <td class="text-black p-1 font-semibold text-sm">$100.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Cancel subscription -->
      <div class="mt-6">
        <hr class="mt-5 mb-3 text-pigeonBlue">
        <h3 class="font-semibold text-xl mb-4 text-black">Cancel subscription</h3>
        <p class="text-sm text-darkSlateBlue mb-4">Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a document or a typeface without relying on meaningful content.
        </p>

        <div class="space-y-4">
          <div class="card rounded-2xl overflow-hidden border border-gainsboroGray bg-white w-full p-3 mt-3">
            <p class="text-sm text-darkSlateBlue mb-6">Lorem ipsum is a placeholder text commonly used to demonstrate
              the
              visual form of a documentLorem ipsum is a placeholder text commonly used to demonstrate the visual form
              of a document or a typeface without relying on meaningful content.</p>

            <div class="mt-6">
              <button
                class="w-50 py-3 px-2 bg-redOrange text-white  text-xs font-semibold rounded-lg focus:outline-none ">Cancel
                Subscription</button>
            </div>
          </div>
        </div>
      </div>

    </div>
    <!-- / Subscription & Billing Card -->

    <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-8 mt-3">
      <h2 class="text-2xl font-bold mb-6 text-black">Subscription & Billing</h2>
      <hr class="mt-5 mb-3 text-pigeonBlue">

      <h3 class="font-semibold text-xl mb-4 text-black">Payment history</h3>
      <p class="text-sm text-darkSlateBlue mb-4"> Lorem ipsum is a placeholder text commonly used to demonstrate the
        visual form of a document or a typeface without relying on meaningful content.</p>

      <div class="card rounded-2xl overflow-hidden border border-gainsboroGray bg-white w-full p-2 mt-3">
        <table class="min-w-full border-collapse">
          <thead>
            <tr>
              <th class="p-1 text-left text-darkSlateBlue text-xs">Date</th>
              <th class="p-1 text-left text-darkSlateBlue text-xs">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-black p-1 font-semibold text-sm">2024 05 01</td>
              <td class="text-black p-1 font-semibold text-sm">$100.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card rounded-2xl overflow-hidden border border-gainsboroGray bg-white w-full p-2 mt-3">
        <table class="min-w-full border-collapse">
          <thead>
            <tr>
              <th class="p-1 text-left text-darkSlateBlue text-xs">Date</th>
              <th class="p-1 text-left text-darkSlateBlue text-xs">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-black p-1 font-semibold text-sm">2024 05 01</td>
              <td class="text-black p-1 font-semibold text-sm">$100.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card rounded-2xl overflow-hidden border border-gainsboroGray bg-white w-full p-2 mt-3">
        <table class="min-w-full border-collapse">
          <thead>
            <tr>
              <th class="p-1 text-left text-darkSlateBlue text-xs">Date</th>
              <th class="p-1 text-left text-darkSlateBlue text-xs">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-black p-1 font-semibold text-sm">2024 05 01</td>
              <td class="text-black p-1 font-semibold text-sm">$100.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card rounded-2xl overflow-hidden border border-gainsboroGray bg-white w-full p-2 mt-3">
        <table class="min-w-full border-collapse">
          <thead>
            <tr>
              <th class="p-1 text-left text-darkSlateBlue text-xs">Date</th>
              <th class="p-1 text-left text-darkSlateBlue text-xs">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-black p-1 font-semibold text-sm">2024 05 01</td>
              <td class="text-black p-1 font-semibold text-sm">$100.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Transcript Card -->
    <TranscriptCard></TranscriptCard>
  </div>
</template>


<script setup>
import TranscriptCard from '~/components/user/userSettings/TranscriptCard.vue';

definePageMeta({
  layout: 'socialhub-three-column',
  middleware: ['role'],
  requiredRole: ['admin', 'coach', 'business_manager', 'player', 'parent', 'default'],
});
</script>