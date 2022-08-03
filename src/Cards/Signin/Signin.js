import React from 'react'
import './Signin.css';

function Signin() {
  return (
    <>
         <div className='forms'>
           <form action="">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname" /><br />
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname" /><br></br>
  <button>Submit</button>
  </form>
         </div>
    </>

  )
}

export default Signin; 