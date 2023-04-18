
import {Link} from "react-router-dom"

import "./index.css"


const CompanyProfile=()=>{
    const dataComapny=JSON.parse(localStorage.getItem("companyDetails"))  

    const {firstName,lastName,emailId}=dataComapny
    console.log(dataComapny)
    return (
<div className="company-profile">
    <div>
    <h1>Hi welcome to {firstName} </h1>
    <p>Comapany Name : {firstName}</p>
    <p>Job Role : {lastName}</p>
    <p>EmailId: : {emailId}</p>
    </div>
    <Link to="/recruiter-home"><button className="but1">Go Home</button></Link>
    
</div>

    
)
    }

export default CompanyProfile