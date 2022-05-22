// import { createRouter, createWebHashHistory } from "vue-router";
import { createRouter, createWebHashHistory } from "./grouter/index";
import Home from "../pages/home.vue";
import About from "../pages/about.vue";
import Other from "../pages/other.vue";
import Counter from "../pages/counter.vue";
import Jsx from "../pages/jsx.vue";
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
  {
    path: "/counter",
    name: "Counter",
    component: Counter,
  },
  {
    path: "/jsx",
    name: "Jsx",
    component: Jsx,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
