import { connect } from "react-redux";
import HomePage from "./home_page"


const mstp = (state) => {
  return{
    state: state
  }
}

export default connect(mstp, null)(HomePage)