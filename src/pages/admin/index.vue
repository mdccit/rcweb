<template>
  <div>
    <h1>Admin Page</h1>
    <p>Only accessible by admin users.</p>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  meta: {
    roles: ['admin'],
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
