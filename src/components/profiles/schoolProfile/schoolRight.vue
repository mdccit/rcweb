<template>
    <div class="p-2">
        <div class="col-span-5 sm:col-span-1 md:col-span-5 lg:col-span-1 xl:col-span-1">
            <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-blue-500 p-3 text-white">
                <div class="grid grid-cols-2 gap-4">
                    <div class="">
                        <h2 class="text-lg font-semibold mb-4 pl-3">Tennis info</h2>
                    </div>
                    <div class="">
                        <h2 class="text-lg font-semibold mb-4"></h2>
                    </div>
                    <div class="pl-3">
                        <p class="text-lg font-semibold mb-4 text-sm font-thin">Division</p>
                        <p class="text-lg font-semibold mb-4 text-sm font-thin">Conference</p>
                        <p class="text-lg font-semibold mb-4 text-sm font-thin">Average UTR</p>

                    </div>
                    <div class="">
                        <p class="text-lg font-semibold mb-4 text-sm text-normal">{{  props.data.divisionId }}</p>
                        <p class="text-lg font-semibold mb-4 text-sm text-normal">{{ props.data.conferenceId }}</p>
                        <p class="text-lg font-semibold mb-4 text-sm text-normal">Unknown</p>
                    </div>
                </div>
                <p class=" pl-3 text-lg font-semibold mb-4 text-xs font-thin">Score information is provided by
                    the school.</p>
            </div>

            <div class=" card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white p-3 mt-3">
                <div class="flex items-center justify-between">

                    <div class="flex items-center space-x-4 w-48">

                        <h1 class="text-lg font-semibold mb-4 text-black">Status</h1>
                    </div>
                </div>

                <div class="flex">
                    <div class="text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6 text-black ">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>

                    </div>

                    <p class="text-xs text-black leading-relaxed mb-4  ml-2 ">
                        Location
                        <br><span class="text-sm text-darkSlateBlue"> {{ props.data.address }}</span>

                    </p>
                </div>
                <div class="flex">
                    <div class="text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                        </svg>


                    </div>

                    <p class="text-xs text-black leading-relaxed mb-4  ml-2 ">
                        Tuition (In-of-State)
                        <br><span class="text-sm text-darkSlateBlue"> {{ props.data.tuitionInState }} </span>

                    </p>
                </div>
                <div class="flex">
                    <div class="text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                        </svg>


                    </div>

                    <p class="text-xs text-black leading-relaxed mb-4  ml-2 ">
                        Tuition (Out-of-State)
                        <br><span class="text-sm text-darkSlateBlue"> {{ props.data.tuitionOutState }}</span>

                    </p>
                </div>
                <div class="flex">
                    <div class="text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                    <p class="text-xs text-black leading-relaxed mb-4  ml-2 ">
                        Cost of Attendance
                        <br><span class="text-sm text-darkSlateBlue"> {{ props.data.costOfAttendance }}</span>

                    </p>
                </div>
                <div class="flex">
                    <div class="text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                        </svg>

                    </div>
                    <p class="text-xs text-black leading-relaxed mb-4  ml-2 ">
                        Graduation Rate
                        <br><span class="text-sm text-darkSlateBlue">{{ props.data.graduationRate }} %</span>

                    </p>
                </div>

            </div>

        </div>

    </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';

const props = defineProps({

data: {
    type: Object,
    required: true,
},

schoolSlug: {
    type: String,
    required: true,
}
});
</script>

<style scoped>
main {
    padding: 20px;
}

/* Adjust padding or other styles as needed */
</style>