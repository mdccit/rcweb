<template>
    <header class="bg-gray-200">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div class="flex w-full justify-between gap-8">
                <div class="flex items-center gap-4">
                    <NuxtLink to="/admin/resources">
                        <svg class="w-6 text-black h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M15 6l-6 6l6 6"></path>
                        </svg>
                    </NuxtLink>
                    <h2 class="font-bold text-black text-lg self-center">Edit: </h2>
                </div>
                <div>

                </div>
            </div>
        </div>
    </header>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                <form data-splade-id="0h4WlyJKRO2Ce0yG" method="PUT"
                    action="https://qa1.recruited.qualitapps.com/admin/resources/categories/13">
                    <fieldset>
                        <div class="w-full"><label class="block"><span class="block mb-1 text-gray-700 font-sans"> Title
                                </span>
                                <div class="flex rounded-lg border border-gray-300 shadow-sm"><input
                                        class="block px-5 py-3 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                        name="title" type="text" data-validation-key="title"></div>
                            </label><!----></div>
                        <div class="my-8"></div>
                        <div class="w-full"><label class="block"><span class="block mb-1 text-gray-700 font-sans"> Emoji
                                </span>
                                <div class="flex rounded-lg border border-gray-300 shadow-sm"><input
                                        class="block px-5 py-3 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                        name="emoji" type="text" data-validation-key="emoji"></div>
                            </label><!----></div>
                        <div class="my-8"></div>
                        <div class="w-full"><label class="block"><span class="block mb-1 text-gray-700 font-sans">
                                    Description </span><textarea name="description" data-validation-key="description"
                                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:opacity-50"></textarea></label><!---->
                        </div>
                        <div class="my-8"></div><button type="submit"
                            class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-steelBlue hover:bg-blue-600 active:bg-blue-600 text-white border-transparent focus:border-blue-300 focus:ring-blue-200">
                            <div class="flex flex-row items-center justify-center"><!----><span class=""> Save changes
                                </span></div>
                        </button>
                        <div class="my-8"></div>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import AdminResourcesTable from '~/components/tables/AdminResourcesTable.vue';


definePageMeta({
    ssr: false,
    layout: 'admin',
    middleware: ['role'],
    requiredRole: ['admin'],
});

</script>
<style scoped></style>
