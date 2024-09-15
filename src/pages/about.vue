<template>
    <div id="maincontent" class="">
        <div class="relative p-8 mt-8 mx-auto my-auto">
            <main class="flex flex-col lg:flex-row gap-12">
                <div class="flex-1 text-black">
                    <div class="font-bold tracking-wider mb-2 opacity-50 text-lg uppercase">{{ $t('about.title') }}
                    </div>
                    <h1 class="text-5xl text-black md:text-6xl font-bold">{{ $t('about.subheading') }}
                    </h1>
                    <p class="my-10 text-md">{{ $t('about.recruited_was_founded') }} </p>
                    <div>
                        <p class="text-xl"><strong>{{ $t('about.follow') }} @recruited.pro</strong></p>
                        <div class="mt-8 -mx-4"><a href="https://www.linkedin.com/company/102105929" class="p-3"><svg
                                    class="w-8 h-8 inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path
                                        d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z">
                                    </path>
                                    <path d="M8 11l0 5"></path>
                                    <path d="M8 8l0 .01"></path>
                                    <path d="M12 16l0 -5"></path>
                                    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                                </svg><span class="sr-only">linkedin</span></a><a href="https://x.com/recruitedpro"
                                class="p-3"><svg class="w-8 h-8 inline" xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                </svg><span class="sr-only">x</span></a><a href="https://instagram.com/recruited.pro"
                                class="p-3"><svg class="w-8 h-8 inline" xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path
                                        d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z">
                                    </path>
                                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                    <path d="M16.5 7.5l0 .01"></path>
                                </svg><span class="sr-only">instagram</span></a><a
                                href="https://tiktok.com/recruited.pro" class="p-3"><svg class="w-8 h-8 inline"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path
                                        d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z">
                                    </path>
                                </svg><span class="sr-only">Tiktok</span></a>
                            <a href="https://www.facebook.com/profile.php?id=61556921734903" class="p-3"><svg
                                    class="w-8 h-8 inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3">
                                    </path>
                                </svg><span class="sr-only">Facebook</span></a>
                        </div>
                    </div>
                </div>
                <div class="flex-1"><img src="@/assets/images/banner4.png" alt="Tennis court" class="w-full h-auto">
                </div>
            </main>
            <section class="container mt-8 pb-16" id="team">
                <div class="container text-black">
                    <h2 class="text-4xl font-bold mt-20 mb-8 text-center"> {{ $t('about.our_team') }}</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="border border-border rounded-lg px-8 py-12 text-center"><img
                                src="@/assets/images/ivan.png" alt="Profile picture"
                                class=" h-32 rounded-full w-16 w-32 h-16 h-32 mx-auto mb-6">
                            <h3 class="text-xl font-bold mb-1">Ivan Yatsuk</h3>
                            <p class="text-gray-600 mb-8">Co-Founder CEO</p>
                            <p>{{ $t('about.early_from_Minsk') }}
                            </p>
                        </div>
                        <div class="border border-border rounded-lg px-8 py-12 text-center"><img
                                src="@/assets/images/tony.png" alt="Profile picture"
                                class=" h-32 rounded-full w-16 w-32 h-16 h-32 mx-auto mb-6">
                            <h3 class="text-xl font-bold mb-1">Antonio Muniz-Hidalgo</h3>
                            <p class="text-gray-600 mb-8">Co-Founder &amp; CFO</p>
                            <p> {{ $t('about.originally_from_barcelona') }}</p>
                        </div>
                        <div class="border border-border rounded-lg px-8 py-12 text-center"><img
                                src="@/assets/images/bruno.png" alt="Profile picture"
                                class="h-32 rounded-full w-16 w-32 h-16 h-32 mx-auto mb-6">
                            <h3 class="text-xl font-bold mb-1">Bruno Oliveira</h3>
                            <p class="text-gray-600 mb-8">CCO</p>
                            <p>{{ $t('about.born_in_Belo') }}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section container my-16 max-w-4xl  flex flex-col lg:flex-row gap-20 text-black">
                <div>
                    <h2 class="text-4xl font-bold mb-8">{{ $t('about.our_mission') }}</h2>
                    <p class="text-xl max-w-xl">{{ $t('about.at_our_core') }} </p>
                    <p class="mt-4"> {{ $t('about.we_are_unwavering') }} </p>
                    <p class="mt-4"> {{ $t('about.with_a_deep_rooted') }} </p>
                </div>
                <div id="contacts">
                    <h2 class="text-4xl font-bold mb-8">{{ $t('contacts') }}</h2>
                    <p class="mt-8"><strong>{{ $t('about.need_customer_support') }} </strong><br><a
                            href="mailto:hello@recruited.pro?subject=Help request body=Hi, I am having trouble with this ... I am using this device (phone/tablet/desktop/laptop) ... I can't do this ..."
                            class="text-blue-500 font-bold">hello@recruited.pro</a></p>
                    <p class="mt-8"><strong>{{ $t('about.see_something_wrong') }}</strong><br><a
                            href="mailto:legal@recruited.pro?subject=Legal request body=Hi, I am having trouble with this ... I am using this device (phone/tablet/desktop/laptop) ... I can't do this ..."
                            class="text-blue-500  font-bold">legal@recruited.pro</a></p>
                    <p class="mt-8"><strong>{{ $t('about.business_address') }}Business Address</strong><br> Recruited
                        Sports Inc.<br> 455 Palm Tree
                        Drive<br> Bradenton,<br> Florida<br> US, 34210<br></p>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
</style>