import React from 'react'
import {Link} from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useSpring,animated } from "react-spring";


const Header = () => {

  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  })
  console.log(fade)

  return (
        <animated.nav style={fade} class="navbar navbar-expand-lg navbar-dark p-3" style={{backgroundColor:"#19232e"}}>
   <Link to="/"><a class="navbar-brand ml-4" href="#">Mine video</a></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link style={{listStyleType:"none"}} to="/"><a class="nav-link font-weight-bold" href="#">Home <span class="sr-only">(current)</span></a></Link>
      </li>
      <li class="nav-item ">
        <a class="nav-link font-weight-bold" href="#">TV Shows <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item ">
        <a class="nav-link font-weight-bold" href="#">Movies <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item ">
        <a class="nav-link font-weight-bold" href="#">Kids <span class="sr-only">(current)</span></a>
      </li>
     
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
      <a href=""><AccountCircleIcon fontSize="large"/></a><span className="m-2">Arish</span>
    </form>
  </div>
</animated.nav>
    )
}

export default Header