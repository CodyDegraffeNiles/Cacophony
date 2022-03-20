import React from "react";
import { Route } from 'react-router-dom';
import UserContainer from "./user_nav/user_nav_container"; 
import SignupFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";
import HomePageContainer from "./home_page/home_page_container";
import { AuthRoute } from "../util/route_utils";

const App = () => (
  <div>
    <header>
      <h1>Cacophony</h1>
    </header>
      <Route exact path="/" component={HomePageContainer}/>
      <Route path="/" component={UserContainer} /> 
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} /> 
  </div>
);

export default App;