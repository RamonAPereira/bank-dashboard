import { createWebHistory, createRouter } from "vue-router";
import TheDashboard from "../pages/TheDashboard.vue";
import LoginPage from "../pages/LoginPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", name: "Login", component: LoginPage },
    { path: "/dashboard", name: "Dashboard", component: TheDashboard },
  ],
});

export default router;
