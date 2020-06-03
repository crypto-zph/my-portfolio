import React from "react";

function Skills() {
    return <div id="skills">
        <div className="content">
        <h2>My Skills</h2>

        <div className="skill-row">
        <div className="wrapper left-img">
        <img src="./icons/frontend.svg" alt="skill"/>
        </div>
        <h3>Front End Web Development</h3>
        <p>React.js, HTML5, CSS3, JavaScript, jQuery, Bootstrap 4</p>
        </div>

        <div className="skill-row">
        <div className="wrapper right-img">
        <img src="./icons/backend.svg" alt="skill"/>
        </div>
        <h3>Back End Web Development</h3>
        <p>Node.js, Express.js, Passport.js, OAuth, EJS, APIs, RESTful API, MongoDB</p>
        </div>

        <div className="skill-row">
        <div className="wrapper left-img">
        <img src="./icons/other.svg" alt="skill"/>
        </div>
        <h3>Other Programming Essentials</h3>
        <p>Python, Flask, PostgreSQL, MySQL, SQLite, Git, Java, C/C++, Visual Basic</p>
        </div>
        </div>

    </div>
}

export default Skills;