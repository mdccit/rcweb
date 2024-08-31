<template>
    <section class="grid gap-4 grid-cols-5 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5">
        <!-- Start Filter Section  -->
        <div class="col-span-5 sm:col-span-1 md:col-span-5 lg:col-span-1 xl:col-span-1"></div>
        <div class="col-span-5 sm:col-span-3 md:col-span-5 lg:col-span-2 xl:col-span-3">
            <!--start card 03 -->
            <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-6 mt-3">
                <div class="flex items-start space-x-4">
                    <div class="flex-1">
                        <div class="flex items-center justify-between">

                            <div class="flex items-center space-x-4">
                                <img src="../../assets/user/images/Rectangle 126.png" alt=""
                                    class="rounded-lg w-12 h-12 mr-4">
                                <div>
                                    <div class="text-lg font-semibold text-black">Dianne Russell</div>
                                    <div class="flex items-center space-x-2">
                                        <div class="bg-mintGreen p-1 rounded">
                                            <img src="../../assets/user/images/man-medal.png" alt="" class=" w-4 h-4">
                                        </div>
                                        <div class="text-sm ml-2 text-black">4 hour ago</div>
                                    </div>
                                </div>
                            </div>
                            <div class="justify-end">
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="size-5 text-periwinkleBlue">
                                        <path fill-rule="evenodd"
                                            d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </button>

                                <button id="dropdownActionButton" data-dropdown-toggle="dropdownActionButtonDelay"
                                    data-dropdown-delay="500" data-dropdown-trigger="hover"
                                    class="text-white bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                                    type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-5 text-periwinkleBlue">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                    </svg>
                                </button>

                                <!-- Action Dropdown menu -->
                                <div id="dropdownActionButtonDelay" class="z-10 hidden bg-white rounded-lg shadow w-30">
                                    <ul class="py-2 text-sm" aria-labelledby="dropdownActionButton">
                                        <li class="text-black">
                                            <a href="#" class="block px-4 py-2 hover:bg-lightGray flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="size-4 mr-2">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                </svg>
                                                Edit post
                                            </a>
                                        </li>
                                        <li class="text-red">
                                            <a href="#" class="block px-4 py-2 hover:bg-lightGray flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="size-4 mr-2">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                </svg>
                                                Delete</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <p class="mt-4 text-darkSlateBlue text-base">
                            Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a
                            document or a typeface without relying on meaningful content.
                        </p>
                        <div class="relative w-82 h-82 pt-4">
                            <img src="../../assets/user/images/Rectangle 128.png" alt=""
                                class="rounded-lg mr-4 w-full h-full object-cover">
                            <div class="absolute inset-0 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-20 text-ceil pr-2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                                </svg>
                            </div>
                        </div>

                        <div class="flex items-center justify-between mt-4">
                            <div class="flex items-center space-x-4">
                                <button class="flex items-center space-x-1 text-red-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>

                                    <span class="text-darkSlateBlue">100</span>
                                </button>
                                <div id="accordion-collapse2" data-accordion="collapse2">
                                    <h2 id="accordion-collapse-comment-2">
                                        <button type="button"
                                            class="flex items-center space-x-1 text-darkSlateBlue dark:bg-white dark:text-darkSlateBlue"
                                            data-accordion-target="#accordion-collapse-comment-2-body"
                                            aria-expanded="false" aria-controls="accordion-collapse-comment-2-body">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="size-4"
                                                aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                            </svg>

                                            <span class="text-darkSlateBlue">0</span>
                                        </button>
                                    </h2>
                                </div>
                                <button class="flex items-center space-x-1 text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </button>
                                <!-- <button class="flex items-center space-x-1 text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="size-4">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                            </svg>

                                            <span class="text-darkSlateBlue">7</span>
                                        </button> -->
                            </div>
                        </div>
                        <hr class="mt-3 mb-3 text-pigeonBlue">
                        <div class="flex space-x-4 mt-3">
                            <img src="../../assets/user/images/Rectangle 117.png" alt=""
                                class="rounded-lg w-12 h-12 mr-4">
                            <div>
                                <div class="text-lg font-semibold text-black">Jane Cooper</div>
                                <div class="flex items-center space-x-2">
                                    <div class="text-darkSlateBlue text-sm">15 min ago</div>
                                </div>
                                <p class="text-darkSlateBlue text-base mt-2">Lorem ipsum is a placeholder text
                                    commonly used to demonstrate the visual form of a document or a typeface
                                    without relying on meaningful content.</p>

                                <div class="flex items-center justify-between mt-4">
                                    <div class="flex items-center space-x-4">
                                        <button class="flex items-center space-x-1 text-red-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="size-4">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                            </svg>

                                            <span class="text-darkSlateBlue">100</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex space-x-4 mt-4">
                            <img src="../../assets/user/images/Rectangle 117.png" alt=""
                                class="rounded-lg w-12 h-12 mr-4">
                            <div>
                                <div class="text-lg font-semibold text-black">Christopher Rogers</div>
                                <div class="flex items-center space-x-2">
                                    <div class="text-darkSlateBlue text-sm">2 min ago</div>
                                </div>
                                <p class="text-darkSlateBlue text-base mt-2">Lorem ipsum is a placeholder text
                                    commonly used to demonstrate the visual form of a document or a typeface
                                    without relying on meaningful content.</p>

                                <div class="flex items-center justify-between mt-4">
                                    <div class="flex items-center space-x-4">
                                        <button class="flex items-center space-x-1 text-red-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="size-4">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                            </svg>

                                            <span class="text-darkSlateBlue">100</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#" class="text-steelBlue hover:underline mt-2 block text-sm">Show all
                            comments...</a>
                    </div>
                </div>
                <hr class="mt-3 mb-3 text-pigeonBlue">
                <!-- comment section -->
                <div id="accordion-collapse-comment-2-body" aria-labelledby="accordion-collapse-comment-2"
                    class="z-10 hidden bg-white mt-4 flex items-start space-x-4">
                    <img src="../../assets/user/images/Rectangle 117.png" alt="User Image" class="w-12 h-12 rounded-lg">
                    <div class="relative  w-full ">
                        <input type="text" placeholder="Write your comment..."
                            class=" text-ceil bg-ceil w-full rounded-xl py-2 px-4 border-none"
                            style="background-color:#F4F6F9; color:#8CA4CE;">
                        <span class="absolute inset-y-0 right-0 flex items-center pl-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6 text-ceil pr-2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="size-6 text-ceil pr-2">
                                <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
                                <path fill-rule="evenodd"
                                    d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                                    clip-rule="evenodd" />
                            </svg>

                        </span>
                    </div>
                    <button class="bg-steelBlue text-white px-8 py-2 rounded-lg text-sm">Comment</button>
                </div>
            </div>
            <!--end card 03 -->
        </div>
        <div class="col-span-5 sm:col-span-1 md:col-span-5 lg:col-span-1 xl:col-span-1"></div>
    </section>
</template>

<!-- <script setup>
definePageMeta({
  layout: 'user',
});
</script> -->