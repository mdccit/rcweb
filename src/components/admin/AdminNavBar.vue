<template>
  <nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="">
        <div class="flex justify-between h-16 w-full">
          <div class="shrink-0 flex items-center">
            <NuxtLink to="/admin/dashboard">
              <svg class="block h-9 w-auto" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M13.3512 1.5752L13.351 1.57451L13.3509 1.57392L13.3508 1.57317L13.3507 1.57304L13.3507 1.57283L13.3506 1.57258C13.304 1.3431 13.2156 1.12958 13.0937 0.938519C16.6472 1.57627 19.6148 3.90273 21.1361 7.05765C21.0145 7.04703 20.8905 7.04656 20.7653 7.05697L20.765 7.057L20.7648 7.05702L20.7643 7.05706L20.7639 7.05709L20.7633 7.05714L20.7625 7.0572L20.7624 7.05721L20.7387 7.05899C20.7153 7.06069 20.6771 7.06332 20.6257 7.0664C20.5228 7.07255 20.3677 7.08042 20.1729 7.08612C19.7808 7.09761 19.2414 7.09993 18.6506 7.06465C17.3489 6.98693 16.2539 6.74834 15.7163 6.3931C15.1311 6.00643 14.506 5.01084 14.0042 3.72258C13.7771 3.13939 13.611 2.59181 13.5019 2.18886C13.4477 1.98876 13.4085 1.82779 13.3835 1.72019C13.371 1.66647 13.3621 1.62631 13.3568 1.60149L13.3514 1.57608L13.3512 1.5752ZM22.1552 10.5515C22.1112 10.5816 22.0657 10.6104 22.0187 10.6375L22.0185 10.6376L22.0176 10.6382L22.0172 10.6384L22.0171 10.6385L22.0167 10.6387L21.9985 10.6494C21.9804 10.6601 21.9509 10.6777 21.9113 10.7017C21.8321 10.7499 21.7132 10.8237 21.5658 10.9194C21.2691 11.1122 20.8671 11.3874 20.4451 11.7166C19.5178 12.44 18.8123 13.1824 18.5831 13.7276C18.3046 14.3904 18.3923 15.6069 18.7862 17.0142C18.9645 17.6512 19.175 18.2234 19.3419 18.6375C19.4248 18.8432 19.4956 19.0063 19.5441 19.1149C19.5457 19.1184 19.5472 19.1219 19.5488 19.1254C21.2223 17.1795 22.2338 14.648 22.2338 11.8802C22.2338 11.4305 22.2071 10.9872 22.1552 10.5515ZM16.4666 21.6276L11.3333 19.2076L5.96968 21.7362C7.50864 22.5416 9.25957 22.9971 11.1169 22.9971C13.0562 22.9971 14.8794 22.5005 16.4666 21.6276ZM2.9764 19.4511C2.99877 19.3879 3.02476 19.3253 3.0544 19.2637L3.05455 19.2634L3.0552 19.262L3.05552 19.2614L3.05614 19.2601L3.06819 19.2344C3.07982 19.2094 3.09838 19.1691 3.12259 19.1149C3.1711 19.0063 3.24184 18.8432 3.32475 18.6375C3.4917 18.2234 3.70219 17.6512 3.88048 17.0142C4.27439 15.6069 4.36204 14.3904 4.08353 13.7276C3.8544 13.1824 3.14885 12.44 2.22161 11.7166C1.79959 11.3874 1.39758 11.1122 1.10089 10.9194C0.953515 10.8237 0.834613 10.7499 0.755339 10.7017C0.715764 10.6777 0.686251 10.6601 0.668211 10.6494L0.649997 10.6387L0.647934 10.6375C0.444429 10.52 0.269086 10.3732 0.12525 10.2059C0.0427625 10.752 0 11.3111 0 11.8802C0 14.8051 1.12962 17.4663 2.9764 19.4511ZM1.05122 7.15513C2.62528 3.80777 5.81991 1.37325 9.62401 0.862671C9.47558 1.07248 9.36887 1.31232 9.31601 1.57272L9.31564 1.57451L9.31531 1.57608L9.3099 1.60149C9.30454 1.62631 9.29567 1.66647 9.2832 1.72019C9.25822 1.82779 9.219 1.98876 9.16481 2.18886C9.05568 2.59181 8.8896 3.13939 8.66245 3.72258C8.16071 5.01084 7.53562 6.00643 6.95041 6.3931C6.41279 6.74834 5.31777 6.98693 4.01604 7.06465C3.42524 7.09993 2.88587 7.09761 2.49374 7.08612C2.299 7.08042 2.14392 7.07255 2.04094 7.0664C1.98953 7.06332 1.95135 7.06069 1.92797 7.05899L1.90428 7.05721L1.90342 7.05715L1.90242 7.05706L1.90166 7.057L1.90133 7.05697C1.60634 7.03243 1.3178 7.06835 1.05122 7.15513ZM1.90342 7.05715C1.90376 7.05724 1.90303 7.06861 1.72083 8.98609L1.90412 7.0572L1.90342 7.05715ZM9.30792 9.565C10.1491 9.00916 10.8131 8.23497 11.3333 7.43054C11.8536 8.23497 12.5175 9.00916 13.3587 9.565C14.1069 10.0593 14.9892 10.376 15.8574 10.5805C15.4172 11.1011 15.025 11.6801 14.7641 12.3009C14.2188 13.5985 14.2449 15.0717 14.446 16.3447L12.2519 15.3103C11.6736 15.0376 10.993 15.0376 10.4148 15.3103L8.22063 16.3447C8.4218 15.0717 8.44787 13.5985 7.90258 12.3009C7.64171 11.6801 7.24951 11.1011 6.80923 10.5805C7.67743 10.376 8.55981 10.0593 9.30792 9.565Z"
                  fill="#0085FF"></path>
              </svg>
            </NuxtLink>
          </div>
          <div class="hidden space-x-6 sm:-my-px sm:ml-10 sm:flex">
            <NuxtLink to="/admin/dashboard"
              class="inline-flex items-center px-1 pt-1 border-b-2  text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-primary-700 transition duration-150 ease-in-out">
              Dashboard
            </NuxtLink>
            <div
              class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
              style="position: relative;">
              <div>
                <button type="button" aria-haspopup="true" id="dropdownButton" data-dropdown-toggle="userDropdown"
                  class="inline-flex items-center px-1  border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">

                  <div
                    class="flex items-center py-4 text-sm font-medium text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out">
                    <div>Users</div>
                    <div class="ml-1">
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </div>
                  </div>

                </button>
              </div>

              <div id="userDropdown"
                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600">

                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                  <li>
                    <NuxtLink to="/admin/users"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded">
                      <div class="flex items-center"> All </div>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded">
                      <div class="flex items-center"> Players </div>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded">
                      <div class="flex items-center"> Coaches </div>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded">
                      <div class="flex items-center"> Admin </div>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded">
                      <div class="flex items-center"> Business User </div>
                    </NuxtLink>
                  </li>
                </ul>
              </div>


              <div>
                <div class="absolute z-40"
                  style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(4px, 71.2px, 0px);">
                </div>
              </div>
            </div>
            <NuxtLink to="/admin/schools"
              class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
              Schools
            </NuxtLink>
            <NuxtLink to="/admin/business"
              class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
              Businesses
            </NuxtLink>
            <!-- <div
              class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
              style="position: relative;">
              <div>
                <button type="button" aria-haspopup="true"
                  class="inline-flex items-center px-1  border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
                  <div
                    class="flex items-center py-4 text-sm font-medium text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out">
                    <div>Marketing</div>
                    <div class="ml-1">
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
              <div>
                <div class="absolute z-40"
                  style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(4px, 71.2px, 0px);">
                </div>
              </div>
            </div> -->
            <NuxtLink to="/admin/moderation?filter%5Bis_closed%5D=0"
              class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
              <div class="flex items-center"> Moderation <div
                  class="ml-2 bg-red-500 text-white text-xs h-6 w-6 flex items-center justify-center rounded-full">{{
                    morderationCount }}
                </div>
              </div>
            </NuxtLink>

            <!-- <NuxtLink to="/admin/transcripts"
              class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
              <div class="flex items-center"> Transcripts </div>
            </NuxtLink> -->
            <NuxtLink @click="login" v-if="!isLoggedIn"
              class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
              <div class="flex items-center"> Login </div>
            </NuxtLink>
            <NuxtLink @click="register" v-if="!isLoggedIn"
              class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
              <div class="flex items-center"> Register </div>
            </NuxtLink>
            <NuxtLink  to="/app"
              class=" inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
              <div class="flex items-center  cursor-pointer"> Profile </div>
            </NuxtLink>
            <NuxtLink @click="logout" v-if="isLoggedIn" 
              class=" inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
              <div class="flex items-center cursor-pointer"> Logout </div>
            </NuxtLink>

          </div>
          <div class="hidden sm:flex sm:items-center sm:ml-6">
            <div class="ml-3 relative">
              <div style="position: relative;">
                <div>
                  <button type="button" aria-haspopup="true" id="dropdownButton" data-dropdown-toggle="dropdown"
                    class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition">
                    <!-- <img class="h-8 w-8 rounded-full object-cover"
                      src="https://ui-avatars.com/api/?name=A&amp;color=7F9CF5&amp;background=EBF4FF" alt="Admin"> -->
                      <img  v-if="profilePicture == 'null'" class="h-8 w-8 rounded-full object-cover"
                                        src="@/assets/images/user.png" alt="">
                      <img v-if="profilePicture != 'null'" class="h-8 w-8 rounded-full object-cover"
                                        :src="profilePicture" alt="">
                  </button>
                </div>
                <div>

                </div>
              </div>
            </div>
          </div>
          <div class="-mr-2 flex items-center sm:hidden"><button
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"><svg
                class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
                <path class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"></path>
              </svg></button></div>



          <!-- Dropdown menu -->
          <div id="dropdown"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600">

            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <NuxtLink @click="profile" v-if="isLoggedIn"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded">
                  <div class="flex items-center"> Profile </div>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink @click="logout" v-if="isLoggedIn"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded">
                  <div class="flex items-center"> Logout </div>
                </NuxtLink>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <div class="hidden sm:hidden">
        <div class="pt-2 pb-3 space-y-1">
          <!-- <NuxtLink to="/admin"
            class="block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
            Dashboard
          </NuxtLink> -->
          <div class="pl-8">
            <NuxtLink to="/admin/users"
              class="block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
              All Users
            </NuxtLink>
            <NuxtLink to="/admin/users?filter%5Brole%5D=player"
              class="block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
              Players
            </NuxtLink>
            <NuxtLink to="/admin/users?filter%5Brole%5D=coach"
              class="block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
              Coaches
            </NuxtLink>
            <NuxtLink to="/admin/users?filter%5Brole%5D=admin"
              class="block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
              Admins
            </NuxtLink>
            <NuxtLink to="/admin/schools"
              class="block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
              Schools
            </NuxtLink>
          </div>
          <!-- <NuxtLink to="/admin"
            class="block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
            Marketing
          </NuxtLink> -->
          <div class="pl-8">
            <NuxtLink to="/admin/newsletter"
              class="block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
              Newsletter
            </NuxtLink>
            <NuxtLink to="/admin/blog"
              class="block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
              Blog
            </NuxtLink>
            <NuxtLink to="/admin/events"
              class="block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
              Events
            </NuxtLink>
            <NuxtLink to="/admin/resources"
              class="block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
              Resources
            </NuxtLink>
          </div>
          <NuxtLink to="/admin/moderation?filter%5Bis_closed%5D=0"
            class="block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
            <span class="flex items-center"> Moderation </span>
          </NuxtLink>

        </div>
        <div class="relative inline-block">
          <!-- Dropdown toggle button -->

          <NuxtLink to="/app">
            <button id="dropdownUserButton" data-dropdown-toggle="dropdownUser"
              class="flex items-center text-sm font-medium text-gray-800 hover:text-gray-900" type="button">
              <img class="h-10 w-10 rounded-full object-cover mr-3"
                src="https://ui-avatars.com/api/?name=A&amp;color=7F9CF5&amp;background=EBF4FF" alt="Admin" />
              <span>Admin</span>
              <svg class="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </NuxtLink>

          <!-- Dropdown menu -->
          <div id="dropdownUser" class="hidden z-10 w-48 bg-white rounded divide-y divide-gray-100 shadow"
            data-popper-placement="bottom">
            <div class="py-3 px-4 text-sm text-gray-900">
              <div class="font-medium">{{ loggedUserName }}</div>
              <div class="text-sm text-gray-500">{{ loggedUserMail }}</div>
            </div>
            <ul class="py-1 text-gray-700">
              <li>
                <NuxtLink to="/app" class="block py-2 px-4 text-sm hover:bg-gray-100">
                  Go to Members Area
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/user/profile" class="block py-2 px-4 text-sm hover:bg-gray-100">
                  Profile
                </NuxtLink>
              </li>
            </ul>
            <div class="py-1">
              <form>
                <button type="submit" class="block w-full py-2 px-4 text-sm text-left hover:bg-gray-100">
                  Log Out
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useNuxtApp } from '#app';
import { useUserStore } from '@/stores/userStore';
import { useModerationStore } from '~/stores/moderation';

