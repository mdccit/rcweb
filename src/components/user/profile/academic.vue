<template>
   <div>
     <!-- Academics section  -->
        <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-6 mt-2">
            <div class="grid grid-cols-4 mb-4">
                <div class=" col-span-3">
                    <h1 class="text-lg font-semibold mb-1 text-black">Degrees Offered</h1>
                        <p class="text-gray-500 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div class="col-span-1 text-right">
                            
                </div>
            </div>
            <div>
                <p class="text-xs text-darkSlateBlue leading-loose mb-4 w-full flex">
                <span
                    class="bg-blue-100 mb-2 pb-1 font-light text-blue-800 text-xs  me-2 px-2.5 py-0.5 rounded rounded-full bg-blue-500 text-white ">
                    Health
                </span>
                <span
                    class="bg-blue-100 mb-2 pb-1 font-light text-blue-800 text-xs  me-2 px-2.5 py-0.5 rounded rounded-full bg-blue-500 text-white ">
                    Business Marketing
                </span>
                <br>
                <span
                    class="bg-blue-100 mb-2 pb-1 font-light text-blue-800 text-xs  me-2 px-2.5 py-0.5 rounded rounded-full bg-blue-500 text-white ">
                    Computer engineering
                </span>
                <span
                    class="bg-blue-100 mb-2 pb-1 font-light text-blue-800 text-xs  me-2 px-2.5 py-0.5 rounded rounded-full bg-blue-500 text-white ">
                    Health
                </span>
                <span
                    class="bg-blue-100 mb-2 pb-1 font-light text-blue-800 text-xs  me-2 px-2.5 py-0.5 rounded rounded-full bg-blue-500 text-white ">
                    Business Marketing
                </span>
                <br>
                <span
                    class="bg-blue-100 mb-2 pb-1 font-light text-blue-800 text-xs  me-2 px-2.5 py-0.5 rounded rounded-full bg-blue-500 text-white ">
                    Computer engineering
                </span>
                </p>
            </div>
        </div>
        <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-6 mt-2">
            <div class="grid grid-cols-4 mb-4">
                <div class=" col-span-3">
                    <h1 class="text-lg font-semibold mb-1 text-black">Community</h1>
                    <p class="text-gray-500 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                <div class="col-span-1 text-right">
                </div>
            </div>
            <div class="grid grid-cols-5">
                <div class=" col-span-1 text-center">
                    <h1 class="text-lg font-semibold mb-1 text-black"> {{ props.academic.graduation_rate != null? props.academic.graduation_rate+' %':'' }}</h1>
                    <p class="text-black text-xs">Graduation
                        Rate </p>
                </div>
                <div class=" col-span-1 text-center">
                    <h1 class="text-lg font-semibold mb-1 text-black"> {{ props.academic.acceptance_rate != null? props.academic.acceptance_rate+' %':'' }}</h1>
                    <p class="text-black text-xs">Acceptance Rate </p>
                </div>
                <div class=" col-span-1 text-center">
                    <h1 class="text-lg font-semibold mb-1 text-black">{{ props.academic.student_to_faculty_ratio }}</h1>
                    <p class="text-black text-xs">Student to Faculty Ratio</p>
                </div>
                <div class=" col-span-1 text-center">
                    <h1 class="text-lg font-semibold mb-1 text-black"> {{ props.academic.percentage_of_international_students != null? props.academic.percentage_of_international_students.toFixed(2)+' %':'' }}</h1>
                    <p class="text-black text-xs"> International Students</p>
                </div>
                <div class=" col-span-1 text-center">
                    <h1 class="text-lg font-semibold mb-1 text-black">{{ props.academic.student_count }}</h1>
                    <p class="text-black text-xs">Student Count</p>
                </div>
            </div>
        </div>
        <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-6 mt-2">
            <div class="grid grid-cols-4 mb-4">
                <div class=" col-span-3">
                    <h1 class="text-lg font-semibold mb-1 text-black">Earnings</h1>
                    <p class="text-gray-500 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div class="col-span-1 text-right">
                </div>
            </div>
            <div class="grid grid-cols-2">
                <div class=" col-span-1 text-left">
                    <h1 class="text-lg font-semibold mb-1 text-black">${{props.academic.earnings_1_year_after_graduation}} <span class="text-xs">per year</span></h1>
                    <p class="text-black text-xs">Earnings 1 Year After Graduation </p>
                </div>
                <div class=" col-span-1 text-left">
                    <h1 class="text-lg font-semibold mb-1 text-black">${{ props.academic.earnings_3_years_after_graduation }}<span class="text-xs">per year</span></h1>
                    <p class="text-black text-xs">Earnings 3 Years After Graduation </p>
                </div>
            </div>
        </div>
    <!-- Academics section end  -->
   </div>
 </template>
 
 <script setup>
 import { defineProps, defineEmits, defineExpose,ref, onMounted} from 'vue';
 
 const props = defineProps({
     academic: Object
 });
 
 </script>