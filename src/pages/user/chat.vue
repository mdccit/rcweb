<template>
    <div>
        <div class="grid gap-4 grid-cols-4">

            <div class="my-6 border-r-4" :style="{ height: contentHeight + 'px' }">
                <div class="pe-4 pb-4" ref="leftHeaderSection">
                    <h2 class="text-2xl font-semibold text-black">Chat</h2>
                    <p class="text-sm text-darkSlateBlue">Lorem ipsum is a placeholder text commonly used to</p>
                </div>

                <div :style="{ height: leftListHeight + 'px' }" class="overflow-y-auto -me-1">
                    <div class="pe-5 flex flex-col space-y-3">

                        <div class="flex items-center px-3 py-2 rounded-xl bg-white space-x-4 hover:bg-white transition cursor-pointer">
                            <div class="basis-[56px] shrink-0 grow-0">
                                <img src="@/assets/user/images/Rectangle_117.png" alt="" class="w-14 h-14 rounded-lg">
                            </div>

                            <div>
                                <h3 class="text-base mb-1 text-black font-bold">Kristin Watson</h3>
                                <p class="text-xs text-darkSlateBlue line-clamp-2">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing
                                    elit, sed do
                                    eiusmod</p>
                            </div>
                            
                            <div class="text-center basis-[55px] shrink-0 grow-0 self-stretch">
                                <div class="flex flex-col items-center">
                                    <p class="text-xs text-black font-semibold">1 min ago</p>
                                    <div
                                        class="bg-orangeRed text-white text-xs rounded-lg p-1 mt-3 w-7 h-7 flex items-center justify-center">
                                        <span>02</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr class="mt-3 mb-3 text-pigeonBlue">

                        <div class="flex items-center px-3 py-2 rounded-xl space-x-4 hover:bg-white transition cursor-pointer">
                            <div class="basis-[56px] shrink-0 grow-0">
                                <img src="@/assets/user/images/Rectangle_117.png" alt="" class="w-14 h-14 rounded-lg">
                            </div>

                            <div>
                                <h3 class="text-base mb-1 text-black font-bold">Kristin Watson</h3>
                                <p class="text-xs text-darkSlateBlue line-clamp-2">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing
                                    elit, sed do
                                    eiusmod</p>
                            </div>
                            
                            <div class="text-center basis-[55px] shrink-0 grow-0 self-stretch">
                                <div class="flex flex-col items-center">
                                    <p class="text-xs text-black font-semibold">1 min ago</p>
                                    <div
                                        class="bg-orangeRed text-white text-xs rounded-lg p-1 mt-3 w-7 h-7 flex items-center justify-center">
                                        <span>02</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr class="mt-3 mb-3 text-pigeonBlue">
                        
                        <div class="flex items-center px-3 py-2 rounded-xl space-x-4 hover:bg-white transition cursor-pointer">
                            <div class="basis-[56px] shrink-0 grow-0">
                                <img src="@/assets/user/images/Rectangle_117.png" alt="" class="w-14 h-14 rounded-lg">
                            </div>

                            <div>
                                <h3 class="text-base mb-1 text-black font-bold">Kristin Watson</h3>
                                <p class="text-xs text-darkSlateBlue line-clamp-2">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing
                                    elit, sed do
                                    eiusmod</p>
                            </div>
                            
                            <div class="text-center basis-[55px] shrink-0 grow-0 self-stretch">
                                <div class="flex flex-col items-center">
                                    <p class="text-xs text-black font-semibold">1 min ago</p>
                                    <div
                                        class="bg-orangeRed text-white text-xs rounded-lg p-1 mt-3 w-7 h-7 flex items-center justify-center">
                                        <span>02</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr class="mt-3 mb-3 text-pigeonBlue">

                        <div class="flex items-center px-3 py-2 rounded-xl space-x-4 hover:bg-white transition cursor-pointer">
                            <div class="basis-[56px] shrink-0 grow-0">
                                <img src="@/assets/user/images/Rectangle_117.png" alt="" class="w-14 h-14 rounded-lg">
                            </div>

                            <div>
                                <h3 class="text-base mb-1 text-black font-bold">Kristin Watson</h3>
                                <p class="text-xs text-darkSlateBlue line-clamp-2">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing
                                    elit, sed do
                                    eiusmod</p>
                            </div>
                            
                            <div class="text-center basis-[55px] shrink-0 grow-0 self-stretch">
                                <div class="flex flex-col items-center">
                                    <p class="text-xs text-black font-semibold">1 min ago</p>
                                    <div
                                        class="bg-orangeRed text-white text-xs rounded-lg p-1 mt-3 w-7 h-7 flex items-center justify-center">
                                        <span>02</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <hr class="mt-3 mb-3 text-pigeonBlue">

                        <div class="flex items-center px-3 py-2 rounded-xl space-x-4 hover:bg-white transition cursor-pointer">
                            <div class="basis-[56px] shrink-0 grow-0">
                                <img src="@/assets/user/images/Rectangle_117.png" alt="" class="w-14 h-14 rounded-lg">
                            </div>

                            <div>
                                <h3 class="text-base mb-1 text-black font-bold">Kristin Watson</h3>
                                <p class="text-xs text-darkSlateBlue line-clamp-2">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing
                                    elit, sed do
                                    eiusmod</p>
                            </div>
                            
                            <div class="text-center basis-[55px] shrink-0 grow-0 self-stretch">
                                <div class="flex flex-col items-center">
                                    <p class="text-xs text-black font-semibold">1 min ago</p>
                                    <div
                                        class="bg-orangeRed text-white text-xs rounded-lg p-1 mt-3 w-7 h-7 flex items-center justify-center">
                                        <span>02</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr class="mt-3 mb-3 text-pigeonBlue">

                        <div class="flex items-center px-3 py-2 rounded-xl space-x-4 hover:bg-white transition cursor-pointer">
                            <div class="basis-[56px] shrink-0 grow-0">
                                <img src="@/assets/user/images/Rectangle_117.png" alt="" class="w-14 h-14 rounded-lg">
                            </div>

                            <div>
                                <h3 class="text-base mb-1 text-black font-bold">Kristin Watson</h3>
                                <p class="text-xs text-darkSlateBlue line-clamp-2">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing
                                    elit, sed do
                                    eiusmod</p>
                            </div>
                            
                            <div class="text-center basis-[55px] shrink-0 grow-0 self-stretch">
                                <div class="flex flex-col items-center">
                                    <p class="text-xs text-black font-semibold">1 min ago</p>
                                    <div
                                        class="bg-orangeRed text-white text-xs rounded-lg p-1 mt-3 w-7 h-7 flex items-center justify-center">
                                        <span>02</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <hr class="mt-3 mb-3 text-pigeonBlue">

                        <div class="flex items-center px-3 py-2 rounded-xl space-x-4 hover:bg-white transition cursor-pointer">
                            <div class="basis-[56px] shrink-0 grow-0">
                                <img src="@/assets/user/images/Rectangle_117.png" alt="" class="w-14 h-14 rounded-lg">
                            </div>

                            <div>
                                <h3 class="text-base mb-1 text-black font-bold">Kristin Watson</h3>
                                <p class="text-xs text-darkSlateBlue line-clamp-2">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing
                                    elit, sed do
                                    eiusmod</p>
                            </div>
                            
                            <div class="text-center basis-[55px] shrink-0 grow-0 self-stretch">
                                <div class="flex flex-col items-center">
                                    <p class="text-xs text-black font-semibold">1 min ago</p>
                                    <div
                                        class="bg-orangeRed text-white text-xs rounded-lg p-1 mt-3 w-7 h-7 flex items-center justify-center">
                                        <span>02</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <hr class="mt-3 mb-3 text-pigeonBlue">

                        <div class="flex items-center px-3 py-2 rounded-xl space-x-4 hover:bg-white transition cursor-pointer">
                            <div class="basis-[56px] shrink-0 grow-0">
                                <img src="@/assets/user/images/Rectangle_117.png" alt="" class="w-14 h-14 rounded-lg">
                            </div>

                            <div>
                                <h3 class="text-base mb-1 text-black font-bold">Kristin Watson</h3>
                                <p class="text-xs text-darkSlateBlue line-clamp-2">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing
                                    elit, sed do
                                    eiusmod</p>
                            </div>
                            
                            <div class="text-center basis-[55px] shrink-0 grow-0 self-stretch">
                                <div class="flex flex-col items-center">
                                    <p class="text-xs text-black font-semibold">1 min ago</p>
                                    <div
                                        class="bg-orangeRed text-white text-xs rounded-lg p-1 mt-3 w-7 h-7 flex items-center justify-center">
                                        <span>02</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="col-span-3 my-6" :style="{ height: contentHeight + 'px' }">
                <div class="rounded-2xl bg-white h-full">
                    <div class="grid grid-rows-[130px_auto_110px] h-full">
                        <div>
                            <div class="px-6 pt-6">
                                <div class="flex items-center space-x-4 border-b border-softGray pb-3">
                                    <div>
                                        <img class=" rounded-2xl w-[80px] h-[80px]" src="@/assets/user/images/Rectangle 193.png"
                                            alt="Neil image">
                                    </div>
                                    <div>
                                        <h4 class="text-black font-bold mb-1">Ronald Richards</h4>
                                        <div class="flex items-center space-x-2 mb-2">
                                            <div class="bg-lightCreamOrange p-1 rounded">
                                                <img src="@/assets/user/images/manage-parent.png" alt="" class=" w-4 h-4">
                                            </div>
                                            <div class="text-xs ml-2 text-vividOrange">Manage by parent</div>
                                        </div>
                                        <div class="flex items-center space-x-2 mb-2">
                                            <p class="text-xs text-limegreen">Online</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="h-full overflow-auto">
                            <div class="px-6">
                                <div class="">
                                    <!-- Left-aligned message -->
                                    <div class="flex justify-start mb-3">
                                        <div class="bg-lighterGray p-3 lg rounded-b-lg rounded-tr-lg max-w-md">
                                            <p class="text-sm text-black">Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div>

                                    <!-- Left-aligned message (Short) -->
                                    <div class="flex justify-start mb-2">
                                        <div class="bg-lighterGray p-3 rounded-b-lg rounded-tr-lg max-w-md">
                                            <p class="text-sm text-black">Lorem ipsum dolor sit amet.</p>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <p class="text-xs text-ceil">4 min ago</p>
                                    </div>

                                    <!-- Right-aligned message -->
                                    <div class="flex justify-end mb-3">
                                        <div class="bg-steelBlue text-white p-3 rounded-b-lg rounded-tl-lg max-w-md">
                                            <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div>

                                    <!-- Right-aligned message (Short) -->
                                    <div class="flex justify-end mb-3">
                                        <div class="bg-steelBlue text-white p-3 rounded-b-lg rounded-tl-lg max-w-md">
                                            <p class="text-sm">Lorem ipsum dolor sit amet.</p>
                                        </div>
                                    </div>

                                    <!-- Right-aligned message (Repeated) -->
                                    <div class="flex justify-end mb-3">
                                        <div class="bg-steelBlue text-white p-3 rounded-b-lg rounded-tl-lg max-w-md">
                                            <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div>

                                    <!-- Left-aligned message -->
                                    <div class="flex justify-start mb-3">
                                        <div class="bg-lighterGray p-3 lg rounded-b-lg rounded-tr-lg max-w-md">
                                            <p class="text-sm text-black">Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div>

                                    <!-- Right-aligned message -->
                                    <div class="flex justify-end">
                                        <div class="bg-steelBlue text-white p-3 rounded-b-lg rounded-tl-lg max-w-md">
                                            <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="px-6 pb-6 pt-4">
                                <div class="border-t border-softGray flex pt-6">
                                    <textarea id="message" rows="1"
                                        class="grow text-darkSlateBlue bg-culturedBlue placeholder-ceil rounded-xl border-0 focus:ring focus:ring-offset-2 focus:ring-steelBlue focus:ring-opacity-50 transition py-2 px-4"
                                        placeholder="Write your thoughts here..."></textarea>
                                    <button class="bg-steelBlue hover:bg-darkAzureBlue transition text-white px-8 py-2 rounded-lg text-sm min-w-24 ml-2">Send</button>
                                </div>
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
  layout: 'chat',
});


const contentHeight = ref(0);
const leftListHeight = ref(0);
const leftHeaderSection = ref(null);

const updateHeight = () => {
  const navbarHeight = document.querySelector('header')?.offsetHeight || 0;
  const leftHeaderHeight = leftHeaderSection.value?.offsetHeight || 0;

  contentHeight.value = window.innerHeight - navbarHeight - 48; // minus 48 to represent the space taken for my-6
  leftListHeight.value = contentHeight.value - leftHeaderHeight;
};

onMounted(() => {
  updateHeight();
  window.addEventListener('resize', updateHeight);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateHeight);
});
</script>