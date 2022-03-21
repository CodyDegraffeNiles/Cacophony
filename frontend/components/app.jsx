import React from "react";
import { Switch } from "react-router";
import UserNavContainer from "./user_nav/user_nav_container"; 
import SignupFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";
import HomePageContainer from "./home_page/home_page_container";
import UserProfileContainer from "./user_profile/user_profile_container.jsx"
import { AuthRoute, ProtectedRoute} from "../util/route_utils";

const App = () => (
  <div>
      <AuthRoute exact path="/" component={HomePageContainer}/>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} /> 
      
      {/* Switch Route to determine whether or not to render UserNav */}
      <Switch> 
      <ProtectedRoute path="/users/:userId" component={UserProfileContainer}/>
      <ProtectedRoute path ="/" component = {UserNavContainer}/>
      </Switch>
      {/* <ProectedRoute path="/servers" component={ServersContainer} /> */}
  </div>
);

export default App;