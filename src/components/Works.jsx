import React from "react";
import WorkItem from "./WorkItem";

function Works() {
    return <div id="works">

        <div className="content">
        <h2>Works</h2>

        
        <div className="row">

        <div className="col col-lg-6 col-sm-6 col-12 card-container">
        <WorkItem
        img="https://www.solidbackgrounds.com/images/2560x1600/2560x1600-dark-gray-solid-color-background.jpg"
        title="Card Title"
        content="Some quick example text to build on the card title and make up the bulk of the card's content."
        />
        </div>

        <div className="col col-lg-6 col-sm-6 col-12 card-container">
        <WorkItem
        img="https://www.solidbackgrounds.com/images/2560x1600/2560x1600-dark-gray-solid-color-background.jpg"
        title="Card Title"
        content="Some quick example text to build on the card title and make up the bulk of the card's content."
        />
        </div>
        </div>

        </div>
        </div>
}

export default Works;