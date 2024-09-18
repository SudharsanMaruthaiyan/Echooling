import React from "react";
import ReactDOM from 'react-dom/client'
import './index.css'
import EchoolingCourses from "./Components/EchoolingCourses/EchoolingCourses";
import Homepage from "./Components/Homepage/Homepage";

const AppLayout = ()=>{
    return(
        <>
            <Homepage/>
            <EchoolingCourses/>
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
