import React from "react";
import ReactDOM from 'react-dom/client'
import './index.css'
import EchoolingCourses from "./Components/EchoolingCourses/EchoolingCourses";

const AppLayout = ()=>{
    return(
        <>
            <EchoolingCourses/>
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
