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
<<<<<<< HEAD
import Users from "pages/Users";

=======
import FormularioVentas from "components/FormularioVentas";
import VentasRegistro from "components/VentasRegistro";
import VentasEditable from "components/Formularioeditable";
>>>>>>> origin
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
          "/admin/products/create",
<<<<<<< HEAD
          "/admin/users"
=======
          "/admin/ventastabla",
          "/admin/ventasregistro",
          "/admin/ventaseditable"
>>>>>>> origin
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
            <Route exact path="/admin/Users">
              <Users />
            </Route>
          </ProductToEditContext.Provider>
            <Route exact path="/admin/ventastabla">
              <FormularioVentas />
            </Route>
            <Route exact path="/admin/ventasregistro">
              <VentasRegistro />
            </Route> 
            <Route exact path="/admin/ventaseditable">
              <VentasEditable />
            </Route>
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
