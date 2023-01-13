import { BrowserRouter, Routes, Route } from "react-router-dom";

import { APP_URL_LIST } from "./urls";
import { Login, Dashboard, Users, UserDetails } from "@app/pages";
import { Layout } from "@app/components/organisms";

export const RootRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_URL_LIST.SIGNIN_URL} element={<Login />} />
        <Route
          path={APP_URL_LIST.DASH_BOARD_URL}
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path={APP_URL_LIST.USERS_URL}
          element={
            <Layout>
              <Users />
            </Layout>
          }
        />
        <Route
          path={APP_URL_LIST.USERDETAILS_URL}
          element={
            <Layout>
              <UserDetails />
            </Layout>
          }
        />
        <Route
          path={APP_URL_LIST.NOT_FOUND_URL}
          element={
            <Layout>
              <Users />
            </Layout>
          }
        />
      </Routes>
      <Routes></Routes>
    </BrowserRouter>
  );
};
