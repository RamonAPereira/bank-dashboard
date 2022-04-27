import { createWebHistory, createRouter } from "vue-router";
import TheDashboard from "../pages/TheDashboard.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", name: "Dashboard", component: TheDashboard }],
});

export default router;
