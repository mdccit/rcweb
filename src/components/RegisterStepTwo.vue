<template>
  <div class="min-h-screen w-full bg-cover bg-no-repeat flex flex-col sm:justify-center items-center py-12 px-4"
    style="background-image: url(https://qa1.recruited.qualitapps.com/static/bg-generic.svg);">
    <div class="w-full mt-6 mx-4 p-12 bg-white rounded-lg overflow-hidden sm:max-w-3xl">
      <form @submit.prevent="handleSubmitStep2">
        <div class="flex items-center space-x-4">
          <!-- <div class="flex self-center items-center">
          <NuxtLink to="/register" class="bg-black/10 p-2 hover:bg-black/15 active:bg-black/20 rounded-full">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 6l-6 6l6 6"></path>
            </svg>
            <span class="sr-only">Go back</span>
          </NuxtLink>
        </div> -->
          <div class="self-center">
            <h1 class="text-2xl font-bold text-black">{{ $t('register.title') }}</h1>
          </div>
        </div>
        <div class="w-full"></div>
        <div>
          <label for="role" class="block mb-2 text-sm font-normal text-gray-900 mt-3">I am</label>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-4">
g
          <!-- Radio option for Player role -->
          <div class="radio relative cursor-pointer" @click="role = 'player'">
            <input class="radio-input absolute h-24 m-0 cursor-pointer z-2 opacity-0" id="player" type="radio"
              value="player" v-model="role" name="role">
            <div
              :class="['radio-tile', 'rounded-md', 'flex', 'flex-col', 'items-center', 'justify-center', 'border', 'h-full', 'transition-all', 'duration-300', 'ease-in', role === 'player' ? 'border-steelBlue bg-blue-50' : 'border-gray-300']">
              <div class="tile-icon cursor-pointer"></div>
              <label for="player" class="text-sm text-black mb-2">Player</label>
            </div>
          </div>

          <!-- Radio option for Coach role -->
          <div class="radio relative cursor-pointer" @click="role = 'coach'">
            <input class="radio-input  absolute h-24 m-0 cursor-pointer z-2 opacity-0" id="coach" type="radio"
              value="coach" v-model="role" name="role">
            <div
              :class="['radio-tile', 'rounded-md', 'flex', 'flex-col', 'items-center', 'justify-center', 'border', 'h-full', 'transition-all', 'duration-300', 'ease-in', role === 'coach' ? 'border-steelBlue bg-blue-50' : 'border-gray-300']">
              <img class="mt-1 cursor-pointer" src="@/assets/images/coach_icon.png">
              <label for="coach" class="text-sm text-black mb-2">Coach</label>
            </div>
          </div>

          <!-- Radio option for Parent role -->
          <div class="radio relative cursor-pointer" @click="role = 'parent'">
            <input class="radio-input absolute h-24 m-0 cursor-pointer z-2 opacity-0" id="parent" type="radio"
              value="parent" v-model="role" name="role">
            <div
              :class="['radio-tile', 'rounded-md', 'flex', 'flex-col', 'items-center', 'justify-center', 'border', 'h-full', 'transition-all', 'duration-300', 'ease-in', role === 'parent' ? 'border-steelBlue bg-blue-50' : 'border-gray-300']">
              <img class="mt-1 cursor-pointer" src="@/assets/images/parent.png">
              <label for="parent" class="text-sm text-black  mb-2">Parent</label>
            </div>
          </div>

          <!-- Radio option for Business role -->
          <div class="radio relative cursor-pointer" @click="role = 'business'">
            <input class="radio-input text-black absolute h-24 m-0 cursor-pointer z-2 opacity-0" id="business"
              type="radio" value="business" v-model="role" name="role">
            <div
              :class="['radio-tile', 'rounded-md', 'flex', 'flex-col', 'items-center', 'justify-center', 'border', 'h-full', 'transition-all', 'duration-300', 'ease-in', role === 'business' ? 'border-steelBlue bg-blue-50' : 'border-gray-300']">
              <img class="mt-1 cursor-pointer" src="@/assets/images/bussiness.png">
              <label for="business" class="text-sm text-black  mb-2">Business</label>
            </div>
          </div>

        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-2">

          <div v-if="roleFields.includes('nationality')">
            <label for="nationality"
              class="block  text-sm font-normal text-gray-900 dark:text-gray mb-[20px]">Nationality
              <span class="text-red-600">*</span>
            </label>
            <div class="flex rounded-lg border border-gray-300 shadow-sm w-100">
              <NationalityDropdown :nationalities="nationalities" v-model="nationality" id="nationality"
                :required="roleFields.includes('nationality')" label="Nationality" />
            </div>

            <span v-if="errors.nationality" class="text-red-500 text-sm ">{{ errors.nationality.join(', ')
              }}</span>


          </div>

          <div class="space-y-4" v-if="roleFields.includes('country')">
            <label for="country"
              class="font-normal text-black block text-sm text-gray-900 dark:text-gray mb-[20px]">Country
              <span class="text-red-600">*</span>
            </label>
            <div class="flex rounded-lg border border-gray-300 shadow-sm w-full">
              <CountryDropdown :countries="countries" v-model="country" id="country" class="mt-0" label="Country *" />
            </div>
            <span v-if="errors.country" class="text-red-500 text-sm ">{{ errors.country.join(', ')
              }}</span>

          </div>


          <div class="space-y-4" v-if="roleFields.includes('phone_code_country')">
            <label for="phone_code_country"
              class="block mb-2 text-sm font-normal text-gray-900 dark:text-gray grid grid-cols-10">
              <div class="col-span-9">Mobile No
                <span class="text-red-600">*</span>
              </div>
              <div ata-tooltip-target="tooltip-default" class="col-span-1 text-right tooltip"><svg
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-4 ml-[20px]">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>
                <div class="tooltipDiv">
                  <span class="tooltiptext">If you are a player or a parent, your phone number will be visible to
                    coaches.</span>
                </div>
              </div>
            </label>

            <div class="grid grid-cols-5 gap-3 items-center -mt-[9px]">
              <div class="flex rounded-lg border border-gray-300 shadow-sm w-full col-span-2 mt-1">
                <CountryCodeDropdown :country_codes="country_codes" v-model="phone_code_country" name="phone_code"
                  data-validation-key="phone_code" class="col-span-2 h-12" />
              </div>

              <div class="flex rounded-lg border border-gray-300 shadow-sm w-full col-span-3 mt-1">
                <input type="text" id="phone_number" v-model="phone_number"
                  class=" h-12 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                  placeholder="Number" required />
              </div>
            </div>
            <ul>
              <li> <span v-if="errors.phone_code_country" class="text-red-500 text-sm ">{{
                errors.phone_code_country.join(',')
                  }}</span> </li>
              <li> <span v-if="errors.phone_number" class="text-red-500 text-sm ">{{ errors.phone_number.join(', ')
                  }}</span></li>
            </ul>
          </div>


          <div class="space-y-4 w-full" v-if="roleFields.includes('gender')">
            <label for="gender" class="font-normal block mb-3 text-sm text-gray-900 dark:text-gray">Gender <span
                class="text-red-600">*</span> </label>
            <div class="flex rounded-lg border border-gray-300 shadow-sm w-full mt-1">
              <GenderDropDown :genders="genders" v-model="gender" id="gender" label="Gender *" />
            </div>

            <span v-if="errors.gender" class="text-red-500 text-sm ">{{ errors.gender.join(', ')
              }}</span>

          </div>

          <div class="space-y-4" v-if="roleFields.includes('handedness')">
            <label for="handedness" class="font-normal block mb-2 text-sm text-gray-900 dark:text-gray">Handedness
              <span class="text-red-600">*</span> </label>
            <div class="flex rounded-lg border border-gray-300 shadow-sm w-full">
              <HandednessDropdown :handedness="handednesses" v-model="handedness" id="handedness"
                label="Handedness *" />
            </div>

            <span v-if="errors.handedness" class="text-red-500 text-sm ">{{ errors.handedness.join(', ')
              }}</span>
          </div>

          <!-- Height Selection with Feet/Inches and Centimeters Toggle -->
          <div v-if="roleFields.includes('height')" class="space-y-4 ">

            <div class="flex">
              <!-- Toggle between Feet/Inches and Centimeters -->
              <div class="flex-1">
                <label for="height" class="font-normal block mb-2 text-sm text-gray-900 dark:text-gray mr-[20px]">Height
                  <span class="text-red-600">*</span> </label>
              </div>

              <div class="flex-1">
                <div class="flex text-last">
                  <div class="flex text-black items-center">
                    <input type="radio" id="height_in_cm" v-model="height_in_cm" :value="true" />
                    <label for="height_in_cm" class="ml-2">Centimeters</label>
                  </div>
                  <div class="flex text-black items-center ml-3">
                    <input type="radio" id="height_ft_in" v-model="height_in_cm" :value="false" />
                    <label for="height_ft_in" class="ml-2">Feet/Inches</label>
                  </div>
                </div>
              </div>
            </div>
            <!-- Height in Centimeters -->
            <div v-if="height_in_cm" class="flex rounded-lg border border-gray-300 shadow-sm w-full mt-8 ">
              <div class="w-full ">
                <input type="number" id="height_cm" v-model="height_cm"
                  class="h-12 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                  placeholder="Height in cm" :required="roleFields.includes('height_cm')" />
              </div>

              <span v-if="errors.height_cm" class="text-red-500 text-sm ">{{ errors.height_cm.join(', ')
                }}</span>
            </div>
            <!-- Height in Feet/Inches -->
            <div v-else class="grid grid-cols-10 gap-3 items-center mt-8 mb-3">
              <div class="col-span-5  rounded-lg border border-gray-300 shadow-sm ">
                <input type="number" id="height_ft" v-model="height_ft"
                  class=" block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                  placeholder="Ft" :required="roleFields.includes('height_ft')" />
                <span v-if="errors.height_ft" class="text-red-500 text-sm absolute">{{ errors.height_ft.join(', ')
                  }}</span>
              </div>

              <div class="col-span-5 flex rounded-lg border border-gray-300 shadow-sm">
                <input type="number" id="height_in" v-model="height_in"
                  class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                  placeholder="In" :required="roleFields.includes('height_in')" />
                <span v-if="errors.height_in" class="text-red-500 text-sm absolute mt-[50px] ">{{
                  errors.height_in.join(', ') }}</span>

              </div>


            </div>
          </div>

          <div class="grid grid-cols-10 gap-3 items-center mt-2" v-if="roleFields.includes('utr')">
            <div class="col-span-5">
              <label for="utr" class="block mb-2 text-sm font-normal text-gray-900 dark:text-gray">UTR <span
                  class="text-red-600">*</span> </label>

              <div class="col-span-5 flex rounded-lg border border-gray-300 shadow-sm">
                <input type="text" id="utr" v-model="utr"
                  class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                  placeholder="UTR" required />
                <span v-if="errors.utr" class="text-red-500 text-sm ">{{ errors.utr.join(', ')
                  }}</span>

              </div>

            </div>
            <div class="col-span-5" v-if="roleFields.includes('gpa')">
              <label for="gpa" class="block mb-2 text-sm font-normal text-gray-900 dark:text-gray grid grid-cols-7">
                <div class="col-span-6">GPA <span class="text-red-600">*</span> </div>
                <div ata-tooltip-target="tooltip-default" class="col-span-1 text-right tooltip"><svg
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-4 ml-[8px]">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                  </svg>
                  <!-- tooltip -->
                  <div class="tooltipDiv">
                    <span class="tooltiptext">Your Grade Point Average (GPA) is a numerical representation of your
                      academic performance, commonly used by American schools. It is calculated on a scale, usually from
                      0
                      to 4.0, with higher numbers indicating better performance. If you're unsure how to calculate your
                      GPA, please provide your academic transcripts, and our team can assist you</span>
                  </div>
                  <!-- tooltip end-->
                </div>
              </label>
              <div class="col-span-5 flex rounded-lg border border-gray-300 shadow-sm">
                <input type="text" id="gpa" v-model="gpa"
                  class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                  placeholder="GPA" required />
                <span v-if="errors.gpa" class="text-red-500 text-sm ">{{ errors.gpa.join(', ')
                  }}</span>

              </div>

            </div>
          </div>

          <div v-if="roleFields.includes('graduation')">
            <label for="graduation" class="block mb-2 text-sm font-normal text-gray-900 dark:text-gray mt-2">Graduation
              Month/Year <span class="text-red-600">*</span> </label>
            <div class="flex rounded-lg border border-gray-300 shadow-sm">
              <input type="month" v-model="graduation" :required="roleFields.includes('graduation')"
                class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                placeholder="Select Month/Year" />
              <span v-if="errors.graduation_month_year" class="text-red-500 text-sm ">{{
                errors.graduation_month_year.join(', ')
              }}</span>

            </div>

          </div>

          <div class="space-y-4" v-if="roleFields.includes('budget')">
            <!-- <label for="budget" class="font-normal block mb-2 text-sm text-gray-900 dark:text-gray">Budget *</label> -->
            <label for="budget" class="block mb-3 text-sm font-normal text-gray-900 dark:text-gray grid grid-cols-10">
              <div class="col-span-9">Budget <span class="text-red-600">*</span> </div>
              <div ata-tooltip-target="tooltip-default" class="col-span-1 text-right tooltip"><svg
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-4 ml-[20px]">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>
                <!-- tooltip -->
                <div class="tooltipDiv">
                  <span class="tooltiptext">Your budget refers to the amount of money you are willing to spend per year
                    on
                    school expenses, including tuition, housing, and other costs. Please provide an estimate to help us
                    find suitable college options within your financial range.</span>
                </div>
                <!-- tooltip end-->
              </div>
            </label>
            <div class="flex rounded-lg border border-gray-300 shadow-sm">
              <BudgetDropdown :player_budgets="budgets" v-model="selectedBudget" id="budgets" label="Budgets *" />
              <span v-if="errors.player_budget" class="text-red-500 text-sm ">{{ errors.player_budget.join(', ')
                }}</span>

            </div>

          </div>


          <!-- Fields for Parent Role -->

          <div class="space-y-4 mt-2" v-if="roleFields.includes('player_first_name')">
            <h2 class="text-black"><b>Player infomation</b></h2>
            <label for="player_first_name" class="font-normal block mb-2 text-sm text-gray-900 dark:text-gray">
              First Name *</label>
            <div class="flex rounded-lg border border-gray-300 shadow-sm">
              <input type="text" id="player_first_name" v-model="player_first_name"
                class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                placeholder="First Name" required />
              <span v-if="errors.player_first_name" class="text-red-500 text-sm absolute mb-3 mt-[50px] ">{{
                errors.player_first_name.join(', ')
              }}</span>

            </div>
          </div>

          <div class="space-y-4 mt-2" v-if="roleFields.includes('player_last_name')">
            <h2 class="text-white">*</h2>
            <label for="player_last_name" class="font-normal block mb-2 text-sm text-gray-900 dark:text-gray">Last
              Name <span class="text-red-600">*</span> </label>
            <div class="flex rounded-lg border border-gray-300 shadow-sm">
              <input type="text" id="player_last_name" v-model="player_last_name"
                class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                placeholder="Last Name" required />
              <span v-if="errors.player_last_name" class="text-red-500 text-sm absolute mb-3 mt-[50px]">{{
                errors.player_last_name.join(', ')
              }}</span>

            </div>

          </div>

          <div class="space-y-4" v-if="roleFields.includes('email')">
            <label for="email" class="font-normal block mb-2 text-sm text-gray-900 dark:text-gray">Email <span
                class="text-red-600">*</span> </label>
            <div class="flex rounded-lg border border-gray-300 shadow-sm">
              <input type="email" id="email" v-model="email"
                class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                placeholder="Email" required />
              <span v-if="errors.email" class="text-red-500 text-sm absolute mb-3 mt-[50px]">{{ errors.email.join(', ')
                }}</span>

            </div>

          </div>

          <div class="space-y-4" v-if="roleFields.includes('player_country')">
            <label for="player_country" class="font-normal text-black block mb-2 text-sm text-gray-900 dark:text-gray">
              Country <span class="text-red-600">*</span> </label>
            <div class="flex rounded-lg border border-gray-300 shadow-sm">
              <CountryDropdown :countries="countries" v-model="player_country" id="player_country"
                label="Player Country" :required="roleFields.includes('player_country')" />
              <span v-if="errors.player_country" class="text-red-500 text-sm absolute mt-[50px]">{{
                errors.player_country.join(', ')
              }}</span>
            </div>


          </div>

          <div class="space-y-4" v-if="roleFields.includes('player_phone_code_country')">
            <label for="phone_code_country"
              class="block mb-2 text-sm font-normal text-gray-900 dark:text-gray grid grid-cols-10">
              <div class="col-span-9">Mobile No <span class="text-red-600">*</span> </div>
              <div ata-tooltip-target="tooltip-default" class="col-span-1 text-right tooltip"><svg
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-4 ml-[20px]">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>
                <div class="tooltipDiv">
                  <span class="tooltiptext">If you are a player or a parent, your phone number will be visible to
                    coaches.</span>
                </div>
              </div>
            </label>
            <div class="grid grid-cols-5 gap-3 items-center">
              <div class="flex rounded-lg border border-gray-300 shadow-sm col-span-2">
                <CountryCodeDropdown :country_codes="country_codes" v-model="player_phone_code_country"
                  name="player_phone_code" data-validation-key="player_phone_code" class=""
                  :required="roleFields.includes('player_phone_code_country')" />

                <span v-if="errors.player_phone_code_country" class="text-red-500 text-sm absolute mt-[50px]">{{
                  errors.player_phone_code_country.join(', ') }}</span>
              </div>
              <div class="flex rounded-lg border border-gray-300 shadow-sm col-span-3">
                <input type="text" id="player_phone_number" v-model="player_phone_number"
                  class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                  placeholder="Player Number" :required="roleFields.includes('player_phone_number')" />

                <span v-if="errors.player_phone_number" class="text-red-500 text-sm absolute mt-[50px]">{{
                  errors.player_phone_number.join(',')
                }}</span>
              </div>

            </div>
            <ul>
              <li>

              </li>
              <li></li>
            </ul>
          </div>

          <div class="space-y-4" v-if="roleFields.includes('player_gender')">
            <label for="player_gender" class="font-normal block mb-3 text-sm text-gray-900 dark:text-gray">
              Gender <span class="text-red-600">*</span> </label>
            <div class="flex rounded-lg border border-gray-300 shadow-sm col-span-3">
              <GenderDropDown :genders="genders" v-model="player_gender" id="player_gender" label="Player Gender"
                :required="roleFields.includes('player_gender')" />
              <span v-if="errors.player_gender" class="text-red-500 text-sm ">{{ errors.player_gender.join(', ')
                }}</span>

            </div>
          </div>

          <div class="space-y-4" v-if="roleFields.includes('player_handedness')">
            <label for="player_handedness" class="font-normal block mb-2 text-sm text-gray-900 dark:text-gray">
              Handedness <span class="text-red-600">*</span> </label>
            <div class="flex rounded-lg border border-gray-300 shadow-sm col-span-3">
              <HandednessDropdown :handedness="handednesses" v-model="player_handedness" id="player_handedness"
                :required="roleFields.includes('player_handedness')" label="Player Handedness" />
              <span v-if="errors.player_handedness" class="text-red-500 text-sm absolute mt-[50px]">{{
                errors.player_handedness.join(', ')
              }}</span>

            </div>
          </div>

          <div v-if="roleFields.includes('player_height')" class="space-y-4">
            <div class="flex">
              <!-- Toggle between Feet/Inches and Centimeters -->
              <div class="flex-1">
                <label for="height" class="font-normal block mb-2 text-sm text-gray-900 dark:text-gray mr-[20px]">
                  Height <span class="text-red-600">*</span>
                </label>
              </div>

              <div class="flex-1">
                <div class="flex text-last">
                  <div class="flex text-black items-center">
                    <input type="radio" id="player_height_in_cm" v-model="player_height_in_cm" :value="true" />
                    <label for="player_height_in_cm" class="ml-2">Centimeters</label>
                  </div>
                  <div class="flex text-black items-center ml-3">
                    <input type="radio" id="height_ft_in" v-model="player_height_in_cm" :value="false" />
                    <label for="height_ft_in" class="ml-2">Feet/Inches</label>
                  </div>
                </div>
              </div>
            </div>

            <!-- Height in Centimeters -->
            <div v-if="player_height_in_cm" class="mt-8">
              <div class="flex rounded-lg border border-gray-300 shadow-sm col-span-3">
                <input type="number" id="player_height_cm" v-model="player_height_cm"
                  class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                  placeholder="Height in cm" />
                <span v-if="errors.player_height_cm" class="text-red-500 text-sm absolute mt-[50px]">{{
                  errors.player_height_cm.join(', ')
                }}</span>

              </div>

            </div>

            <!-- Height in Feet/Inches -->
            <div v-else class="grid grid-cols-10 gap-3 items-center minus-margin-8">
              <div class="flex rounded-lg border border-gray-300 shadow-sm col-span-5">
                <input type="number" id="player_height_ft" v-model="player_height_ft"
                  class=" block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                  placeholder="Ft" required />

                <span v-if="errors.player_height_ft" class="text-red-500 text-sm ">{{
                  errors.player_height_ft.join(',')
                }}</span>
              </div>

              <div class="flex rounded-lg border border-gray-300 shadow-sm col-span-5">
                <input type="number" id="player_height_in" v-model="player_height_in"
                  class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                  placeholder="In" required />
                <span v-if="errors.player_height_in" class="text-red-500 text-sm ">{{
                  errors.player_height_in.join(',')
                }}</span>
              </div>
            </div>
            <ul>
              <li></li>
              <li></li>
            </ul>
          </div>


          <div v-if="roleFields.includes('player_budget')">
            <label for="player_budget"
              class="block mb-2 text-sm font-normal text-gray-900 dark:text-gray grid grid-cols-10">
              <div class="col-span-9">Budget  <span
                class="text-red-600">*</span> </div>
              <div ata-tooltip-target="tooltip-default" class="col-span-1 text-right tooltip"><svg
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-4 ml-[20px]">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>
                <!-- tooltip -->
                <div class="tooltipDiv">
                  <span class="tooltiptext">Your budget refers to the amount of money you are willing to spend per year
                    on
                    school expenses, including tuition, housing, and other costs. Please provide an estimate to help us
                    find suitable college options within your financial range.</span>
                </div>
                <!-- tooltip end-->
              </div>
            </label>
            <div class="flex rounded-lg border border-gray-300 shadow-sm col-span-3">
              <BudgetDropdown :player_budgets="budgets" v-model="player_budget" id="player_budget"
                label="Player Budget" />
              <span v-if="errors.player_budget" class="text-red-500 text-sm absolute mt-[50px]">{{
                errors.player_budget.join(', ')
                }}</span>

            </div>

          </div>

          <div v-if="roleFields.includes('player_utr')">
            <label for="player_utr" class="block mb-2 text-sm font-normal text-gray-900 dark:text-gray"> UTR <span
                class="text-red-600">*</span> </label>
            <div class="flex rounded-lg border border-gray-300 shadow-sm">
              <input type="text" id="player_utr" v-model="player_utr"
                class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                placeholder="Player UTR" required />
              <span v-if="errors.player_utr" class="text-red-500 text-sm absolute mt-[50px]">{{
                errors.player_utr.join(', ')}}</span>

            </div>

          </div>

          <div v-if="roleFields.includes('player_gpa')">
            <label for="player_gpa" class="block mb-2 text-sm font-normal text-gray-900 dark:text-gray"> GPA <span
                class="text-red-600">*</span> </label>
            <div class="flex rounded-lg border border-gray-300 shadow-sm">
              <input type="text" id="player_gpa" v-model="player_gpa"
                class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                placeholder="Player GPA" required />
              <span v-if="errors.player_gpa" class="text-red-500 text-sm absolute mt-[50px]">{{
                errors.player_gpa.join(', ')}}</span>

            </div>

          </div>

          <div v-if="roleFields.includes('player_graduation_month_year')">
            <label for="player_graduation_month_year"
              class="block mb-2 text-sm font-normal text-gray-900 dark:text-gray">
              Graduation Month/Year <span class="text-red-600">*</span> </label>
            <div class="flex rounded-lg border border-gray-300 shadow-sm">
              <input type="month" v-model="player_graduation_month_year"
                class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                placeholder="Player Graduation Month/Year"
                :required="roleFields.includes('player_graduation_month_year')" />
              <span v-if="errors.player_graduation_month_year" class="text-red-500 text-sm absolute mt-[50px]">{{
                errors.player_graduation_month_year.join(', ')
              }}</span>
            </div>
          </div>

          <div class="space-y-4" v-if="roleFields.includes('player_nationality')">
            <label for="player_nationality" class="font-normal block mb-2 text-sm text-gray-900 dark:text-gray">
              Nationality <span class="text-red-600">*</span> </label>
            <div class="flex rounded-lg border border-gray-300 shadow-sm">
              <NationalityDropdown :nationalities="nationalities" v-model="player_nationality" id="player_nationality"
                :required="roleFields.includes('player_nationality')" label="Player Nationality" />
              <span v-if="errors.player_nationality" class="text-red-500 text-sm absolute mt-[50px] ">{{
                errors.player_nationality.join(',') }}</span>
            </div>
          </div>

        </div>


        <div class="space-y-4 mt-5" v-if="(role == 'parent' || role == 'player')">
          <div class="flex items-center">
            <input id="notEnrolled" type="checkbox" v-model="notEnrolled" required="true"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-steelBlue dark:focus:ring-blue-600 light:ring-offset-gray-800 focus:ring-2 light:bg-gray-700 light:border-gray-600">
            <label for="notEnrolled" class="ms-2 text-sm font-normal text-gray-900 light:text-gray-600">
              I certify I am currently not enrolled in a U.S. school or have already informed the school of my choice
              to transfer, registering in the Transfer Portal.
            </label>
          </div>
        </div>

        <div class="space-y-4 mt-5" v-if="(role == 'parent' || role == 'player')">
          <p class="text-sm text-black text-warning-600">
            <svg class="mb-2 text-orange-400 w-4 h-4 inline mr-1" xmlns="http://www.w3.org/2000/svg" width="24"
              height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
              <path d="M12 9h.01"></path>
              <path d="M11 12h1v4h1"></path>
            </svg>
            If you are currently enrolled, you need inform your school that you are looking to be recruited. If you
            have questions, email hello@recruited.pro and we will help!
          </p>
        </div>

        <div class="space-y-4 mt-5">
          <div class="flex items-center">
            <input id="termsAccepted" type="checkbox" v-model="termsAccepted" required
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-steelBlue light:focus:ring-blue-600 light:ring-offset-gray-800 focus:ring-2 light:bg-gray-700 light:border-gray-600">
            <label for="termsAccepted" class="ms-2 text-sm font-medium text-gray-900 light:text-gray-300">
              I agree to the
              <NuxtLink to="/terms" target="_blank" class="text-blue-600 light:text-steelBlue hover:underline">Terms of
                Service</NuxtLink>
              and
              <NuxtLink to="/privacy" target="_blank" class="text-blue-600 light:text-steelBlue hover:underline">Privacy
                Policy </NuxtLink>
              .
            </label>
          </div>
        </div>

        <div class="flex items-center justify-end mt-6">
          <button type="submit"
            class="border rounded-full shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-steelBlue hover:bg-darkAzureBlue text-white border-transparent focus:border-lightAzure focus:ring-lightPastalBlue ml-4 !px-8 !py-2.5 transition">
            <svg v-if="loading" aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
            </svg>
            Sign up now for free
          </button>
        </div>
      </form>
    </div>

  </div>
