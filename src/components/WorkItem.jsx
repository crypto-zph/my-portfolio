import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';

function WorkItem(props) {
  return <div className="card">
      <Card>
        <CardImg top width="100%" className="card-img" src={props.img} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardText>{props.content}</CardText>
          {/* <Button>View</Button> */}
        </CardBody>
      </Card>
    </div>;
};

export default WorkItem;