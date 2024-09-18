import { useRouter } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter();

  // Configure NProgress options (e.g., disable spinner)
  NProgress.configure({ showSpinner: false });

  // Hook into the router to track page loads
  router.beforeEach(() => {
    NProgress.start();  // Start the progress bar on route change
  });

  router.afterEach(() => {
    NProgress.done();  // Finish the progress bar when the route is resolved
  });

  router.onError(() => {
    NProgress.done();  // Finish the progress bar if there is an error
  });

  // Provide NProgress globally so you can use it in components and service files
  nuxtApp.provide('nprogress', NProgress);
});
