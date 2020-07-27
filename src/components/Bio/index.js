import React from 'react'
// import { Link } from 'react-router-dom'
import './style.css'
function Bio() {
    return <div className="bio">
        <h1 style= {{color: "darkGray"}}>Bio</h1>
        <p>Brent Peterson here. For the last 10 years I have been working in finance and have helped build up two awesome companies.  The first company is a renewable energy developer and independent power producer called <a href="spower.com">sPower</a>.  I was on the founding team and help bring the company from eight employees to over 150 employees.  As a team, we developed, built and financed 1.5 GWs of renewable energy and then sold the company to AES and AIMCo for <a href="https://www.pv-tech.org/news/aes-and-aimco-to-acquire-spower-for-us1.58-billion">$1.6 billion</a>.  The second company is an impact investment group called <a href="https://cicerogroup.com/medica-santa-carmen-receives-key-investment-from-cicero-impact-capital/">Cicero Impact Capital</a>.  I ran the structuring and negotiation of investments and lead the investment of $2 million into a dialysis clinic company in Mexico in 2020.   </p>

        <p className="group">I am looking to make a career switch into tech and see lots of opportunities to use the skills and experiences I have had in my career to build some great companies. </p>
    </div>
}



export default Bio