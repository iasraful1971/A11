import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Login/Register/Register';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Details from './components/Product/Products/Details/Details';
import Product from './components/Product/Products/Product';
import Notfound from './components/Shared/Notfound/Notfound';
import AuthProvider from './Context/AuthProvider/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route  path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
           
          <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>

          <PrivateRoute to="/product/:id">
            <Details></Details>
          </PrivateRoute>

          </PrivateRoute>
          <Route path="/products">
            <Product></Product>
          </Route>
           
         
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          
       </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
