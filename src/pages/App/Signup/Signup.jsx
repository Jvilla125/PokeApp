import React, { useState } from "react";
import './Signup.css'
import { Link } from "react-router-dom";

import ReturnHome from "../../../components/Returnhome/Returnhome";

export default function Signup() {
    const [state, setState] = useState({
        username: "",
        password: "",
        passwordCon: "",
        email: ""
    })

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <ReturnHome />
            {/* <Link to="/"><button type="button" className="button" > Return Back Home </button></Link> */}
            <div><h1>Welcome to PokeApp!</h1></div>
            <div id="signup-div">
                <h1>Sign up!</h1>


                <form>
                    <div className="signup">
                        <label>Username</label>
                        <input type="username" placeholder="Username" />
                        <label>Password</label>
                        <input type="password" placeholder="Password" />
                        <label>Password Confirmation</label>
                        <input type="password" placeholder="Password Confirmation" />
                        <label>Email</label>
                        <input type="email" placeholder="Email" />
                        <button type="submit">Submit</button>
                    </div>
                </form>







            </div>
        </>
    )
}