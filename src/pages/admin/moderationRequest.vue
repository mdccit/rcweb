<template>
   <div class="p-5 card">
      <div class="mb-3">
         <h1> <b>Moderation</b> </h1>
      </div>
      <div class="py-12">
         <div class="bg-white border-2 border-primary sm:rounded-lg p-8">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
               <div class="flex flex-col lg:flex-row gap-12 text-black">
                  <main class="max-w-[360px] w-full">
                     <div class="flex-1">
                        <div class="bg-white border border-blue-500 overflow-hidden shadow-sm sm:rounded-lg p-8">
                           <h1 class="font-bold mb-4 text-lg text-blue-500">
                              <svg class="w-6 h-6 inline mr-2"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                 stroke-linejoin="round">
                                 <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                                 <path d="M16 19h6"></path>
                                 <path d="M19 16v6"></path>
                                 <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
                              </svg>
                              User signed up, needs to be approved to show up in searches 
                           </h1>
                           <NuxtLink to="/admin/users/9caacfe4-214f-40eb-9289-038c8819bcc7">
                              <NuxtLink to="/app/u/9caacfe4-214f-40eb-9289-038c8819bcc7"
                                 class="flex flex-row gap-4 flex-1">
                                 <img src="https://ui-avatars.com/api/?name=userName&amp;color=7F9CF5&amp;background=EBF4FF"
                                    alt="User profile picture" class="h-12 w-12 rounded-full">
                                 <div class="self-center flex-1">
                                    <strong class="capitalize">{{ userName }}</strong>
                                    <p class="opacity-75 line-clamp-1 break-words break-all">{{ userEmail }}</p>
                                 </div>
                              </NuxtLink>
                           </NuxtLink>
                           <p class="my-4"> Manual user moderation is turned on. You need to approve this user
                              <strong>for them to show up in searches</strong>. Closing the request ignores the
                              user.
                           </p>
                           <p class="mt-4"> To turn off auto user moderation, contact Chris / hosting admin. </p>
                        </div>
                        <div class="my-4"></div>
                        <button @click="viewDetails"
                           type="submit"
                           class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200 w-full block">
                        View user </button>
                        <div class="my-4"></div>
                        <fieldset><button v-if="isApprove ==false" type="submit" @click="morderationApprove"
                           class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-blue-500 hover:bg-blue-700 active:bg-primary-600 text-white border-transparent focus:border-primary-300 focus:ring-primary-200 w-full block">
                           Approve </button>
                        </fieldset>
                        <fieldset><button v-if="isApprove ==true" type="submit"
                           class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-blue-500 hover:bg-blue-700 active:bg-primary-600 text-white border-transparent focus:border-primary-300 focus:ring-primary-200 w-full block">
                           The join request has been handled. </button>
                        </fieldset>
                     </div>
                     <div class="flex-1 py-8">
                        <h1 class="font-bold mb-4 text-lg">Moderation Request Details</h1>
                        <p class="my-2 text-sm">Reported Item Type: User</p>
                        <p class="my-2 text-sm">Reported Item ID: {{ morderationId }}</p>
                        <p>Created By:{{ createdBy }}</p>
                        <h2 class="font-bold uppercase text-xs mt-12 mb-4 opacity-50">Take action</h2>
                        <div class="flex flex-wrap gap-4">
                           <fieldset>
                              <input type="hidden" name="_token" autocomplete="off"
                                 value="zfX9IpgKTQoQLj4OnGIfCBdBvRAAZt3CPKps6jHu">
                              <div class="">
                                 <button type="button" @click="closeOrReopen"
                                    class="border rounded-full shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                                    <span
                                       class="text-gray-500">
                                       <svg class="w-4 h-4 inline mr-1"
                                          xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                          viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                          fill="none" stroke-linecap="round" stroke-linejoin="round">
                                          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                          <path d="M9 12l2 2l4 -4"></path>
                                       </svg>
                                       {{closeBy != null ? "Re-open Request":"Close Request / Mark as Done"}}
                                    </span>
                                 </button>
                              </div>
                           </fieldset>
                           <fieldset>
                              <input type="hidden" name="_token" autocomplete="off"
                                 value="zfX9IpgKTQoQLj4OnGIfCBdBvRAAZt3CPKps6jHu">
                              <div class="">
                                 <button type="button" @click="deleted"
                                    class="border rounded-full shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                                    <span
                                       class="text-red-500">
                                       <svg class="w-4 h-4 inline mr-1"
                                          xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                          viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                          fill="none" stroke-linecap="round" stroke-linejoin="round">
                                          <path d="M4 7l16 0"></path>
                                          <path d="M10 11l0 6"></path>
                                          <path d="M14 11l0 6"></path>
                                          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                                       </svg>
                                       Permanently Delete Request
                                    </span>
                                 </button>
                              </div>
                           </fieldset>
                        </div>
                     </div>
                  </main>
                  <aside class="flex-1 ">
                     <div class=" border-2 border-gray-200 bg-white rounded-xl p-12 text-black w-full">
                        <h2 class="font-bold text-2xl"> Activity Log and Comments </h2>
                        <div class="px-5 py-2.5 my-4 font-bold rounded-lg bg-blue-100">
                           <p class="text-sm text-blue-800">
                              <svg class="w-4 h-4 inline mr-1"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                 stroke-linejoin="round">
                                 <path
                                    d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z">
                                 </path>
                                 <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                                 <path d="M8 11v-4a4 4 0 1 1 8 0v4"></path>
                              </svg>
                              This incident history is only visible to you and comments you leave are only
                              visible by admins. 
                           </p>
                        </div>
                        <div v-for="comment in commentList" class="p-6 rounded-lg border bg-white border-border shadow-sm mt-4">
                           <div class="flex flex-row gap-2">
                              <img src="https://ui-avatars.com/api/?name=A&color=7F9CF5&background=EBF4FF" alt="User profile picture"
                                 class="h-8 w-8 mr-4 inline-block rounded-full">
                              <div class="flex-1"> <b>{{  comment.first_name }}</b>
                                 <span class="opacity-50 hidden md:inline-block text-xs ml-2"> 
                                 {{ moment().from(comment.created_at) }}
                                 </span>
                              </div>
                           </div>
                           <div class="markdown ml-14">
                              <p class=" break-words break-all">{{ comment.comment }}</p>
                           </div>
                        </div>
                        <div v-if="commentList.length === 0" class="p-20 text-center opacity-50">No comments yet</div>
                        <div v-for="moderationLog in moderationLog" class="p-2  bg-white mt-3">
                           <div class="flex flex-row gap-2">
                              <img src="https://ui-avatars.com/api/?name=A&color=7F9CF5&background=EBF4FF" alt="User profile picture"
                                 class="h-8 w-8 mr-4 inline-block rounded-full">
                              <div class="flex-1"> <b>{{  moderationLog.first_name }}</b> {{ moderationLog.status }} this 
                                 <span class="opacity-50 hidden md:inline-block text-xs ml-2"> 
                                 {{ moment().from(moderationLog.created_at) }}
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <fieldset v-if="closeBy === null" class="max-w-xl mx-auto mb-32">
                        <input type="hidden" name="_token"
                           autocomplete="off" value="zfX9IpgKTQoQLj4OnGIfCBdBvRAAZt3CPKps6jHu">
                        <div class="mb-4 mt-20"><img
                           src="https://ui-avatars.com/api/?name=A&amp;color=7F9CF5&amp;background=EBF4FF"
                           alt="User profile picture" class="h-6 w-6 mr-4 inline-block rounded-full"> Add
                           note as <strong>Admin</strong> &nbsp; 
                        </div>
                        <div>
                           <label class="block">
                           <textarea id="message" rows="4" v-model="comment"
                              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Write your thoughts here..."></textarea>
                           </label><!---->
                        </div>
                        <div class="my-8"></div>
                        <div class="flex justify-end">
                           <div class="">
                              <button type="button" @click="comments"
                                 class="border 
                                 rounded-full shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-blue-500 hover:bg-blue-700 text-white border-transparent focus:border-primary-300 focus:ring-primary-200">
                                 <div class="flex flex-row items-center justify-center">
                                    <!----><span
                                       class=""> Create comment </span>
                                 </div>
                              </button>
                           </div>
                        </div>
                     </fieldset>
                     <div v-if="closeBy != null" class="p-20 text-center opacity-50">This request is closed, so you can no longer leave comments.</div>
                  </aside>
               </div>
            </div>
         </div>
      </div>
   <!-- Admin Moderation delete Modal Component -->
   <AdminModerationDeleteModal :isVisible="showModal" @close="showModal = false" :moderationId="moderationStore.moderation_id" @deleted="isDeleted"  />
   </div>
