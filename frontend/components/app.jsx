import React from "react";
import { Route } from 'react-router-dom';
import UserContainer from "./user_nav/user_nav_container"; 
// import SignupFormContainer from "./form/signup_form_container";
// import LoginFormContainer from "./form/login_form_container";
// import { AuthRoute } from "../util/route_utils";

const App = () => (
  <div>
    <header>
      <h1>Cacophony</h1>
      <Route path="/" component={UserContainer} /> 
      {/* <AuthRoute path="/login" component={LoginFormContainer} /> */}
      {/* <AuthRoute path="/signup" component={SignupFormContainer} />  */}
    </header>
  </div>
);

export default App;