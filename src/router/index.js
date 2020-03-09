import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Products from "../views/Products.vue";
import Locations from "../views/Locations.vue";
import Checkout from "../views/Checkout.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/About",
    name: "About",
    component: About
  },
  {
    path: "/Products",
    name: "Products",
    component: Products
  },
  {
    path: "/Locations",
    name: "Locations",
    component: Locations
  },
  {
    path: "/Checkout",
    name: "Checkout",
    component: Checkout
  },
  {
    path: "/Login",
    name: "Login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
