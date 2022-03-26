import React from "react";
import { Switch } from "react-router";
import UserNavContainer from "./user_nav/user_nav_container"; 
import SignupFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";
import HomePageContainer from "./home_page/home_page_container";
import UserProfileContainer from "./user_profile/user_profile_container.jsx"
import EditServerFormContainer from "./server_from/edit_server_form_container";
import { AuthRoute, ProtectedRoute} from "../util/route_utils";
import ServerNavContainer from "./server_nav/server_nav_container";
import ServerMemeberContainer from "./server_members/server_members_container";
import ChannelNavContainer from "./channel_nav/channel_nav_container";
import ChannelMessagContainer from "./channel_messages/channel_message_container";

const App = () => (
  <div>
      {/* Commented out - will add back in once ServerContainer is fleshed out
       <ProtectedRoute path ="/servers/:serverId" component={EditServerFormContainer}/> */}
      <ProtectedRoute path="/users/:userId" component={UserProfileContainer}/>
      <ProtectedRoute path="/servers" component={ServerNavContainer} />
      <ProtectedRoute path ="/servers" component = {UserNavContainer}/>
      <ProtectedRoute path="/servers/:serverId" component={ServerMemeberContainer}/>
      <ProtectedRoute path="/servers/:serverId/:channelId"
      component= {ChannelMessagContainer}/>
      <ProtectedRoute path="/servers/:serverId" component={ChannelNavContainer}/>


      {/* Auth Routes */}
      <AuthRoute exact path="/" component={HomePageContainer}/>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} /> 
  </div>
);

export default App;