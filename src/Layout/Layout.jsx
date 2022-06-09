import { Header } from "Layout/Header/Header";
import { Footer } from "Layout/Footer/Footer";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
