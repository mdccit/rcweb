<template>
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div class="flex w-full justify-between gap-8">
            <div class="flex items-center gap-4"><NuxtLink to="/school/schoolStaff"><svg
                        class="w-6 text-black h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M15 6l-6 6l6 6"></path>
                    </svg></NuxtLink>
                <h2 class="font-bold text-black text-lg self-center"> Editing: SchoolAdm1 </h2>
            </div>
            <div class=""><a
                    href="https://qa1.recruited.qualitapps.com/app/school/9c2845cc-7676-45e1-b498-13f930b22e9b"><button
                        type="submit"
                        class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                        View <svg class="w-5 h-5 -mr-1 inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M17 7l-10 10"></path>
                            <path d="M8 7l9 0l0 9"></path>
                        </svg></button></a></div>
        </div>
    </div>

    <div class="py-12">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div class="container">
                <h1 class="font-bold text-2xl mb-3">Search for a user to add</h1>
                <form data-splade-id="ZRpg9Q6QWm6Ux82X" method="GET"
                    action="https://qa1.recruited.qualitapps.com/admin/schools/9c2845cc-7676-45e1-b498-13f930b22e9b/users/create">
                    <fieldset>
                        <div class="flex items-center">
                            <div class="w-full"><label class="block">
                                    <div class="flex rounded-lg border border-gray-300 shadow-sm"><input
                                            class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                            name="q" type="text" data-validation-key="q"></div>
                                </label><!----></div>
                            <div class="mx-4"></div>
                            <div class=""><button type="submit"
                                    class="border rounded-full shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                                    <div class="flex flex-row items-center justify-center"><!----><span class=""> Search
                                        </span></div>
                                </button></div>
                        </div>
                    </fieldset>
                </form>
                <div class="flex flex-row gap-6 py-6"><a
                        href="https://qa1.recruited.qualitapps.com/app/u/9bc8ab38-f3f9-4068-a9cd-5cdf2860cec9"
                        class="flex flex-row gap-4 flex-1"><img
                            src="https://ui-avatars.com/api/?name=A&amp;color=7F9CF5&amp;background=EBF4FF"
                            alt="User profile picture" class="h-12 w-12 rounded-full">
                        <div class="self-center flex-1"><strong class="capitalize">Admin</strong>
                            <p class="opacity-75 line-clamp-1"></p>
                        </div>
                    </a>
                    <div class="self-center">
                        <form data-splade-id="4pN6bRW8jgnGtFjz" method="POST"
                            action="https://qa1.recruited.qualitapps.com/admin/schools/9c2845cc-7676-45e1-b498-13f930b22e9b/users/store">
                            <fieldset>
                                <div class=""><button type="submit"
                                        class="border rounded-full shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                                        Add to school </button></div>
                            </fieldset>
                        </form>
                    </div>
                </div>
                <div class="flex flex-row gap-6 py-6"><a
                        href="https://qa1.recruited.qualitapps.com/app/u/9c3a4856-d78a-41a0-88f5-a7f5a67adcbc"
                        class="flex flex-row gap-4 flex-1"><img
                            src="https://ui-avatars.com/api/?name=N+T&amp;color=7F9CF5&amp;background=EBF4FF"
                            alt="User profile picture" class="h-12 w-12 rounded-full">
                        <div class="self-center flex-1"><strong class="capitalize">NewUser Test</strong>
                            <p class="opacity-75 line-clamp-1"></p>
                        </div>
                    </a>
                    <div class="self-center">
                        <form data-splade-id="CZHYQePgqSpDXSAp" method="POST"
                            action="https://qa1.recruited.qualitapps.com/admin/schools/9c2845cc-7676-45e1-b498-13f930b22e9b/users/store">
                            <fieldset>
                                <div class=""><button type="submit"
                                        class="border rounded-full shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                                        Add to school </button></div>
                            </fieldset>
                        </form>
                    </div>
                </div>
                <div class="flex flex-row gap-6 py-6">
                </div>
                <div class="p-20"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    ssr: true,
    layout: 'admin',
    middleware: ['permissions'],
    roles: ['admin'],
});


</script>

<style scoped>
</style>