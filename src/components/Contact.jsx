import React from "react";
import {Button} from "reactstrap";

function Contact() {
    return <div id="contact">
        <div className="content">
        <h2><strong>Hire me!!!</strong></h2>
        <h5><a href="./Docs/VERMONT_PHIL_PAGUILIGAN_(CV).docx">Or click HERE to download my CV</a></h5>
        <p className="contact-message">It would be my pleasure to work with you soon. Please tell me if you need anything.</p>
        <Button href="mailto:vermont.paguiligan@gmail.com" color="light" size="lg">Contact me</Button>
        </div>
    </div>
}

export default Contact;