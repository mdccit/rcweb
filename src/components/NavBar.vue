<template>
  <nav>
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/login">Login</NuxtLink></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background: #333;
  padding: 10px;
}

ul {
  list-style: none;
  display: flex;
  justify-content: center;
}

li {
  margin: 0 15px;
}

a {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
}
</style>
