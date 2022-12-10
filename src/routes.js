import HomePage from "./components/HomePage.vue";
import AddStudent from "./components/AddStudent.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/student/create",
    name: "studentCreate",
    component: AddStudent,
  },
];

export default routes;