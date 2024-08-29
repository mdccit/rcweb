<template>
   <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8"> This school has been matched up to a
        government school. You can now synchronize the data from their source.<br><br> Gov ID:
        <strong>152381</strong><br><br><br> Wish to disconnect? <form data-splade-id="NXOBIVwqZ9sKqRVD"
            method="POST"
            action="https://qa1.recruited.qualitapps.com/admin/schools/9bcd594d-b596-4409-93c0-14cb4dffecc6/sync/disconnect">
            <fieldset><input type="hidden" name="_token" autocomplete="off"
                value="SMCjyTHMYbxsRFsCUr0LzVyPfyxtnWNPTwNnlr09">
                <div class=""><button type="submit"
                    class="border rounded-full shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 text-red-500">
                    Disconnect </button></div>
            </fieldset>
           </form><br><br><br> This school was <a
            href="https://qa1.recruited.qualitapps.com/admin/schools/9bcd594d-b596-4409-93c0-14cb4dffecc6/sync/604">
            last synchronized 4 months ago</a>. <form data-splade-id="LBk0rcxjTOwaQQ9e" method="POST"
            action="https://qa1.recruited.qualitapps.com/admin/schools/9bcd594d-b596-4409-93c0-14cb4dffecc6/sync/sync">
            <fieldset><input type="hidden" name="_token" autocomplete="off"
                value="SMCjyTHMYbxsRFsCUr0LzVyPfyxtnWNPTwNnlr09">
                <div class=""><button type="submit"
                    class="border rounded-full shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-blue-500 hover:bg-blue-700 text-white border-transparent focus:border-primary-300 focus:ring-primary-200">
                    Synchronize now </button></div>
            </fieldset>
        </form>
    </div>
    <div class="my-8"></div>
    <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
        <h2 class="text-2xl font-bold">Settings</h2>
        <div class="my-4"></div>
        <h3 class="text-xl font-bold">Data to synchronize</h3>
        <div class="my-4"></div>
        <form data-splade-id="L8nybHvgriaatHCQ" method="PUT"
            action="https://qa1.recruited.qualitapps.com/admin/schools/9bcd594d-b596-4409-93c0-14cb4dffecc6/sync/update-settings">
            <fieldset>
                <div class="grid grid-cols-4 gap-4">
                    <div><label class="flex items-center"><input name="gov_sync_settings[name]"
                        type="checkbox" data-validation-key="gov_sync_settings[name]"
                        class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                        true-value="true" false-value="false" value="value"><span
                        class="ml-4">Name</span></label><!----></div>
                    <div><label class="flex items-center"><input name="gov_sync_settings[url]"
                        type="checkbox" data-validation-key="gov_sync_settings[url]"
                        class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                        true-value="true" false-value="false" value="value"><span
                        class="ml-4">Url</span></label><!----></div>
                    <div><label class="flex items-center"><input name="gov_sync_settings[tuition_in_state]"
                        type="checkbox" data-validation-key="gov_sync_settings[tuition_in_state]"
                        class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                        true-value="true" false-value="false" value="value"><span
                        class="ml-4">Tuition in state</span></label><!----></div>
                    <div><label class="flex items-center"><input name="gov_sync_settings[tuition_out_state]"
                        type="checkbox" data-validation-key="gov_sync_settings[tuition_out_state]"
                        class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                        true-value="true" false-value="false" value="value"><span
                        class="ml-4">Tuition out state</span></label><!----></div>
                    <div><label class="flex items-center"><input
                        name="gov_sync_settings[cost_of_attendance]" type="checkbox"
                        data-validation-key="gov_sync_settings[cost_of_attendance]"
                        class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                        true-value="true" false-value="false" value="value"><span class="ml-4">Cost
                        of attendance</span></label><!----></div>
                    <div><label class="flex items-center"><input name="gov_sync_settings[degrees_offered]"
                        type="checkbox" data-validation-key="gov_sync_settings[degrees_offered]"
                        class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                        true-value="true" false-value="false" value="value"><span
                        class="ml-4">Degrees offered</span></label><!----></div>
                    <div><label class="flex items-center"><input name="gov_sync_settings[address]"
                        type="checkbox" data-validation-key="gov_sync_settings[address]"
                        class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                        true-value="true" false-value="false" value="value"><span
                        class="ml-4">Address</span></label><!----></div>
                    <div><label class="flex items-center"><input name="gov_sync_settings[city]"
                        type="checkbox" data-validation-key="gov_sync_settings[city]"
                        class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                        true-value="true" false-value="false" value="value"><span
                        class="ml-4">City</span></label><!----></div>
                    <div><label class="flex items-center"><input name="gov_sync_settings[state]"
                        type="checkbox" data-validation-key="gov_sync_settings[state]"
                        class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                        true-value="true" false-value="false" value="value"><span
                        class="ml-4">State</span></label><!----></div>
                    <div><label class="flex items-center"><input name="gov_sync_settings[zip]"
                       type="checkbox" data-validation-key="gov_sync_settings[zip]"
                        class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                        true-value="true" false-value="false" value="value"><span
                         class="ml-4">Zip</span></label><!----></div>
                    <div><label class="flex items-center"><input name="gov_sync_settings[coords_lat]"
                        type="checkbox" data-validation-key="gov_sync_settings[coords_lat]"
                        class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                        true-value="true" false-value="false" value="value"><span
                        class="ml-4">Coords lat</span></label><!----></div>
                    <div><label class="flex items-center"><input name="gov_sync_settings[coords_lng]"
                        type="checkbox" data-validation-key="gov_sync_settings[coords_lng]"
                        class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                        true-value="true" false-value="false" value="value"><span
                        class="ml-4">Coords lng</span></label><!----></div>
                    <div><label class="flex items-center"><input name="gov_sync_settings[acceptance_rate]"
                        type="checkbox" data-validation-key="gov_sync_settings[acceptance_rate]"
                        class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                        true-value="true" false-value="false" value="value"><span
                        class="ml-4">Acceptance rate</span></label><!----></div>
                    <div><label class="flex items-center"><input name="gov_sync_settings[graduation_rate]"
                        type="checkbox" data-validation-key="gov_sync_settings[graduation_rate]"
                        class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                        true-value="true" false-value="false" value="value"><span
                        class="ml-4">Graduation rate</span></label><!----></div>
                    <div><label class="flex items-center"><input name="gov_sync_settings[student_count]"
                        type="checkbox" data-validation-key="gov_sync_settings[student_count]"
                        class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                        true-value="true" false-value="false" value="value"><span
                        class="ml-4">Student count</span></label><!----></div>
                    <div><label class="flex items-center"><input
                        name="gov_sync_settings[earnings_1_year_after_graduation]" type="checkbox"
                        data-validation-key="gov_sync_settings[earnings_1_year_after_graduation]"
                        class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                        true-value="true" false-value="false" value="value"><span
                        class="ml-4">Earnings 1 year after graduation</span></label><!----></div>
                    <div><label class="flex items-center"><input
                        name="gov_sync_settings[earnings_3_years_after_graduation]" type="checkbox"
                        data-validation-key="gov_sync_settings[earnings_3_years_after_graduation]"
                        class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                        true-value="true" false-value="false" value="value"><span
                        class="ml-4">Earnings 3 years after graduation</span></label><!----></div>
                    <div><label class="flex items-center"><input
                        name="gov_sync_settings[student_to_faculty_ratio]" type="checkbox"
                        data-validation-key="gov_sync_settings[student_to_faculty_ratio]"
                        class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                        true-value="true" false-value="false" value="value"><span
                        class="ml-4">Student to faculty ratio</span></label><!----></div>
                    <div><label class="flex items-center"><input
                        name="gov_sync_settings[percentage_of_international_students]"
                        type="checkbox"
                        data-validation-key="gov_sync_settings[percentage_of_international_students]"
                        class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                        true-value="true" false-value="false" value="value"><span
                        class="ml-4">Percentage of international students</span></label><!---->
                    </div>
                </div>
                <div class="my-4"></div>
                <div class=""><button type="submit"
                    class="border rounded-full shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-blue-500 hover:bg-blue-700 text-white border-transparent focus:border-primary-300 focus:ring-primary-200">
                     Save settings </button></div>
            </fieldset>
        </form>
    </div>
    <div class="my-8"></div>
    <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
        <h2 class="text-2xl font-bold">Synchronization History</h2>
        <div class="my-4"></div>
            <div class="flex flex-col">
                <div class="flex gap-4 px-2 py-4 bg-gray-400/50">
                    <div class="w-1/4">
                        <p>Date</p>
                    </div>
                    <div class="w-1/4">
                        <p>Status</p>
                    </div>
                    <div class="w-1/4">
                        <p>Triggered by</p>
                    </div>
                    <div class="w-1/4">
                        <p>Details</p>
                    </div>
                </div>
                <div class="flex gap-4 border-b-2 px-2 py-4">
                    <div class="w-1/4">
                        <p>4 months ago</p>
                    </div>
                    <div class="w-1/4">
                        <p>success</p>
                    </div>
                    <div class="w-1/4">
                        <p><a
                            href="https://qa1.recruited.qualitapps.com/admin/users/9bc8ab38-f3f9-4068-a9cd-5cdf2860cec9">
                            Admin </a></p>
                    </div>
                    <div class="w-1/4">
                        <p><a
                            href="https://qa1.recruited.qualitapps.com/admin/schools/9bcd594d-b596-4409-93c0-14cb4dffecc6/sync/604">
                            View details </a></p>
                    </div>
                </div>
                <div class="flex gap-4 border-b-2 px-2 py-4 bg-gray-400/50">
                    <div class="w-1/4">
                        <p>4 months ago</p>
                    </div>
                    <div class="w-1/4">
                        <p>success</p>
                    </div>
                    <div class="w-1/4">
                        <p><a
                            href="https://qa1.recruited.qualitapps.com/admin/users/9bc8ab38-f3f9-4068-a9cd-5cdf2860cec9">
                            Admin </a></p>
                    </div>
                    <div class="w-1/4">
                        <p><a
                            href="https://qa1.recruited.qualitapps.com/admin/schools/9bcd594d-b596-4409-93c0-14cb4dffecc6/sync/368">
                            View details </a></p>
                    </div>
                </div>
            </div>
        </div>
</template>

<script setup>
import { ref, computed, watch , onMounted } from 'vue';
import { useNuxtApp } from '#app';

</script>

<style scoped>
.error-messages {
    margin-top: 20px;
    color: red;
}

.error-title {
    font-weight: bold;
}

.error-list {
    list-style-type: disc;
    /* Ensure bullet points are shown */
    margin-left: 20px;
    /* Indent the list */
}

.error-item {
    margin-bottom: 5px;
}
</style>