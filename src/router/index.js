import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import StudentsEdit from "../views/StudentsEdit.vue";
import EducationsEdit from "../views/EducationsEdit.vue";



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  { 
    path: "/login", 
    name: "login", 
    component: Login 
  },
  { 
    path: "/logout", 
    name: "logout", 
    component: Logout 
  },
  { 
    path: "/students/:id/edit", 
    name: "students-edit", 
    component: StudentsEdit 
  },
  { 
    path: "/educations/:id/edit", 
    name: "educations-edit", 
    component: EducationsEdit 
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
