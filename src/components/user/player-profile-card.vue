<template>
        <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-6 mt-3">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-semibold text-black">Player Profile </h2>
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
            <label class="text-black text-sm">Gender</label>
            <div class="flex flex-wrap mt-2">

                <button
                    class="pl-2 text-black bg-white border border-timberwolf rounded text-sm px-5 py-2.5 text-center inline-flex items-center w-full"
                    d="dropdownGenderButton" data-dropdown-toggle="dropdownGender">
                    Select <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-4 text-black ms-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                </button>
                <div id="dropdownGender" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                    <ul class="py-2 text-sm text-black" aria-labelledby="dropdownMenuIconButton">
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100">sample 01</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100">sample 2</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
        <div class="space-y-2">
            <div class="flex flex-wrap mt-2">
                <div class="flex-1">
                    <label class="text-black text-sm">Grad Month</label>
                    <div class="flex flex-wrap mt-2">

                        <button
                            class="pl-2 text-black bg-white border border-timberwolf rounded text-sm px-5 py-2.5 text-center inline-flex items-center w-full"
                            d="dropdownGradMonthButton" data-dropdown-toggle="dropdownGradMonth">
                            Select <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-4 text-black ms-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>

                        </button>
                        <div id="dropdownGradMonth"
                            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                            <ul class="py-2 text-sm text-black" aria-labelledby="dropdownMenuIconButton">
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">sample 01</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">sample 2</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div class="flex-1">
                    <label class="text-black text-sm">Grad Year</label>
                    <div class="flex flex-wrap mt-2">

                        <button
                            class="pl-2 text-black bg-white border border-timberwolf rounded text-sm px-5 py-2.5 text-center inline-flex items-center w-full"
                            d="dropdownGradYearButton" data-dropdown-toggle="dropdownGradYear">
                            Select <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-4 text-black ms-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>

                        </button>
                        <div id="dropdownGradYear"
                            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                            <ul class="py-2 text-sm text-black" aria-labelledby="dropdownMenuIconButton">
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">sample 01</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">sample 2</a>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>
        </div>
        <div class="space-y-2">
            <label class="text-black text-sm">Hendedness</label>
            <div class="flex flex-wrap mt-2">

                <button
                            class="pl-2 text-black bg-white border border-timberwolf rounded text-sm px-5 py-2.5 text-center inline-flex items-center w-full"
                            d="dropdownHendednessButton" data-dropdown-toggle="dropdownHendedness">
                            Select <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-4 text-black ms-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>

                        </button>
                        <div id="dropdownHendedness"
                            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                            <ul class="py-2 text-sm text-black" aria-labelledby="dropdownMenuIconButton">
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">sample 01</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">sample 2</a>
                                </li>
                            </ul>
                        </div>

            </div>
        </div>
        <div class="space-y-2">
            <label class="text-black text-sm">Country</label>
            <div class="flex flex-wrap mt-2">

                <button
                            class="pl-2 text-black bg-white border border-timberwolf rounded text-sm px-5 py-2.5 text-center inline-flex items-center w-full"
                            d="dropdownGradYearButton" data-dropdown-toggle="dropdownGradYear">
                            Select <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-4 text-black ms-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>

                        </button>
                        <div id="dropdownGradYear"
                            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                            <ul class="py-2 text-sm text-black" aria-labelledby="dropdownMenuIconButton">
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">sample 01</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">sample 2</a>
                                </li>
                            </ul>
                        </div>

            </div>
        </div>
    </div>
</template>