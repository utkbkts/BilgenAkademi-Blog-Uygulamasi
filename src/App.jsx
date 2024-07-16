import React from "react";
import BlogList from "./components/BlogList/BlogList";
import AddNewBlog from "./components/BlogList/AddNewBlog";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route path="/" element={<BlogList />} />
          <Route path="create" element={<AddNewBlog />} />
          <Route path="create/:id" element={<AddNewBlog />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
