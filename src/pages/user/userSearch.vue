<template>
    <main class="flex-1 bg-graySnowDrift p-4 overflow-y-auto mt-14">
        <div>
            <section class="grid gap-4 grid-cols-5 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5">
                <!-- Start Filter Section  -->
                <div class="col-span-5 sm:col-span-1 md:col-span-5 lg:col-span-1 xl:col-span-1">
                    <filterCard> </filterCard>

                    <!-- Start Location Card -->
                    <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-6 mt-3">
                        <div class="flex justify-between items-center mb-4">
                            <h2 class="text-lg font-semibold">Location</h2>
                            <button class="flex text-ceil text-sm">
                                <svg class="w-3 h-3 mt-1 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span> Clear</span>
                            </button>
                        </div>
                        <div class="space-y-2">
                            <input type="text"
                                class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift"
                                placeholder="Illinois">
                            <input type="text"
                                class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift"
                                placeholder="City">
                        </div>
                    </div>
                    <!-- End Location Card -->
                </div>
                <!-- End Filter Section  -->

                <!-- Start Content Section -->
                <div class="col-span-5 sm:col-span-4 md:col-span-5 lg:col-span-3 xl:col-span-4">
                    <h2 class="text-lg font-semibold">Search Result</h2>
                    <label class="text-sm mb-2">Lorem ipsum is a placeholder text commonly used to</label>
                    <div class="flex flex-wrap gap-2">
                        <div class="flex items-center bg-steelBlue text-white px-3 py-1 rounded-md">
                            <span class="text-sm">Location</span>
                            <button class="ml-2 focus:outline-none" aria-label="Remove tag">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                        <div class="flex items-center bg-steelBlue text-white px-3 py-1 rounded-md">
                            <span class="text-sm">In-state tuition | $100-$500</span>
                            <button class="ml-2 focus:outline-none" aria-label="Remove tag">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <section class="grid gap-4 grid-cols-4">
                        <div class="col-span-2">
                            <div
                                class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-6 mt-3">
                                <div class=" flex">
                                    <img class="w-40 h-30 rounded-md" src="../assets/css/images/rectangle-117.png"
                                        alt="Profile Picture">
                                    <div class="ml-4 flex-1">
                                        <div class="flex justify-between items-center">
                                            <div>
                                                <h2 class="text-lg font-bold">Jane Cooper</h2>
                                                <p class="text-blue-500">Tennis Player</p>
                                            </div>
                                            <span
                                                class="text-steelBlue text-sm p-1 bg-steelBlueLight79 text-sm rounded-md">$5000
                                                - $8000</span>
                                        </div>
                                        <div class="flex items-center mt-2 text-sm text-gray-500">
                                            <div class="mr-4">
                                                <p class="font-semibold">UTR Scoree</p>
                                                <p class="text-xl font-bold">50.00</p>
                                            </div>
                                            <p class="mr-4">ATP Score: 538</p>
                                            <p class="mr-4">GPA: 538</p>
                                            <p>SAT Score: 145</p>
                                        </div>
                                        <div class="flex items-center mt-2 text-sm text-gray-500">
                                            <p>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="size-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                                </svg>

                                                New Pura, Belgium
                                            </p>
                                            <p class="ml-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="size-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                                </svg>

                                                Coach at Whittier College
                                            </p>
                                            <p class="ml-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="size-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
                                                </svg>

                                                24 Years Old
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <p class="mt-2 text-sm text-gray-500">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                        irure
                                        dolor in.
                                    </p>
                                    <div class="mt-2 text-blue-500 text-sm">
                                        <a href="#">Ralph Cameron 3 more mutual connections</a>
                                    </div>
                                    <div class="flex justify-end mt-2">
                                        <button class="bg-blue-500 text-white px-4 py-2 rounded-full">Connect</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <!-- End Content Section -->
            </section>
        </div>
    </main>
</template>

<script>
import filterCard from '~/components/user/filter-card.vue';

export default {
  components: {
    filterCard
  }
}
</script>