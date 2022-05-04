import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/home.vue";
import About from "../pages/about.vue";
import Other from "../pages/other.vue";
const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/other",
    name: "Other",
    component: Other,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
