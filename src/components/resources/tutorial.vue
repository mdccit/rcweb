<template>
       <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <!-- Card 1 -->
                <button @click="viewTutorial" class=" p-4">
                    <!-- <div class="bg-culturedBlue h-[270px] rounded-lg"> -->
                        <!-- <img src="@/assets/images/search-filters.jpg" alt="" class="bg-culturedBlue h-[270px] rounded-lg"> -->
                        <video width="400" controls  class="bg-culturedBlue h-[270px] rounded-lg">
                            <source src="@/assets/tutorial/search-filters.mp4" type="video/mp4">
                            <source src="@/assets/tutorial/search-filters.mp4" type="video/ogg">
                               Your browser does not support HTML video.
                        </video>
                    <!-- </div> -->
                    <p class="text-black mt-1">How to use the search filters</p>
                </button>

                <!-- Card 2 -->
                <div class=" p-4 ">
                    <!-- <div class="bg-culturedBlue h-[270px] rounded-lg"></div> -->
                    <!-- <img src="@/assets/images/connect.jpg" alt="" class="bg-culturedBlue h-[270px] rounded-lg"> -->
                    <video width="400" controls  class="bg-culturedBlue h-[270px] rounded-lg">
                        <source src="@/assets/tutorial/connect.mp4" type="video/mp4">
                        <source src="@/assets/tutorial/connect.mp4" type="video/ogg">
                          Your browser does not support HTML video.
                    </video>
                    <p class="text-black mt-1">Connect to other users on the platform</p>
                </div>

                <!-- Card 3 -->
                <div class=" p-4 ">
                    <!-- <img src="@/assets/images/edit-profile.jpg" alt="" class="bg-culturedBlue h-[270px] rounded-lg"> -->
                    <video width="400" controls  class="bg-culturedBlue h-[270px] rounded-lg">
                        <source src="@/assets/tutorial/edit-profile.mp4" type="video/mp4">
                        <source src="@/assets/tutorial/edit-profile.mp4" type="video/ogg">
                          Your browser does not support HTML video.
                    </video>
                    <p class="text-black mt-1">How to edit your profile</p>
                </div>

                <!-- Card 4 -->
                <div class=" p-4 ">
                    <!-- <img src="@/assets/images/media.jpg" alt="" class="bg-culturedBlue h-[270px] rounded-lg"> -->
                    <video width="400" controls  class="bg-culturedBlue h-[270px] rounded-lg">
                        <source src="@/assets/tutorial/media.mp4" type="video/mp4">
                        <source src="@/assets/tutorial/media.mp4" type="video/ogg">
                          Your browser does not support HTML video.
                    </video>
                    <p class="text-black mt-1">How to add media</p>
                </div>
            </div>
            <!-- <Tutorial :isVisible="showModal" @close="showModal = false"  /> -->

</template>

<script setup>
import { ref, defineEmits, onMounted } from 'vue';

import Tutorial from '~/components/resources/tutorial.vue';

const showModal = ref(false)

const viewTutorial = () =>{
    console.log(4555)
    showModal.value= true
    console.log(showModal.value)

}
</script>