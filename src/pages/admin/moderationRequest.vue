<template>
    <div class="p-5 card">
        <div class="mb-3">
            <h1> <b>Moderation</b> </h1>
        </div>

        <div class="py-12">
            <div class="bg-white border-2 border-primary sm:rounded-lg p-8">

                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="flex flex-col lg:flex-row gap-12">
                        <main class="max-w-[360px] w-full">
                            <div class="flex-1">
                                <div
                                    class="bg-white border-2 border-blue-200 overflow-hidden shadow-sm sm:rounded-lg p-8">
                                    <h1 class="font-bold mb-4 text-lg text-blue-200"><svg class="w-6 h-6 inline mr-2"
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                                            <path d="M16 19h6"></path>
                                            <path d="M19 16v6"></path>
                                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
                                        </svg> User signed up, needs to be approved to show up in searches </h1>
                                    <NuxtLink to="/"><img
                                            src="https://ui-avatars.com/api/?name=e+e&amp;color=7F9CF5&amp;background=EBF4FF"
                                            alt="User profile picture" class="h-12 w-12 rounded-full">
                                        <div class="self-center flex-1"><strong class="capitalize">ee et</strong>
                                            <p class="opacity-75 line-clamp-1">ete@dsfs.com</p>
                                        </div>
                                    </NuxtLink>
                                    <p class="my-4"> Manual user moderation is turned on. You need to approve this user
                                        <strong>for them to show up in searches</strong>. Closing the request ignores
                                        the
                                        user.
                                    </p>
                                    <p class="mt-4"> To turn off auto user moderation, contact Chris / hosting admin.
                                    </p>
                                </div>
                                <div class="my-4"></div>
                                <NuxtLink to="/admin/users/"><button type="submit"
                                        class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200 w-full block">
                                        View user </button></NuxtLink>
                                <div class="my-4"></div>
                                <form data-splade-id="LziEJJXZISMXM7vH" method="POST"
                                    action="https://qa1.recruited.qualitapps.com/admin/moderation/">
                                    <fieldset><button type="submit"
                                            class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-primary-500 hover:bg-primary-400 active:bg-primary-600 text-white border-transparent focus:border-primary-300 focus:ring-primary-200 w-full block">
                                            Approve </button></fieldset>
                                </form>
                            </div>
                            <div class="flex-1 py-8">
                                <h1 class="font-bold mb-4 text-lg">Moderation Request Details</h1>
                                <p class="my-2 text-sm">Reported Item Type: User</p>
                                <p class="my-2 text-sm">Reported Item ID: 9caacfe4-214f-40eb-9289-038c8819bcc7</p>
                                <p>Created By: ee et</p>
                                <h2 class="font-bold uppercase text-xs mt-12 mb-4 opacity-50">Take action</h2>
                                <div class="flex flex-wrap gap-4">
                                    <form data-splade-id="QDn9sLywFBS2AngI" method="POST"
                                        action="https://qa1.recruited.qualitapps.com/admin/moderation/211/close">
                                        <fieldset><input type="hidden" name="_token" autocomplete="off"
                                                value="zfX9IpgKTQoQLj4OnGIfCBdBvRAAZt3CPKps6jHu">
                                            <div class=""><button type="submit"
                                                    class="border rounded-full shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200"><span
                                                        class="text-gray-500"><svg class="w-4 h-4 inline mr-1"
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                                            <path d="M9 12l2 2l4 -4"></path>
                                                        </svg> Close Request / Mark as Done</span></button></div>
                                        </fieldset>
                                    </form>
                                    <form data-splade-id="TEnEwevnCgpzeSvT" method="DELETE"
                                        action="https://qa1.recruited.qualitapps.com/admin/moderation/211">
                                        <fieldset><input type="hidden" name="_token" autocomplete="off"
                                                value="zfX9IpgKTQoQLj4OnGIfCBdBvRAAZt3CPKps6jHu">
                                            <div class=""><button type="submit"
                                                    class="border rounded-full shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200"><span
                                                        class="text-red-500"><svg class="w-4 h-4 inline mr-1"
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                            <path d="M4 7l16 0"></path>
                                                            <path d="M10 11l0 6"></path>
                                                            <path d="M14 11l0 6"></path>
                                                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12">
                                                            </path>
                                                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                                                        </svg> Permanently Delete Request</span></button></div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </main>
                        <aside class="flex-1 ">
                            <div class=" border-2 border-primary bg-white rounded-xl p-12 ">
                                <h2 class="font-bold text-2xl"> Activity Log and Comments </h2>
                                <div class="px-5 py-2.5 my-4 font-bold rounded-lg bg-blue-100">
                                    <p class="text-sm text-blue-800"><svg class="w-4 h-4 inline mr-1"
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path
                                                d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z">
                                            </path>
                                            <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                                            <path d="M8 11v-4a4 4 0 1 1 8 0v4"></path>
                                        </svg> This incident history is only visible to you and comments you leave are
                                        only
                                        visible by admins. </p>
                                </div>
                                <div class="p-20 text-center opacity-50">No comments yet</div>
                            </div>
                            <form data-splade-id="elppjvuCSIsRytOD" method="POST"
                                action="https://qa1.recruited.qualitapps.com/admin/moderation/211/comment">
                                <fieldset class="max-w-xl mx-auto mb-32"><input type="hidden" name="_token"
                                        autocomplete="off" value="zfX9IpgKTQoQLj4OnGIfCBdBvRAAZt3CPKps6jHu">
                                    <div class="mb-4 mt-20"><img
                                            src="https://ui-avatars.com/api/?name=A&amp;color=7F9CF5&amp;background=EBF4FF"
                                            alt="User profile picture" class="h-6 w-6 mr-4 inline-block rounded-full">
                                        Add
                                        note as <strong>Admin</strong> &nbsp; </div>
                                    <div>
                                        <label class="block">
                                            <textarea id="message" rows="4"
                                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Write your thoughts here..."></textarea>

                                        </label><!---->
                                    </div>
                                    <div class="my-8"></div>
                                    <div class="flex justify-end">
                                        <div class="">
                                            <button type="submit"
                                                class="border 
                                             rounded-full shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-steelBlueLight79 hover:bg-primary-700 text-white border-transparent focus:border-primary-300 focus:ring-primary-200">
                                                <div class="flex flex-row items-center justify-center"><!----><span
                                                        class=""> Create comment </span></div>
                                            </button>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </aside>
                    </div>
                </div>

            </div>

        </div>

    </div>
</template>

<script setup>
import { useUserStore } from '~/stores/userStore';
import EPDataTable from '~/components/EPDataTable.vue';

const userStore = useUserStore()

const email = userStore.user?.email
const token = userStore.user?.token
</script>

<style scoped>
h1 {
    color: #333;
}

p {
    font-size: 16px;
}
</style>