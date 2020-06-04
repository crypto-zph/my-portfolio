import React from "react";

function Skills() {
    return <div id="skills">
        <div className="skills-content">
        <h3>My Skills</h3>

        <div className="row">

        <div className="skill-row col col-lg-4 col-sm-6 col-12">
        <img src="./icons/frontend.svg" alt="skill"/>
        <h6><strong>Front End Web Development</strong></h6>
        <p className="skill-list-content">React.js, HTML5, CSS3, JavaScript, jQuery, Bootstrap 4</p>
        </div>

        <div className="skill-row col col-lg-4 col-sm-6 col-12">
        <img src="./icons/backend.svg" alt="skill"/>
        <h6><strong>Back End Web Development</strong></h6>
        <p className="skill-list-content">Node.js, Express.js, Passport.js, OAuth, EJS, APIs, RESTful API, MongoDB</p>
        </div>

        <div className="skill-row col col-lg-4 col-sm-12 col-12">
        <img src="./icons/other.svg" alt="skill"/>
        <h6><strong>Other Programming Essentials</strong></h6>
        <p className="skill-list-content">Python, Flask, PostgreSQL, MySQL, SQLite, Git, Java, C/C++, Visual Basic</p>
        </div>
        </div>
        </div>
    </div>
}

export default Skills;