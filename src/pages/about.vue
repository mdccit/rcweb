<template>
 
</template>

<script setup>
import { useUserStore } from '~/stores/userStore'

const userStore = useUserStore()

const email = userStore.user?.email
const token = userStore.user?.token
</script>

<style scoped>
h1 {
    color: #333;
}

p {
    font-size: 16px;
}
</style>