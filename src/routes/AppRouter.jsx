import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import NotFound from "../components/pages/notFound/NotFound";
import { routes } from "./routes";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
