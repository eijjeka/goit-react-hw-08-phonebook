import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "components/PrivateRoute";
import { PublicRoute } from "components/PublicRoute";

const Layout = lazy(() =>
  import("components/Layout/Layout" /* webpackChunkName: "layout" */)
);
const HomePage = lazy(() =>
  import("components/Page/HomePage" /* webpackChunkName: "HomePage" */)
);
const ContactsPage = lazy(() =>
  import("components/Page/ContactsPage" /* webpackChunkName: "ContactsPage" */)
);
const Login = lazy(() =>
  import("components/Login/Login" /* webpackChunkName: "Login" */)
);
const Register = lazy(() =>
  import("components/Register/Register" /* webpackChunkName: "Register" */)
);

export const App = () => {
  return (
    <Suspense fallback={<p>Загружаем...</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
