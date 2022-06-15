import { useEffect } from "react";
import { useDispatch } from "react-redux";
import authOperations from "redux/auth/auth-operations";

import { Header } from "components/Layout/Header/Header";
import { Footer } from "components/Layout/Footer/Footer";
import { Outlet } from "react-router";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Layout;
