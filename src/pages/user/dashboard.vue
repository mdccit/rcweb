<template>
  <div class="mt-16">
    <section class="grid gap-4 grid-cols-5 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5">
      <div class="col-span-5 sm:col-span-4 md:col-span-5 lg:col-span-2 xl:col-span-4">
        <!--start card 01 -->
        <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-6">
          <div class="flex items-center">
            <img src="../../assets/user/images/Rectangle 117.png" alt="" class="rounded-lg w-12 h-12 mr-4">
            <input type="text" placeholder="Write your thoughts..."
              class="flex-grow text-ceil bg-ceil rounded-xl border-none py-2 px-4 "
              style="background-color:#F4F6F9; color:#8CA4CE;">
          </div>
          <div class="flex justify-between items-center mt-4">
            <div class="flex space-x-2">
              <button class="flex items-center space-x-1 text-lightred px-3 py-1 rounded-md text-sm bg-culturedBlue">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentcolor"
                  class="size-4 text-lightred">
                  <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
                  <path fill-rule="evenodd"
                    d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                    clip-rule="evenodd" />
                </svg>

                <span class="text-lightred pl-1.5">Photo</span>
              </button>
              <button class="flex items-center space-x-1 text-lightred px-3 py-1 rounded-md text-sm bg-culturedBlue">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentcolor"
                  class="size-4 text-amber">
                  <path
                    d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
                </svg>

                <span class="text-amber pl-1.5">Video</span>
              </button>
              <!-- <button
                                    class="flex items-center space-x-1 text-lightred px-3 py-1 rounded-md text-sm bg-culturedBlue">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green"
                                        class="size-4">
                                        <path
                                            d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                                        <path fill-rule="evenodd"
                                            d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                                            clip-rule="evenodd" />
                                    </svg>

                                    <span class="text-green pl-1.5">Event</span>
                                </button> -->
            </div>
            <button class="bg-steelBlue text-white px-8 py-2 rounded-lg text-sm">Post</button>
          </div>
        </div>
        <!--end card 01 -->

        <!--start card 02 -->
        <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-6 mt-3">
          <div class="flex items-start space-x-4">
            <div class="flex-1">
              <div class="flex items-center justify-between">

                <div class="flex items-center space-x-4">
                  <img src="../../assets/user/images/whitter collage.png" alt="" class="rounded-lg w-12 h-12 mr-4">
                  <div>
                    <div class="text-lg font-semibold text-black">Whittier College</div>
                    <div class="flex items-center space-x-2">
                      <div class="bg-lightPink p-1 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="red" class="size-3">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                        </svg>

                      </div>
                      <div class="text-gray-500 text-sm">1 hour ago</div>
                    </div>
                  </div>
                </div>
                <div class="justify-end">
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="steelBlue" class="size-5">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
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
                Whittier College is actively searching for players for the 2024-2025 season!
                Whittier College is located in sunny Southern California, 25 minutes from Downtown
                Los Angeles, 25 minutes from Orange County/Disneyland, and 30 minutes from the
                beach. We are a nationally ranked liberal arts school for academics, value, and for
                a transformative experience.
              </p>
              <a href="#" class="text-steelBlue hover:underline mt-2 bloc text-sm">Show more...</a>
              <div class="flex items-center justify-between mt-4">
                <div class="flex items-center space-x-4">
                  <button class="flex items-center space-x-1 text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                      <path
                        d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                    </svg>

                    <span class="text-darkSlateBlue">100</span>
                  </button>
                  <div id="accordion-collapse1" data-accordion="collapse1">
                    <h2 id="accordion-collapse-comment-1">
                  <button class="flex items-center space-x-1  text-darkSlateBlue dark:bg-white dark:text-darkSlateBlue" data-accordion-target="#accordion-collapse-comment-1-body" aria-expanded="false"
                  aria-controls="accordion-collapse-comment-1-body">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="size-4" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                    </svg>

                    <span class="text-darkSlateBlue">0</span>
                  </button>
                  </h2>
                  </div>
                  <button class="flex items-center space-x-1 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="size-4">
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
            </div>
          </div>
          <hr class="mt-3 mb-3 text-pigeonBlue">
          <!-- comment section -->
          <div id="accordion-collapse-comment-1-body" aria-labelledby="accordion-collapse-comment-1"
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
        <!--end card 02 -->

        <!--start card 03 -->
        <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-6 mt-3">
          <div class="flex items-start space-x-4">
            <div class="flex-1">
              <div class="flex items-center justify-between">

                <div class="flex items-center space-x-4">
                  <img src="../../assets/user/images/Rectangle 126.png" alt="" class="rounded-lg w-12 h-12 mr-4">
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
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="size-5 text-periwinkleBlue">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>

                  </button>
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
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-20 text-ceil pr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                  </svg>
                </div>
              </div>

              <div class="flex items-center justify-between mt-4">
                <div class="flex items-center space-x-4">
                  <button class="flex items-center space-x-1 text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="size-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>

                    <span class="text-darkSlateBlue">100</span>
                  </button>
                  <div id="accordion-collapse2" data-accordion="collapse2">
                    <h2 id="accordion-collapse-comment-2">
                      <button type="button"
                        class="flex items-center space-x-1 text-darkSlateBlue dark:bg-white dark:text-darkSlateBlue"
                        data-accordion-target="#accordion-collapse-comment-2-body" aria-expanded="false"
                        aria-controls="accordion-collapse-comment-2-body">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="currentColor" class="size-4" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                        </svg>

                        <span class="text-darkSlateBlue">0</span>
                      </button>
                    </h2>
                  </div>
                  <button class="flex items-center space-x-1 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="size-4">
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
                <img src="../../assets/user/images/Rectangle 117.png" alt="" class="rounded-lg w-12 h-12 mr-4">
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
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="currentColor" class="size-4">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>

                        <span class="text-darkSlateBlue">100</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex space-x-4 mt-4 ml-20">
                <img src="../../assets/user/images/Rectangle 117.png" alt="" class="rounded-lg w-12 h-12 mr-4">
                <div>
                  <div class="text-lg font-semibold text-black">Jane Cooper</div>
                  <div class="flex items-center space-x-2">
                    <div class="text-darkSlateBlue text-sm">2 min ago</div>
                  </div>
                  <p class="text-darkSlateBlue text-base mt-2">Lorem ipsum is a placeholder text
                    commonly used to demonstrate the visual form of a document or a typeface
                    without relying on meaningful content.</p>

                  <div class="flex items-center justify-between mt-4">
                    <div class="flex items-center space-x-4">
                      <button class="flex items-center space-x-1 text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="currentColor" class="size-4">
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

        <!--start card 04 -->
        <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-6 mt-3">
          <div class="flex items-start space-x-4">
            <div class="flex-1">
              <div class="mb-4">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-4">
                    <img src="../../assets/user/images/Rectangle 117.png" alt="" class="rounded-lg w-12 h-12 mr-4">
                    <div>
                      <div class="text-lg font-semibold text-black">East Texas Baptist University
                      </div>
                      <div class="flex items-center space-x-2">
                        <div class="bg-lightPale p-1 rounded">
                          <img src="../../assets/images/player-blue.png" alt="" class="rounded-lg w-4 h-4">

                        </div>
                        <div class="text-gray-500 text-sm">2024 04 29</div>
                      </div>
                    </div>
                  </div>
                  <div class="justify-end">
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="steelBlue" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                      </svg>
                    </button>
                    <button type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-5 text-periwinkleBlue">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                      </svg>

                    </button>
                  </div>
                </div>
                <p class="mt-4 text-darkSlateBlue text-base">
                  East Texas Baptist is searching for the best Student Athletes to become Tigers!
                </p>
              </div>
              <div class="rounded-2xl overflow-hidden border border-lightSteelBlue p-4">
                <div class="flex items-center space-x-4">
                  <img src="../../assets/user/images/whitter collage.png" alt="" class="rounded-lg w-12 h-12 mr-4">
                  <div>
                    <div class="text-md font-semibold text-black">East Texas Baptist University</div>
                    <div class="flex items-center space-x-2">
                      <div class="bg-lightPink p-1 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="red" class="size-3">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                        </svg>

                      </div>
                      <div class="text-gray-500 text-sm">2024 04 29</div>
                    </div>
                  </div>
                </div>

                <p class="mt-4 text-darkSlateBlue text-base">
                  East Texas Baptist is searching for the best Student Athletes to become Tigers!
                  Our women’s team has been ranked as high as 32nd in the nation and has won an ASC
                  championship. We have 2 All-Americans in the women’s program history as well. The
                  2024 season, the women were ranked as high as 46th in the nation and 9th in the West
                  ITA region.
                  Our men’s team is the currently in the best season in program history
                  with a record of 13-5 with many match wins over teams we havnt beaten since 2018.
                  Our men’s team is projected to be 3rd in the ASC.ETBU has over 40 undergrad programs
                  and we have a great mix of U.S. and International students in our roster.
                </p>
              </div>

              <div class="flex items-center justify-between mt-4">
                <div class="flex items-center space-x-4">
                  <button class="flex items-center space-x-1 text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="size-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>

                    <span class="text-darkSlateBlue">100</span>
                  </button>
                  <div id="accordion-collapse" data-accordion="collapse">
                    <h2 id="accordion-collapse-comment-3">
                      <button type="button"
                        class="flex items-center space-x-1 text-darkSlateBlue dark:bg-white dark:text-darkSlateBlue"
                        data-accordion-target="#accordion-collapse-comment-3-body" aria-expanded="false"
                        aria-controls="accordion-collapse-comment-3-body">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="currentColor" class="size-4" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                        </svg>

                        <span class="text-darkSlateBlue">0</span>
                      </button>
                    </h2>
                  </div>
                  <button class="flex items-center space-x-1 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="size-4">
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
            </div>
          </div>
          <hr class="mt-3 mb-3 text-pigeonBlue">
          <!-- comment section -->
          <div id="accordion-collapse-comment-3-body" aria-labelledby="accordion-collapse-comment-3"
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
        <!--end card 04 -->
      </div>
      <!-- End Chat Section -->

      <!-- Start Pending Req. Section -->
      <!-- <div class="col-span-5 sm:col-span-1 md:col-span-5 lg:col-span-1 xl:col-span-1">
                    <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white p-3"> -->
      <!-- start pending request section -->
      <!-- <h2 class="text-lg font-semibold mb-4">Pending requests</h2>
                        <div class="flex items-center mb-4 p-2 rounded-lg p-0 border border-veryPaleBlue bg-snowBlue">
                            <img src="../../assets/user/images/Rectangle 117.png" alt=""
                                class="w-16 h-16 rounded-lg mr-4">
                            <div class="flex-1">
                                <h3 class="text-sm font-medium mb-1.5">Ralph Edwards</h3>
                                <p class="text-xs text-darkSlateBlue">Tennis player at Whittier College</p>
                                <div class="flex space-x-2 mt-2">
                                    <button class="bg-steelBlue text-white text-xs px-2 py-1 rounded">Accept</button>
                                    <button
                                        class="bg-lightGray text-steelBlue text-xs px-2 py-1 rounded">Decline</button>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center mb-4 p-2 rounded-lg p-0 border border-veryPaleBlue bg-snowBlue">
                            <img src="../../assets/user/images/Rectangle 117.png" alt=""
                                class="w-16 h-16 rounded-lg mr-4">
                            <div class="flex-1">
                                <h3 class="text-sm font-medium mb-1.5">Ralph Edwards</h3>
                                <p class="text-xs text-darkSlateBlue">Tennis player at Whittier College</p>
                                <div class="flex space-x-2 mt-2">
                                    <button class="bg-steelBlue text-white text-xs px-2 py-1 rounded">Accept</button>
                                    <button
                                        class="bg-lightGray text-steelBlue text-xs px-2 py-1 rounded">Decline</button>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center mb-4 p-2 rounded-lg p-0 border border-veryPaleBlue bg-snowBlue">
                            <img src="../../assets/user/images/Rectangle 117.png" alt=""
                                class="w-16 h-16 rounded-lg mr-4">
                            <div class="flex-1">
                                <h3 class="text-sm font-medium mb-1.5">Ralph Edwards</h3>
                                <p class="text-xs text-darkSlateBlue">Tennis player at Whittier College</p>
                                <div class="flex space-x-2 mt-2">
                                    <button class="bg-steelBlue text-white text-xs px-2 py-1 rounded">Accept</button>
                                    <button
                                        class="bg-lightGray text-steelBlue text-xs px-2 py-1 rounded">Decline</button>
                                </div>
                            </div>
                        </div> -->
      <!-- end pending request section -->
      <!-- start latest contacts section -->
      <!-- <h2 class="text-lg font-semibold mt-4 mb-4">Latest contacts</h2>
                        <div class="flex items-center mb-4 p-2 rounded-lg p-0 border border-veryPaleBlue bg-snowBlue">
                            <img src="../../assets/user/images/Rectangle 117.png" alt=""
                                class="w-16 h-16 rounded-lg mr-4">
                            <div class="flex-1">
                                <h3 class="text-sm font-medium mb-1.5">Ralph Edwards</h3>
                                <p class="text-xs text-darkSlateBlue">Tennis player at Whittier College</p>
                                <div class="flex space-x-2 mt-2 justify-between">
                                    <button class="bg-steelBlue text-white text-xs px-2 py-1 rounded">Message</button>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center mb-4 p-2 rounded-lg p-0 border border-veryPaleBlue bg-snowBlue">
                            <img src="../../assets/user/images/Rectangle 117.png" alt=""
                                class="w-16 h-16 rounded-lg mr-4">
                            <div class="flex-1">
                                <h3 class="text-sm font-medium mb-1.5">Ralph Edwards</h3>
                                <p class="text-xs text-darkSlateBlue">Tennis player at Whittier College</p>
                                <div class="flex space-x-2 mt-2 justify-between">
                                    <button class="bg-steelBlue text-white text-xs px-2 py-1 rounded">Message</button>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-center">
                            <button class="bg-white text-darkSlateBlue text-xs px-2 py-1 rounded flex">
                                <span class="mr-2">More</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>
                        </div> -->
      <!-- end latest contacts section -->
      <!-- </div> -->
      <!-- start chat card -->
      <!-- <div class=" card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white p-3 mt-3">
                        <h2 class="text-lg font-semibold mb-4">Chat</h2>
                        <div class="flex items-center mb-4 p-2 rounded-lg p-0 border border-veryPaleBlue bg-snowBlue">
                            <img src="../../assets/user/images/Rectangle 117.png" alt=""
                                class="w-16 h-16 rounded-lg mr-4">
                            <div class="flex-1">
                                <div class="flex justify-between items-center">

                                    <h3 class="text-sm font-medium mb-1.5">Kristin Watson</h3>
                                    <span class="bg-orangeRed text-white text-xs font-bold rounded px-2 py-1">02</span>
                                </div>
                                <p class="text-xs text-darkSlateBlue">1 min ago</p>
                                <p class="text-xs text-ceil">Tennis player at Whittier College</p>
                            </div>
                        </div>
                        <div class="flex items-center mb-4 p-2 rounded-lg p-0 border border-veryPaleBlue bg-snowBlue">
                            <img src="../../assets/user/images/Rectangle 126.png" alt=""
                                class="w-16 h-16 rounded-lg mr-4">
                            <div class="flex-1">
                                <div class="flex justify-between items-center">

                                    <h3 class="text-sm font-medium mb-1.5">Kristin Watson</h3>
                                    <span class="bg-orangeRed text-white text-xs font-bold rounded px-2 py-1">09
                                        +</span>
                                </div>
                                <p class="text-xs text-darkSlateBlue">10 min ago</p>
                                <p class="text-xs text-ceil">Tennis player at Whittier College</p>
                            </div>
                        </div>
                        <div class="flex items-center mb-4 p-2 rounded-lg p-0 border border-veryPaleBlue bg-snowBlue">
                            <img src="../../assets/user/images/Rectangle 126.png" alt=""
                                class="w-16 h-16 rounded-lg mr-4">
                            <div class="flex-1">
                                <div class="flex justify-between items-center">

                                    <h3 class="text-sm font-medium mb-1.5">Kristin Watson</h3>
                                    <span class="bg-orangeRed text-white text-xs font-bold rounded px-2 py-1">05</span>
                                </div>
                                <p class="text-xs text-darkSlateBlue">1 h ago</p>
                                <p class="text-xs text-ceil">Tennis player at Whittier College</p>
                            </div>
                        </div>
                        <div class="flex justify-center">
                            <button class="bg-white text-darkSlateBlue text-xs px-2 py-1 rounded flex">
                                <span class="mr-2">More</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>
                        </div>
                    </div> -->
      <!-- end chat card -->
      <!-- </div> -->
      <!-- End Pending Req. Section -->
    </section>
  </div>

</template>

<script setup>
definePageMeta({
  layout: 'user',
});
</script>