</template>



<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from '~/stores/userStore';
import { loadCountryList, loadNationalityList, loadBudgetList, loadGenderList, loadHandnessList } from '~/services/commonService';
import CountryCodeDropdown from '~/components/common/select/CountryCodeDropdown.vue';
import CountryDropdown from '~/components/common/select/CountryDropdown.vue';
import NationalityDropdown from '~/components/common/select/NationalityDropdown.vue';
import GenderDropDown from '~/components/common/select/GenderDropDown.vue';
import BudgetDropdown from '~/components/common/select/BudgetDropdown.vue';
import HandednessDropdown from '~/components/common/select/HandednessDropdown.vue';
import { handleError } from '@/utils/handleError';
import { useNuxtApp } from '#app';

// Access authService from the context
const nuxtApp = useNuxtApp();
const $authService = nuxtApp.$authService;

const userStore = useUserStore();
const token = ref('');
const role = ref('');
const country = ref('');
const nationality = ref('');
const phone_code_country = ref('');
const phone_number = ref('');
const gender = ref('');

const height_in_cm = ref(false);
const height_ft = ref('');
const height_in = ref('');
const height_cm = ref('');
const handedness = ref('');
const budget = ref('');
const selectedBudget = ref('');
const utr = ref('');
const gpa = ref('');
const graduation = ref('');
const notEnrolled = ref(false);
const termsAccepted = ref(false);
const error = ref('');
const route = useRoute();
const notification_type = ref('');