</template>

<script setup>
import { useUserStore } from '~/stores/userStore';
import { ref, watch, computed, onMounted } from 'vue';
import { useNuxtApp } from '#app';
import moment from 'moment';
import AdminModerationDeleteModal from '~/components/admin/moderation/adminModerationDeleteModal.vue';
import { useModerationStore } from '~/stores/moderation';
const moderationStore = useModerationStore();

definePageMeta({
    ssr: 'true',
    layout: 'admin',
    middleware: ['permissions'],
    roles: ['admin'],
    colorMode: 'light'
});
const route = useRoute()

const nuxtApp = useNuxtApp();
const $adminService = nuxtApp.$adminService;

const userStore = useUserStore()
const router = useRouter();
const email = userStore.user?.email
const token = userStore.user?.token
const createdBy = ref("")
const userName = ref("")
const userEmail = ref("")
const closeBy =ref(null)
const comment =ref('')
const commentList = ref([])
const display_name = ref('');
const userId =ref('');
const isApprove =ref(false);
const moderationLog= ref([])
const showModal = ref(false)
const morderationId = moderationStore.moderation_id
const fetchData = async (morderationId) => {
    try {
        const dataSets = await $adminService.morderation_get(moderationStore.moderation_id);
        createdBy.value =dataSets.created_by
        closeBy.value =dataSets.closed_by
        userName.value =dataSets.user_name
        userEmail.value =dataSets.user_email
        userId.value =dataSets.moderatable_id
        isApprove.value =dataSets.is_approved
         
    } catch (error) {
       router.push({path:'/404'})
    console.error('Error fetching data:', error.message);
    } finally {
    }
};

