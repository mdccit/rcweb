<template>
       <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <!-- Card 1 -->
                <div  class=" p-4">
                    <!-- <div class="bg-culturedBlue h-[270px] rounded-lg"> -->
                        <!-- <img src="@/assets/images/search-filters.jpg" alt="" class="bg-culturedBlue h-[270px] rounded-lg"> -->
                        <video width="400" controls  class="bg-culturedBlue h-[270px] rounded-lg">
                            <source src="@/assets/tutorial/search-filters.mp4" type="video/mp4">
                            <source src="@/assets/tutorial/search-filters.mp4" type="video/ogg">
                               Your browser does not support HTML video.
                        </video>
                    <!-- </div> -->
                    <button @click="viewTutorial(1)" class="text-black mt-1">How to use the search filters</button>
                </div>

                <!-- Card 2 -->
                <div class=" p-4 ">
                    <!-- <div class="bg-culturedBlue h-[270px] rounded-lg"></div> -->
                    <!-- <img src="@/assets/images/connect.jpg" alt="" class="bg-culturedBlue h-[270px] rounded-lg"> -->
                    <video width="400" controls  class="bg-culturedBlue h-[270px] rounded-lg">
                        <source src="@/assets/tutorial/connect.mp4" type="video/mp4">
                        <source src="@/assets/tutorial/connect.mp4" type="video/ogg">
                          Your browser does not support HTML video.
                    </video>
                    <button @click="viewTutorial(2)" class="text-black mt-1">Connect to other users on the platform</button>
                </div>

                <!-- Card 3 -->
                <div class=" p-4 ">
                    <!-- <img src="@/assets/images/edit-profile.jpg" alt="" class="bg-culturedBlue h-[270px] rounded-lg"> -->
                    <video width="400" controls  class="bg-culturedBlue h-[270px] rounded-lg">
                        <source src="@/assets/tutorial/edit-profile.mp4" type="video/mp4">
                        <source src="@/assets/tutorial/edit-profile.mp4" type="video/ogg">
                          Your browser does not support HTML video.
                    </video>
                    <button @click="viewTutorial(3)" class="text-black mt-1">How to edit your profile</button>
                </div>

                <!-- Card 4 -->
                <div class=" p-4 ">
                    <!-- <img src="@/assets/images/media.jpg" alt="" class="bg-culturedBlue h-[270px] rounded-lg"> -->
                    <video width="400" controls  class="bg-culturedBlue h-[270px] rounded-lg">
                        <source src="@/assets/tutorial/media.mp4" type="video/mp4">
                        <source src="@/assets/tutorial/media.mp4" type="video/ogg">
                          Your browser does not support HTML video.
                    </video>
                    <button @click="viewTutorial(4)" class="text-black mt-1">How to add media</button>
                </div>
            </div>
            <TutorialModal :isVisible="showModal" @close="showModal = false" :videoNumber="videoNumber"  />
           <!-- <AdminBusinessDeleteModal :isVisible="showModal" @close="showModal = false"/> -->
</template>

<script setup>
import { ref, defineEmits, onMounted } from 'vue';

import TutorialModal from '~/components/resources/tutorialModal.vue';
import AdminBusinessDeleteModal from '~/components/admin/user/adminBusinessDeleteModal.vue';

const showModal = ref(false)
const videoNumber = ref(0)
const viewTutorial = (id) =>{
    console.log(4555)
    console.log(id)
    videoNumber.value = id
    showModal.value= true
    console.log(showModal.value)

}
</script>