const selectedCountry = ref(null);
const countries = ref([]);
const nationalities = ref([]);
const budgets = ref([]);
const country_codes = ref([]);
const genders = ref([]);
const handednesses = ref([]);
const router = useRouter();
const monthInput = ref(null);


const loading = ref(false);
const showNotification = ref(false);
const notificationMessage = ref('');
const notificationKey = ref(0);

// Player-specific fields
const player_first_name = ref('');
const player_last_name = ref('');
const email = ref('');
const player_country = ref('');
const player_phone_code_country = ref('');
const player_phone_number = ref('');
const player_gender = ref('');
const player_handedness = ref('');
const player_height_in_cm = ref(false);
const player_height_ft = ref('');
const player_height_in = ref('');
const player_height_cm = ref('');
const player_budget = ref('');
const player_utr = ref('');
const player_gpa = ref('');
const player_graduation_month_year = ref('');
const player_nationality = ref('');


defineProps({
  token: {
    type: String,
    required: true
  }
});


// Define reactive error state
const errors = ref({
  nationality: [],
  height: [],
  handedness: [],
  budget: [],
  utr: [],
  gpa: [],
  graduation: [],
  gender: [],
  player_first_name: [],
  player_last_name: [],
  email: [],
  player_country: [],
  player_phone_code_country: [],
  player_phone_number: [],
  player_gender: [],
  player_handedness: [],
  player_height: [],
  player_budget: [],
  player_utr: [],
  player_gpa: [],
  player_graduation_month_year: [],
  player_nationality: [],
  role: [],
  country: [],
  phone_code_country: [],
  phone_number: []
});