const fetchComments = async (morderationId) => {
    try {
        
        const dataSets = await $adminService.morderation_comments(moderationStore.moderation_id);
        commentList.value = dataSets.dataSets;
    } catch (error) {
       console.error('Error fetching data:', error.message);
    } 
};

const fetchModerationLogs = async (morderationId) => {
    try {
        
        const dataSets = await $adminService.morderation_logs(moderationStore.moderation_id);
        moderationLog.value = dataSets;
    } catch (error) {
       console.error('Error fetching data:', error.message);
    } 
};


const closeOrReopen = async () => {
    try {
        if(closeBy.value ===null){
           await $adminService.morderation_close(moderationStore.moderation_id,{});
           moderationStore.setModerationClose(true)
        }else{
             await $adminService.morderation_reopen(moderationStore.moderation_id,{});
        }
        fetchData(moderationStore.moderation_id);
        fetchModerationLogs(moderationStore.moderation_id);
    } catch (error) {
      console
       console.error('Error fetching data:', error.message);
    }
};

const deleted = async () => {
    showModal.value = true
  
};

const isDeleted = async () =>{
    showModal.value = false
    router.push({
      path: '/admin/moderation',

    });
}

const comments = async () => {
    try {
        const dataSets = await $adminService.morderation_comment_add({
            morderation_id:moderationStore.moderation_id,
            comment: comment.value,
        });
        comment.value =""
        fetchComments(moderationStore.moderation_id);
    } catch (error) {
       console.error('Error fetching data:', error.message);
    }
};

const morderationApprove = async () => {
    try {
      
        const data = await $adminService.morderation_approve(moderationStore.moderation_id,{
            user_id:userId.value
        });
        
       
        fetchData(morderationId.value);
    } catch (error) {
       console.error('Error fetching data:', error.message);
    }
};

  onMounted(() => {
    fetchData(moderationStore.moderation_id);
    fetchComments(moderationStore.moderation_id);
    fetchModerationLogs(moderationStore.moderation_id);

  });
  
  const viewDetails = () => {
  router.push({
    path: '/admin/userAccountDetails',
    query: {
      action: 'view',
      userId: userId.value
    }
  });
};

definePageMeta({
    ssr: false,
    layout: 'admin',
    middleware: ['role'],
    requiredRole: ['admin'],
});

</script>

<style scoped>

p {
    font-size: 16px;
}
</style>