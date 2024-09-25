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
                                    <p class="text-xs text-black">1 min ago</p>
                                    <div
                                        class="bg-orangeRed text-white text-xs rounded-lg p-1 mt-3 w-7 h-7 flex items-center justify-center">
                                        <span>02</span>
                                    </div>
                                </div>
                            </div>
                        </div>

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
                                    <p class="text-xs text-black">1 min ago</p>
                                    <div
                                        class="bg-orangeRed text-white text-xs rounded-lg p-1 mt-3 w-7 h-7 flex items-center justify-center">
                                        <span>02</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
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
                                    <p class="text-xs text-black">1 min ago</p>
                                    <div
                                        class="bg-orangeRed text-white text-xs rounded-lg p-1 mt-3 w-7 h-7 flex items-center justify-center">
                                        <span>02</span>
                                    </div>
                                </div>
                            </div>
                        </div>

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
                                    <p class="text-xs text-black">1 min ago</p>
                                    <div
                                        class="bg-orangeRed text-white text-xs rounded-lg p-1 mt-3 w-7 h-7 flex items-center justify-center">
                                        <span>02</span>
                                    </div>
                                </div>
                            </div>
                        </div>

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
                                    <p class="text-xs text-black">1 min ago</p>
                                    <div
                                        class="bg-orangeRed text-white text-xs rounded-lg p-1 mt-3 w-7 h-7 flex items-center justify-center">
                                        <span>02</span>
                                    </div>
                                </div>
                            </div>
                        </div>

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
                                    <p class="text-xs text-black">1 min ago</p>
                                    <div
                                        class="bg-orangeRed text-white text-xs rounded-lg p-1 mt-3 w-7 h-7 flex items-center justify-center">
                                        <span>02</span>
                                    </div>
                                </div>
                            </div>
                        </div>

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
                                    <p class="text-xs text-black">1 min ago</p>
                                    <div
                                        class="bg-orangeRed text-white text-xs rounded-lg p-1 mt-3 w-7 h-7 flex items-center justify-center">
                                        <span>02</span>
                                    </div>
                                </div>
                            </div>
                        </div>

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
                                    <p class="text-xs text-black">1 min ago</p>
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

            <div class="col-span-3 my-6">
                <div class="rounded-2xl bg-white p-6">
                    ssss
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