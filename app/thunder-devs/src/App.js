import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import PublicLayout from "layouts/HomeLayout";
import HomePage from "pages/HomePage";
import AdminLayout from "layouts/AdminLayout";
import ProductsPage from "pages/admin/ProductsPage";
import { ProductToEditContext } from "context/productToEdit";
import EditProductPage from "pages/admin/EditProductPage";
import CreateProductPage from "pages/admin/CreateProductPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  const [productToEdit, setProductToEdit] = useState(null);
  useEffect(() => {
    console.log("producto a editar:", productToEdit);
  }, [productToEdit]);

  return (
    <Router>
      <Route exact path="/">
        <PublicLayout>
          <HomePage />
        </PublicLayout>
      </Route>
      <Route
        exact
        path={[
          "/admin",
          "/admin/profile",
          "/admin/products",
          "/admin/products/edit",
          "/admin/products/create"
        ]}
      >
        <AdminLayout>
          <ProductToEditContext.Provider
            value={{ productToEdit, setProductToEdit }}
          >
            <Route exact path="/admin">
              <ProductsPage />
            </Route>
            <Route exact path="/admin/products">
              <ProductsPage />
            </Route>
            <Route exact path="/admin/products/edit">
              <EditProductPage />
            </Route>
            <Route exact path="/admin/products/create">
              <CreateProductPage />
            </Route>
          </ProductToEditContext.Provider>
        </AdminLayout>
      </Route>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
    </Router>
  );
}

export default App;
