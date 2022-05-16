import React, {useState} from "react";

function Navbar(){
const[logStatus,setLogStatus]=useState(false);

    return(
        <div id="navbar">
            <div>Logo here</div>
            <h3>Explore</h3>
           {logStatus ? <h3>Profile</h3> :<h3>Login</h3>}
        </div>
    )
}

export default Navbar;