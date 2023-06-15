import React from "react";
import {Link} from "react-router-dom"

import './Returnhome.css'

export default function ReturnHome(){
    return(<>
    <Link to="/"><button type="button" className="button" > Return Back Home </button></Link>
    </>)

}