function showPicker() {
  if (monthInput.value) {
    monthInput.value.showPicker(); // This method is available in some browsers for date inputs
  }
}
const roles = [
  { value: 'player', label: 'Player', icon: '@/assets/images/player_icon.png' },
  { value: 'coach', label: 'Coach', icon: '@/assets/images/coach_icon.png' },
  { value: 'parent', label: 'Parent', icon: '@/assets/images/parent_icon.png' },
  { value: 'business', label: 'Business', icon: '@/assets/images/business_icon.png' }
];

onMounted(() => {
  loadCountryCodes();
  loadCountries();
  loadNationalities();
  loadGenders();
  loadBudgets();
  loadHandness();
});

const handleSubmitStep2 = async () => {

  try {
    error.value = '';
    errors.value = {};  // Reset errors before submitting
    loading.value = true;  // Set loading state
    notification_type.value = '';
    notificationMessage.value = '';
    showNotification.value = false; // Reset the notification state

    let endpoint;
    const data = {
      role: role.value,
      country: country.value,
      phone_code_country: phone_code_country.value,
      phone_number: phone_number.value
    };

    if (role.value === 'player') {
      endpoint = `/auth/player-register`;
      Object.assign(data, {
        height_ft: height_ft.value,
        height_in: height_in.value,
        nationality: nationality.value,
        height_in_cm: height_in_cm.value,
        height_cm: height_cm.value,
        handedness: handedness.value,
        player_budget: selectedBudget.value,
        utr: utr.value,
        gpa: gpa.value,
        graduation_month_year: graduation.value,
        gender: gender.value
      });
    } else if (role.value === 'parent') {
      endpoint = `/auth/parent-register`;
      Object.assign(data, {
        player_first_name: player_first_name.value,
        player_last_name: player_last_name.value,
        email: email.value,
        player_country: player_country.value,
        player_phone_code_country: player_phone_code_country.value,
        player_phone_number: player_phone_number.value,
        player_gender: player_gender.value,
        player_handedness: player_handedness.value,
        player_height_ft: player_height_ft.value,
        player_height_in: player_height_in.value,
        player_height_in_cm: player_height_in_cm.value,
        player_height_cm: player_height_cm.value,
        player_budget: player_budget.value,
        player_utr: player_utr.value,
        player_gpa: player_gpa.value,
        player_graduation_month_year: player_graduation_month_year.value,
        player_nationality: player_nationality.value
      });
    } else if (role.value === 'coach') {
      endpoint = `/auth/${role.value}-register`;
    } else if (role.value === 'business') {
      endpoint = `/auth/${role.value}-manager-register`;
    }

    if (endpoint === undefined || endpoint === 'undefined') {
      loading.value = false; 
      nuxtApp.$notification.triggerNotification('Please Select Role!', 'failure');
    } else if ((role.value == 'parent' || role.value == 'player') && notEnrolled.value !== true) {
      loading.value = false; 
      nuxtApp.$notification.triggerNotification('Please Accept Enrollment!', 'failure');
    } else if ((role.value == 'parent' || role.value == 'player') && termsAccepted.value !== true) {
      loading.value = false; 
      nuxtApp.$notification.triggerNotification('Please Accept Terms!', 'failure');
    } else {

      const response = await $authService.registerStepTwo(endpoint, data);

      if (response.status === 200) {
        loading.value = false; 
        userStore.clearRole();
        userStore.setRole(role.value);

        nuxtApp.$notification.triggerNotification(response.display_message, 'success');
        if (role.value == 'coach' || role.value == 'business') {
          router.push('/user/approval-pending');
        } else if (role.value == 'player' || role.value == 'parent' || role.value == 'admin') {
          router.push('/app');
        } else{
          router.push('/');
        }

      }
      else if (response.status === 401) {
        loading.value = false; 
        console.log('401 detected, redirecting to login...');
        await router.push('/login');
      } else {
        loading.value = false; 
        nuxtApp.$notification.triggerNotification(response.display_message, 'failure');
      }
    }

  } catch (error) {
    loading.value = false; 
    nuxtApp.$notification.triggerNotification(error.display_message,'failure');
    handleError(error, errors, notificationMessage, notification_type, showNotification, loading);
  } finally {
    loading.value = false;  // Reset loading state
  }
};

