import React, { useState } from "react";
import { Collapse, Button } from 'reactstrap';
import {useMediaLayout} from "use-media";
import WorkItem from "./WorkItem";
import "holderjs";

function Works() {
    const [isOpen, setIsOpen] = useState(false);
    const isSmall = useMediaLayout({maxWidth: "991px"});
    const isExtraSmall = useMediaLayout({maxWidth: "575px"});

    function toggle() {
        setIsOpen(!isOpen);
    }


    return <div id="works">



        <div className="works-content">
        <h3>My Works</h3>

        
        <div className="row">

        <div className="col col-lg-4 col-sm-6 col-12 card-container">
        <WorkItem
        img="holder.js/100px180"
        title="To be filled soon"
        content="This content will be filled soon as I am currently working on this project. Thank you so much!"
        />
        </div>

        {!isExtraSmall && <div className="col col-lg-4 col-sm-6 col-12 card-container">
        <WorkItem
        img="holder.js/100px180"
        title="To be filled soon"
        content="This content will be filled soon as I am currently working on this project. Thank you so much!"
        />
        </div>}

        {!isSmall && <div className="col col-lg-4 col-sm-6 col-12 card-container">
        <WorkItem
        img="holder.js/100px180"
        title="To be filled soon"
        content="This content will be filled soon as I am currently working on this project. Thank you so much!"
        />
        </div>}
        </div>


        <div>
        <Collapse isOpen={isOpen}>
        <div className="row">

        {isExtraSmall && <div className="col col-lg-4 col-sm-6 col-12 card-container">
        <WorkItem
        img="holder.js/100px180"
        title="To be filled soon"
        content="This content will be filled soon as I am currently working on this project. Thank you so much!"
        />
        </div>}

        {isSmall && <div className="col col-lg-4 col-sm-6 col-12 card-container">
        <WorkItem
        img="holder.js/100px180"
        title="To be filled soon"
        content="This content will be filled soon as I am currently working on this project. Thank you so much!"
        />
        </div>}
        
        <div className="col col-lg-4 col-sm-6 col-12 card-container">
        <WorkItem
        img="holder.js/100px180"
        title="To be filled soon"
        content="This content will be filled soon as I am currently working on this project. Thank you so much!"
        />
        </div>
        
        <div className="col col-lg-4 col-sm-6 col-12 card-container">
        <WorkItem
        img="holder.js/100px180"
        title="To be filled soon"
        content="This content will be filled soon as I am currently working on this project. Thank you so much!"
        />
        </div>
        
        <div className="col col-lg-4 col-sm-6 col-12 card-container">
        <WorkItem
        img="holder.js/100px180"
        title="To be filled soon"
        content="This content will be filled soon as I am currently working on this project. Thank you so much!"
        />
        </div>
        </div>
        </Collapse>
        <Button className="show-more btn-sm" outline color="light" onClick={toggle}>{isOpen ? "Show Less" : "Show More"}</Button>
        </div>
        
        </div>
        </div>
}

export default Works;