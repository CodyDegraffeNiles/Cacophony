import React from "react";
import { Link } from "react-router-dom";



class HomePage extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Link to ="/login">Login</Link>
    )
  }
}

export default HomePage;