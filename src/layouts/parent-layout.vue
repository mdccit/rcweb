<template>
    <div>
        <!-- Notification component -->
        <Notification v-if="showNotification" :message="notificationMessage" :type="notificationType"
            :visible="showNotification" @close="closeNotification" :key="notificationKey" />
    </div>
    <NavBarPublic/>
    <main class="bg-graySnowDrift">
        <div class="grid grid-cols-6 grid-rows-2 gap-0 mt-16">
            <div class="col-span-6 row-start-1 row-end-2s">
                <ParentHeader />
            </div>
            <div class="col-start-1 col-end-2 row-start-2 row-end-3">
                <ParentLeft/>
            </div>
            <div class="col-start-6 col-end-7 row-start-2 row-end-3"> 
                <ParentRight/>
            </div>
            <div class="col-start-2 col-end-6 row-start-2 row-end-3">
                <ParentFeed/>
            </div>
        </div>
        <main>
        <NavBarPublic></NavBarPublic>
        
    </main>

    </main>
    <FooterPublic/>
</template>

<script setup>
import ParentFeed from '~/components/profiles/parentProfile/parentFeed.vue';
import ParentLeft from '~/components/profiles/parentProfile/parentLeft.vue';
import ParentRight from '~/components/profiles/parentProfile/parentRight.vue';
import ParentHeader from '~/components/profiles/parentProfile/parentCover.vue';
import NavBarPublic from '~/components/user/navbar.vue';
import FooterPublic from '~/components/user/user-footer.vue';
</script>