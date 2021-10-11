import {BrowserRouter as Router, Route} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import PublicLayout from 'layouts/HomeLayout';
import HomePage from 'pages/HomePage';
import AdminLayout from 'layouts/AdminLayout';
import ProductsPage from 'pages/admin/ProductsPage';
import { ProductToEditContext } from 'context/productToEdit';
import EditProductPage from 'pages/admin/EditProductPage';


function App() {
  const [productToEdit, setProductToEdit] = useState(null);
  useEffect(() => {
    console.log('producto a editar:', productToEdit);
  }, [productToEdit]);

  return (
      <Router>
        <Route exact path="/">
          <PublicLayout>
            <HomePage/>
          </PublicLayout>
        </Route>
        <Route exact path={["/admin","/admin/profile","/admin/products", "/admin/products/edit"]}>
          <AdminLayout>
            <ProductToEditContext.Provider value={ { productToEdit, setProductToEdit } }> 
            <Route exact path="/admin">
              <ProductsPage/>
            </Route> 
            <Route exact path="/admin/products">
              <ProductsPage/>
            </Route>
            <Route exact path="/admin/products/edit">
              <EditProductPage/>
            </Route>
            </ProductToEditContext.Provider>
          </AdminLayout>
        </Route>
      </Router>
  );
}

export default App;
