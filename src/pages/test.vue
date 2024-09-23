<template>
 <div>abc</div>


</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useNuxtApp } from '#app';
import Connection from '~/components/user/profile/connection.vue';
import UserFeed from '~/components/user/profile/userFeed.vue';
import { useUserStore } from '~/stores/userStore';
import PlayerTabNavigation from '~/components/profiles/navigation/PlayerTabNavigation.vue';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

definePageMeta({ colorMode: 'light', layout: 'profile-without-cover'},)

</script>