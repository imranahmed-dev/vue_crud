import HomePage from "./components/HomePage.vue";
import AddStudent from "./components/AddStudent.vue";
import EditStudent from './components/EditStudent.vue'
import UserList from './components/UserList.vue'

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
  {
    path: "/student/edit/:id",
    name: "studentEdit",
    component: EditStudent,
  },
  {
    path: "/user-list",
    name: "user-list",
    component: UserList,
  },
];

export default routes;