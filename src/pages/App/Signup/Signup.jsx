import React, { useState } from "react";
import './Signup.css'
import {Link} from "react-router-dom";

import ReturnHome from "../../../components/Returnhome/Returnhome";

export default function Signup(){
    const [state, setState] = useState({
        username: "",
        password: "",
        passwordCon: "",
        email: ""
    })

    return(
        <>
        <ReturnHome/>
        {/* <Link to="/"><button type="button" className="button" > Return Back Home </button></Link> */}
        <div><h1>Welcome to PokeApp!</h1></div>
        <div id="signup-div">
        <h1>Sign up!</h1>
            <form className="signup">
                <label>Username</label>
                <input type="username"></input>
                <label>Password</label>
                <input type="password"></input>
                <label>Password Confirmation</label>
                <input type="passwordCon"></input>
                <label>Email</label>
                <input type="email"></input>
            </form>
        </div>
        </>
    )
}