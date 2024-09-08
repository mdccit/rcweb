<template>

    <div class="flex gap-x-4">
        <NuxtLink to="//admin/users/9caacfe4-214f-40eb-9289-038c8819bcc7"><button
                class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 bg-gray-200"> Account
                Details </button></NuxtLink>
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