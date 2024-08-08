<template>
    <!-- Start Filter Section  -->
    <div class=" card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white p-3">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-semibold">Filters</h2>
            <button class="flex text-ceil text-sm">
                <svg class="w-3 h-3 mt-1 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
                <span> Clear</span>
            </button>
        </div>
        <ul>
            <li class="flex justify-between items-center mb-2 border text-steelBlue rounded-xl hover:bg-lightGray">
                <a href="#" class="flex items-center text-steelBlue p-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
                        <path fill-rule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z"
                            clip-rule="evenodd" />
                    </svg>
                    <span class="pl-2.5">All</span>
                </a>
                <span class="ml-auto bg-steelBlue h-10 p-2 rounded-r-xl"></span>
            </li>
            <li class="flex justify-between items-center mb-2 hover:bg-lightGray">
                <a href="#" class="flex items-center text-black p-2 rounded-md">
                    <img class="w-5" src="../../assets/css/images/posts.png" alt="">
                    <span class="pl-2.5">Posts</span>
                </a>
                <span class="text-steelBlue bg-steelBlueLight79 text-sm rounded-md p-1">5+ new</span>
            </li>
            <li class="flex justify-between items-center mb-2  hover:bg-lightGray">
                <a href="#" class="flex items-center w-full text-black p-2 rounded-md">
                    <img class="w-5" src="../../assets/css/images/sports.png" alt="">
                    <span class="pl-2.5">Events</span>
                </a>
            </li>
            <li class="flex justify-between items-center hover:bg-lightGray">
                <a href="#" class="flex items-center text-black p-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                    </svg>

                    <span class="pl-2.5">Blogs</span>
                </a>
                <span class="text-steelBlue text-sm p-1 bg-steelBlueLight79 text-sm rounded-md">9+
                    new</span>
            </li>
            <li class="flex justify-between items-center hover:bg-lightGray">
                <a href="#" class="flex items-center  text-black p-2 rounded-md">
                    <div class="bg-lightPink p-1 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="red" class="size-3">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                        </svg>
                    </div>
                    <span class="pl-2.5">Schools</span>
                </a>
            </li>
            <li class="flex justify-between items-center hover:bg-lightGray">
                <a href="#" class="flex items-center text-black p-2 rounded-md">
                    <div class="bg-mintGreen p-1 rounded">
                        <img src="../../assets/css/images/man-medal.png" alt="" class=" w-4 h-4">
                    </div>

                    <span class="pl-2.5">Coaches</span>
                </a>
            </li>
        </ul>
    </div>
    <!-- End Fiter Section  -->
</template>

<script>
export default {
    name: 'filter-card'
}
</script>