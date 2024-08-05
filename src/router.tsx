import { Suspense, lazy } from "react";
import { RouteObject } from "react-router";

import BlankLayout from "./Layouts/BlankLayout";
import SuspenseLoader from "./Components/SuspenseLoader";

const Loader = (Component: React.FC) => (props: any) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const Users = Loader(lazy(() => import("./Pages/Users")));
const Feed = Loader(lazy(() => import("./Pages/Feed")));
const Posts = Loader(lazy(() => import("./Pages/Posts")));
const UserPosts = Loader(lazy(() => import("./Pages/UserPosts")));
const Profile = Loader(lazy(() => import("./Pages/Profile")));

const routes: RouteObject[] = [
  {
    path: "",
    element: <BlankLayout />,
    children: [
      {
        path: "/",
        element: <Users />,
      },
      {
        path: "/feed",
        element: <Feed />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      { path: "/posts/:id", element: <UserPosts /> },
      {
        path: "/perfil",
        element: <Profile />,
      },
    ],
  },
];

export default routes;
