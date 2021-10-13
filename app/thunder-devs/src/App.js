import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import PublicLayout from "layouts/PublicLayout";
import HomePage from "pages/HomePage";
import AdminLayout from "layouts/AdminLayout";
import ProductsPage from "pages/admin/ProductsPage";
import { ProductToEditContext } from "context/productToEdit";
import EditProductPage from "pages/admin/EditProductPage";
import CreateProductPage from "pages/admin/CreateProductPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import NotFoundPage from "pages/NotFoundPage";

function App() {
  const [productToEdit, setProductToEdit] = useState(null);
  useEffect(() => {
    console.log("producto a editar:", productToEdit);
  }, [productToEdit]);

  return (
    <Router>
      <Switch>
      <Route exact path="/">
        <PublicLayout>
            <HomePage/>          
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
      <Route exact path="*">
        <PublicLayout>
          <NotFoundPage/>
        </PublicLayout>
      </Route>
      </Switch>
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
