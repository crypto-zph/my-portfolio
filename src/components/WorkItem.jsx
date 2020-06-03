import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import "holderjs";

function WorkItem(props) {
  return <div className="card">
      <Card className="bg-white">
        <CardImg top width="100%" className="card-img" src={props.img} alt="Card image cap" />
        <CardBody>
          <CardTitle><strong>{props.title}</strong></CardTitle>
          <CardText>{props.content}</CardText>
          {/* <Button>View</Button> */}
        </CardBody>
      </Card>
    </div>;
};

export default WorkItem;