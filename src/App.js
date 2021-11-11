import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Login/Register/Register';
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
           
          <Route path="/dashboard">
          <Dashboard></Dashboard>
          </Route>
          <Route path="/product">
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
