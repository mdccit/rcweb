<template>

    <div class="flex gap-x-4">
        <button @click="accountDetails"
                class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 bg-gray-200"> Account
                Details </button>
        <button @click="accountMedia"
                class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 bg-gray-200">Media </button>
        <NuxtLink to="/admin/users/9caacfe4-214f-40eb-9289-038c8819bcc7/connections"><button
                class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 opacity-50">
                Connections </button>
        </NuxtLink>
        <NuxtLink to="/admin/users/9caacfe4-214f-40eb-9289-038c8819bcc7/lists"><button
                class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 opacity-50"> Lists
            </button>
        </NuxtLink>
        <NuxtLink to="/admin/users/9caacfe4-214f-40eb-9289-038c8819bcc7/danger-zone"><button
                class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 opacity-50"> Danger
                Zone </button>
        </NuxtLink>
    </div>
    <div class="my-8"></div>

</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';

import { useRoute, useRouter } from 'vue-router';

const router = useRouter();

const route = useRoute(); 
const  action =ref('view')
const user_id = ref('')
onMounted(() => {
    
    action.value = route.query.action || 'view';
    user_id.value = route.query.user_id || '';
    console.log("User Id"+user_id.value)
    console.log("User type"+ action.value)

});

const accountMedia = () =>{
  router.push({
    path: '/admin/userMedia',
    query: {
      action: 'edit',
      user_id: user_id.value
    }
  });
}

const accountDetails = () =>{
  router.push({
    path: '/admin/userAccountDetails',
    query: {
      action: 'edit',
      user_id: user_id.value
    }
  });
}
</script>