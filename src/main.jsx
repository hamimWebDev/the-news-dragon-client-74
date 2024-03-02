import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./layouts/Root";
import Home from "./layouts/Home/Home";
import Login from "./layouts/Login/Login";
import SignUpPage from "./layouts/SignUp/SignUpPage";
import Category from "./layouts/Home/Category";
import NewsLayout from "./layouts/News/NewsLayout/NewsLayout";
import News from "./layouts/News/News";
import AuthProviders from "./layouts/providers/AuthProviders";
import LoginLayout from "./layouts/Login/LoginLayout";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0"></Navigate>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/SignUp",
        element: <SignUpPage></SignUpPage>,
      },
    ],
  },
  {
    path: "category",
    element: <Root></Root>,
    children: [
      {
        path: ":id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(
            `https://cors-problem-solve.vercel.app/categories/${params.id}`
          ),
      },
    ],
  },
  {
    path: "News",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `  https://cors-problem-solve.vercel.app/news/${params.id}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
