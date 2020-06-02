import React from "react";
import {Button} from "reactstrap";

function Contact() {
    return <div id="contact">
        <div className="content">
        <h2>Hire me!!!</h2>
        <h3>Or you can download my CV <a href="#">here</a></h3>
        <p className="contact-message">It would be my pleasure to work with you soon. Please tell me if you need anything.</p>
        <Button href="mailto:vermont.paguiligan@gmail.com" size="lg">Contact me</Button>
        </div>
    </div>
}

export default Contact;