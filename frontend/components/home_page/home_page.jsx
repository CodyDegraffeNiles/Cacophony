import React from "react";
import HomeNav from "../home_nav/home_nav";
import HomeBody from "../home_body/home_body"
import FooterNav from "../footer_nav/footer_nav"


class HomePage extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <HomeNav/> 
        <HomeBody/>
        {/* <FooterNav/> */}
      </div>
    )
  }
}

export default HomePage;