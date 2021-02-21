import React from 'react'
import "../../styles/Landing/Newsletter.css"

function Newsletter() {
    return (
        <div className="newsletter">
            <h1>Subscribe to the Newsletter</h1>
            <input type="text" placeholder="Your Email Address"/>
            <p>Pursuant to 13 of the EU General Regulation n. 2016/679 we inform you that the data acquired concerns only the commercial communication of BENS.SHOP srl through an informative newsletter. For more information, the scope of the privacy policy is mandatory</p>
            <p>I read the privacy policy provided by BENS.SHOP srl as data controller and aware of the possibility of exercising my rights, including the right to revoke my consent, I consent to the processing of my data for the purposes indicated</p>
            <p>We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing. Learn more about Mailchimp's privacy practices here.</p>
            <button onClick={() => alert("This feature is not available.")}>Subscribe</button>
        </div>
    )
}

export default Newsletter
