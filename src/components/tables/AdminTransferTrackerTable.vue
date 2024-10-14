<template>

    <el-card>
      <!-- Search Input and Buttons -->
      <div class="flex justify-between items-center mb-4">
        <!-- Search Input for Filtering -->
        <el-input class="h-[40px] mr-2 focus:border-none" placeholder="Search..." clearable></el-input>
        <div class="relative inline-block text-left">
  
          <button type="button" aria-haspopup="true" id="dropdownButton" data-dropdown-toggle="dropdowntable"
            class="text-white bg-gray-200 hover:bg-gray-300 focus:ring-4 p-2 border rounded h-[40px] w-[50px] mr-1 ">
            <svg xmlns="http://www.w3.org/2000/svg"
              :class="filterApply == true ? 'active-filter h-5 w-5 text-gray-400 mx-auto' : 'h-5 w-5 text-gray-400 mx-auto'"
              viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
          <!-- Dropdown Menu -->
          <div id="dropdowntable"
            class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 hidden p-3">
            <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
  
              <div class="mb-3">
                <label for="text-sm">Role </label>
                <div class="flex  border border-gray-300 shadow-sm rounded-[10px]">
                  <select
                    class="lock text-black px-5 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg">
                    <option value=""> - </option>
                    <option value="verified"> Verified </option>
                    <option value="not_verified"> Pending Verified </option>
                  </select>
                </div>
              </div>
           
              <div class="mb-3">
                <label for="text-sm">Email verified </label>
                <div class="flex  border border-gray-300 shadow-sm rounded-[10px]">
                  <select name="filter-role"
                    class="lock text-black px-5 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg">
                    <option value=""> - </option>
                    <option value="verified"> Verified </option>
                    <option value="not_verified"> Not Verified </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
  
      </div>
  
      <!-- Data Table -->
      <el-table style="width: 100%" stripe class="cursor-pointer min-h-[350px]" :default-sort="{ prop: 'joined_at', order: 'descending' }">
        <!-- Name Column -->
        <el-table-column class="tealGaray" label="Name" sortable>
          Name
        </el-table-column>
  
  
        <!-- Email Column -->
        <el-table-column class="tealGaray" label="Email" sortable>
          Email
        </el-table-column>
  
        <!-- User Role Column -->
        <el-table-column class="tealGaray" label="User Role" sortable>
          Role
        </el-table-column>
  
        <!-- UTR Column -->
        <el-table-column class="tealGaray" label="UTR" sortable>
          23
        </el-table-column>
  
        <!-- School Name Column -->
        <el-table-column class="tealGaray" label="School Name" sortable>
          school name
        </el-table-column>
  
        <!-- Height Column -->
        <el-table-column class="tealGaray" label="Height" sortable>
          4.5
        </el-table-column>
  
        <!-- Action buttons Column -->
        <el-table-column class="tealGaray" label="">
          <div class="flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="size-4 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="size-4">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>
        </div>
  
        </el-table-column>
  
        <!-- END TABLE  -->
      </el-table>
  
  
      <!-- Pagination -->
      <el-pagination layout="prev, pager, next" />
  
    </el-card>
  </template>