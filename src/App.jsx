import { Routes, Route } from "react-router-dom";
import { Layout } from "Layout/Layout";
import { HomePage } from "page/HomePage";
import { ContactsPage } from "page/ContactsPage";
import { Login } from "components/Login/Login";
import { Register } from "components/Register/Register";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};
