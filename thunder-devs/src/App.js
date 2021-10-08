import {BrowserRouter as Router, Route} from 'react-router-dom';
import React from 'react';
import PublicLayout from 'layouts/PublicLayout';
import HomePage from 'pages/HomePage';
import AuthLogInLayout from 'layouts/AuthLogInLayout';

function App() {
  return (
      <Router>
        <Route exact path="/">
          <PublicLayout>
            <HomePage/>
          </PublicLayout>
        </Route>
          <Route exact path="/auth">
          <AuthLogInLayout>
          </AuthLogInLayout>
        </Route>
      </Router>
  );
}

export default App;
