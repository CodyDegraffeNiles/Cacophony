import React from "react";
import { Link } from "react-router-dom";
import HomeNav from "../home_nav/home_nav";
import HomeBody from "../home_body/home_body"


class HomePage extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <HomeNav/> 
        <HomeBody/>
        {/* <FooterNavContainer/> */}

        {/* <Link to ="/login">Login</Link>
        <Link to ="/singup">Sign Up</Link> */}
      </div>
    )
  }
}

export default HomePage;