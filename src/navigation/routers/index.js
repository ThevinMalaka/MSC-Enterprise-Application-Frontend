/* eslint-disable react-hooks/rules-of-hooks */
import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<h2></h2>}>
      <Component {...props} />
    </Suspense>
  );
};

// Add routes here
const Login = Loadable(lazy(() => import("../../views/login/container")));
const Signup = Loadable(
  lazy(() => import("../../views/login/container/signup"))
);
const Home = Loadable(lazy(() => import("../../views/home/container")));
const Workout = Loadable(
  lazy(() => import("../../views/home/container/workout"))
);
const SingleWorkout = Loadable(
  lazy(() => import("../../views/home/container/singleWorkout"))
);
const ActiveWorkout = Loadable(
  lazy(() => import("../../views/home/container/activeWorkout"))
);
const Report = Loadable(
  lazy(() => import("../../views/home/container/report"))
);

export function UnauthorizedRouter() {
  return useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "*",
      element: <h2>404</h2>,
    },
  ]);
}

export function AuthorizedRouter() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/workout",
      element: <Workout />,
    },
    {
      path: "/workout/:id",
      element: <SingleWorkout />,
    },
    {
      path: "/active-workout/:id",
      element: <ActiveWorkout />,
    },
    {
      path: "/report",
      element: <Report />,
    },
    {
      path: "*",
      element: <h2>404</h2>,
    },
  ]);
}
