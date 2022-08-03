import React from 'react'
// import '.Cards/Header.css';

import { Link } from "react-router-dom";
function Header() {
  return (
    <>
    <div style={{display:"flex", justifyContent:"space-evenly",cursor:"pointer"}}>
      <h4> 
    <Link to="/Cardss">
        Home
    </Link>
    </h4>
     
   <h4>

   <Link to="/Cart">
        Cart
    </Link>
   </h4>

   <h4>
   <Link to="/Signin">
        Sign in
    </Link>
   </h4>
    </div>
    </>
  )
}
export default Header