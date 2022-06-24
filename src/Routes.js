import Home from "./client/components/Home";
import UserList from "./client/components/UserList";
import Posts from "./client/components/Posts";

const Routes = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    path: "/users",
    component: UserList,
  },
  {
    path: "/posts",
    component: Posts,
  },
];

export default Routes;
