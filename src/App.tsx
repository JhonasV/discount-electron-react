import * as React from "react";
import { hot } from "react-hot-loader";
import { HashRouter, Route } from "react-router-dom";
import "./index.css";
import Layout from "./components/UI/Layout";

import Calculation from "./screens/Calculation";
import History from "./screens/History";
import Login from './screens/Login';
import Register from './screens/Register';

import AuthService from "./services/AuthService";
import { Users } from "./models/Users";
const App = () => {
  const [currentUser, setCurrentUser] = React.useState<Users>(null);
  const [isLoading, setLoading] = React.useState<Boolean>(false);
  React.useEffect(()=>{
    console.log("Existe el token", AuthService.TokenExists());
    if(AuthService.TokenExists()){
      setUser();
    }
  }, [])

  const setUser = async () => {
    setLoading(true);
    let result = await AuthService.CurrentUser();
    console.log(result);
    setCurrentUser(result.data);
    setLoading(false);
  }

  const renderRoutes = () =>{
    return currentUser !== null ? renderAuthRoutes() : renderGuessRoutes();
  }
  
  const renderGuessRoutes = () =>{
    return (<>

    </>)
  }
  
  const renderAuthRoutes = () =>{
    return (<>

    </>)
  }
  return (
 
  <HashRouter>
    {isLoading ? "Cargando..." : 
    <Layout currentUser={currentUser}>
      <Route exact path="/" component={currentUser !== null ? Calculation : Login} />
      <Route exact path="/history" component={History} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={currentUser !== null ? Calculation : Register} />
    </Layout>
    }
  </HashRouter>
)


};

export default hot(module)(App);