const userStore = useUserStore();
const nuxtApp = useNuxtApp();
const $authService = nuxtApp.$authService;
const isAuthenticated = computed(() => userStore.isAuthenticated);
const loggedUserMail = computed(() => userStore.loggedUserEmail);
const router = useRouter();
const $adminService = nuxtApp.$adminService;
const morderationCount = ref(0);
const moderationStore = useModerationStore();
const profilePicture= ref(null)

const loggedUserName = ref('');

const closeDropdown = (event) => {
  if (!event.target.closest('.relative')) {
    dropdownVisible.value = false
  }
}


const logout = async () => {
  try {

    const token = localStorage.getItem('token');  // Retrieve the token from local storage

    if (!token) {
      userStore.clearUser();  // Clear user data if no token is found
      nuxtApp.$notification.triggerNotification('You have been logged out.', 'success');
      // Use a timeout to display the notification before redirecting to login
      setTimeout(() => {
        router.push('/login');  // Redirect to login
      }, 2000);  // 2-second delay

      return;
    }

    // Call the logout API if the token exists
    const response = await $authService.logout({
      bearer_token: token
    });


    console.log(response);
    if (response.status === 200) {
      userStore.clearUser();  // Clear user data from Pinia store
      console.log('user cleared');
      nuxtApp.$notification.triggerNotification(response.display_message, 'success');

      setTimeout(() => {
        router.push('/login');  // Redirect to login after 2 seconds
      }, 2000);  // 2-second delay
    } else {
      nuxtApp.$notification.triggerNotification(response.display_message, 'failure');

      setTimeout(() => {
        router.push('/login');
      }, 2000);
    }
  } catch (err) {

    console.log(err);
    if (err.response && err.response.status === 401) {
      // Handle 401 error and redirect to login
      nuxtApp.$notification.triggerNotification('Session expired. Please log in again.', 'failure');
      userStore.clearUser();  // Clear user data
      setTimeout(() => {
        router.push('/login');  // Redirect to login on 401 error
      }, 2000);  // 2-second delay
    } else {
      // For other errors
      nuxtApp.$notification.triggerNotification(err.display_message || 'An error occurred.', 'failure');
      setTimeout(() => {
        router.push('/login');  // Ensure redirection to login even on other errors
      }, 2000);  // 2-second delay
    }
    nuxtApp.$notification.triggerNotification(err.display_message, 'failure');
    setTimeout(() => {
      router.push('/login');  // Ensure redirection to login even on error
    }, 2000);  // 2-second delay
  }
};

