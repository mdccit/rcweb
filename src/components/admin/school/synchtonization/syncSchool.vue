<template>
   <div v-if="connectShow" class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8"> This school has been matched up to a
        government school. You can now synchronize the data from their source.<br><br> Gov ID:
        <strong>{{ props.govId }}</strong><br><br><br> Wish to disconnect? <form data-splade-id="NXOBIVwqZ9sKqRVD"
            method="POST"
            action="https://qa1.recruited.qualitapps.com/admin/schools/9bcd594d-b596-4409-93c0-14cb4dffecc6/sync/disconnect">
            <fieldset><input type="hidden" name="_token" autocomplete="off"
                value="SMCjyTHMYbxsRFsCUr0LzVyPfyxtnWNPTwNnlr09">
                <div class=""><button type="button" @click="fetchSyncDisconnect"
                    class="border rounded-full shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 text-red-500">
                    Disconnect </button></div>
            </fieldset>
           </form>
           <br><br><br> This school was <a
            href="https://qa1.recruited.qualitapps.com/admin/schools/9bcd594d-b596-4409-93c0-14cb4dffecc6/sync/604">
            last synchronized 4 months ago</a>. <form data-splade-id="LBk0rcxjTOwaQQ9e" method="POST"
            action="https://qa1.recruited.qualitapps.com/admin/schools/9bcd594d-b596-4409-93c0-14cb4dffecc6/sync/sync">
            <fieldset><input type="hidden" name="_token" autocomplete="off"
                value="SMCjyTHMYbxsRFsCUr0LzVyPfyxtnWNPTwNnlr09">
                <div class=""><button type="button" @click="fetchSync"
                    class="border rounded-full shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-blue-500 hover:bg-blue-700 text-white border-transparent focus:border-primary-300 focus:ring-primary-200">
                    Synchronize now </button></div>
            </fieldset>
        </form>
    </div>
    <div class="my-8"></div>
    <div  v-if="connectShow" class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
        <h2 class="text-2xl font-bold">Settings</h2>
        <div class="my-4"></div>
        <h3 class="text-xl font-bold">Data to synchronize</h3>
        <div class="my-4"></div>
        
            <fieldset>
                <div class="grid grid-cols-4 gap-4">
                    <div v-for="setting in settings"><label class="flex items-center"><input name="setting.name" @change="changeSetting(setting)"
                        type="checkbox" 
                        class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"
                        :value="setting.value"   :true-value="true"
                        :false-value="false"><span
                        class="ml-4">{{ setting.label }}</span></label></div>
                   
                </div>
                <div class="my-4"></div>
                <div class=""><button type="button" @click="settingUpdate"
                    class="border rounded-full shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-blue-500 hover:bg-blue-700 text-white border-transparent focus:border-primary-300 focus:ring-primary-200">
                     Save settings </button></div>
            </fieldset>
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
                <div v-for=" history in history" class="flex gap-4 border-b-2 px-2 py-4">
                    <div class="w-1/4">
                        <p>{{ history.created_at }}</p>
                    </div>
                    <div class="w-1/4">
                        <p>{{  history.status }}</p>
                    </div>
                    <div class="w-1/4">
                        <p>{{ history.created_by }}</p>
                    </div>
                    <div class="w-1/4">
                        <p><button type="button" @click="viewDetails(history)">
                            View details</button></p>
                    </div>
                </div>
              
            </div>
        </div>
        <SchoolSynchronizationModal  :isVisible="showModal"  @close="showModal = false" :data="details"  />
</template>

<script setup>
import { ref, computed, watch , onMounted , defineEmits} from 'vue';
import { useNuxtApp } from '#app';
import SchoolSynchronizationModal from '~/components/admin/school/synchtonization/schoolSynchronizationModal.vue';

// Access authService from the context
const nuxtApp = useNuxtApp();
const $adminService = nuxtApp.$adminService;

const showModal = ref(false)
const disConeected =ref(false)
const history = ref([])
const details = ref({});
const settings = ref([]);
const connectShow = ref(true)
const props = defineProps({
    govId:String,
    schoolId:String
 
});
const emit = defineEmits(['emitMessage','disconnect']);

onMounted(() => {
   fetchHistory(props.schoolId);
   fetChSettings(props.schoolId)
});


const fetchHistory = async (schoolId) => {
    try {
        const data = await $adminService.school_sync_history(schoolId);
         history.value = data
         console.log(data)

    } catch (error) {
        console.error('Failed to load user details:', error.message);
        errors.value.push('Failed to load user details.');
    }
};

const fetChSettings = async (schoolId) => {
    try {
        const data = await $adminService.school_sync_settings(schoolId);
         console.log(data.data)
         settings.value = data.data
    } catch (error) {
        console.error('Failed to load user details:', error.message);
        errors.value.push('Failed to load user details.');
    }
};

const fetchSync = async () => {
    try {
        const data = await $adminService.school_sync(props.schoolId);
        emit('emitMessage',data.display_message)
        fetchHistory(props.schoolId);
    } catch (error) {
        console.error('Failed to load user details:', error.message);
        errors.value.push('Failed to load user details.');
    }
};

const fetchSyncDisconnect = async () => {
    try {
        const data = await $adminService.school_sync_disconnect(props.schoolId);
        emit('emitMessage',data.display_message)
        fetchHistory(props.schoolId);
        disConeected.value =true
        connectShow.value = false
        emit('disconnect')
    } catch (error) {
        console.error('Failed to load user details:', error.message);
        errors.value.push('Failed to load user details.');
    }
};

const viewDetails = (data) =>{
    details.value =data
    showModal.value = true
}

const settingUpdate = async()=>{
    try {
        const data = await $adminService.school_sync_settings_update(props.schoolId,{
            gov_sync_settings: settings.value,
        });
        emit('emitMessage',data.display_message)
        fetChSettings(props.schoolId)
    } catch (error) {
        console.error('Failed to load user details:', error.message);
        errors.value.push('Failed to load user details.');
    }
}

const changeSetting = (setting) =>{
    setting.value = !setting.value
}
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