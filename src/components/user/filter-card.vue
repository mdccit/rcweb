<template>
    <!-- Start Filter Section  -->
       <UserFilter/>
    <!-- End Fiter Section  -->

    <!-- Start Location Card -->
       <LocationCard/>
    <!-- End Location Card -->

    <!-- Start Turion and Cost Card -->
       <!-- <TutionCostCard/> -->
    <!-- End Turion and Cost Card -->

    <!-- Start Athletics Card -->
    <!-- <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-6 mt-3">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-semibold text-black">Athletics</h2>
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
                placeholder="Division">
            <input type="text"
                class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift"
                placeholder="Conference">
        </div>
        <div class="space-y-2">
            <label class="text-black text-sm">Ranking</label>
            <div class="flex flex-wrap mt-2">
                <div class="flex-1">
                    <input type="text"
                        class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift"
                        placeholder="Min">
                </div>
                <div class="flex-1">
                    <input type="text"
                        class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift ml-2"
                        placeholder="Max">
                </div>
            </div>
        </div>
        <div class="space-y-2">
            <label class="text-black text-sm">Average UTR</label>
            <div class="flex flex-wrap mt-2">
                <div class="flex-1">
                    <input type="text"
                        class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift"
                        placeholder="Min">
                </div>
                <div class="flex-1">
                    <input type="text"
                        class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift ml-2"
                        placeholder="Max">
                </div>
            </div>
        </div>
        <div class="space-y-2">
            <label class="text-black text-sm">Average WTN</label>
            <div class="flex flex-wrap mt-2">
                <div class="flex-1">
                    <input type="text"
                        class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift"
                        placeholder="Min">
                </div>
                <div class="flex-1">
                    <input type="text"
                        class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift ml-2"
                        placeholder="Max">
                </div>
            </div>
        </div>
        <div class="space-y-2">
            <label class="text-black text-sm">In-state tuition</label>

            <input type="text"
                class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift"
                placeholder="All">
        </div>
    </div> -->
    <!-- End Athletics Card -->

    <!-- Start Academics Card -->
    <!-- <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-6 mt-3">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-semibold text-black">Academics</h2>
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
            <label class="text-black text-sm">Degrees Offered</label>
            <input type="text"
                class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift"
                placeholder="">
        </div>
        <div class="space-y-2">
            <label class="text-black text-sm">Acceptence Rate (%)</label>
            <div class="flex flex-wrap mt-2">
                <div class="flex-1">
                    <input type="text"
                        class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift"
                        placeholder="Min">
                </div>
                <div class="flex-1">
                    <input type="text"
                        class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift ml-2"
                        placeholder="Max">
                </div>
            </div>
        </div>
        <div class="space-y-2">
            <label class="text-black text-sm">Graduation Rate (%)</label>
            <div class="flex flex-wrap mt-2">
                <div class="flex-1">
                    <input type="text"
                        class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift"
                        placeholder="Min">
                </div>
                <div class="flex-1">
                    <input type="text"
                        class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift ml-2"
                        placeholder="Max">
                </div>
            </div>
        </div>
        <div class="space-y-2">
            <label class="text-black text-sm">Student Count</label>
            <div class="flex flex-wrap mt-2">
                <div class="flex-1">
                    <input type="text"
                        class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift"
                        placeholder="Min">
                </div>
                <div class="flex-1">
                    <input type="text"
                        class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift ml-2"
                        placeholder="Max">
                </div>
            </div>
        </div>
        <div class="space-y-2">
            <label class="text-black text-sm">Student toFaculty Ratio</label>
            <div class="flex flex-wrap mt-2">
                <div class="flex-1">
                    <input type="text"
                        class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift"
                        placeholder="Min">
                </div>
                <div class="flex-1">
                    <input type="text"
                        class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift ml-2"
                        placeholder="Max">
                </div>
            </div>
        </div>
        <div class="space-y-2">
            <label class="text-black text-sm">Percentage of International Students (%)</label>
            <div class="flex flex-wrap mt-2">
                <div class="flex-1">
                    <input type="text"
                        class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift"
                        placeholder="Min">
                </div>
                <div class="flex-1">
                    <input type="text"
                        class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift ml-2"
                        placeholder="Max">
                </div>
            </div>
        </div>
    </div> -->

    <!-- End Acasemics Card -->

    <!-- Start Athletics Card -->
    <!-- <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-6 mt-3">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-semibold text-black">Earnings</h2>
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
            <label class="text-black text-sm">Earnings 1 year after graduation</label>
            <input type="number"
                class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift"
                placeholder="Select Minimum">
        </div>
        <div class="space-y-2">
            <label class="text-black text-sm">Earnings 1 year after graduation</label>
            <input type="number"
                class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift"
                placeholder="Select Minimum">
        </div>
    </div> -->
    <!-- End Athletics Card -->

    <!-- Start Player Profile Card -->
        <PlayerProfileCard/>
    <!-- End Player Profile Card -->

    <!-- Start Rankings & Ratings Card -->
       <RankingCard/>
    <!-- End Rankings & Ratings Card -->

    <!-- Start Physical Attributes Card -->
       <!-- <PhysicalAttribute/> -->
    <!-- End Physical Attributes Card -->

</template>

<script setup>
import UserFilter from '~/components/user/user-fiter.vue';
import LocationCard from '~/components/user/location-card.vue';
import TutionCostCard from '~/components/user/tution-cost-card.vue';
import PlayerProfileCard from '~/components/user/player-profile-card.vue';
import RankingCard from '~/components/user/ranking-card.vue';
import PhysicalAttribute from '~/components/user/physical-attribute.vue';

</script>