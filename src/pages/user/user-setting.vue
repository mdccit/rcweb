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


    <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-8 mt-3">
      <h2 class="text-2xl font-bold mb-6 text-black">Transcript</h2>
      <hr class="mt-5 mb-3 text-pigeonBlue">

      <h3 class="font-semibold text-xl mb-2 text-black">Your transcription files</h3>
      <p class="text-sm text-darkSlateBlue mb-4"> Manage your transcription files effortlessly. Whether you want to
        view, remove, or download, everything is just a click away.</p>

      <div class="flex">
        <div class="flex-1 ">
          <div class="card rounded-lg bg-lightGray1 h-[300px] m-2">
            <div class="flex">
              <div class="flex-1 p-3">
                <div class="card rounded-lg bg-blue-400  h-[270px]"></div>
              </div>
              <div class="flex-1 pt-4">
                <div class="h-[225px]">
                  <h3 class="font-semibold text-xl mb-2 text-steelBlue">Transcript</h3>
                  <p class="text-sm text-darkSlateBlue mb-4">transcript_file_143.pdf</p>
                  <p class="text-sm text-darkSlateBlue mb-4 flex">
                    <span class="text-green-500 mr-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                        <path fill-rule="evenodd"
                          d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clip-rule="evenodd" />
                      </svg>
                    </span>
                    A.I. Verified
                  </p>

                  <!-- <p class="text-sm text-darkSlateBlue mb-4 flex">
                    <span class="text-green-500 mr-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                        <path fill-rule="evenodd"
                          d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clip-rule="evenodd" />
                      </svg>
                    </span>
                    A.I. Faild
                  </p> -->

                </div>
                <div class="">
                  <div class="w-full pr-4">
                    <button type="button"
                      class="focus:outline-none text-white bg-redOrange hover:bg-red-700 focus:ring-4  rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full">
                      Remove</button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div class="flex-1 ">
          <div class="card rounded-lg h-[300px] m-2">
            <div class="bg-steelBlue h-[50px] w-full rounded-lg">
              <div class="flex h-[50px]">
                <div class="flex-1 mx-auto p-3">
                  <h3 class="text-white font-light">GPA</h3>
                </div>
                <div class="flex-1 mx-auto p-3">
                  <div class="mx-auto">
                    <h3 class="text-white bg-steelBlueLight79 text-center rounded-lg h-[25px]">4.0021</h3>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 class="font-semibold text-xl mb-2 text-black mt-3">Add new transcrption file</h3>
      <p class="text-sm text-darkSlateBlue mb-4"> Easily upload your new transcription files here. Simply select your
        file, and we’ll process it for you to review, edit, and manage.</p>

      <div class="flex">
        <div class="flex-1 ">
          <div class="card rounded-lg bg-lightGray1 h-[320px] m-2">

          </div>
        </div>
        <div class="flex-1">
          <div class="p-2">
            <div class="w-full mb-1">
              <label class="block">
                <span class="block mb-1 text-gray-700 font-sans">File Name <span aria-hidden="true" class="text-red-600"
                    title="This field is required">*</span></span>
                <div class="flex rounded-lg border border-gray-300 shadow-sm">
                  <input
                    class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                    type="text">
                </div>
                <!-- <InputError/> -->
                <!-- Password Validation Error -->

              </label>
            </div>

            <div class="w-full mb-1">
              <label class="block">
                <span class="block mb-1 text-gray-700 font-sans">Country<span aria-hidden="true" class="text-red-600"
                    title="This field is required">*</span></span>
                <div class="flex rounded-lg border border-gray-300 shadow-sm">
                  <select
                    class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                    type="text">
                    <option value="">Sl</option>
                  </select>
                </div>
                <!-- <InputError/> -->
                <!-- Password Validation Error -->

              </label>
            </div>

            <div class="w-full mb-8">
              <label class="block">
                <span class="block mb-1 text-gray-700 font-sans">Language <span aria-hidden="true" class="text-red-600"
                    title="This field is required">*</span></span>
                <div class="flex rounded-lg border border-gray-300 shadow-sm">
                  <select
                    class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                    type="text">
                    <option value="">select</option>
                  </select>
                </div>
                <!-- <InputError/> -->
                <!-- Password Validation Error -->

              </label>
            </div>

            <div class="w-full mb-1 mt-1">
              <div class="w-full mt-1">
                <button type="button"
                  class="focus:outline-none text-white bg-steelBlue hover:bg-blue-700 focus:ring-4 h-12 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full">
                  Upload</button>
              </div>
            </div>
          </div>
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