const loadCountries = async () => {
  try {
    countries.value = await loadCountryList();
  } catch (err) {
    console.error('Error loading countries:', err);
  }
};

const loadNationalities = async () => {
  try {
    nationalities.value = await loadNationalityList();
  } catch (err) {
    console.error('Error loading nationalities:', err);
  }
};

const loadGenders = async () => {
  try {
    genders.value = await loadGenderList();
  } catch (err) {
    console.error('Error loading genders:', err);
  }
};

const loadBudgets = async () => {
  try {
    budgets.value = await loadBudgetList();
  } catch (err) {
    console.error('Error loading budgets:', err);
  }
};

const loadHandness = async () => {
  try {
    handednesses.value = await loadHandnessList();
  } catch (err) {
    console.error('Error loading handess:', err);
  }
};

const loadCountryCodes = async () => {
  try {
    country_codes.value = await loadCountryList();
  } catch (err) {
    console.error('Error loading country codes:', err);
  }
};

const roleFields = computed(() => {
  switch (role.value) {
    case 'player':
      return ['country', 'phone_code_country', 'phone_number', 'gender', 'handedness', 'height_ft', 'height_in', 'height_cm', 'utr', 'gpa', 'graduation', 'nationality', 'budget', 'height'];

    case 'parent':
      return ['country', 'phone_code_country', 'phone_number', 'player_first_name', 'player_last_name', 'email', 'player_country', 'player_phone_code_country', 'player_phone_number', 'player_gender', 'player_handedness', 'player_height_ft', 'player_height_in', 'player_budget', 'player_utr', 'player_gpa', 'player_graduation_month_year', 'player_nationality', 'player_height'];

    case 'coach':
    case 'business':
      return ['country', 'phone_code_country', 'phone_number'];

    default:
      return [];
  }
});


</script>

<style scoped>
.radio-input {
  display: none;
}

.radio-tile {
  text-align: center;
  padding: 1rem;
}

.radio-input:checked+.radio-tile {
  border-color: #2563EB;
  background-color: #EFF6FF;
}

label input {
  @apply text-black;
}

.error-messages {
  margin-top: 20px;
  color: red;
}

.error-title {
  font-weight: bold;
}

.error-list {
  list-style-type: disc;
  /* Ensure bullet points are shown */
  margin-left: 20px;
  /* Indent the list */
}

.error-item {
  margin-bottom: 5px;
}

.mt-8 {
  margin-top: 8px !important;
}

/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltipDiv {
  right: 200px;
  position: absolute;
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 200px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 10px;
  border-radius: 6px;

  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}

.minus-margin-8 {
  margin-top: 8px !important;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