onMounted(() => {
  if (process.client) {  // Ensure this runs only on the client-side
    const storedUserName = localStorage.getItem('user_name');  // Get value from localStorage

    if (storedUserName) {
      // Set the loggedUserName in the store with the value from localStorage
      loggedUserName.value = storedUserName;
    } else {
      console.log('No user_name found in localStorage.');
    }
  }

  if(localStorage.getItem('profile_picture')){
            profilePicture.value =localStorage.getItem('profile_picture')
            userStore.setProfilePicture({
                url:profilePicture.value
            })
        }
});

onMounted(() => {
  window.removeEventListener('click', closeDropdown);
  fetchMorderationCount()
});

watch(
  () => moderationStore.moderationClose,
  () => {
    if (moderationStore.moderationClose == true) {
      fetchMorderationCount()
      moderationStore.setModerationClose(false)
    }

  },
)

watch(
    () => localStorage.getItem('profile_picture'),
    () => {
        if(localStorage.getItem('profile_picture')){
            profilePicture.value =localStorage.getItem('profile_picture')
            console.log(1144)
            console.log(profilePicture.value)

            userStore.setProfilePicture({
                url:profilePicture.value
            })
        }
    }
);

const login = () => {
  console.log('login push');
  router.push('/login');
};

const register = () => {
  router.push('/register');
};

const profile = () => {
  router.push('/app');
};

const isLoggedIn = computed(() => userStore.isLoggedIn);
const userRole = computed(() => userStore.userRole);

const fetchMorderationCount = async () => {
  try {
    if (isAuthenticated.value && (userStore.role == 'admin')) {
      const response = await $adminService.morderation_all_open_count();
      morderationCount.value = response.dataSets
    }
  } catch (error) {
    console.error('Failed to load posts:', error.message);
  }
}

</script>

<style scoped>
nav a {
  margin: 0 1rem;
  text-decoration: none;
  color: #333;
}

nav a:hover {
  color: #007bff;
}
</style>
