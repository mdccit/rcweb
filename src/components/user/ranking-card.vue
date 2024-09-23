<template>
     <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-6 mt-3">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-semibold text-black">Rankings & Ratings</h2>
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
            <label class="text-black text-sm">UTR</label>
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
            <label class="text-black text-sm">WTN</label>
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
            <label class="text-black text-sm">Minimum Rankings</label>
            <input type="number"
                class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift"
                placeholder="ATP Ranking">
            <input type="number"
                class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift"
                placeholder="ITF Ranking">
            <input type="number"
                class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift"
                placeholder="National Ranking">
        </div>
    </div>
</template>