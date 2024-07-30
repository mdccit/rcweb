import { defineNuxtPlugin } from "#app";
import { createRouter, createWebHistory } from "vue-router";
import Home from "~/pages/HomePage.vue";
import Login from "~/pages/LoginPage.vue";

export default defineNuxtPlugin((nuxtApp) => {
  const routes = [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  nuxtApp.vueApp.use(router);
});
